import { motion } from 'framer-motion';
import { Wallet, Repeat, TrendingUp, Shield } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';

const steps = [
  {
    num: '01',
    icon: Wallet,
    color: '#2962ff',
    title: 'Connect Wallet',
    description:
      'Connect any EVM wallet — MetaMask, WalletConnect, Coinbase. No sign-up, no KYC. Your keys, your funds.',
    tag: 'EVM-compatible · Web3',
  },
  {
    num: '02',
    icon: Repeat,
    color: '#06b6d4',
    title: 'Swap or Add Liquidity',
    description:
      'Get best-rate swaps via our LP aggregator routing across major DEXes, or deposit into pools to earn fees.',
    tag: 'Best-rate routing · Swap & Provide Liquidity',
  },
  {
    num: '03',
    icon: TrendingUp,
    color: '#10b981',
    title: 'Lock & Vote',
    description:
      'Lock MGTR into veMGTR to join weekly gauge voting. Direct emissions to your preferred pools and earn bribes.',
    tag: 've(3,3) flywheel · weekly epochs',
  },
  {
    num: '04',
    icon: Shield,
    color: '#8b5cf6',
    title: 'Earn Fees & Bribes',
    description:
      'Collect trading fees from voted pools plus bribes from protocols incentivizing your liquidity — claimable weekly.',
    tag: 'Sustainable yield · governance rewards',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-badge text-emerald-500 border-emerald-600/40 mb-6 inline-flex">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4 tracking-tight">
            DeFi Made <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg leading-relaxed">
            From wallet connect to earning governance rewards — get started in
            minutes.
          </p>
        </motion.div>

        {/* Steps — horizontal table-like layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative p-8 border-l border-white/5 first:border-l-0 lg:first:border-l lg:border-t-0 group"
              >
                {/* Step number — large watermark */}
                <span
                  className="absolute top-6 right-6 mono text-6xl font-black leading-none select-none"
                  style={{ color: `${step.color}25` }}
                >
                  {step.num}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-md flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${step.color}14`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>
                <p
                  className="text-xs mono leading-tight"
                  style={{ color: `${step.color}90` }}
                >
                  {step.tag}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-slate-600 text-sm">
            No account needed · Non-custodial · Permissionless
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            Start Trading Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
