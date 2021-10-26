const { PK } = process.env;
const {
  ANOTHER_ADDRESS,
  THIRD_ADDRESS,
  getContractAndProvider,
} = require("./helpers");

async function main() {
  const { contract: coinFundChallengeToken2, provider } =
    await getContractAndProvider();

  const deployerSigner = new ethers.Wallet(PK, provider);

  // const txResult = await coinFundChallengeToken2
  //   .connect(deployerSigner)
  //   .transfer(ANOTHER_ADDRESS, "1000000000000000000000");

  // const txResult = await coinFundChallengeToken2
  //   .connect(deployerSigner)
  //   .transfer(THIRD_ADDRESS, "2500000000000000000000");

  console.log({ txResult });

  /*
    // send 1_000e18 tokens from deployer to another address 
    {
      txResult: {
        type: 2,
        chainId: 3,
        nonce: 1,
        maxPriorityFeePerGas: BigNumber { _hex: '0x9502f900', _isBigNumber: true },
        maxFeePerGas: BigNumber { _hex: '0x9502f91a', _isBigNumber: true },
        gasPrice: null,
        gasLimit: BigNumber { _hex: '0xe293', _isBigNumber: true },
        to: '0x203AAF3D67114522c37085Dd0BbD94644926Add7',
        value: BigNumber { _hex: '0x00', _isBigNumber: true },
        data: '0xa9059cbb00000000000000000000000027b57ed242011d2c1ec723ebcde644d1c8f6891700000000000000000000000000000000000000000000003635c9adc5dea00000',
        accessList: [],
        hash: '0x5e83f9d3da78e5f9630321b5b37d7485b5edf47fe332afc4b30f476ea28c802b',
        v: 0,
        r: '0x12fc8c336c4838a54e89dc40fcf45b69a33381a7fb60d090b9d9b87c28a429a3',
        s: '0x3ce185c2d6ba8c6bd0d5f97daae6afae5da532832e73735d73d6c923d517110a',
        from: '0xE177932D43E54b3CBd0b2eAc5Ca82773cEe0FC90',
        confirmations: 0,
        wait: [Function (anonymous)]
      }
    }

    // send 2_500e18 tokens from deployer to third address 
    {
      txResult: {
        type: 2,
        chainId: 3,
        nonce: 2,
        maxPriorityFeePerGas: BigNumber { _hex: '0x9502f900', _isBigNumber: true },
        maxFeePerGas: BigNumber { _hex: '0x9502f92c', _isBigNumber: true },
        gasPrice: null,
        gasLimit: BigNumber { _hex: '0xe293', _isBigNumber: true },
        to: '0x203AAF3D67114522c37085Dd0BbD94644926Add7',
        value: BigNumber { _hex: '0x00', _isBigNumber: true },
        data: '0xa9059cbb000000000000000000000000a0feb4b0f943b005d9d56bc2a376add06d73a5c10000000000000000000000000000000000000000000000878678326eac900000',
        accessList: [],
        hash: '0xf2d85105860b31f62bf80841ef3d0827c2143bc54ceee4d1aa0115d6eb139d23',
        v: 0,
        r: '0x16ea1e2ec88760b2484cf1c167ad1947f44e873de182c8b9e88b89eba6c8b0b9',
        s: '0x75533e7a6e3a6a0c070fa64809502715400651b42c98cec56bfdee272d7a7c70',
        from: '0xE177932D43E54b3CBd0b2eAc5Ca82773cEe0FC90',
        confirmations: 0,
        wait: [Function (anonymous)]
      }
    }
  */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
