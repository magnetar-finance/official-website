import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Layers, Activity } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';
const GITHUB_URL = 'https://github.com/magnetar-finance';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Phosphor green bloom — top right */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[70%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 0%, rgba(41,98,255,0.06) 0%, transparent 60%)',
        }}
      />
      {/* Center dim bloom */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(41,98,255,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px opacity-20"
        style={{
          background:
            'linear-gradient(to bottom, transparent, #2962ff, transparent)',
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
          {/* Boot sequence badge */}
          <motion.a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 border border-[rgba(41,98,255,0.2)] bg-[rgba(41,98,255,0.04)] hover:bg-[rgba(41,98,255,0.07)] transition-all duration-300 group cursor-pointer"
            style={{ borderRadius: '2px' }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#2962ff] animate-pulse-glow" />
            <span className="text-[10px] text-[#475569] tracking-widest uppercase font-medium">
              [ONLINE] ve(3,3) DEX — now live
            </span>
            <span className="text-[#2962ff] text-[10px] font-bold ml-1 group-hover:text-[#1d4fdb] transition-colors flex items-center gap-1 tracking-widest">
              OPEN_APP <ArrowRight className="w-3 h-3 inline" />
            </span>
          </motion.a>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-[11px] text-[#334155] tracking-widest uppercase mb-4 font-medium">
              magnetar@defi:~$ ./init protocol
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tighter">
              <span className="text-[#475569] text-3xl md:text-4xl block mb-1 font-normal">
                &gt;&gt;
              </span>
              <span className="text-[#ffffff] block">Trade.</span>
              <span className="text-[#ffffff] block">Earn.</span>
              <span className="gradient-text text-glow-indigo block mt-1">
                Govern.
              </span>
            </h1>
          </motion.div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-sm text-[#475569] max-w-xl leading-relaxed mb-10 tracking-wide"
          >
            # A ve(3,3) DEX and LP aggregator built for DeFi natives.
            <br />
            # Best-rate swaps, deep liquidity, and sustainable yield
            <br /># through vote-escrow governance.
          </motion.p>

          {/* CTA Buttons */}
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
              $ launch_app
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/#products" className="btn-ghost">
              ./explore_products
            </a>
          </motion.div>

          {/* Key metrics — terminal key-value style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="border border-[rgba(41,98,255,0.07)] p-4 inline-block"
            style={{ borderRadius: '2px', background: 'rgba(41,98,255,0.02)' }}
          >
            <p className="text-[10px] text-[#334155] tracking-widest mb-3 uppercase">
              $ cat ./status.json
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div className="flex gap-2 items-baseline">
                <span className="text-[10px] text-[#334155] uppercase tracking-wider">
                  STATUS:
                </span>
                <span className="text-sm font-bold text-[#2962ff]">
                  operational
                </span>
              </div>
              <div className="flex gap-2 items-baseline">
                <span className="text-[10px] text-[#334155] uppercase tracking-wider">
                  NETWORKS:
                </span>
                <span className="text-sm font-bold text-[#ffffff]">2</span>
                <span className="text-[10px] text-[#334155]">(arc, litvm)</span>
              </div>
              <div className="flex gap-2 items-baseline">
                <span className="text-[10px] text-[#334155] uppercase tracking-wider">
                  COST:
                </span>
                <span className="text-sm font-bold text-[#ffffff]">$0</span>
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#334155] hover:text-[#2962ff] transition-colors tracking-wider uppercase"
              >
                [github] →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right-side product preview cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="hidden lg:flex flex-col gap-2 absolute right-6 top-1/2 -translate-y-1/2 w-72"
        >
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-2">
            $ ls ./products/
          </p>
          {[
            {
              icon: BarChart3,
              label: 've(3,3)_dex',
              desc: 'Vote-escrow AMM · gauge emissions · bribes',
              color: '#2962ff',
            },
            {
              icon: Layers,
              label: 'lp_aggregator',
              desc: 'Best-rate routing across all major DEXes',
              color: '#4f46e5',
            },
            {
              icon: Activity,
              label: 'protocol_status',
              desc: 'Phase 1 deployed · all systems operational',
              color: '#1d4fdb',
              isStatus: true,
            },
          ].map(({ icon: Icon, label, desc, color, isStatus }) => (
            <a
              key={label}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 term-card hover:glow-indigo-sm transition-all duration-200"
              style={{ borderRadius: '2px' }}
            >
              <div
                className="w-8 h-8 flex items-center justify-center shrink-0"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}25`,
                  borderRadius: '2px',
                }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-[#ffffff] mb-0.5 tracking-wide">
                  {label}
                </p>
                <p className="text-[10px] text-[#334155] leading-tight">
                  {desc}
                </p>
              </div>
              {isStatus ? (
                <span className="w-1.5 h-1.5 rounded-full bg-[#2962ff] animate-pulse-glow shrink-0" />
              ) : (
                <ArrowRight className="w-3 h-3 text-[#334155] group-hover:text-[#2962ff] shrink-0 transition-colors" />
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
