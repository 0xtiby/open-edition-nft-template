import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createClient } from "wagmi";

import type { AppProps } from "next/app";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { config } from "@/config";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(config.chains, [
  alchemyProvider({ apiKey: config.alchemyKey }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: config.appName,
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
