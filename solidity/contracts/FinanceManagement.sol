// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FinanceManagement {

    event FundsDeposited(uint amount);
    event EmergencyWithdrawal(address employee, uint amount);

    function depositFunds() public payable {
        emit FundsDeposited(msg.value);
    }

    function checkBalance() public view returns (uint) {
        return address(this).balance;
    }

    function emergencyWithdrawal(address payable recipient, uint amount) public {
        require(amount <= address(this).balance, "Insufficient funds");
        recipient.transfer(amount);
        emit EmergencyWithdrawal(recipient, amount);
    }

    function transferAmount(address payable recipient, uint amount) public {
        require(amount <= address(this).balance, "Insufficient funds");
        recipient.transfer(amount);
    }
}