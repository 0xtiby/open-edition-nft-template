import { goerli } from "wagmi";

export const config = {
  alchemyKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY ?? "",
  contract: "0xd669408C66838a45a28d43AA782cf3c92fb7cb78",
  appName: "The Cozy place",
  title: "The Cozy place",
  description:
    "In the virtual world, there is a place known as the Woodland Haven. It is said that this place was once a dense forest that was home to a community of peaceful woodland creatures. Over time, the creatures worked together to create a magical place where they could gather and share their knowledge and stories.",
  tag: "0xTiby",
  chains: [goerli],
  blockchainExplorerUrl: "https://goerli.etherscan.io",
};
