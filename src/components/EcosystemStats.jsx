import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Activity, Globe, DollarSign, Repeat } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: '$2.4B+', label: 'Total Value Locked', color: '#6366f1', change: '+12.4%' },
  { icon: Activity, value: '$18.2B+', label: 'All-Time Volume', color: '#0ea5e9', change: '+8.7%' },
  { icon: Users, value: '850K+', label: 'Unique Users', color: '#8b5cf6', change: '+24.1%' },
  { icon: Globe, value: '20+', label: 'Chains Supported', color: '#14b8a6', change: '+3 this yr' },
  { icon: Repeat, value: '42M+', label: 'Transactions', color: '#f59e0b', change: '+18.3%' },
  { icon: TrendingUp, value: '$480M+', label: 'Fees Distributed', color: '#64748b', change: '+9.2%' },
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative glass-card rounded-lg p-6 border border-white/5 group hover:border-white/10 transition-all duration-300 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{ background: `radial-gradient(circle at top left, ${stat.color}10, transparent 70%)` }} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center"
               style={{ background: `${stat.color}20` }}>
            <Icon className="w-5 h-5" style={{ color: stat.color }} />
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
            {stat.change}
          </span>
        </div>
        <p className="text-3xl font-bold text-white mb-1">
          {stat.value}
        </p>
        <p className="text-slate-500 text-sm">{stat.label}</p>
      </div>
    </motion.div>
  )
}

export default function EcosystemStats() {
  return (
    <section id="ecosystem" className="relative py-24 px-6">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-lg glass-card border border-cyan-500/20">
            Ecosystem Stats
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Powering{' '}
            <span className="gradient-text">Billions in DeFi</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real numbers from a live, growing protocol — not projections.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Protocol health bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 glass-card border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-white font-semibold">Protocol Status</span>
            <span className="text-emerald-400 text-sm font-medium">All Systems Operational</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <span>Uptime: <strong className="text-slate-300">99.98%</strong></span>
            <span>Avg block time: <strong className="text-slate-300">~2.1s</strong></span>
            <span>Active validators: <strong className="text-slate-300">128</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
