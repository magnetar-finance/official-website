import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Layers, ArrowRight, Lock } from 'lucide-react';
import { Zap, Key, Coins, Wallet } from 'lucide-react';

const APP_URL = 'https://app.magnetarfi.xyz';

const liveProducts = [
  {
    icon: BarChart3,
    color: '#2962ff',
    label: 've(3,3) DEX',
    cmdName: 'dex_v1',
    description:
      'An advanced AMM using ve(3,3) tokenomics. Lock tokens, vote on gauge emissions, earn bribes, and participate in protocol governance.',
    features: [
      '--concentrated-liquidity',
      '--gauge-voting',
      '--emission-bribes',
      '--ve-lock-governance',
    ],
    href: APP_URL,
  },
  {
    icon: Layers,
    color: '#4f46e5',
    label: 'LP Aggregator',
    cmdName: 'lp_aggregator',
    description:
      'Smart routing across all major DEXes and AMMs. Every swap gets the most favorable price with minimal slippage and gas cost.',
    features: ['--multi-hop-routing', '--price-impact-min', '--gas-optimized'],
    href: APP_URL,
  },
  {
    icon: Key,
    color: '#7c3aed',
    label: 'Lock Rentals',
    cmdName: 'lock_rentals',
    description:
      'Rent ve-NFTs for a fee, unlock immediate liquidity. A decentralized marketplace for borrowing and lending voting power and governance rights.',
    features: ['--p2p-rentals', '--upfront-yield', '--vote-delegation'],
    href: APP_URL,
  },
];

const comingSoon = [
  {
    icon: Zap,
    label: 'intents_swap',
    desc: 'Gasless, optimized swaps via professional solvers.',
  },
  {
    icon: Coins,
    label: 'lending_v1',
    desc: 'Isolated lending markets for safe yield.',
  },
  {
    icon: Wallet,
    label: 'mgn_wallet',
    desc: 'Smart wallet with account abstraction.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });

  return (
    <section id="products" className="relative py-32 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-4">
            magnetar@defi:~$ ls -la ./products/
          </p>
          <span className="section-badge text-[#4f46e5] border-[rgba(41,98,255,0.2)] mb-5 inline-flex">
            // products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] leading-tight mb-4 mt-5 tracking-tight">
            Built for <span className="gradient-text">DeFi Natives</span>
          </h2>
          <p className="text-[#475569] text-sm max-w-lg leading-relaxed">
            # Two core products live today, with more DeFi infrastructure
            <br /># launching throughout 2026.
          </p>
        </motion.div>

        {/* Live Products */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"
        >
          {liveProducts.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.label}
                variants={cardVariants}
                className="group term-card-elevated p-7 relative overflow-hidden"
                style={{ borderRadius: '2px' }}
              >
                {/* Subtle hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${product.color}06, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[10px] text-[#334155] tracking-widest mb-1.5">
                        $ ./{product.cmdName} --status
                      </p>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-9 h-9 flex items-center justify-center"
                          style={{
                            background: `${product.color}14`,
                            border: `1px solid ${product.color}30`,
                            borderRadius: '2px',
                          }}
                        >
                          <Icon
                            className="w-4 h-4"
                            style={{ color: product.color }}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-[#ffffff] tracking-tight">
                          {product.label}
                        </h3>
                      </div>
                    </div>
                    <span
                      className="flex items-center gap-1.5 text-[10px] font-bold text-[#2962ff] bg-[rgba(41,98,255,0.08)] border border-[rgba(41,98,255,0.25)] px-2.5 py-1.5 tracking-widest"
                      style={{ borderRadius: '2px' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2962ff] animate-pulse-glow" />
                      [LIVE]
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#475569] text-xs leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {/* Feature flags — CLI style */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] text-[#334155] px-2.5 py-1 border border-[rgba(41,98,255,0.08)] bg-[rgba(41,98,255,0.02)] tracking-wide"
                        style={{ borderRadius: '2px' }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#000000] bg-[#2962ff] hover:bg-[#1d4fdb] px-5 py-2.5 transition-all duration-150 group-hover:gap-3 tracking-widest uppercase"
                    style={{
                      borderRadius: '2px',
                      boxShadow: '0 0 15px rgba(41,98,255,0.2)',
                    }}
                  >
                    $ open_app <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coming Soon — locked modules */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-3">
            # upcoming modules — access restricted
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {comingSoon.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="term-card p-5 opacity-35 select-none"
                style={{ borderRadius: '2px' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-8 h-8 flex items-center justify-center bg-[rgba(41,98,255,0.04)] border border-[rgba(41,98,255,0.08)]"
                    style={{ borderRadius: '2px' }}
                  >
                    <Icon className="w-3.5 h-3.5 text-[#334155]" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-2.5 h-2.5 text-[#334155]" />
                    <span className="text-[10px] text-[#334155] tracking-wider">
                      [LOCKED]
                    </span>
                  </div>
                </div>
                <p className="text-xs font-bold text-[#475569] mb-1.5 tracking-wide">
                  {label}
                </p>
                <p className="text-[10px] text-[#334155] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
