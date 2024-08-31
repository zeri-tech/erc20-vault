"use client";

import { FC, useCallback } from "react";
import { Deposit } from "../config/types";
import { FiClock, FiLock, FiUnlock } from "react-icons/fi";
import Button from "./Button";
import { formatDistance } from "date-fns";

type DepositListItemProps = {
  deposit: Deposit;
};

const DepositListItem: FC<DepositListItemProps> = ({ deposit }) => {
  const now = Date.now();
  const isLocked = deposit.unlockTimestamp > now;
  const timeLeft = formatDistance(now, deposit.unlockTimestamp);

  const totalDuration = deposit.unlockTimestamp - deposit.startTimestamp;
  const elapsedTime = now - deposit.startTimestamp;
  const progress = Math.min(elapsedTime / totalDuration, 1);

  const handleUnlock = useCallback(() => {
    // TODO: Implement.
  }, []);

  return (
    <li className="w-full flex items-center justify-center gap-1 border rounded-md p-4 min-w-[400px] relative">
      <div
        className="h-full absolute left-0 top-0 bg-green-200 z-[-1]"
        style={{ width: `${progress * 100}%` }}
      />

      <FiLock />

      <strong>Deposit #{deposit.index}</strong>

      <span>{deposit.amount.toString()}</span>

      <Button
        disabled={isLocked}
        className="ml-auto gap-1"
        onClick={handleUnlock}
      >
        {isLocked ? (
          <>
            <FiClock /> {timeLeft}
          </>
        ) : (
          <>
            <FiUnlock /> Unlock
          </>
        )}
      </Button>
    </li>
  );
};

export default DepositListItem;
