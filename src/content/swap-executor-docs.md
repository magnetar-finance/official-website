# Router On Steroids (SwapExecutor)

> **⚡ Recommended** - Get the best swap rates by aggregating liquidity from multiple sources.

The **SwapExecutor** contract, also known as "Router On Steroids," is an advanced routing solution that sources liquidity from a wider margin of pools and aggregators to find you the absolute best swap rates.

## Why Use Router On Steroids?

### Superior Price Discovery

- **Multi-Router Aggregation**: Queries multiple routers simultaneously to find the best rates
- **Intelligent Path Finding**: Automatically discovers optimal multi-hop routes through trusted tokens
- **Always Best Price**: Compares all available liquidity sources and executes on the most favorable one

### Key Advantages

1. **Better Rates** - Accesses deeper liquidity pools across multiple DEX routers
2. **Smart Routing** - Finds optimal paths even when direct swaps aren't available
3. **Gas Efficient** - Batches operations to minimize transaction costs
4. **Slippage Protection** - Built-in safeguards against unfavorable price movements

## How It Works

The SwapExecutor uses a sophisticated query system:

1. **Query Phase**: Checks all active routers for available swap routes
2. **Route Discovery**: If no direct route exists, searches for multi-hop paths through trusted tokens
3. **Best Route Selection**: Compares all viable routes and selects the one with the highest output
4. **Execution**: Executes swaps sequentially along the optimal path

## Main Functions

### `execute()`

Execute a swap through the best available route:

```solidity
function execute(
    address tokenA,
    address tokenB,
    address to,
    uint256 amountIn,
    uint256 amountOut,
    SwapType swapType,
    uint256 deadline
) external payable
```

**Parameters:**

- `tokenA` - Input token address (use `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE` for native ETH)
- `tokenB` - Output token address
- `to` - Recipient address
- `amountIn` - Amount of input tokens
- `amountOut` - Minimum amount of output tokens (slippage protection)
- `swapType` - Either `ALLOW_ZEROS` or `EXACT_OUT`
- `deadline` - Transaction deadline timestamp

### `findBestRoute()`

Preview the best route before executing:

```solidity
function findBestRoute(
    address tokenA,
    address tokenB,
    uint256 amountIn
) public view returns (QueryResult[] memory)
```

Returns an array of swap steps showing the optimal path from tokenA to tokenB.

### `query()`

Query a specific amount for swap output:

```solidity
function query(
    address tokenA,
    address tokenB,
    uint256 amountIn
) public view returns (QueryResult memory)
```

Returns the best single-hop swap result from all available routers.

## Swap Types

- **ALLOW_ZEROS**: Allows intermediate swaps with zero output (for multi-hop routes)
- **EXACT_OUT**: Requires exact output amount, will revert if not achievable

## Fee Structure

The SwapExecutor may charge a small ecosystem commission (typically < 1%) that goes toward protocol development and maintenance. The fee is automatically deducted from the output amount.

## Security Features

### Built-in Protections

- **Minimum Output Enforcement**: Reverts if output is below specified `amountOut`
- **Deadline Checks**: Prevents execution of stale transactions
- **Contract Validation**: Ensures all tokens are valid contracts
- **Reentrancy Guards**: Protection against reentrancy attacks
- **Owner Controls**: Router activation/deactivation for safety

### Trusted Tokens

The contract maintains a list of trusted intermediate tokens (like stablecoins and wrapped native tokens) that are safe to use for multi-hop routes.

## Integration Example

```javascript
import { ethers } from 'ethers';

const SWAP_EXECUTOR_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize SwapExecutor contract
const swapExecutor = new ethers.Contract(
  SWAP_EXECUTOR_ADDRESS,
  SWAP_EXECUTOR_ABI,
  signer,
);

// Find best route (preview)
const route = await swapExecutor.findBestRoute(
  TOKEN_A_ADDRESS,
  TOKEN_B_ADDRESS,
  ethers.utils.parseUnits('1.0', 18),
);

console.log('Best route:', route);

// Execute swap
const amountIn = ethers.utils.parseUnits('1.0', 18);
const amountOutMin = ethers.utils.parseUnits('0.95', 18); // 5% slippage tolerance
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes

// Approve token first
await tokenA.approve(SWAP_EXECUTOR_ADDRESS, amountIn);

// Execute the swap
const tx = await swapExecutor.execute(
  TOKEN_A_ADDRESS,
  TOKEN_B_ADDRESS,
  yourAddress,
  amountIn,
  amountOutMin,
  0, // SwapType.ALLOW_ZEROS
  deadline,
);

await tx.wait();
```

## When to Use Each Router

### Use Router On Steroids (SwapExecutor) when:

- ✅ You want the absolute best swap rates
- ✅ You're swapping larger amounts where price matters
- ✅ You're willing to pay slightly more gas for better execution
- ✅ You need multi-hop routing through multiple DEXs

### Use Standard Router when:

- ✅ You need to add/remove liquidity (not supported by SwapExecutor)
- ✅ You're making small swaps where gas costs matter more than rate
- ✅ You want the simplest integration
- ✅ You need zap functionality

## Best Practices

1. **Always Preview Routes**: Use `findBestRoute()` to understand the swap path before executing
2. **Set Appropriate Slippage**: Account for price impact and volatility in your `amountOut` parameter
3. **Monitor Gas Costs**: Multi-hop routes cost more gas - ensure the better rate justifies the cost
4. **Use Deadlines**: Always set reasonable deadline parameters (10-20 minutes is typical)
5. **Approve Carefully**: Only approve the amount you intend to swap

## Limitations

- Does not support liquidity provision (use standard Router for that)
- Multi-hop routes consume more gas
- Depends on router availability (owner can disable routers)
- Commission fees may apply (check `swapFeePercentage`)
