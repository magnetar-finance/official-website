# V3 Swap Router

> **🔄 Direct Trades** - Fast, stateless swaps across concentrated liquidity pools.

The **V3 Swap Router** contract handles the execution of token swaps specifically through Magnetar's V3 Concentrated Liquidity (CL) pools. It securely calculates routes, manages multi-hop token transfers, enforces slippage limits, and automatically returns excess tokens to users.

## Why Use the V3 Swap Router?

### Core Benefits

- **Stateless Execution**: The router holds no tokens at rest; all swaps are atomic and strictly temporary.
- **Multicall Capable**: Inherits `Multicall`, allowing you to batch multiple operations into one transaction (e.g., executing a swap, then unwrapping the resulting WETH into native ETH).
- **Exact Pricing**: Supports both "exact input" (I have 100 USDC, what's the most ETH I can get?) and "exact output" (I need exactly 1 ETH, what's the least USDC it will cost me?) swap variants.

## Main Functions

### `exactInputSingle()`

Swaps an exact amount of input tokens for a minimum amount of output tokens in a _single_ pool hop.

```solidity
function exactInputSingle(
    ExactInputSingleParams calldata params
) external payable returns (uint256 amountOut)
```

**Key Parameters:**

- `tokenIn` / `tokenOut`: The tokens you are swapping.
- `tickSpacing`: The fee tier of the V3 pool you wish to route through.
- `amountIn`: The exact amount of `tokenIn` you are providing.
- `amountOutMinimum`: The minimum amount of `tokenOut` you will accept (Slippage protection).
- `sqrtPriceLimitX96`: Optional price limit to stop the swap if the pool's price moves past this bound.

### `exactInput()`

Swaps an exact amount of input tokens across a _multi-hop_ path.

```solidity
function exactInput(
    ExactInputParams calldata params
) external payable returns (uint256 amountOut)
```

**Key Parameters:**

- `path`: A byte-encoded path of tokens and tick spacings (e.g., `TokenA -> TickSpacing -> TokenB -> TickSpacing -> TokenC`).

### `exactOutputSingle()`

Swaps up to a maximum amount of input tokens to receive an _exact_ amount of output tokens in a single hop.

```solidity
function exactOutputSingle(
    ExactOutputSingleParams calldata params
) external payable returns (uint256 amountIn)
```

### `exactOutput()`

Swaps up to a maximum amount of input tokens to receive an _exact_ amount of output tokens across a multi-hop path.

## Integration Example

```javascript
import { ethers } from 'ethers';

const V3_ROUTER_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize the V3 SwapRouter contract
const swapRouter = new ethers.Contract(
  V3_ROUTER_ADDRESS,
  V3_ROUTER_ABI,
  signer,
);

// Example: Swapping exactly 100 USDC for WETH in a single hop
const amountIn = ethers.utils.parseUnits('100', 6); // 100 USDC
const amountOutMinimum = ethers.utils.parseUnits('0.045', 18); // Minimum acceptable WETH

// 1. Approve the Router to spend your USDC
await usdc.approve(V3_ROUTER_ADDRESS, amountIn);

// 2. Setup swap parameters
const params = {
  tokenIn: USDC_ADDRESS,
  tokenOut: WETH_ADDRESS,
  tickSpacing: 50, // Routing through the 0.05% fee pool
  recipient: await signer.getAddress(),
  deadline: Math.floor(Date.now() / 1000) + 60 * 10, // 10 minutes
  amountIn: amountIn,
  amountOutMinimum: amountOutMinimum,
  sqrtPriceLimitX96: 0, // No strict price limit
};

console.log('Executing V3 Swap...');
const tx = await swapRouter.exactInputSingle(params);
const receipt = await tx.wait();

console.log('Swap executed successfully!');
```

## Path Encoding (Multi-Hop)

For `exactInput` and `exactOutput` functions, the `path` parameter must be securely encoded. The format interleaves Token Addresses and Tick Spacings (represented as `uint24`):

```javascript
// Example path: USDC (Token) -> 50 (TickSpacing) -> WETH (Token) -> 3000 (TickSpacing) -> MGN (Token)
const path = ethers.utils.solidityPack(
  ['address', 'uint24', 'address', 'uint24', 'address'],
  [USDC_ADDRESS, 50, WETH_ADDRESS, 3000, MGN_ADDRESS],
);
```

_Note: For `exactOutput` multi-hop swaps, the path must be encoded in **reverse order** (from output token to input token)._

## Security Features

- **Deadline Checks**: All swap transactions include a `deadline` parameter to ensure miners cannot hold your transaction and execute it later when prices are unfavorable.
- **Slippage Enforcement**: Transactions will automatically revert if `amountOutMinimum` is not met (or if `amountInMaximum` is exceeded). Always calculate slippage defensively.
