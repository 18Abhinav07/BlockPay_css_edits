import React, { useState } from "react";
import myVector from "./Vector.svg";
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import domain from "./domain";

const RegisterCompany = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setErrorMsg(null);
  };

  const [progress, setProgress] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setProgress(true);
      const url = `${domain}/register`;
      const res = await axios.post(url, {
        companyName: formValues.companyName,
        username: formValues.username,
        password: formValues.password,
      });
      setProgress(false);
      const data = res.data;

      if (data.status === "success") {
        navigate("/login");
      } else {
        setErrorMsg("Wrong Credentials !!");
      }
    } catch (err) {
      setProgress(false);
      setErrorMsg("Company already registered");
    }
  };

  return (
    <div>
      <style>
        {`
        
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #021011;
          position: relative;
          overflow: hidden;
        }
        
        .background-vector {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        
        .app-container {
          width: 100%;
          max-width: 400px;
          padding: 20px;
        }
        
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .brand {
          font-size: 24px;
          color: white;
          cursor: pointer;
        }
        
        .register-container {
          background: rgba(255, 255, 255, 0.1); /* semi-transparent background */
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          color: #333;
          border: 1px solid;
          border-image-source: radial-gradient(
            105.56% 203.38% at -2.85% 105.57%,
            rgba(255, 255, 255, 0.5) 1.48%,
            rgba(255, 255, 255, 0) 39.51%,
            rgba(255, 255, 255, 0) 68.17%,
            rgba(255, 255, 255, 0.120573) 74.1%,
            rgba(255, 255, 255, 0.5) 100%
          );
        }
        
        .form-input {
          padding: 10px;
          margin-bottom: 15px;
          background-color: rgba(255, 255, 255, 0.8); /* semi-transparent background */
          color: #333;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
          width: calc(100% - 20px); /* To account for padding */
          box-sizing: border-box;
        }
        
        .password-container {
          position: relative;
          width: 100%;
        }
        
        .toggle-visibility {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
        
        .submit-btn,
        .metamask-btn {
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: rgba(110, 71, 255, 0.8); /* semi-transparent background */
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          width: calc(100% - 20px); /* To account for padding */
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        
        .submit-btn:hover,
        .metamask-btn:hover {
          background: rgba(78, 1, 154, 0.8); /* semi-transparent background */
        }
        
        a {
          color: #006af1;
          font-weight: 1000;
        }
        
        h1 {
          color: white;
        }
        
        p {
          color: white;
        }
        
        .SignIn-btn {
          padding: 10px;
          border: 2px solid #fff;
          border-radius: 30px;
          background-color: transparent;
          color: #fff;
          font-size: 12px;
          cursor: pointer;
          box-sizing: border-box;
          margin-left: 5px;
        }
        
        .SignIn-btn:hover {
          background: white;
          color: black;
        }
        `}
      </style>

      <div className="app-container light-mode">
        <img
          src={myVector}
          alt="background vector"
          className="background-vector"
        />
        <div className="top-bar">
          <div className="brand" onClick={() => navigate("/")}>
            BlockPay
          </div>
        </div>
        <div className="register-container">
          {progress && (
            <>
              <LinearProgress></LinearProgress>
              <Alert severity="info" className="alert">
                Transaction is in progress...
              </Alert>
            </>
          )}
          {errorMsg && (
            <Alert variant="filled" severity="error">
              {errorMsg}
            </Alert>
          )}
          <h1>Register Your Company</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Enter company name"
              name="companyName"
              value={formValues.companyName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="username"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              required
            />
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                className="form-input"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="toggle-visibility"
              >
                {passwordVisible ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="password-container">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                className="form-input"
                placeholder="Re-password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="toggle-visibility"
              >
                {confirmPasswordVisible ? "🙈" : "👁️"}
              </span>
            </div>
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
            <div>
              <p>
                Already have an account?{" "}
                <button
                  className="SignIn-btn"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
