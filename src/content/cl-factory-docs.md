# V3 Concentrated Liquidity Factory

> **🚀 Advanced Yield** - The deployment engine for Magnetar's capital-efficient V3 pools.

The **CLFactory** (Concentrated Liquidity Factory) contract is responsible for deploying and managing V3 concentrated liquidity pools (`CLPool`). Unlike standard V2 pools that spread liquidity across all possible prices, V3 pools allow LPs to concentrate their capital within specific price ranges, drastically improving capital efficiency.

## Why Use the V3 Factory?

### Capital Efficiency

- **Concentrated Liquidity**: LPs can earn higher fees with less capital by targeting specific price ranges.
- **Customizable Tick Spacing**: Different fee tiers correspond to different tick spacings, optimizing trading for assets of varying volatility.
- **Deterministic Deployment**: Uses `Clones.cloneDeterministic` for efficient and predictable pool addressing.

### Key Advantages

1. **Multiple Fee Tiers** - Supports multiple pools for the same token pair with different fee structures (e.g., 0.01%, 0.05%, 0.3%, 1%).
2. **Dynamic Fee Modules** - Supports external `swapFeeModule` and `unstakedFeeModule` contracts for dynamic, pool-specific fee logic.
3. **Optimized Lookups** - Bidirectional mappings (`token0` -> `token1` -> `tickSpacing`) allow for instant pool discovery without sorting overhead.

## Main Functions

### `createPool()`

Creates a new concentrated liquidity pool:

```solidity
function createPool(
    address tokenA,
    address tokenB,
    int24 tickSpacing,
    uint160 sqrtPriceX96
) external returns (address pool)
```

**Parameters:**

- `tokenA` - First token address
- `tokenB` - Second token address
- `tickSpacing` - The tick spacing associated with the desired fee tier
- `sqrtPriceX96` - The initial square root price of the pool as a Q64.96 value

### `getSwapFee()`

Returns the active swap fee for a specific pool:

```solidity
function getSwapFee(address pool) external view returns (uint24)
```

**Parameters:**

- `pool` - The address of the concentrated liquidity pool

_Note: This will query the `swapFeeModule` first if set, otherwise it defaults to the fee mapped to the pool's tick spacing._

### `getUnstakedFee()`

Returns the protocol fee charged on unstaked positions:

```solidity
function getUnstakedFee(address pool) external view returns (uint24)
```

**Parameters:**

- `pool` - The address of the concentrated liquidity pool

## Fee Tiers & Tick Spacings

The V3 Factory comes pre-configured with several standard fee tiers and tick spacings. Each combination represents a unique pool for any given token pair:

- **0.01% Fee** (`100`) -> Tick Spacing: `1`
- **0.05% Fee** (`500`) -> Tick Spacing: `50`
- **0.06% Fee** (`600`) -> Tick Spacing: `100`
- **0.30% Fee** (`3000`) -> Tick Spacing: `200`
- **1.00% Fee** (`10000`) -> Tick Spacing: `2000`

## Integration Example

```javascript
import { ethers } from 'ethers';

const CL_FACTORY_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize CLFactory contract
const clFactory = new ethers.Contract(
  CL_FACTORY_ADDRESS,
  CL_FACTORY_ABI,
  signer,
);

// Query a 0.05% fee pool (tick spacing: 50)
const tickSpacing = 50;
const poolAddress = await clFactory.getPool(
  WETH_ADDRESS,
  USDC_ADDRESS,
  tickSpacing,
);

if (poolAddress === ethers.constants.AddressZero) {
  console.log('Pool does not exist yet! Creating it...');

  // Example initial price (1:1 ratio for simplicity, you must calculate the actual sqrtPriceX96)
  const initialSqrtPriceX96 = ethers.BigNumber.from(
    '79228162514264337593543950336',
  );

  const tx = await clFactory.createPool(
    WETH_ADDRESS,
    USDC_ADDRESS,
    tickSpacing,
    initialSqrtPriceX96,
  );

  await tx.wait();
  console.log('V3 Pool created successfully!');
} else {
  console.log('V3 Pool exists at:', poolAddress);

  // Query the pool's dynamic swap fee
  const fee = await clFactory.getSwapFee(poolAddress);
  console.log('Current pool swap fee (in pips):', fee.toString());
}
```

## Security Features

- **Safe External Calls**: Uses `ExcessivelySafeCall` when querying dynamic fee modules to prevent malicious modules from executing gas-griefing attacks or returning massive byte arrays.
- **Strict Validations**: Reverts on identical token pairs, zero addresses, or invalid tick spacings.
- **Tick Spacing Caps**: Tick spacings are capped to prevent mathematical overflows in the tick bitmap logic during swaps.

## Best Practices

1. **Calculate `sqrtPriceX96` Accurately**: When calling `createPool()`, ensure the `sqrtPriceX96` parameter accurately reflects the current market price of the assets to prevent immediate arbitrage loss.
2. **Handle Reversals**: You do not need to order `tokenA` and `tokenB` when querying `getPool()`; the factory automatically handles bidirectional querying.
