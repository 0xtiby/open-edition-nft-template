import {
  useAccount,
  useContractWrite,
  useEnsName,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";

import { config } from "@/config";

export const useMint = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { chain, chains } = useNetwork();

  const {
    config: mintConfig,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: config.contract as `0x${string}`,
    abi: [
      {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "mint",
  });
  const {
    data,
    write,
    error: mintError,
    isError: isMintError,
  } = useContractWrite(mintConfig);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
    hash: data?.hash,
  });

  const formattedAdr = address
    ? `${address.substring(0, 6)}…${address.substring(
        address.length - 6,
        address.length
      )}`
    : "";

  const displayName = ensName
    ? `${ensName.substring(0, 16)}…`
    : `${formattedAdr}`;

  return {
    displayName,
    openAccountModal,
    openConnectModal,
    isConnected,
    isSupportedNetwork: chain?.unsupported === false,
    supportedNetwork: chains[0]?.name ?? "",
    mint: write,
    isMinting: isLoading,
    isMinted: isSuccess,
    mintData: data,
    prepareError,
    isPrepareError,
    mintError,
    isMintError,
  };
};
