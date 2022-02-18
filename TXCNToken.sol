// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "../node_modules/@openzeppelin/contracts/GSN/Context.sol";


function setToken(address tokenAddress) {
    //require(msg.sender == _ownerAddress);        
    _TXCNToken = ERC20(tokenAddress);
}