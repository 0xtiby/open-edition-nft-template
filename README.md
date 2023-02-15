<h1 align="center">
Open Edition template
</h1>

<p align="center">
Quickly deploy your own NFT Open Edition minting page and contract with <b>Next.js</b> 
</p>

<p>
<p align="center">
  <img width="460" src="https://github.com/0xtiby/open-edition-nft-template/tree/main/.github">
</p>

</p>

This repo includes a basic ERC1155 contract.
It alson contain a minting page build with Next.js

The demo on the goerli network is available [here](https://open-edition-nft-template.vercel.app/)

## How to use it

### Contract

Before deploying the contract you need to have deploy your image asset and metadata file to ipfs via pinata for exemple.

After that you need to replace the url in the constructor of the contract in `contracts/contracts/oe.sol`

```solidity
constructor() ERC1155("put your metadata url here") {}
```

After that you need to create a `.env` file in contract folder :

```
API_URL="https://eth-goerli.g.alchemy.com/v2/your-api-key"
PRIVATE_KEY=YOUR-WALLET-PRIVATE
```

Finally you can run `npx hardhat compile` to ensure everything is ok, and then `npx hardhat run scripts/deploy.js --network goerli` to deploy.

Replace all the network related thing with the network where you want to deploy.

### Minting page

After your contract been deployed update the config file in `src/config/index.ts`
with the your data :

- `alchemyKey`: the alchemy api key
- `contract`: the contract address you deployed
- `appName`: the application name
- `title`: the title wich we will be diplsay in the page
- `description`: the description wich we will be diplsay in the page
- `tag`: the tag wich we will be diplsay before the title in the page
- `chains`: the network to connect it should be the same as the network you deployed your contract
- `blockchainExplorerUrl`: the corresponding blockchain explorer of the network you deployed to

You need to create a `.env` file at the root of the project with the alchemy api key :

```
NEXT_PUBLIC_ALCHEMY_KEY= your-key
```

And finally you need to replace the `nft-preview.png` file in public folder with yours.
