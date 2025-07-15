import {ethers, run} from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const contractFactory = await ethers.getContractFactory("AerodromeUtils");
  const contract = await contractFactory.deploy();
  const impl = await contract.getAddress();
  console.log(impl);
  console.log("Verifying contract...");
  await run("verify:verify", {address: impl});
  return;
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
