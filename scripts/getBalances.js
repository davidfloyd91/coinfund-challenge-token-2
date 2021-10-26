const {
  DEPLOYER_ADDRESS,
  ANOTHER_ADDRESS,
  THIRD_ADDRESS,
  getContractAndProvider,
} = require("./helpers");

async function main() {
  const { contract: coinFundChallengeToken2 } = await getContractAndProvider();

  const accountOneBalance = await coinFundChallengeToken2.balanceOf(
    DEPLOYER_ADDRESS
  );

  const accountTwoBalance = await coinFundChallengeToken2.balanceOf(
    ANOTHER_ADDRESS
  );

  const accountThreeBalance = await coinFundChallengeToken2.balanceOf(
    THIRD_ADDRESS
  );

  console.log({
    time: new Date(),
    accountOneBalance,
    accountTwoBalance,
    accountThreeBalance,
  });

  /*
    // after deployment
    {
        time: 2021-10-26T01:58:46.226Z,
        accountOneBalance: BigNumber {
            _hex: '0xd3c21bcecceda1000000', // 1_000_000e18
            _isBigNumber: true
        },
        accountTwoBalance: BigNumber {
            _hex: '0x00',                   // 0
            _isBigNumber: true
        }
    }

    // after 1_000e18 token transfer from deployer to another address
    {
        time: 2021-10-26T02:39:53.211Z,
        accountOneBalance: BigNumber {
            _hex: '0xd5a9751ec5ddeab80000', // 1_008_990e18
            _isBigNumber: true
        },
        accountTwoBalance: BigNumber {
            _hex: '0x36c090d0ca68880000',   // 1_010e18
            _isBigNumber: true
        }
    }

    // after 2_500e18 token transfer from deployer to third address
    {
        time: 2021-10-26T03:00:20.293Z,
        accountOneBalance: BigNumber {
            _hex: '0xd7422ec87616d0a50000', // 1_016_529.65e18
            _isBigNumber: true
        },
        accountTwoBalance: BigNumber {
            _hex: '0x374cbb39474ffa0000',  // 1_020.1e18
            _isBigNumber: true
        },
        accountThreeBalance: BigNumber {
            _hex: '0x8a3fd40f3247f10000',  // 2_550.25e18
            _isBigNumber: true
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
