import BN from "bn.js";

const scaleAmount = (amount: BN, decimals: number): BN => {
  return amount.mul(new BN(10).pow(new BN(decimals)));
};

export default scaleAmount;
