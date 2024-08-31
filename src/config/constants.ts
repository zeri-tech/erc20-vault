import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

export const VAULT_CONTRACT_ADDRESS =
  "0xa2B58F56a293672E631bDF32dc8287A8D52c385A";

export const VIEM_PUBLIC_CLIENT = createPublicClient({
  chain: sepolia,
  transport: http(),
});
