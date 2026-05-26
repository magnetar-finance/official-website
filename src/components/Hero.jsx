import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Layers } from 'lucide-react'

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/'
const GITHUB_URL = 'https://github.com/magnetar-finance'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* ── Background layers ── */}
      {/* Base dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Indigo radial glow at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)' }} />

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
           style={{ background: 'linear-gradient(to bottom, transparent, #030305)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* ── Live status badge ── */}
        <motion.a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-sm border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-400/50 transition-all duration-200 cursor-pointer group"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">ve(3,3) DEX — Now Live</span>
          <span className="text-indigo-400 flex items-center gap-1 text-xs font-semibold ml-1 group-hover:gap-2 transition-all">
            Launch App <ArrowRight className="w-3 h-3" />
          </span>
        </motion.a>

        {/* ── Main headline ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8"
        >
          <span className="text-white block">Trade. Earn.</span>
          <span className="gradient-text text-glow block mt-2">Govern.</span>
        </motion.h1>

        {/* ── Subheading ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-12 tracking-wide"
        >
          A ve(3,3) DEX and LP aggregator built for DeFi natives.
          Best-rate swaps, deep liquidity, and sustainable yield through vote-escrow governance.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Launch App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#products" className="btn-ghost text-sm">
            Explore Products
          </a>
        </motion.div>

        {/* ── Live product cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16"
        >
          {[
            {
              icon: BarChart3,
              label: 've(3,3) DEX',
              desc: 'Vote-escrow AMM with gauge emissions & bribes',
              color: '#6366f1',
            },
            {
              icon: Layers,
              label: 'LP Aggregator',
              desc: 'Best-rate routing across all major DEXes',
              color: '#0ea5e9',
            },
          ].map(({ icon: Icon, label, desc, color }) => (
            <a
              key={label}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated rounded-lg p-5 flex items-center gap-4 text-left group hover:border-indigo-400/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                   style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-0.5">{label}</p>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 ml-auto shrink-0 transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* ── Trust line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex items-center justify-center gap-3 text-xs text-slate-700 tracking-widest uppercase"
        >
          <span>Open source</span>
          <span>·</span>
          <span>Non-custodial</span>
          <span>·</span>
          <span>Permissionless</span>
          <span>·</span>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
             className="text-slate-600 hover:text-indigo-400 transition-colors tracking-normal normal-case">
            View on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
