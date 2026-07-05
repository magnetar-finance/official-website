import { motion } from 'framer-motion';
import { Wallet, Repeat, TrendingUp, Shield } from 'lucide-react';

const APP_URL = 'https://app.magnetarfi.xyz';

const steps = [
  {
    num: '01',
    cmd: 'connect_wallet',
    icon: Wallet,
    color: '#2962ff',
    title: 'Connect Wallet',
    description:
      'Connect any EVM wallet — MetaMask, WalletConnect, Coinbase. No sign-up, no KYC. Your keys, your funds.',
    tag: 'evm-compatible · web3',
  },
  {
    num: '02',
    cmd: 'swap_or_provide',
    icon: Repeat,
    color: '#4f46e5',
    title: 'Swap or Add Liquidity',
    description:
      'Get best-rate swaps via our LP aggregator routing across major DEXes, or deposit into pools to earn fees.',
    tag: 'best-rate-routing · swap & provide',
  },
  {
    num: '03',
    cmd: 'lock_and_vote',
    icon: TrendingUp,
    color: '#3730a3',
    title: 'Lock & Vote',
    description:
      'Lock MGTR into veMGN to join weekly gauge voting. Direct emissions to your preferred pools and earn bribes.',
    tag: 've(3,3)-flywheel · weekly-epochs',
  },
  {
    num: '04',
    cmd: 'claim_rewards',
    icon: Shield,
    color: '#1e1b4b',
    title: 'Earn Fees & Bribes',
    description:
      'Collect trading fees from voted pools plus bribes from protocols incentivizing your liquidity — claimable weekly.',
    tag: 'sustainable-yield · governance-rewards',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-4">
            magnetar@defi:~$ ./how_it_works --guide
          </p>
          <span className="section-badge text-[#4f46e5] border-[rgba(41,98,255,0.2)] mb-5 inline-flex">
            // how_it_works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mt-5 mb-4 tracking-tight">
            DeFi Made <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-[#475569] text-sm max-w-lg leading-relaxed">
            # From wallet connect to earning governance rewards —<br /># get
            started in minutes.
          </p>
        </motion.div>

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
                className="relative p-7 border-l border-[rgba(41,98,255,0.06)] first:border-l-0 group"
              >
                {/* Step number watermark */}
                <span
                  className="absolute top-5 right-5 text-5xl font-black leading-none select-none tracking-tighter"
                  style={{ color: `${step.color}15` }}
                >
                  {step.num}
                </span>

                {/* Shell command label */}
                <p className="text-[10px] text-[#334155] tracking-widest mb-4">
                  $ ./{step.cmd}
                </p>

                {/* Icon */}
                <div
                  className="w-9 h-9 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}28`,
                    borderRadius: '2px',
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-[#ffffff] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[#475569] text-xs leading-relaxed mb-4">
                  {step.description}
                </p>
                <p
                  className="text-[10px] tracking-wide"
                  style={{ color: `${step.color}80` }}
                >
                  # {step.tag}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-6 border-t border-[rgba(41,98,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[10px] text-[#334155] tracking-widest">
            # no-account-required · non-custodial · permissionless
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#2962ff] hover:text-[#1d4fdb] transition-colors flex items-center gap-2 tracking-wider"
          >
            $ start_trading_now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
