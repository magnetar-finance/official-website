# Router Contract Overview

The **Router** contract is the primary entry point for interacting with Magnetar Finance pools. It provides a secure and efficient interface for:

- **Token Swaps**: Exchange tokens through optimal routes
- **Liquidity Management**: Add and remove liquidity from pools
- **Zap Operations**: Combine swaps and liquidity operations in a single transaction

## Key Features

### Swap Functions

The Router supports multiple swap types to accommodate different use cases:

- `swapExactTokensForTokens`: Swap a precise input amount for tokens
- `swapExactETHForTokens`: Swap native ETH for tokens
- `swapExactTokensForETH`: Swap tokens for native ETH

### Liquidity Functions

Manage your pool positions efficiently:

- `addLiquidity`: Provide liquidity to earn trading fees
- `removeLiquidity`: Withdraw your liquidity position
- `quoteAddLiquidity`: Preview liquidity amounts before adding

### Advanced Features

- **Fee-on-Transfer Support**: Compatible with tokens that have transfer fees
- **Deadline Protection**: All transactions include deadline parameters to prevent stale trades
- **Route Optimization**: Support for multi-hop routes to find best prices

## Security Considerations

> **Important**: Always set appropriate slippage tolerance using the `amountOutMin` parameter to protect against front-running attacks.

The Router contract includes several safety mechanisms:

1. **Deadline checks** - Transactions expire if not mined within the specified time
2. **Minimum output amounts** - Protect against excessive slippage
3. **Reentrancy guards** - Prevent reentrancy attacks on all state-changing functions

## Integration Notes

When integrating with the Router:

1. Always approve the Router to spend your tokens before calling swap or liquidity functions
2. Use the `getAmountsOut` view function to estimate output amounts
3. Set reasonable deadline parameters (typically 10-20 minutes from current time)
4. Account for gas costs when setting minimum output amounts

## Integration Example

```javascript
import { ethers } from 'ethers';

const ROUTER_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize the Standard Router contract
const router = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer);

// Example: Swapping exactly 100 USDC for MGN
const amountIn = ethers.utils.parseUnits('100', 6); // 100 USDC
const amountOutMin = ethers.utils.parseUnits('1.5', 18); // Min 1.5 MGN

// Approve the Router to spend your USDC
await usdc.approve(ROUTER_ADDRESS, amountIn);

const path = [USDC_ADDRESS, MGN_ADDRESS];
const to = await signer.getAddress();
const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes

console.log('Executing V2 Swap...');
const tx = await router.swapExactTokensForTokens(
  amountIn,
  amountOutMin,
  path,
  to,
  deadline,
);

const receipt = await tx.wait();
console.log('Swap executed successfully!');
```
