const fs = require("fs");
const { Web3, eth } = require("web3");
const path = require("path");

// Connect to a local Ethereum node
const web3 = new Web3("http://127.0.0.1:7545"); // Change this to your Ethereum node address

// Read the compiled contract
const contract = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "compiledContract.json"), "utf8")
);

const deploy = async () => {
  // Get accounts from the Ethereum node
  const accounts = await web3.eth.getAccounts();
  console.log("Deploying the contract from account:", accounts[0]);

  // Deploy the contract
  const blockpay = await new web3.eth.Contract(contract.abi)
    .deploy({
      data: "0x" + contract.evm.bytecode.object,
      arguments: [],
    })
    .send({ from: accounts[0], gas: "3000000" });

  return blockpay.options.address;
};

const depositFunds = async (address, ether) => {
  // Get accounts from the Ethereum node
  const accounts = await web3.eth.getAccounts();

  const blockpay = new web3.eth.Contract(contract.abi, address);

  await blockpay.methods
    .depositFunds()
    .send({ from: accounts[0], value: web3.utils.toWei(ether, "ether") });
};

const checkBalance = async (address) => {
  const blockpay = new web3.eth.Contract(contract.abi, address);

  const balance = await blockpay.methods.checkBalance().call();

  return web3.utils.fromWei(balance, "ether");
};

const addEmployee = async (
  address,
  account,
  salary,
  payStartDate,
  payEndDate
) => {
  // Get accounts from the Ethereum node
  const accounts = await web3.eth.getAccounts();

  const blockpay = new web3.eth.Contract(contract.abi, address);

  await blockpay.methods
    .addEmployee(account, salary, payStartDate, payEndDate)
    .send({ from: accounts[0], gas: 300000 });
};

const getEmployeeDetails = async (address, account) => {
  const blockpay = new web3.eth.Contract(contract.abi, address);

  return await blockpay.methods.getEmployeeDetails(account).call();
};

const removeEmployee = async (address, account) => {
  const accounts = await web3.eth.getAccounts();

  const blockpay = new web3.eth.Contract(contract.abi, address);

  await blockpay.methods
    .removeEmployee(account)
    .send({ from: accounts[0], gas: 300000 });
};

const updateEmployee = async (
  address,
  account,
  salary,
  payStartDate,
  payEndDate
) => {
  // Get accounts from the Ethereum node
  const accounts = await web3.eth.getAccounts();

  const blockpay = new web3.eth.Contract(contract.abi, address);

  await blockpay.methods
    .updateEmployee(account, salary, payStartDate, payEndDate)
    .send({ from: accounts[0], gas: 300000 });
};

const payAllEmployees = async (address) => {
  const accounts = await web3.eth.getAccounts();
  const blockpay = new web3.eth.Contract(contract.abi, address);

  await blockpay.methods
    .payAllEmployees()
    .send({ from: accounts[0], gas: 300000 });
};

const getHistory = async (address, account) => {
  const blockpay = new web3.eth.Contract(contract.abi, address);
  return await blockpay.methods.getHistory(account).call();
};

const totalSalaryToBePaid = async (address) => {
  const blockpay = new web3.eth.Contract(contract.abi, address);
  const totalSalary = await blockpay.methods.totalSalaryToBePaid().call();
  return web3.utils.fromWei(totalSalary, "ether");
};

module.exports = {
  deploy,
  checkBalance,
  addEmployee,
  getEmployeeDetails,
  updateEmployee,
  depositFunds,
  payAllEmployees,
  removeEmployee,
  getHistory,
  totalSalaryToBePaid,
};
