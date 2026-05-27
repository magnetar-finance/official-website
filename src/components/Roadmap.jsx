import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'active',
    quarter: 'Q1–Q2 2025',
    color: '#2962ff',
    items: [
      've(3,3) DEX launch',
      'LP Aggregator v1',
      'Gauge voting & emission bribes',
      'veMGTR governance tokens',
      'Mainnet deployment',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    status: 'upcoming',
    quarter: 'Q3 2025',
    color: '#06b6d4',
    items: [
      'Intents swapping architecture',
      've-NFT lock rentals market',
      'Lending protocol launch',
      'DAO governance activation',
      'Ecosystem incentive program',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    status: 'upcoming',
    quarter: 'Q4 2025',
    color: '#10b981',
    items: [
      'Magnetar Web Wallet',
      'Payments infrastructure',
      'Institutional API access',
      'Perps & perpetual futures',
      'Advanced analytics suite',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Dominance',
    status: 'upcoming',
    quarter: '2026',
    color: '#8b5cf6',
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
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />,
    badge: 'text-emerald-400 border-emerald-500/30',
    label: 'Completed',
  },
  active: {
    icon: <Clock className="w-3.5 h-3.5 text-blue-500" />,
    badge: 'text-blue-500 border-blue-600/30',
    label: 'In Progress',
  },
  upcoming: {
    icon: <Circle className="w-3.5 h-3.5 text-slate-700" />,
    badge: 'text-slate-600 border-slate-700/50',
    label: 'Upcoming',
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
          <span className="section-badge text-amber-600 border-amber-700/40 mb-6 inline-flex">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4 tracking-tight">
            Building the <span className="gradient-text">Long Game</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg leading-relaxed">
            A transparent, phased roadmap toward making Magnetar the backbone of
            decentralized finance.
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
                className={`relative p-8 border-l border-white/5 first:border-l-0 ${
                  phase.status === 'active' ? 'bg-blue-600/[0.03]' : ''
                }`}
              >
                {/* Top color accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}60, transparent)`,
                  }}
                />

                {/* Phase label + status */}
                <div className="flex items-start justify-between mb-6 mt-4">
                  <div>
                    <p className="mono text-xs text-slate-600 tracking-widest uppercase mb-1">
                      {phase.phase}
                    </p>
                    <p
                      className="mono text-xs font-medium"
                      style={{ color: phase.color }}
                    >
                      {phase.quarter}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 border mono ${sc.badge}`}
                    style={{ borderRadius: '3px' }}
                  >
                    {sc.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                  {phase.title}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      {sc.icon}
                      <span
                        className={`text-sm ${
                          phase.status === 'completed'
                            ? 'text-slate-500 line-through'
                            : phase.status === 'active'
                            ? 'text-slate-300'
                            : 'text-slate-600'
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
