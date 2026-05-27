import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Layers, Activity } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';
const GITHUB_URL = 'https://github.com/magnetar-finance';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Left-side vertical accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-30"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #2962ff, transparent)',
        }}
      />

      {/* Indigo bloom — top right quadrant */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[70%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 0%, rgba(41,98,255,0.14) 0%, transparent 60%)',
        }}
      />
      {/* Subtle center bloom */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(41,98,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #000000)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* ── Status pill ── */}
          <motion.a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-12 px-4 py-2 border border-blue-600/25 bg-blue-600/5 hover:bg-blue-600/8 hover:border-blue-500/40 transition-all duration-300 group cursor-pointer"
            style={{ borderRadius: '3px' }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-xs mono text-slate-500 tracking-widest uppercase">
              ve(3,3) DEX — Now Live
            </span>
            <span className="text-blue-500 text-xs mono font-medium ml-1 group-hover:text-blue-400 transition-colors flex items-center gap-1">
              Open App <ArrowRight className="w-3 h-3 inline" />
            </span>
          </motion.a>

          {/* ── Main headline — editorial, left-aligned ── */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tighter mb-8"
          >
            <span className="text-white block">Trade. Earn.</span>
            <span className="gradient-text block mt-1">Govern.</span>
          </motion.h1>

          {/* ── Subhead ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed mb-10"
          >
            A ve(3,3) DEX and LP aggregator built for DeFi natives. Best-rate
            swaps, deep liquidity, and sustainable yield through vote-escrow
            governance.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-3 items-start mb-20"
          >
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Launch App
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#products" className="btn-ghost">
              Explore Products
            </a>
          </motion.div>

          {/* ── Key metrics / trust indicators ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center gap-8"
          >
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">
                Phase 1
              </p>
              <p className="text-xs mono text-slate-600 mt-0.5 tracking-widest uppercase">
                Live Now
              </p>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">1</p>
              <p className="text-xs mono text-slate-600 mt-0.5 tracking-widest uppercase">
                Network (Arc)
              </p>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <div>
              <p className="text-2xl font-bold text-white tracking-tight">$0</p>
              <p className="text-xs mono text-slate-600 mt-0.5 tracking-widest uppercase">
                Sign-up Cost
              </p>
            </div>
            <div className="w-px h-10 bg-white/5" />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mono text-slate-600 hover:text-blue-500 transition-colors tracking-widest uppercase"
            >
              View on GitHub →
            </a>
          </motion.div>
        </div>

        {/* ── Right-side product preview cards — absolute positioned ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="hidden lg:flex flex-col gap-3 absolute right-6 top-1/2 -translate-y-1/2 w-72"
        >
          {[
            {
              icon: BarChart3,
              label: 've(3,3) DEX',
              desc: 'Vote-escrow AMM with gauge emissions & bribes',
              color: '#2962ff',
            },
            {
              icon: Layers,
              label: 'LP Aggregator',
              desc: 'Best-rate routing across all major DEXes',
              color: '#06b6d4',
            },
            {
              icon: Activity,
              label: 'Live Protocol',
              desc: 'Phase 1 deployed and operational',
              color: '#10b981',
              isStatus: true,
            },
          ].map(({ icon: Icon, label, desc, color, isStatus }) => (
            <a
              key={label}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-5 py-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-600/25 hover:bg-blue-600/[0.04] transition-all duration-300"
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white mb-0.5">
                  {label}
                </p>
                <p className="text-xs text-slate-600 leading-tight">{desc}</p>
              </div>
              {isStatus ? (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow shrink-0" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-blue-500 shrink-0 transition-colors" />
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
