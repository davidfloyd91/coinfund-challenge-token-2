const chai = require("chai");
const { expect } = chai;
const BN = require('bn.js');
const bnChai = require('bn-chai');

chai.use(bnChai(BN));

const { ethers } = require("hardhat");

const getBN = (rawNum) => {
  return new BN(
      rawNum._hex
      // strip '0x'
      .slice(2),
      16
    );
};

describe("CoinFundChallengeToken2", function () {
  let coinFundChallengeToken2;
  let owner;
  let alice;
  let bob;
  let carol;
  let decimals;

  beforeEach(async () => {
    const CoinFundChallengeToken2 = await ethers.getContractFactory("CoinFundChallengeToken2");
    coinFundChallengeToken2 = await CoinFundChallengeToken2.deploy("CoinFundChallengeToken2", "CFCT");
    decimals = await coinFundChallengeToken2.decimals();
    const [_owner, _alice, _bob, _carol] = await ethers.getSigners();
    owner = _owner;
    alice = _alice;
    bob = _bob;
    carol = _carol;
  });

  it("should update index on token transfer", async function () {
    const _initialIndex = await coinFundChallengeToken2.initialIndex();
    const initialIndex = getBN(_initialIndex);
    await coinFundChallengeToken2.transfer(alice.address, 1);
    const _indexAfterTransfer = await coinFundChallengeToken2.currentIndex();
    const indexAfterTransfer = getBN(_indexAfterTransfer);
    expect(indexAfterTransfer).to.be.gt.BN(initialIndex);
  });

  it("should not update index on mint", async function () {
    const _initialIndex = await coinFundChallengeToken2.initialIndex();
    const initialIndex = getBN(_initialIndex);
    const _indexAfterInitialMint = await coinFundChallengeToken2.currentIndex();
    const indexAfterInitialMint = getBN(_indexAfterInitialMint);
    expect(initialIndex).to.eq.BN(indexAfterInitialMint);
  });

  it("should increase balances by 1% on transfer", async function () {
    const transferAmount = 1000;
    // owner sends tokens to alice and bob
    await coinFundChallengeToken2.transfer(alice.address, transferAmount);
    await coinFundChallengeToken2.transfer(bob.address, transferAmount);
    // get alice and bob's balances after first transfer
    const _aliceBalanceBefore = await coinFundChallengeToken2.balanceOf(alice.address);
    const aliceBalanceBefore = getBN(_aliceBalanceBefore);
    const _bobBalanceBefore = await coinFundChallengeToken2.balanceOf(alice.address);
    const bobBalanceBefore = getBN(_bobBalanceBefore);
    // owner sends tokens to carol
    await coinFundChallengeToken2.transfer(carol.address, transferAmount);
    // get alice and bob's balances after transfer to carol
    const _aliceBalanceAfter = await coinFundChallengeToken2.balanceOf(alice.address);
    const aliceBalanceAfter = getBN(_aliceBalanceAfter);
    const _bobBalanceAfter = await coinFundChallengeToken2.balanceOf(alice.address);
    const bobBalanceAfter = getBN(_bobBalanceAfter);
    // transfer to carol should have increased alice and bob's balances
    expect(aliceBalanceAfter).to.be.gt.BN(aliceBalanceBefore);
    expect(bobBalanceAfter).to.be.gt.BN(bobBalanceBefore);
    // ... specifically by 1%
    const aliceBalanceDifference = aliceBalanceAfter.sub(aliceBalanceBefore).toNumber();
    const aliceBalanceDifferenceAsPercentage = aliceBalanceDifference / transferAmount;
    expect(aliceBalanceDifferenceAsPercentage).to.equal(0.01);
  });
});
