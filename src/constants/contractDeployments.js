/**
 * Magnetar Finance Smart Contract Deployments
 *
 * This file contains the deployed contract addresses for all supported chains.
 * Source: https://github.com/magnetar-finance/contracts/tree/main/script/constants/output
 */

export const CHAINS = {
  LITVM: {
    id: 'litvm',
    name: 'LitVM',
    chainId: 4441,
    rpcUrl: '', // TODO: Add actual RPC URL
    blockExplorer: '', // TODO: Add actual block explorer URL
  },
  ARC_TESTNET: {
    id: 'arc-testnet',
    name: 'Arc Testnet',
    chainId: 5042002,
    rpcUrl: '', // TODO: Add actual RPC URL
    blockExplorer: '', // TODO: Add actual block explorer URL
  },
};

/**
 * Core Contract Deployments
 */
export const CORE_CONTRACTS = {
  4441: {
    MGN: '0x64FAF984Bf60dE19e24238521814cA98574E3b00',
    poolFactory: '0xE41d241720FEE7cD6BDfA9aB3204d23687703CD5',
    clFactory: '0xC05b371680057B55e23C27d23453592cdf972Ec1',
    nonfungiblePositionManager: '0x842CDC95B8BC3A19a8fFc91f200e51c8aF6faFC6',
    v3SwapRouter: '0xC481263897F96B4781219EDF5cfAa95ec49c200c',
    votingRewardsFactory: '0x5CaD84E500d73A9bcCdeB21eDD9720FFb7531c56',
    gaugeFactory: '0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2',
    managedRewardsFactory: '0x4603b254ca806aDAFd52A35f5a8c5a97743df342',
    factoryRegistry: '0x6269b4705FCdBAbF81D4636e33c2100f757A05ac',
    forwarder: '0x7cA0Af2CBdD6bBBf288b47BdD8ef834A39588074',
    votingEscrow: '0xF1B1c2f4E8FcD4aFCA0E608B1c7dB8b4e700154F',
    artProxy: '0x7B273b6Ab7e43Fad5319374622cDcbB2d00F62e7',
    distributor: '0x8160C59218be97F301a857cD8E72e5d3446621df',
    voter: '0x2914f5e8A40047C7421aaDad35CDB06870ecA0c5',
    minter: '0xe88DdB8699E78FbCD6215eBCA61127A7C1627316',
    router: '0x7961c29F9007ADbE089c1C4163a77e453A960583',
  },
  5042002: {
    MGN: '0x64FAF984Bf60dE19e24238521814cA98574E3b00',
    poolFactory: '0xE41d241720FEE7cD6BDfA9aB3204d23687703CD5',
    clFactory: '0xf6a6a429a0b9676293Df0E3616A6a33cA673b5C3',
    nonfungiblePositionManager: '0x8948f9d59203F9dCF4de4B2baa10887993274C3C',
    v3SwapRouter: '0xC05b371680057B55e23C27d23453592cdf972Ec1',
    votingRewardsFactory: '0x5CaD84E500d73A9bcCdeB21eDD9720FFb7531c56',
    gaugeFactory: '0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2',
    managedRewardsFactory: '0x4603b254ca806aDAFd52A35f5a8c5a97743df342',
    factoryRegistry: '0x6269b4705FCdBAbF81D4636e33c2100f757A05ac',
    forwarder: '0x7cA0Af2CBdD6bBBf288b47BdD8ef834A39588074',
    votingEscrow: '0xF1B1c2f4E8FcD4aFCA0E608B1c7dB8b4e700154F',
    artProxy: '0x7B273b6Ab7e43Fad5319374622cDcbB2d00F62e7',
    distributor: '0x8160C59218be97F301a857cD8E72e5d3446621df',
    voter: '0x2914f5e8A40047C7421aaDad35CDB06870ecA0c5',
    minter: '0xe88DdB8699E78FbCD6215eBCA61127A7C1627316',
    router: '0x7961c29F9007ADbE089c1C4163a77e453A960583',
  },
};

/**
 * Router On Steroids (SwapExecutor) Deployments
 * Aggregates liquidity from multiple sources for optimal swap rates
 */
export const SWAP_EXECUTOR_ADDRESSES = {
  4441: '0xD3F9Ba8b83D5a71bb75a9955A1494d5B1D4E76da',
  5042002: '0x3562cceE39adc7465f1bAed088043C5C5B41e4e6',
};

/**
 * Contract descriptions
 */
export const CONTRACT_DESCRIPTIONS = {
  MGN: 'The native Magnetar token contract',
  poolFactory: 'Factory contract for creating liquidity pools',
  clFactory: 'Factory contract for creating V3 concentrated liquidity pools',
  nonfungiblePositionManager:
    'Wraps V3 CL positions in an ERC721 non-fungible token interface',
  v3SwapRouter:
    'Stateless execution of token swaps against V3 concentrated liquidity pools',
  votingRewardsFactory: 'Factory for creating voting rewards contracts',
  gaugeFactory: 'Factory for creating gauge contracts',
  managedRewardsFactory: 'Factory for creating managed rewards contracts',
  factoryRegistry: 'Registry for tracking all factory contracts',
  forwarder: 'Meta-transaction forwarder contract',
  votingEscrow: 'Vote-escrowed MGN (veMGN) contract',
  artProxy: 'Proxy contract for NFT artwork',
  distributor: 'Rewards distributor contract',
  voter: 'Voting contract for gauge weights',
  minter: 'Token minting contract',
  router: 'Main router contract for swaps and liquidity operations',
  swapExecutor:
    'Router On Steroids - Aggregates liquidity from multiple routers for best prices',
};

/**
 * Helper function to get contract address by chain ID
 */
export function getContractAddress(chainId, contractName) {
  return CORE_CONTRACTS[chainId]?.[contractName];
}

/**
 * Helper function to get all contracts for a chain
 */
export function getChainContracts(chainId) {
  return CORE_CONTRACTS[chainId];
}

/**
 * Helper function to check if a chain is supported
 */
export function isSupportedChain(chainId) {
  return chainId in CORE_CONTRACTS;
}
