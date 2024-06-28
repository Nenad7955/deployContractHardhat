import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.deployContract("Lock", [123], {});
  factory.waitForDeployment()

  console.log(`Deployed factory contract to: ${await factory.getAddress()}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});