const {
  BitcoinNetwork,
  BitcoinWallet,
  BitcoinOTA,
  BitcoinProvider,
  EVMWallet,
} = require("@catalogfi/wallets");
const {
  Orderbook,
  Chains,
  Assets,
  Actions,
  parseStatus,
} = require("@gardenfi/orderbook");
const { GardenJS } = require("@gardenfi/core");
const { JsonRpcProvider, Wallet } = require("ethers");
const { Web3, eth } = require("web3");

const bitcoinProvider = new BitcoinProvider(
  BitcoinNetwork.Regtest,
  "http://localhost:30000"
);

// create your evm wallet
const signer = new Wallet(
  process.env.WALLET_ADDRESS,
  new JsonRpcProvider("HTTP://0.0.0.0:7545")
);

const evmWallet = new EVMWallet(signer);

const start = async () => {
  console.log(await evmWallet.getAddress());
};

start();

(async () => {
  const orderbook = await Orderbook.init({
    url: "http://localhost:8080",
    signer,
  });

  const wallets = {
    [Chains.bitcoin_regtest]: new BitcoinOTA(bitcoinProvider, signer),
    [Chains.ethereum_sepolia]: evmWallet,
  };

  const garden = new GardenJS(orderbook, wallets);

  const sendAmount = 0.0001 * 1e9;
  const receiveAmount = (1 - 0.3 / 100) * sendAmount;
  console.log(receiveAmount);
  const orderId = await garden.swap(
    Assets.bitcoin_testnet.BTC,
    Assets.ethereum_sepolia.WBTC,
    sendAmount,
    receiveAmount
  );

  console.log("Order id ", orderId);

  garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
    console.log("orders  ");
    console.log(orders.filter((order) => order.ID === orderId));

    const order = orders.filter((order) => order.ID === orderId)[0];
    if (!order) return;

    const action = parseStatus(order);
    console.log("Actions ", action);

    if (action === Actions.UserCanInitiate || Actions.UserCanRedeem) {
      const swapper = garden.getSwap(order);
      const swapOutput = await swapper.next();
      console.log(
        `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
      );
    }
  });
})();
