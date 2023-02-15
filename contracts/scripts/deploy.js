async function main() {
  const MyOE = await ethers.getContractFactory("MyOpenEdition");
  // Start deployment, returning a promise that resolves to a contract object
  const MyOENFT = await MyOE.deploy();
  await MyOENFT.deployed();
  console.log("Contract deployed to address:", MyOENFT.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
