import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const phases = [
  {
    phase: 'PHASE_1',
    title: 'Foundation',
    status: 'completed',
    quarter: '2026-Q1/Q2',
    color: '#1fc7d4',
    items: [
      've(3,3) DEX launch',
      'LP Aggregator v1',
      'Gauge voting & emission bribes',
      'veMGN governance tokens',
      'Mainnet deployment',
    ],
  },
  {
    phase: 'PHASE_2',
    title: 'Expansion',
    status: 'active',
    quarter: '2026-Q3',
    color: '#ed4b9e',
    items: [
      'Intents swapping architecture',
      've-NFT lock rentals market',
      'Lending protocol launch',
      'DAO governance activation',
      'Ecosystem incentive program',
    ],
  },
  {
    phase: 'PHASE_3',
    title: 'Scale',
    status: 'upcoming',
    quarter: '2026-Q4',
    color: '#7645d9',
    items: [
      'Magnetar Web Wallet',
      'Payments infrastructure',
      'Institutional API access',
      'Perps & perpetual futures',
      'Advanced analytics suite',
    ],
  },
  {
    phase: 'PHASE_4',
    title: 'Dominance',
    status: 'upcoming',
    quarter: '2027',
    color: '#9a67ea',
    items: [
      'Magnetar L2 rollup',
      'zkEVM integration',
      'AI-powered trading strategies',
      'Real-world asset (RWA) markets',
      'Global fiat on/off ramps',
    ],
  },
];

const statusConfig = {
  completed: {
    icon: <CheckCircle2 className="w-3 h-3 text-[#1fc7d4]" />,
    badge:
      'text-[#1fc7d4] border-[rgba(31,199,212,0.3)] bg-[rgba(31,199,212,0.08)]',
    label: '[DONE]',
    prefix: '✓',
  },
  active: {
    icon: <Clock className="w-3 h-3 text-[#ed4b9e]" />,
    badge:
      'text-[#ed4b9e] border-[rgba(237,75,158,0.4)] bg-[rgba(237,75,158,0.08)]',
    label: '[ACTIVE]',
    prefix: '>',
  },
  upcoming: {
    icon: <Circle className="w-3 h-3 text-[#b8add2]" />,
    badge: 'text-[#b8add2] border-[rgba(255,255,255,0.1)]',
    label: '[QUEUED]',
    prefix: '-',
  },
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6">
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
            magnetar@defi:~$ cat ./roadmap.log
          </p>
          <span className="section-badge mb-5 inline-flex">// roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mt-5 mb-4 tracking-tight">
            Building the <span className="gradient-text">Long Game</span>
          </h2>
          <p className="text-[#b8add2] text-sm max-w-lg leading-relaxed">
            # A transparent, phased roadmap toward making Magnetar
            <br /># the backbone of decentralized finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {phases.map((phase, i) => {
            const sc = statusConfig[phase.status];
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative term-card p-7 m-1 ${
                  phase.status === 'active'
                    ? 'border-[rgba(237,75,158,0.3)] shadow-[0_0_30px_rgba(237,75,158,0.1)]'
                    : ''
                }`}
              >
                {/* Top color accent */}
                <div
                  className="absolute top-0 left-7 right-7 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}60, transparent)`,
                  }}
                />

                {/* Log entry header */}
                <div className="flex items-start justify-between mb-5 mt-4">
                  <div>
                    <p className="text-[10px] text-[#b8add2] tracking-widest uppercase mb-0.5 font-bold">
                      {phase.quarter}
                    </p>
                    <p
                      className="text-sm font-bold tracking-widest"
                      style={{ color: phase.color }}
                    >
                      {phase.phase}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center text-[10px] font-bold px-3 py-1 border tracking-widest ${sc.badge}`}
                    style={{ borderRadius: '9999px' }}
                  >
                    {sc.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#ffffff] mb-5 tracking-tight">
                  {phase.title}
                  {phase.status === 'active' && (
                    <span className="ml-2 text-[#ed4b9e] cursor-blink">▇</span>
                  )}
                </h3>

                {/* Items — terminal log list */}
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="text-[10px] mt-0.5 shrink-0 font-bold"
                        style={{ color: phase.color }}
                      >
                        {sc.prefix}
                      </span>
                      <span
                        className={`text-xs tracking-wide ${
                          phase.status === 'completed'
                            ? 'text-[#666171] line-through'
                            : phase.status === 'active'
                            ? 'text-[#b8add2]'
                            : 'text-[#666171]'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
