// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/crowdsale/Crowdsale.sol";
//import "../node_modules/@openzeppelin/contracts/crowdsale/emission/AllowanceCrowdsale.sol";

contract TXCNCrowdsale is Crowdsale /*, AllowanceCrowdsale*/  {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
        //address tokenWallet  // <- new argument
    )
        public
        //AllowanceCrowdsale(tokenWallet)  // <- used here
        Crowdsale (rate, wallet, token)
    {}
}