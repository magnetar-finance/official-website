# V2 Pool Factory

> **⚙️ Core Infrastructure** - The engine behind Magnetar's liquidity pools.

The V2 **PoolFactory** contract is responsible for creating and registering new liquidity pools within the Magnetar ecosystem. It uses the EIP-1167 minimal proxy pattern (Clones) to deploy new pools efficiently and deterministically, saving gas and ensuring predictable pool addresses.

## Why Use the V2 Pool Factory?

### Efficient Deployments

- **EIP-1167 Clones**: Deploys lightweight proxy contracts rather than full contract bytecode
- **Deterministic Addresses**: Pool addresses can be calculated off-chain before deployment
- **Lower Gas Costs**: Significantly reduces the gas required to launch a new trading pair

### Key Advantages

1. **Dual Invariant Support** - Supports both StableAMM (Stableswap) and VolatileAMM invariants
2. **Granular Fees** - Individual pools can have custom fees overridden by governance
3. **Predictable Routing** - Bidirectional token mappings allow for instant O(1) pool lookups
4. **Safety Controls** - Built-in pauser roles to halt operations during emergencies

## Main Functions

### `createPool()`

Creates a new liquidity pool for `tokenA` and `tokenB`:

```solidity
function createPool(
    address tokenA,
    address tokenB,
    bool stable
) public returns (address pool)
```

**Parameters:**

- `tokenA` - First token address
- `tokenB` - Second token address
- `stable` - `true` for stableAMM (like USDC/USDT), `false` for volatileAMM (like ETH/USDC)

### `getPool()`

Returns the address of an existing pool:

```solidity
function getPool(
    address tokenA,
    address tokenB,
    bool stable
) external view returns (address)
```

**Parameters:**

- `tokenA` - First token address (order does not matter)
- `tokenB` - Second token address (order does not matter)
- `stable` - The stability type of the pool you are querying

### `getFee()`

Returns the active swap fee for a given pool:

```solidity
function getFee(address pool, bool _stable) public view returns (uint256)
```

**Parameters:**

- `pool` - The address of the liquidity pool
- `_stable` - Whether the pool is stable or volatile

## Fee Structure & Management

The PoolFactory controls the swap fees for all deployed pools:

- **Default Stable Fee**: 0.05% (`stableFee`)
- **Default Volatile Fee**: 0.3% (`volatileFee`)
- **Maximum Fee Cap**: 3.0% (`MAX_FEE`)

### Custom Pool Fees

Governance (via the `feeManager`) can set custom fees for specific pools using `setCustomFee`.
To explicitly set a pool's fee to `0%`, the factory uses a special indicator value (`420` or `ZERO_FEE_INDICATOR`).

## Integration Example

```javascript
import { ethers } from 'ethers';

const POOL_FACTORY_ADDRESS = '0x...';
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = provider.getSigner();

// Initialize PoolFactory contract
const poolFactory = new ethers.Contract(
  POOL_FACTORY_ADDRESS,
  POOL_FACTORY_ABI,
  signer,
);

// Query an existing volatile pool (e.g., WETH / USDC)
const poolAddress = await poolFactory.getPool(
  WETH_ADDRESS,
  USDC_ADDRESS,
  false, // false = volatile
);

if (poolAddress === ethers.constants.AddressZero) {
  console.log('Pool does not exist yet! Creating it...');

  // Create the pool
  const tx = await poolFactory.createPool(WETH_ADDRESS, USDC_ADDRESS, false);

  await tx.wait();
  console.log('Pool created successfully!');
} else {
  console.log('Pool exists at:', poolAddress);

  // Query the pool's fee
  const fee = await poolFactory.getFee(poolAddress, false);
  console.log('Current pool swap fee:', fee.toString());
}
```

## Security Features

### Built-in Protections

- **Zero Address Checks**: Prevents deployment with null tokens
- **Duplicate Prevention**: Reverts if the pool already exists
- **Fee Caps**: Hardcoded limits to prevent malicious fee inflation
- **Pauser Controls**: Operations can be paused during unforeseen circumstances

## Best Practices

1. **Always Verify Pool Existence**: Use `getPool()` to check if a pool exists before attempting to interact with it or create it.
2. **Token Ordering**: You don't need to sort token addresses before querying `getPool()`; the factory handles bidirectionality automatically.
3. **Handle Zero Addresses**: If `getPool()` returns the zero address, the pool hasn't been deployed for that specific invariant (stable/volatile).
