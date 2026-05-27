import { motion } from 'framer-motion';
import { Activity, Shield, Code2, Clock } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';
const GITHUB_URL = 'https://github.com/magnetar-finance';

const pillars = [
  {
    icon: Activity,
    color: '#2962ff',
    title: 'Live Protocol',
    description:
      'Phase 1 is deployed and operational. The ve(3,3) DEX and LP Aggregator are live on the Arc Testnet.',
    tag: 'Phase 1 · Live Now',
  },
  {
    icon: Shield,
    color: '#10b981',
    title: 'Non-Custodial',
    description:
      'Your assets remain in your wallet at all times. Smart contracts are fully permissionless — no admin keys, no upgradeable proxies.',
    tag: 'Self-custody · Trustless',
  },
  {
    icon: Code2,
    color: '#06b6d4',
    title: 'Open Source',
    description:
      'All contracts and front-end code are publicly available on GitHub. Audit and verify every function before you interact.',
    tag: 'Fully verifiable · GitHub',
  },
  {
    icon: Clock,
    color: '#8b5cf6',
    title: 'Sustainable Yield',
    description:
      'Emissions are directed by ve-token holders, not the team. Yield comes from real protocol usage — trading fees and governance bribes.',
    tag: 've(3,3) · Vote-directed',
  },
];

export default function EcosystemStats() {
  return (
    <section id="ecosystem" className="relative py-28 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-badge text-cyan-600 border-cyan-700/40 mb-6 inline-flex">
            Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4 tracking-tight">
            Built on <span className="gradient-text">First Principles</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg leading-relaxed">
            No inflated metrics. No vanity numbers. Just a live, growing
            protocol with real fundamentals.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 border-l border-white/5 first:border-l-0 hover:bg-white/[0.01] transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `${p.color}14`,
                    border: `1px solid ${p.color}28`,
                  }}
                >
                  <Icon className="w-4.5 h-4.5" style={{ color: p.color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <p className="mono text-xs" style={{ color: `${p.color}80` }}>
                  {p.tag}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Protocol status bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-sm text-white font-medium">
              All Systems Operational
            </span>
            <span className="mono text-xs text-slate-600">· Phase 1</span>
          </div>
          <div className="flex items-center gap-6 mono text-xs text-slate-600">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              Launch App →
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
