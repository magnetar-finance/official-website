import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const phases = [
  {
    phase: 'PHASE_1',
    title: 'Foundation',
    status: 'completed',
    quarter: '2026-Q1/Q2',
    color: '#2962ff',
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
    color: '#4f46e5',
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
    color: '#3730a3',
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
    color: '#1e1b4b',
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
    icon: <CheckCircle2 className="w-3 h-3 text-[#2962ff]" />,
    badge:
      'text-[#2962ff] border-[rgba(41,98,255,0.3)] bg-[rgba(41,98,255,0.05)]',
    label: '[DONE]',
    prefix: '✓',
  },
  active: {
    icon: <Clock className="w-3 h-3 text-[#2962ff]" />,
    badge:
      'text-[#2962ff] border-[rgba(41,98,255,0.4)] bg-[rgba(41,98,255,0.08)]',
    label: '[ACTIVE]',
    prefix: '>',
  },
  upcoming: {
    icon: <Circle className="w-3 h-3 text-[#334155]" />,
    badge: 'text-[#334155] border-[rgba(41,98,255,0.06)]',
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
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-4">
            magnetar@defi:~$ cat ./roadmap.log
          </p>
          <span className="section-badge text-[#4f46e5] border-[rgba(41,98,255,0.2)] mb-5 inline-flex">
            // roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mt-5 mb-4 tracking-tight">
            Building the <span className="gradient-text">Long Game</span>
          </h2>
          <p className="text-[#475569] text-sm max-w-lg leading-relaxed">
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
                className={`relative p-7 border-l border-[rgba(41,98,255,0.06)] first:border-l-0 ${
                  phase.status === 'active' ? 'bg-[rgba(41,98,255,0.02)]' : ''
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
                    <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-0.5">
                      {phase.quarter}
                    </p>
                    <p
                      className="text-xs font-bold tracking-widest"
                      style={{ color: phase.color }}
                    >
                      {phase.phase}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center text-[10px] font-bold px-2 py-1 border tracking-widest ${sc.badge}`}
                    style={{ borderRadius: '2px' }}
                  >
                    {sc.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#ffffff] mb-5 tracking-tight">
                  {phase.title}
                  {phase.status === 'active' && (
                    <span className="ml-2 text-[#2962ff] cursor-blink">▋</span>
                  )}
                </h3>

                {/* Items — terminal log list */}
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="text-[10px] mt-0.5 shrink-0"
                        style={{ color: phase.color }}
                      >
                        {sc.prefix}
                      </span>
                      <span
                        className={`text-xs tracking-wide ${
                          phase.status === 'completed'
                            ? 'text-[#334155] line-through'
                            : phase.status === 'active'
                            ? 'text-[#94a3b8]'
                            : 'text-[#334155]'
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
