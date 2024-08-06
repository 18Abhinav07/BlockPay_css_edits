const {
  BitcoinNetwork,
  BitcoinWallet,
  BitcoinProvider,
  EVMWallet,
} = require("@catalogfi/wallets");
const {
  Orderbook,
  Chains,
  Assets,
  Actions,
  parseStatus,
  TESTNET_ORDERBOOK_API,
} = require("@gardenfi/orderbook");
const { GardenJS } = require("@gardenfi/core");
const { JsonRpcProvider, Wallet } = require("ethers");

const provider = new BitcoinProvider(BitcoinNetwork.Testnet);
const privateKey = process.env.BITCOIN_PRIVATE_KEY;

const bitcoinWallet = BitcoinWallet.fromPrivateKey(privateKey, provider);
console.log("Bitcoin Wallet: ", bitcoinWallet);
const evmProvider = new JsonRpcProvider("https://rpc.sepolia.org");
console.log("EVM PROVIDER: ", evmProvider);
const evmPrivateKey = process.env.EVM_PRIVATE_KEY;
const signer = new Wallet(evmPrivateKey, evmProvider);
console.log("Signer: ", signer);
const evmWallet = new EVMWallet(signer);

const sendTransactionBtcToWbtc = async (amount) => {
  try {
    const orderbook = await Orderbook.init({
      url: "https://orderbook-testnet.garden.finance/",
      signer: signer,
    });
    const wallets = {
      [Chains.bitcoin_testnet]: bitcoinWallet,
      [Chains.ethereum_sepolia]: evmWallet,
    };

    const garden = new GardenJS(orderbook, wallets);

    const sendAmount = Number(amount) * 1e8;
    const receiveAmount = (1 - 0.3 / 100) * sendAmount;

    const orderId = await garden.swap(
      Assets.bitcoin_testnet.BTC,
      Assets.ethereum_sepolia.WBTC,
      sendAmount,
      receiveAmount,
      {
        btcInputAddress:
          "559d1178346f729aa1295671bb4c141a161971cae0e4a4547fd07e885ce14df6",
      }
    );

    let hasInitiated = false;

    while (true) {
      const data = await fetch(
        "https://orderbook-testnet.garden.finance/orders?maker=0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B&verbose=true"
      );
      const orders = await data.json();
      const order = orders.filter((order) => order.ID === orderId)[0];
      //console.log(order);
      if (!order) return;

      const action = parseStatus(order);

      if (action === Actions.UserCanRedeem) {
        const swapper = garden.getSwap(order);
        const swapOutput = await swapper.next();
        console.log("Swapper Output: ", swapOutput);
        console.log(
          `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
        );
        break;
      } else if (action === Actions.UserCanInitiate) {
        if (!hasInitiated) {
          hasInitiated = true;
          const swapper = garden.getSwap(order);
          const swapOutput = await swapper.next();
          console.log("Swapper Output: ", swapOutput);
          console.log(
            `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
          );
        }
      }

      await delay(1 * 60 * 1000);      
    }
  } catch (err) {
    console.log("btc to wbtc error");
    console.log(err.message);
  }
};

const sendTransactionWbtcTobtc = async (amount) => {
  try {
    const orderbook = await Orderbook.init({
      url: "https://orderbook-testnet.garden.finance/",
      signer: signer,
    });
    const wallets = {
      [Chains.bitcoin_testnet]: bitcoinWallet,
      [Chains.ethereum_sepolia]: evmWallet,
    };

    const garden = new GardenJS(orderbook, wallets);
    const sendAmount = Number(amount) * 1e8;
    const receiveAmount = (1 - 0.3 / 100) * sendAmount;

    const orderId = await garden.swap(
      Assets.ethereum_sepolia.WBTC,
      Assets.bitcoin_testnet.BTC,
      sendAmount,
      receiveAmount
    );

    garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
      try {
        const order = orders.filter((order) => order.ID === orderId)[0];
        if (!order) return;

        const action = parseStatus(order);

        if (
          action === Actions.UserCanInitiate ||
          action === Actions.UserCanRedeem
        ) {
          const swapper = garden.getSwap(order);
          const swapOutput = await swapper.next();
          console.log("Swapper Output: ", swapOutput);
          console.log(
            `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
          );
        }
      } catch (err) {
        console.log("btc to wbtc error");
        console.log(err.message);
      }
    });
  } catch (err) {
    console.log("wbtc to btc error");
    console.log(err.message);
  }
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {
  sendTransactionBtcToWbtc,
  sendTransactionWbtcTobtc,
};
