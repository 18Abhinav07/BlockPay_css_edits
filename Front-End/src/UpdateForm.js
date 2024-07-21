import React, { useState } from "react";
import myVector from "./Vector.svg";

const UpdateForm = () => {
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
}

.register-container {
  background: rgba(255, 255, 255, 0.1);
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
  background-color: rgba(255, 255, 255, 0.8); 
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: calc(100% - 20px); 
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

.role-selection {
  margin-bottom: 15px;
  color: white;
}

.role-radio {
  margin-right: 10px;
}

.submit-btn,
.metamask-btn {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgba(110, 71, 255, 0.8); 
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: calc(100% - 20px); 
  box-sizing: border-box;
  margin-bottom: 20px;
}

.submit-btn:hover,
.metamask-btn:hover {
  background: rgba(78, 1, 154, 0.8); 
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
          <div className="brand">BlockPay</div>
        </div>
        <div className="register-container">
          <h1>Enter employee details</h1>
          <form className="register-form">
            <input
              type="text"
              className="form-input"
              placeholder="Employee Account No."
              name="companyName"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Salary"
              name="companyName"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Pay Start Date"
              name="companyName"
              required
            />
            <input
              type="text"
              className="form-input"
              placeholder="Pay End Date"
              name="companyName"
              required
            />

            <button type="submit" className="submit-btn">
              Continue
            </button>

            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
