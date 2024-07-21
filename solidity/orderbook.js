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
const crypto = require("crypto");

// create your bitcoin wallet
const bitcoinWallet = BitcoinWallet.fromPrivateKey(
  process.env.BITCOIN_PRIVATE_KEY,
  new BitcoinProvider(BitcoinNetwork.Testnet)
);

// create your evm wallet
const signer = new Wallet(
  process.env.EVM_PRIVATE_KEY,
  new JsonRpcProvider("https://rpc.ankr.com/eth_sepolia")
);

const evmWallet = new EVMWallet(signer);

const createOrder = async () => {
  const orderbook = await Orderbook.init({
    url: TESTNET_ORDERBOOK_API,
    signer,
  });

  const sendAmount = 0.001 * 1e8;
  const receiveAmount = sendAmount - 0.03 * sendAmount; //taking 0.3% as fee
  const sendAddress = "tb1qa2xhhl2rwj4nw07ge0hd06alyj5vshp8rya39m";
  const secret = crypto.randomBytes(32).toString("hex");
  const secretHash = sha256(secret);

  const orderId = await orderbook.createOrder({
    fromAsset: Assets.bitcoin_testnet.BTC,
    toAsset: Assets.ethereum_sepolia.WBTC,
    sendAddress,
    receiveAddress: "0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B",
    sendAmount: sendAmount.toString(),
    receiveAmount: receiveAmount.toString(),
    secretHash,
    btcInputAddresss,
  });
};

const getOrders = async () => {
  const orderbook = await Orderbook.init({
    url: TESTNET_ORDERBOOK_API,
    signer,
  });
  const sendAmount = 0.001 * 1e8;
  const receiveAmount = sendAmount - 0.03 * sendAmount; //taking 0.3% as fee
  const sendAddress = "89031178346f729aa129re31bb4c141a161r42cae0e4a4547fd07e885ce14hy4";
  const crypto = require("crypto");

  // Generate a unique 32-byte length secret
  const secret = crypto.randomBytes(32).toString("hex"); // This generates a 64-character hex string

  // Create a SHA-256 hash of the secret
  const hash = crypto.createHash("sha256").update(secret).digest("hex");
  const orderId = await orderbook.createOrder({
    fromAsset: Assets.bitcoin_testnet.BTC,
    toAsset: Assets.ethereum_sepolia.WBTC,
    sendAddress,
    receiveAddress: "0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B",
    sendAmount: sendAmount.toString(),
    receiveAmount: receiveAmount.toString(),
    secretHash: hash,
    btcInputAddresss: process.env.BTC_INPUT_ADDRESS,
  });

  const orders = await orderbook.getOrders(
    "0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B",
    {
      verbose: true,
      taker: false, //get only those orders where the specified address acted as the initiator
    }
  );
  console.log(orders);
  //   const orderId = orders[0].ID;
  const wallets = {
    [Chains.bitcoin_testnet]: bitcoinWallet,
    [Chains.ethereum_sepolia]: evmWallet,
  };

  const garden = new GardenJS(orderbook, wallets);

  orderbook.subscribeOrders(
    "0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B",
    async (orders) => {
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
    }
  );
  //console.log(orders);
};

getOrders();

const subscribeOrders = async () => {
  const orderId = 156; //the order you want to listen to
  const orderbook = await Orderbook.init({
    url: TESTNET_ORDERBOOK_API,
    signer,
  });
  orderbook.subsribeOrders(
    "0xc96EFaFD9655356DBB819F77Fc7Dd49e6Ee48e1B",
    async (orders) => {
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
    }
  );
};
