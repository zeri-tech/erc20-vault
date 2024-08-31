import { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Deposits from "../containers/Deposits";

const Home: FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">ERC-20 Vault</h1>

        <p>Connect your wallet to get started.</p>
      </div>

      <ConnectButton />

      <Deposits />
    </main>
  );
};

export default Home;
