# ERC20 Token on Sepolia

This repository contains an example of an ERC20 token smart contract that can be deployed on the Sepolia test network. The ERC20 token implementation in this project is designed to demonstrate the basic functionalities of a token contract including minting, transferring, and checking balances.

## Project Structure

- `contracts/`: Contains the Solidity smart contract code for the ERC20 token.
- `test/`: Includes tests for the smart contract to ensure its proper operation.
  - `ERC20.test.js`: This file contains tests for the ERC20 token contract, verifying functionalities such as token transfer and balance checks.
- `scripts/`: Scripts to deploy the ERC20 token contract to a blockchain.
  - `deploy.js`: This script is used to deploy the token contract to the Sepolia test network.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- [npm](https://npmjs.com/)

### Installing Dependencies

Before running the project, install the necessary dependencies:

```bash
npm install
```

### Testing the Contract

Before running the project, install the necessary dependencies:

```bash
npx hardhat test
```

### Deploying the Contract

Before running the project, install the necessary dependencies:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
