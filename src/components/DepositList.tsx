"use client";

import { FC, useMemo } from "react";
import { Deposit } from "../config/types";
import DepositListItem from "./DepositListItem";
import { FiAlertCircle, FiAlertTriangle } from "react-icons/fi";
import Skeleton from "./SkeletonLoader";
import { twMerge } from "tailwind-merge";
import Alert from "./Alert";
import AlertTitle from "./Alert/AlertTitle";
import AlertDescription from "./Alert/AlertDescription";

type DepositListProps = {
  title: string;
  deposits: Deposit[] | Error | null;
  emptyMessage?: string;
};

const MAX_WIDTH_CLASS = "max-w-[400px]";

const DepositList: FC<DepositListProps> = ({
  title,
  deposits,
  emptyMessage = "Nothing here yet",
}) => {
  // Sort deposits by progress (those closest to unlocking first).
  const sortedDeposits = useMemo(() => {
    if (!Array.isArray(deposits)) {
      return deposits;
    }

    return deposits.sort((a, b) => a.unlockTimestamp - b.unlockTimestamp);
  }, [deposits]);

  if (sortedDeposits === null) {
    return (
      <Skeleton
        className={twMerge(
          "min-h-[400px] min-w-[500px] w-full",
          MAX_WIDTH_CLASS
        )}
      />
    );
  }

  return (
    <div
      className={twMerge(
        "flex flex-col items-start justify-center gap-2",
        MAX_WIDTH_CLASS
      )}
    >
      <h3 className="mt-4">{title}</h3>

      <ul className="flex flex-col items-center justify-center gap-2 max-h-[300px] overflow-y-auto">
        {sortedDeposits instanceof Error ? (
          <Alert variant="destructive">
            <FiAlertTriangle />

            <AlertTitle>Heads up!</AlertTitle>

            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        ) : (
          <>
            {sortedDeposits.map((deposit) => (
              <DepositListItem key={deposit.index} deposit={deposit} />
            ))}

            {sortedDeposits.length === 0 && (
              <li className="w-full flex items-center justify-start gap-1 border rounded-md p-4 min-w-[400px] relative">
                <FiAlertCircle />

                <span>{emptyMessage}</span>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default DepositList;
