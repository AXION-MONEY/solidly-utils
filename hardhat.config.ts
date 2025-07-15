import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const accounts = [process.env.ACCOUNT!];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100000
          },
          viaIR: false
        }
      }
    ]
  },
  networks: {
    localhost: {
      accounts: accounts
    },
    forking: {
      url: "http://127.0.0.1:8545",
      accounts: accounts
    },
    blast: {
      url: "https://rpc.blast.io",
      accounts: accounts
    },
    fantom: {
      url: "https://rpc.ftm.tools",
      accounts: accounts
    },
    fantom_test: {
      url: "https://rpc.testnet.fantom.network",
      accounts: accounts
    },
    mainnet: {
      url: "https://ethereum.publicnode.com",
      accounts: accounts
    },
    bnb: {
      url: "https://bsc-dataseed.bnbchain.org",
      accounts: accounts
    },
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: accounts
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: accounts
    },
    avax: {
      url: "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
      accounts: accounts
    },
    kava: {
      url: "https://evm.kava.io",
      accounts: accounts
    },
    zkevm: {
      url: "https://zkevm-rpc.com",
      accounts: accounts
    },
    op: {
      url: "https://optimism.llamarpc.com",
      accounts: accounts
    },
    base: {
      url: "https://base-rpc.publicnode.com",
      accounts: accounts
    },
    sonic: {
      url: "https://rpc.soniclabs.com",
      accounts: accounts
    },
  },
  sourcify: {
    enabled: false
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS != undefined,
    currency: "USD"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY!,
    customChains: [
    {
      network: "sonic",
      chainId: 146,
      urls: {
        apiURL: "https://api.sonicscan.org/api",
        browserURL: "https://sonicscan.org"
      }
    }
  ]
  }
};

export default config;
