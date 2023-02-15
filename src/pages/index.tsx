import { useEffect, useState } from "react";

import { ConnectButton } from "@/components/ConnectButton";
import Head from "next/head";
import Image from "next/image";
import { MintButton } from "@/components/MintButton";
import type { NextPage } from "next";
import Preview from "public/nft-preview.png";
import { config } from "@/config";
import { useMint } from "@/hooks/useMint";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  const { isConnected } = useMint();
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <div className="">
        <Head>
          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex justify-center items-center min-h-screen  lg:py-12 bg-emerald-700 w-screen px-4 lg:px-16">
          <div className="bg-white lg:space-x-12 p-6 flex-col flex lg:flex-row lg:items-center lg:justify-between rounded-xl ">
            <div>
              <Image
                src={Preview}
                alt="NFT Preview"
                className="rounded-lg lg:h-[650px] lg:w-[650px]"
              />
            </div>
            <div className="flex-1 space-y-16 mt-8 lg:mt-0">
              <div className="space-y-2">
                <p className="text-yellow-400 font-semibold">{config.tag}</p>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900">
                  {config.title}
                </h1>
              </div>
              <p className="text-gray-400 max-w-3xl text-md leading-relaxed mt-12">
                {config.description}
              </p>

              {isConnected ? <MintButton /> : <ConnectButton />}
            </div>
          </div>
        </main>
      </div>
    );
  }
  return null;
};

export default Home;
