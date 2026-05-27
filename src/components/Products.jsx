import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Layers, ArrowRight, Lock } from 'lucide-react';
import { ArrowLeftRight, Wallet, Coins, Globe, Zap, Key } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';

const liveProducts = [
  {
    icon: BarChart3,
    color: '#2962ff',
    label: 've(3,3) DEX',
    description:
      'An advanced AMM using ve(3,3) tokenomics. Lock tokens, vote on gauge emissions, earn bribes, and participate in protocol governance.',
    features: [
      'Concentrated Liquidity',
      'Gauge Voting',
      'Emission Bribes',
      've-lock Governance',
    ],
    href: APP_URL,
  },
  {
    icon: Layers,
    color: '#06b6d4',
    label: 'LP Aggregator',
    description:
      'Smart routing across all major DEXes and AMMs. Every swap gets the most favorable price with minimal slippage and gas cost.',
    features: [
      'Multi-hop Routing',
      'Price Impact Minimized',
      'Gas Optimization',
    ],
    href: APP_URL,
  },
];

const comingSoon = [
  {
    icon: Zap,
    label: 'Intents Swapping',
    desc: 'Gasless, optimized swaps executed by professional solvers.',
  },
  {
    icon: Key,
    label: 'Lock Rentals',
    desc: 'Rent out your ve-NFTs for a fee and unlock immediate liquidity.',
  },
  {
    icon: Coins,
    label: 'Lending & Borrowing',
    desc: 'Isolated lending markets for safe yield.',
  },
  {
    icon: Wallet,
    label: 'Magnetar Wallet',
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
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="section-badge text-blue-500 border-blue-600/30 mb-6 inline-flex">
            Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 mt-5 tracking-tight">
            Built for <span className="gradient-text">DeFi Natives</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg leading-relaxed">
            Two core products live today, with more DeFi infrastructure
            launching throughout 2025.
          </p>
        </motion.div>

        {/* ── Live Products ── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"
        >
          {liveProducts.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.label}
                variants={cardVariants}
                className="group card-elevated rounded-lg p-8 hover:border-blue-500/35 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${product.color}08, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-7">
                    <div
                      className="w-11 h-11 rounded-md flex items-center justify-center"
                      style={{
                        background: `${product.color}14`,
                        border: `1px solid ${product.color}30`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: product.color }}
                      />
                    </div>
                    <span
                      className="flex items-center gap-1.5 mono text-xs font-medium text-emerald-400 bg-emerald-400/8 border border-emerald-400/20 px-3 py-1.5"
                      style={{ borderRadius: '3px' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                      Live
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {product.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="mono text-xs text-slate-600 px-3 py-1 border border-white/5 bg-white/[0.015]"
                        style={{ borderRadius: '3px' }}
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-blue-600/35 bg-blue-600/8 hover:bg-blue-600/16 hover:border-blue-500/55 px-5 py-2.5 transition-all duration-200 group-hover:gap-3"
                    style={{ borderRadius: '6px' }}
                  >
                    Open App <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Coming Soon ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {comingSoon.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="glass-card rounded-md p-5 border border-white/4 opacity-40 select-none"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-9 h-9 rounded-md flex items-center justify-center bg-white/5 border border-white/10">
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span className="mono text-xs text-slate-500">Soon</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-300 mb-1.5">
                {label}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
