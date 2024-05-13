const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.provider.getBalance(deployer.address)).toString());

  const Erc20 = await ethers.getContractFactory('ERC20');
  const token = await Erc20.deploy("BigToken", "BIG", 18);

  console.log('Token address:', token.address);
}

main();
