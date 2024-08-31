"use client";

import { FC } from "react";
import Button from "../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "../components/Dialog";

const DepositButton: FC = () => {
  const { isConnected } = useAccount();

  // TODO: Implement deposit logic.

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={!isConnected}>
          <FiPlusCircle />
          <span>Create a new deposit</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new deposit</DialogTitle>

          <DialogDescription>
            You&apos;re about to create a new deposit. This will lock your funds
            for a certain period of time. After this period, you must manually
            withdraw your funds, as they will not be automatically returned to
            your wallet.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DepositButton;
