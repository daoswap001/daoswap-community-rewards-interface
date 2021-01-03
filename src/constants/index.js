import ERC20_CONTRACT from "./contracts/ERC20FixedSupply.json";
import CLAIM_CONTRACT from "./contracts/CommunityRewards.json";

export { ERC20_CONTRACT, CLAIM_CONTRACT };

export const ERC20ContractAddress =
  "0x7Ef5ac1FE8B6832EbAddEE1856E4A21E46843565";

export const ClaimContractAddress =
  "0x8CbdAE985c7887f7747e43A4857e388e5189f4cE";

export const CHAIN_ID = process.env.VUE_APP_CHAIN_ID || 1;

export const NETWORK_ID = process.env.VUE_APP_NETWORK_ID || 1;
