import { motion } from 'framer-motion';
import { Activity, Shield, Code2, Clock } from 'lucide-react';

const APP_URL = 'https://app.magnetarfi.xyz';
const GITHUB_URL = 'https://github.com/magnetar-finance';

const pillars = [
  {
    icon: Activity,
    color: '#1fc7d4',
    title: 'Live Protocol',
    description:
      'Phase 1 is deployed and operational. The ve(3,3) DEX and LP Aggregator are live on Arc and LitVM.',
    tag: 'phase-1 · live-now',
  },
  {
    icon: Shield,
    color: '#ed4b9e',
    title: 'Non-Custodial',
    description:
      'Your assets remain in your wallet at all times. Smart contracts are fully permissionless — no admin keys, no upgradeable proxies.',
    tag: 'self-custody · trustless',
  },
  {
    icon: Code2,
    color: '#7645d9',
    title: 'Open Source',
    description:
      'All contracts and front-end code are publicly available on GitHub. Audit and verify every function before you interact.',
    tag: 'fully-verifiable · github',
  },
  {
    icon: Clock,
    color: '#9a67ea',
    title: 'Sustainable Yield',
    description:
      'Emissions are directed by ve-token holders, not the team. Yield comes from real protocol usage — trading fees and governance bribes.',
    tag: 've(3,3) · vote-directed',
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
          <p className="text-[10px] text-[#b8add2] tracking-widest uppercase mb-4 font-bold">
            magnetar@defi:~$ cat ./protocol/principles.md
          </p>
          <span className="section-badge mb-5 inline-flex">// protocol</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mt-5 mb-4 tracking-tight">
            Built on <span className="gradient-text">First Principles</span>
          </h2>
          <p className="text-[#b8add2] text-sm max-w-lg leading-relaxed">
            # No inflated metrics. No vanity numbers.
            <br /># Just a live, growing protocol with real fundamentals.
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
                className="group term-card p-7 m-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}40`,
                    borderRadius: '9999px',
                    boxShadow: `0 0 20px ${p.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h3 className="text-base font-bold text-[#ffffff] mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[#b8add2] text-xs leading-relaxed mb-4">
                  {p.description}
                </p>
                <p
                  className="text-[10px] tracking-wide font-bold"
                  style={{ color: p.color }}
                >
                  # {p.tag}
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
          className="mt-4 border-t border-[rgba(255,255,255,0.06)] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#1fc7d4] animate-pulse-glow" />
            <span className="text-xs font-bold text-[#1fc7d4] tracking-wider">
              [OK] all_systems_operational
            </span>
            <span className="text-[10px] text-[#b8add2] tracking-wider">
              · phase_1
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-[#b8add2] tracking-wider">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1fc7d4] transition-colors font-medium"
            >
              $ launch_app →
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1fc7d4] transition-colors font-medium"
            >
              $ view_github →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
