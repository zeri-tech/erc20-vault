"use client";

import { FC, useMemo } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Deposit } from "../config/types";
import BN from "bn.js";
import DepositList from "../components/DepositList";
import { addDays } from "date-fns";

const NOW = Date.now();

const getRandomTimestamp = (isInTheFuture = true): number => {
  const factor = isInTheFuture ? 1 : -1;

  return addDays(NOW, Math.random() * 10 * factor).getTime();
};

const generateDeposit = (index: number): Deposit => {
  const amount = Math.random() * 1e6;
  const startTimestamp = getRandomTimestamp(false);
  const unlockTimestamp = getRandomTimestamp();

  return {
    index,
    amount: new BN(amount),
    startTimestamp,
    unlockTimestamp,
  };
};

const DUMMY_DEPOSITS: Deposit[] = Array.from({ length: 10 }, (_, i) =>
  generateDeposit(i)
);

const Home: FC = () => {
  const withdrawableDeposits = useMemo(() => {
    return DUMMY_DEPOSITS.filter((deposit) => deposit.unlockTimestamp < NOW);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">ERC-20 Vault</h1>

        <p>Connect your wallet to get started.</p>
      </div>

      <ConnectButton />

      <div className="flex items-start justify-center mt-6 gap-8">
        <DepositList
          title="Ready to withdraw"
          emptyMessage="No deposits ready to withdraw"
          deposits={withdrawableDeposits}
        />

        <DepositList
          title="Still unlocking"
          emptyMessage="No deposits unlocking, try making a new deposit"
          deposits={DUMMY_DEPOSITS}
        />
      </div>
    </main>
  );
};

export default Home;
