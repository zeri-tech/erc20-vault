import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { Erc20TokenDefinition, Erc20TokenId } from "./types";

export const VAULT_CONTRACT_ADDRESS =
  "0xa2B58F56a293672E631bDF32dc8287A8D52c385A";

export const VIEM_PUBLIC_CLIENT = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const USDT_ERC20_TOKEN: Erc20TokenDefinition = {
  id: Erc20TokenId.USDT,
  name: "Tether USD",
  mainnetAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  // TODO: This token may not be deployed to Sepolia. Will likely need to deploy own dummy token contract on Sepolia for testing.
  sepoliaAddress: "0xeb8a559c7f317c24f08405b40e6b1f3c83cdc76c",
  decimals: 6,
  // TODO: Add icon.
  iconAssetPath: 0,
};

export const USDC_ERC20_TOKEN: Erc20TokenDefinition = {
  id: Erc20TokenId.USDC,
  name: "USD Coin",
  mainnetAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48",
  // TODO: This token may not be deployed to Sepolia. Will likely need to deploy own dummy token contract on Sepolia for testing.
  sepoliaAddress: "0xeb8a559c7f317c24f08405b40e6b1f3c83cdc76c",
  decimals: 6,
  // TODO: Add icon.
  iconAssetPath: 0,
};
