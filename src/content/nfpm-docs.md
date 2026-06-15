# Nonfungible Position Manager

> **🖼️ Liquidity as NFTs** - The central hub for providing and managing V3 liquidity.

The **NonfungiblePositionManager** (NFPM) contract wraps V3 Concentrated Liquidity (CL) positions in an ERC721 non-fungible token interface. Because every V3 liquidity position operates within unique price boundaries (ticks), they cannot be aggregated into a standard fungible ERC20 token like V2 pools. Instead, each position is minted as a unique NFT.

## Why Use the Position Manager?

### Core Benefits

- **ERC721 Standard**: Liquidity positions are standard NFTs, making them fully composable with existing NFT infrastructure (wallets, marketplaces, and lending protocols).
- **Position Visualization**: Through the `tokenDescriptor` integration, the NFT visually represents the underlying pool, fee tier, and price bounds.
- **Gasless Approvals**: Inherits `ERC721Permit`, allowing for signature-based approvals without requiring on-chain transactions.

## Main Functions

### `mint()`

Mints a new NFT representing a liquidity position:

```solidity
function mint(
    MintParams calldata params
) external payable returns (
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
)
```

**Key Parameters in `MintParams`:**

- `token0` / `token1` - The tokens comprising the pool
- `tickSpacing` - Determines the specific pool's fee tier
- `tickLower` / `tickUpper` - The price range boundaries for your liquidity
- `amount0Desired` / `amount1Desired` - The amount of tokens you wish to provide
- `amount0Min` / `amount1Min` - Slippage protection bounds

_Note: If `sqrtPriceX96` is provided (not zero), `mint()` will automatically deploy the pool if it does not already exist._

### `increaseLiquidity()`

Adds more liquidity to an existing NFT position:

```solidity
function increaseLiquidity(
    IncreaseLiquidityParams calldata params
) external payable returns (
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
)
```

_Note: If the NFT is currently staked in a Gauge, the `increaseLiquidity` caller must be the Gauge contract itself._

### `decreaseLiquidity()`

Removes liquidity from an existing NFT position:

```solidity
function decreaseLiquidity(
    DecreaseLiquidityParams calldata params
) external payable returns (
    uint256 amount0,
    uint256 amount1
)
```

### `collect()`

Collects accumulated trading fees (tokens owed) from the position:

```solidity
function collect(
    CollectParams calldata params
) external payable returns (
    uint256 amount0,
    uint256 amount1
)
```

### `burn()`

Destroys the NFT position. The position must have zero active liquidity and zero uncollected fees.

```solidity
function burn(uint256 tokenId) external payable
```

## Integration Example

```javascript
import { ethers } from 'ethers';

const NFPM_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize the NonfungiblePositionManager contract
const nfpm = new ethers.Contract(NFPM_ADDRESS, NFPM_ABI, signer);

// Example: Minting a new position
const params = {
  token0: TOKEN_A_ADDRESS,
  token1: TOKEN_B_ADDRESS,
  tickSpacing: 50, // 0.05% fee tier
  tickLower: -887220, // Min tick
  tickUpper: 887220, // Max tick
  amount0Desired: ethers.utils.parseUnits('100', 18),
  amount1Desired: ethers.utils.parseUnits('100', 18),
  amount0Min: 0, // In production, calculate proper slippage
  amount1Min: 0, // In production, calculate proper slippage
  recipient: await signer.getAddress(),
  deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 mins
  sqrtPriceX96: 0, // Assume pool is already deployed
};

// Approve the NFPM to spend your tokens first
await tokenA.approve(NFPM_ADDRESS, params.amount0Desired);
await tokenB.approve(NFPM_ADDRESS, params.amount1Desired);

console.log('Minting new V3 position...');
const tx = await nfpm.mint(params);
const receipt = await tx.wait();

console.log('Position minted successfully!');
```

## Security & Architectural Notes

### Staking & Gauges

When a user stakes their NFT position into a Gauge to earn emissions, the `ownerOf(tokenId)` becomes the Gauge contract. The NFPM automatically handles routing liquidity changes and fee collections securely through the Gauge.

### Slippage Protections

Functions like `mint`, `increaseLiquidity`, and `decreaseLiquidity` enforce `amount0Min` and `amount1Min` slippage parameters. Always ensure these are strictly calculated off-chain to prevent sandwich attacks.

### `Multicall` Support

The NFPM inherits the `Multicall` standard, allowing users to batch multiple operations (e.g., pulling tokens from a wallet, minting a position, and refunding dust) into a single transaction to save on gas.
