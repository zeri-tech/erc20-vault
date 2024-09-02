import { USDC_ERC20_TOKEN, USDT_ERC20_TOKEN } from "../config/constants";
import { Erc20TokenDefinition, Erc20TokenId } from "../config/types";

const getErc20TokenDef = (id: Erc20TokenId): Erc20TokenDefinition => {
  switch (id) {
    case Erc20TokenId.USDT:
      return USDT_ERC20_TOKEN;
    case Erc20TokenId.USDC:
      return USDC_ERC20_TOKEN;
  }
};

export default getErc20TokenDef;
