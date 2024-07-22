import React, { useEffect, useState } from "react";
import profilePicture from "../icons/profile.svg";
import projectManagerIcon from "../icons/projectmanager.svg";
import emailIcon from "../icons/email.svg";
import profileIcon from "../icons/profile.svg";
import attendanceIcon from "../icons/attendance.svg";
import projectsIcon from "../icons/project.svg";
import leaveIcon from "../icons/leave.svg";
import personalInfoIcon from "../icons/profileinfo.svg";
import professionalInfoIcon from "../icons/professionalinfo.svg";
import documentsIcon from "../icons/documents.svg";
import accountAccessIcon from "../icons/accountaccess.svg";
import Dp from "../icons/Dp.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import Emp1 from "../icons/emp1.svg";
import Emp2 from "../icons/emp2.svg";
import Emp3 from "../icons/emp3.svg";
import Bitcoin from "../icons/Bit.svg";
import Avalanche from "../icons/avalanche.svg";
import Litcoin from "../icons/litecoin.svg";
import Polkadot from "../icons/polkadot.svg";
import Stellar from "../icons/stellar.svg";
import XPR from "../icons/xpr.svg";
import Arrow from "../icons/arrow.svg";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", value: 600 },
  { name: "June", value: 650 },
  { name: "July", value: 620 },
  { name: "Aug", value: 700 },
  { name: "Sep", value: 660 },
  { name: "Oct", value: 680 },
];

