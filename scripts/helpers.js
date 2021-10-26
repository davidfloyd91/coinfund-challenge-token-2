const { ALCHEMY_KEY } = process.env;

const DEPLOYED_ADDRESS = "0x203AAF3D67114522c37085Dd0BbD94644926Add7";
const DEPLOYER_ADDRESS = "0xE177932D43E54b3CBd0b2eAc5Ca82773cEe0FC90";
const ANOTHER_ADDRESS = "0x27B57ed242011d2c1ec723EBcDE644d1C8F68917";
const THIRD_ADDRESS = "0xa0Feb4B0F943B005d9D56bC2A376AdD06d73a5c1";

const getContractAndProvider = async () => {
  const provider = new ethers.providers.AlchemyProvider("ropsten", ALCHEMY_KEY);

  const CoinFundChallengeToken2 = await ethers.getContractFactory(
    "CoinFundChallengeToken2"
  );

  const coinFundChallengeToken2 = new ethers.Contract(
    DEPLOYED_ADDRESS,
    CoinFundChallengeToken2.interface,
    provider
  );

  console.log({ coinFundChallengeToken2 });

  return { contract: coinFundChallengeToken2, provider };
};

module.exports = {
  ALCHEMY_KEY,
  DEPLOYED_ADDRESS,
  DEPLOYER_ADDRESS,
  ANOTHER_ADDRESS,
  THIRD_ADDRESS,
  getContractAndProvider,
};
