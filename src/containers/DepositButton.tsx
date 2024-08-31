"use client";

import { FC } from "react";
import Button from "../components/Button";
import { FiPlusCircle } from "react-icons/fi";
import { useAccount } from "wagmi";

const DepositButton: FC = () => {
  const { isConnected } = useAccount();

  // TODO: Implement deposit logic.

  return (
    <>
      <Button disabled={!isConnected}>
        <FiPlusCircle />
        <span>Create a new deposit</span>
      </Button>
    </>
  );
};

export default DepositButton;
