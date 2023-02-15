import { Error } from "./Error";
import React from "react";
import { config } from "@/config";
import { useMint } from "@/hooks/useMint";

export const MintButton: React.FC = () => {
  const {
    isSupportedNetwork,
    supportedNetwork,
    displayName,
    mint,
    isMinting,
    isMinted,
    mintData,
    isPrepareError,
    isMintError,
    prepareError,
    mintError,
  } = useMint();

  if (!isSupportedNetwork)
    return (
      <Error error={`Wrong network please switch to ${supportedNetwork}`} />
    );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-extrabold text-gray-900">
        {`Welcome ${displayName}`}
      </h2>
      <button
        type="button"
        disabled={!mint || isMinting}
        onClick={() => mint?.()}
        className="inline-flex items-center rounded-2xl border border-transparent bg-fuchsia-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
      >
        {isMinting ? "Minting..." : "Mint"}
      </button>
      {mintData?.hash ? (
        <div>
          <a
            href={`${config.blockchainExplorerUrl}/tx/${mintData?.hash}`}
            className="text-lg font-bold"
          >
            See transaction
          </a>
        </div>
      ) : null}
      {isMinted && (
        <div>
          <div className="mt-2 text-green-500 text-lg font-bold">
            Successfully minted your NFT!
          </div>
        </div>
      )}
      {(isPrepareError || isMintError) && (
        <Error error={(prepareError || mintError)?.message} />
      )}
    </div>
  );
};
