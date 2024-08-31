"use client";

import { FC, useMemo } from "react";
import { Deposit } from "../config/types";
import DepositListItem from "./DepositListItem";
import { FiAlertCircle } from "react-icons/fi";

type DepositListProps = {
  title: string;
  deposits: Deposit[];
  emptyMessage?: string;
};

const DepositList: FC<DepositListProps> = ({
  title,
  deposits,
  emptyMessage = "Nothing here yet",
}) => {
  // Sort deposits by progress (those closest to unlocking first).
  const sortedDeposits = useMemo(() => {
    return deposits.sort((a, b) => a.unlockTimestamp - b.unlockTimestamp);
  }, [deposits]);

  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h3 className="mt-4">{title}</h3>

      <ul className="flex flex-col items-center justify-center gap-2 max-h-[400px] overflow-y-auto">
        {sortedDeposits.map((deposit) => (
          <DepositListItem key={deposit.index} deposit={deposit} />
        ))}

        {sortedDeposits.length === 0 && (
          <li className="w-full flex items-center justify-start gap-1 border rounded-md p-4 min-w-[400px] relative">
            <FiAlertCircle />

            <span>{emptyMessage}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DepositList;
