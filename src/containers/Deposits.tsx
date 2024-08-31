"use client";

import { FC, useCallback, useEffect, useMemo, useState } from "react";
import DepositList from "../components/DepositList";
import useDeposits from "../hooks/useDeposits";
import { Deposit } from "../config/types";

const Deposits: FC = () => {
  const [deposits, setDeposits] = useState<Deposit[] | null | Error>(null);
  const fetchDeposits = useDeposits();

  const refresh = useCallback(async () => {
    if (fetchDeposits === null) {
      return;
    }

    setDeposits(null);
    setDeposits(await fetchDeposits());
  }, [fetchDeposits]);

  // Fetch deposits when on mount, or once the fetch function
  // is ready.
  useEffect(() => {
    refresh();
  }, [refresh]);

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
    <div className="flex items-center justify-center mt-12 gap-4 max-w-[900px] w-full">
      <DepositList
        title="Ready to withdraw"
        emptyMessage="No deposits ready to withdraw"
        deposits={withdrawableDeposits}
        onRefresh={fetchDeposits === null ? null : refresh}
      />

      <DepositList
        title="Still unlocking"
        emptyMessage="No deposits unlocking, try making a new deposit"
        deposits={lockedDeposits}
        onRefresh={fetchDeposits === null ? null : refresh}
      />
    </div>
  );
};

export default Deposits;
