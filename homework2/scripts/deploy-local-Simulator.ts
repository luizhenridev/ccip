import { ethers } from "hardhat";

async function main() {
  const localSimulatorFactory = await ethers.getContractFactory("CCIPLocalSimulator");
  const localSimulator = await localSimulatorFactory.deploy();

  const config = await localSimulator.configuration();

  console.log("CCIPLocalSimulator deployed to:", localSimulator.address);
  console.log("Configuration:", config);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
