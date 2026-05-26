import { motion } from 'framer-motion'
import { Wallet, Repeat, TrendingUp, Shield, ChevronRight } from 'lucide-react'

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/'

const steps = [
  {
    num: '01',
    icon: Wallet,
    color: '#6366f1',
    title: 'Connect Your Wallet',
    description:
      'Connect any Web3 wallet — MetaMask, WalletConnect, Coinbase Wallet, and 20+ more. No sign-up, no KYC. Your keys, your funds.',
    detail: 'Works with any major EVM-compatible wallet',
  },
  {
    num: '02',
    icon: Repeat,
    color: '#0ea5e9',
    title: 'Swap or Add Liquidity',
    description:
      'Get the best swap rates via our LP aggregator, routing across all major DEXes. Or deposit into liquidity pools to start earning fees.',
    detail: 'Best-rate routing powered by our aggregation engine',
  },
  {
    num: '03',
    icon: TrendingUp,
    color: '#14b8a6',
    title: 'Lock & Vote',
    description:
      'Lock your MGTR tokens into veMGTR to participate in weekly gauge voting. Direct emissions to your preferred pools and earn bribes.',
    detail: 've(3,3) flywheel — vote, earn, compound',
  },
  {
    num: '04',
    icon: Shield,
    color: '#8b5cf6',
    title: 'Earn Fees & Bribes',
    description:
      'Collect trading fees from the pools you voted for, plus bribes from protocols incentivizing your liquidity. All claimable weekly.',
    detail: 'Sustainable yield through governance participation',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      {/* Section glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
             style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(20,184,166,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge text-emerald-400 border-emerald-500/30 mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-4">
            DeFi Made{' '}
            <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            From wallet connect to earning governance rewards — get started in minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px"
               style={{ background: 'linear-gradient(90deg, transparent 5%, #6366f144 20%, #0ea5e944 50%, #14b8a644 80%, transparent 95%)' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative w-14 h-14 rounded-lg flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                         style={{
                           background: `${step.color}18`,
                           borderColor: `${step.color}40`,
                         }}>
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <span className="text-3xl font-black text-white/10">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-xs font-medium px-3 py-2 rounded-lg"
                     style={{ color: step.color, background: `${step.color}12`, border: `1px solid ${step.color}25` }}>
                    {step.detail}
                  </p>

                  {/* Arrow connector (hidden on last) */}
                  {i < steps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute top-5 -right-4 w-5 h-5 text-slate-700 z-10" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Launch CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a href={APP_URL}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-lg border border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-300 text-base">
            Start Trading Now
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-slate-600 text-sm">No sign-up required. Fully non-custodial.</p>
        </motion.div>
      </div>
    </section>
  )
}
