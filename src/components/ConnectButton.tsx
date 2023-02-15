import React from "react";
import { useMint } from "@/hooks/useMint";

export const ConnectButton: React.FC = () => {
  const { openAccountModal, openConnectModal, isConnected } = useMint();

  return (
    <button
      onClick={() =>
        isConnected
          ? openAccountModal && openAccountModal()
          : openConnectModal && openConnectModal()
      }
      type="button"
      className="inline-flex items-center rounded-2xl border border-transparent bg-fuchsia-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2"
    >
      Connect Wallet
    </button>
  );
};
