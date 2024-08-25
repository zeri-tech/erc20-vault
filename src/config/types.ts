import BN from "bn.js";

export type Deposit = {
  index: number;
  amount: BN;
  startTimestamp: number;
  unlockTimestamp: number;
};
