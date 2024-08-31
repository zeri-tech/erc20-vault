"use client";

import { FC, useEffect, useMemo, useState } from "react";
import DepositList from "../components/DepositList";
import useDeposits from "../hooks/useDeposits";
import { Deposit } from "../config/types";

const Deposits: FC = () => {
  const [deposits, setDeposits] = useState<Deposit[] | null | Error>(null);
  const fetchDeposits = useDeposits();

  // Fetch deposits when on mount, or once the fetch function
  // is ready.
  useEffect(() => {
    if (fetchDeposits !== null) {
      fetchDeposits().then(setDeposits);
    }
  }, [fetchDeposits]);

  const lockedDeposits = useMemo(() => {
    if (!Array.isArray(deposits)) {
      return deposits;
    }

    const now = Date.now();

    return deposits.filter((deposit) => deposit.unlockTimestamp >= now);
  }, [deposits]);

  const withdrawableDeposits = useMemo(() => {
    if (!Array.isArray(deposits)) {
      return deposits;
    }

    const now = Date.now();

    return deposits.filter((deposit) => deposit.unlockTimestamp < now);
  }, [deposits]);

  return (
    <div className="flex items-start justify-center mt-6 gap-8">
      <DepositList
        title="Ready to withdraw"
        emptyMessage="No deposits ready to withdraw"
        deposits={withdrawableDeposits}
      />

      <DepositList
        title="Still unlocking"
        emptyMessage="No deposits unlocking, try making a new deposit"
        deposits={lockedDeposits}
      />
    </div>
  );
};

export default Deposits;
