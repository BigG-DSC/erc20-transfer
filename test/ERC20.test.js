const { expect } = require("chai");
const hre = require("hardhat");

describe("ERC20 Contract", function () {
  // global vars
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("ERC20");
    [owner, addr1, addr2] = await hre.ethers.getSigners();

    // Deploy a new contract before each test.
    hardhatToken = await Token.deploy("BigToken", "BIG", 18);
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the deployer", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await hardhatToken.transfer(addr1.address, 50);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      const totalSupply = await hardhatToken.totalSupply();

      expect(addr1Balance).to.equal(50);
      expect(ownerBalance).to.equal(totalSupply - BigInt(50));
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
      // Try to send 1 token from addr1 (0 tokens) to owner (10000 tokens).
      // `require` will throw if the condition is not met and the transaction will be reverted.
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
      // Owner balance shouldn't have changed.
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

    it("Should update balances after transfers", async function () {
      const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

      // Transfer 100 tokens from owner to addr1.
      await hardhatToken.transfer(addr1.address, 100);

      // Transfer another 50 tokens from owner to addr2.
      await hardhatToken.transfer(addr2.address, 50);

      // Check balances.
      const finalOwnerBalance = await hardhatToken.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance - BigInt(150));

      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);

      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