import settingsIcon from "../icons/settings.svg";
import notificationIcon from "../icons/notification.svg";
import domain from "../domain";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/sidebarClick";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainContent = ({ logo, children }) => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState("0 ether");
  const [employees, setEmployees] = useState([]);
  const [progress, setProgress] = useState(false);
  const [depositProgress, setDepositProgress] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [openPay, setOpenPay] = useState(false);

  const handlePayClose = () => {
    setOpenPay(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getAllEmployees = async () => {
    try {
      const url = `${domain}/admin/get-all-employees`;
      const token = localStorage.getItem("token");

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;
      setEmployees(res.data.data);
    } catch (err) {
      console.log("get all emps error");
    }
  };

  const checkBalance = async () => {
    try {
      const url = `${domain}/finance`;
      const token = localStorage.getItem("token");

      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = res.data;

      if (data.data) {
        setBalance(data.data);
      }
    } catch (err) {
      console.log("Finance error");
    }
  };

  const depositFunds = async (amount) => {
    try {
      setDepositProgress(true);
      const url = `${domain}/finance`;
      const token = localStorage.getItem("token");

      const res = await axios.post(
        url,
        {
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDepositProgress(false);
      const data = res.data;

      if (data.status === "success") {
        checkBalance();
      }
    } catch (err) {
      setDepositProgress(false);
      alert("Insufficient funds");
    }
  };

  const payEmployees = async () => {
    try {
      setProgress(true);
      const url = `${domain}/admin/pay-salary`;
      const token = localStorage.getItem("token");

      const res = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOpenPay(true);
      checkBalance();
      setProgress(false);
    } catch (err) {
      setErrorMsg("Transaction Failed !!");
      setProgress(false);
      console.log("Finance error");
    }
  };

  useEffect(() => {
    getAllEmployees();
    checkBalance();
  }, []);

  return (
    <main className="main-content">
      <header className="main-header">
        <div className="logohome" onClick={() => navigate("/")}>
          BlockPay
        </div>
        <div className="user-profile">
          <img
            src={settingsIcon}
            alt="Settings"
            className="icon settings-icon"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="icon notification-icon"
          />
          <button onClick={() => logout(navigate, "/login")}>Logout</button>
          <div className="user-info">
            <span>{localStorage.getItem("username")}</span>
            <span>info@gmail.com</span>
          </div>
        </div>
      </header>
      <div>
        <section className="dashboard-header">
          <h1>Finance Management</h1>

          <div className="breadcrumb">Home / Employee</div>
        </section>
      </div>
      <div className="Finance-ManagementFinance">
        <div className="Flexx">
          <div className="balance-sectionFinance">
            <div className="balance-headerFinance">
              <h2>Total Balance</h2>
              <button
                className="add-deposit-buttonFinance"
                onClick={() => setOpen(true)}
              >
                Add Deposit
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: "form",
                  onSubmit: async (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const amount = formJson.amount;
                    //setProgress(true);
                    await depositFunds(amount);

                    handleClose();
                  },
                }}
              >
                <DialogTitle>Deposit Funds</DialogTitle>
                <DialogContent>
                  {depositProgress ? (
                    <>
                      <LinearProgress />
                      <Alert severity="info" className="alert">
                        Transaction is in progress...
                      </Alert>
                    </>
                  ) : (
                    <>
                      <DialogContentText>
                        Enter amount in ether that need to be deposit.
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="amount"
                        name="amount"
                        label="Amount"
                        fullWidth
                        variant="standard"
                      />
                    </>
                  )}
                </DialogContent>
                {!depositProgress && (
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Confirm</Button>
                  </DialogActions>
                )}
              </Dialog>
            </div>
            <h1>{balance}</h1>
            <div className="balance-graphFinance">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart className="data" data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00aaff"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="withdraw-sectionFinance">
            <h2>Withdraw Funds</h2>
            <div className="withdraw-menuFinance">
              <button className="menu-buttonFinance">Wallet History</button>
              <button className="menu-buttonFinance activeFinance">
                Coin Wallet
              </button>
            </div>
            <table className="coin-wallet-tableFinance">
              <thead className="tablehead">
                <tr>
                  <th>Coin</th>
                  <th>Avbl. Balance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Repeat this block for each coin */}
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Bitcoin}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Bitcoin BTC</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Avalanche}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Avalanche AVAX</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Litcoin}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Litecoin LTC</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Polkadot}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Poldakot DOT</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={Stellar}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>Stellar XLM</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin-infoFinance">
                      <span className="coin-iconFinance">
                        <img
                          src={XPR}
                          alt="Settings"
                          className="icon settings-icon"
                        />
                      </span>
                      <span>XPR XPR</span>
                    </div>
                  </td>
                  <td>$43,975.72</td>
                  <td>
                    <button className="action-buttonFinance">
                      Deposit
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                    <button className="action-buttonFinance">
                      Withdraw
                      <img
                        src={Arrow}
                        alt="Settings"
                        className="icon settings-icon"
                      />
                    </button>
                  </td>
                </tr>
                {/* Add similar rows for other coins */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="action-buttonsFinance">
          <div>
            <section className="employees-section">
              <div className="employees-header">
                <h2>Employees</h2>
              </div>
              <table className="employees-table">
                <thead className="table-header">
                  <tr>
                    <th>Employee Name</th>
                    <th>Account</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={Emp1}
                          alt="Employee"
                          className="employee-image"
                        />
                        {employee.name}
                      </td>
                      <td>{employee.account}</td>
                      <td>{employee.salary}</td>
                      <td>{employee.designation}</td>
                      <td>{"Delhi"}</td>
                      <td>{"SDE"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
          <div>
            <Dialog
              open={openPay}
              TransitionComponent={Transition}
              keepMounted
              onClose={handlePayClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Salary Payment Successful"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  The salaries for all employees have been processed and paid
                  successfully. Each employee has received their due
                  compensation for the current pay period.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handlePayClose}>Continue</Button>
              </DialogActions>
            </Dialog>
            {progress ? (
              <>
                <LinearProgress></LinearProgress>
                <Alert severity="info" className="alert">
                  Transaction is in progress...
                </Alert>
              </>
            ) : errorMsg ? (
              <Alert severity="error" className="alert">
                {errorMsg}
              </Alert>
            ) : (
              <button className="PayButton" onClick={payEmployees}>
                Pay all employees
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
