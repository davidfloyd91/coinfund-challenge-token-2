const hre = require("hardhat");

async function main() {
  const CoinFundChallengeToken2 = await hre.ethers.getContractFactory(
    "CoinFundChallengeToken2"
  );
  const coinFundChallengeToken2 = await CoinFundChallengeToken2.deploy(
    "CoinFundChallengeToken2",
    "CFCT2"
  );

  await coinFundChallengeToken2.deployed();

  console.log(
    "CoinFundChallengeToken2 deployed to:",
    coinFundChallengeToken2.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
