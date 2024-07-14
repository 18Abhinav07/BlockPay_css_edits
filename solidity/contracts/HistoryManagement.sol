// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HistoryManagement {
    mapping(address => uint[]) public salaries;

    constructor() {}

    // Function to add a salary to the history of a specific account
    function addSalary(address account, uint amount) public {
        salaries[account].push(amount);
    }

    // Function to remove the last salary entry from the history of a specific account
    function removeSalary(address account) public {
        delete salaries[account];
    }

    // Function to get the salary history of a specific account
    function getHistory(address account) public view returns (uint[] memory) {
        return salaries[account];
    }
}
