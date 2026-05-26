import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'active',
    quarter: 'Q1–Q2 2025',
    color: '#6366f1',
    items: [
      've(3,3) DEX launch',
      'LP Aggregator v1',
      'Gauge voting & emission bribes',
      'veMGTR governance tokens',
      'Multi-chain deployment',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    status: 'upcoming',
    quarter: 'Q3 2025',
    color: '#0ea5e9',
    items: [
      'Cross-chain bridge integration',
      'Lending protocol launch',
      'Mobile wallet app (beta)',
      'DAO governance activation',
      'Ecosystem grants program',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    status: 'upcoming',
    quarter: 'Q4 2025',
    color: '#14b8a6',
    items: [
      'Multi-chain Web Wallet',
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
]

const statusIcon = {
  completed: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  active: <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />,
  upcoming: <Circle className="w-4 h-4 text-slate-600" />,
}

const statusLabel = {
  completed: { text: 'Completed', class: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  active: { text: 'In Progress', class: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20' },
  upcoming: { text: 'Upcoming', class: 'text-slate-500 bg-slate-500/10 border-slate-500/20' },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-32 px-6">
      {/* Section glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[600px]"
             style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge text-amber-400 border-amber-500/30 mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-amber-400 inline-block" />
            Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-4">
            Building the{' '}
            <span className="gradient-text">Long Game</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A transparent, ambitious roadmap for making Magnetar the backbone of decentralized finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => {
            const sl = statusLabel[phase.status]
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative glass-card border rounded-lg p-7 overflow-hidden ${
                  phase.status === 'active'
                    ? 'border-indigo-500/30 shadow-lg shadow-indigo-500/5'
                    : 'border-white/5'
                }`}
              >
                {/* Top color line */}
                <div className="absolute top-0 left-0 right-0 h-px"
                     style={{ background: `linear-gradient(90deg, transparent, ${phase.color}60, transparent)` }} />

                <div className="relative z-10">
                  {/* Phase + status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">{phase.phase}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-sm border ${sl.class}`}>
                      {sl.text}
                    </span>
                  </div>

                  {/* Quarter */}
                  <p className="text-sm font-medium mb-1" style={{ color: phase.color }}>{phase.quarter}</p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-5">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        {statusIcon[phase.status]}
                        <span className={`text-sm ${
                          phase.status === 'completed' ? 'text-slate-400 line-through' :
                          phase.status === 'active' ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
