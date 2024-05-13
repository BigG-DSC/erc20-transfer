// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

interface IERC20 {

    // events
    event Approval(address from, address to, uint256);

    event Transfer(address owner, address spender, uint256 amount);

    // name
    function name() external view returns(string);

    // symbol
    function symbol() external view returns(string);
    
    // decimals
    function decimals() external view returns(unit256);

    // allowance
    function allowance(address owner, address spender) external view returns(unit256);
    
    // balanceof
    function balanceof(address account) external view returns(unit256);

    // balanceof
    function totalSupply() external view returns(unit256);
    
    // transfer
    function transfer(address to, unit256 amount) external returns(bool);
    
    // transferFrom
    function transferFrom(address from, address to, unit256) external returns(bool);
    
    // approve
    function approve(address spender, unit256 amount) external returns(string);
}