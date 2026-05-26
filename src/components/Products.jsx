import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart3, Layers, ArrowLeftRight, Wallet, Coins, Globe, ArrowRight, Lock } from 'lucide-react'

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/'

const liveProducts = [
  {
    icon: BarChart3,
    color: '#6366f1',
    label: 've(3,3) DEX',
    description:
      'An advanced AMM using ve(3,3) tokenomics. Lock tokens, vote on gauges, earn emission bribes, and participate in protocol governance.',
    features: ['Concentrated Liquidity', 'Gauge Voting', 'Emission Bribes', 've-lock Governance'],
    href: APP_URL,
  },
  {
    icon: Layers,
    color: '#0ea5e9',
    label: 'LP Aggregator',
    description:
      'Smart routing across all major DEXes and AMMs. Every swap gets the most favorable price with minimal slippage and gas.',
    features: ['Multi-hop Routing', 'MEV Protection', 'Price Impact Minimized', 'Gas Optimization'],
    href: APP_URL,
  },
]

const comingSoon = [
  { icon: ArrowLeftRight, label: 'Cross-Chain Bridge', desc: 'Move assets across 20+ chains in one click.' },
  { icon: Wallet, label: 'Multi-Chain Wallet', desc: 'Smart wallet with account abstraction.' },
  { icon: Coins, label: 'Lending & Borrowing', desc: 'Isolated lending markets for safe yield.' },
  { icon: Globe, label: 'DeFi Payments', desc: 'Send and receive crypto payments globally.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section id="products" className="relative py-32 px-6">
      {/* Subtle section glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
             style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-badge text-indigo-400 border-indigo-500/30 mb-6 inline-flex">
            <span className="w-1 h-1 rounded-full bg-indigo-400 inline-block" />
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 mt-4">
            Built for{' '}
            <span className="gradient-text">DeFi Natives</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed">
            Two core products live today, with more infrastructure launching throughout 2025.
          </p>
        </motion.div>

        {/* ── Live Products — large prominent cards ── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {liveProducts.map((product) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.label}
                variants={cardVariants}
                className="group card-elevated rounded-lg p-8 hover:border-indigo-400/40 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${product.color}12, transparent)` }} />

                <div className="relative z-10">
                  {/* Top row: icon + live badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center"
                         style={{ background: `${product.color}18`, border: `1px solid ${product.color}35` }}>
                      <Icon className="w-6 h-6" style={{ color: product.color }} />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                      Live
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {product.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((f) => (
                      <span key={f} className="text-xs text-slate-500 px-3 py-1 rounded-sm border border-white/5 bg-white/2">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a href={product.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400/60 px-5 py-2.5 rounded-md transition-all duration-200 group-hover:gap-3">
                    Open App <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── Coming Soon — compact row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {comingSoon.map(({ icon: Icon, label, desc }) => (
            <div key={label}
                 className="glass-card rounded-lg p-5 border border-white/4 opacity-50 select-none">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-md flex items-center justify-center bg-slate-800 border border-white/5">
                  <Icon className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-slate-700" />
                  <span className="text-xs text-slate-700 font-medium">Soon</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-1">{label}</p>
              <p className="text-xs text-slate-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
