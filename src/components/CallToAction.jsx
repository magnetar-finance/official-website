import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react'

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/'
const GITHUB_URL = 'https://github.com/magnetar-finance'

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
             style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-card border border-white/5 rounded-lg p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Inner focus gradient */}
          <div className="absolute inset-0 rounded-lg pointer-events-none"
               style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #ffffff05, transparent)' }} />
          {/* Top border gradient */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px"
               style={{ background: 'linear-gradient(90deg, transparent, #6366f180, transparent)' }} />

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg mb-8 mx-auto"
               style={{ background: '#6366f115', border: '1px solid #6366f140' }}>
            <Zap className="w-10 h-10 text-indigo-400 fill-indigo-400/20" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Start Trading in{' '}
            <span className="gradient-text">DeFi Today</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Swap any token at the best rates, provide liquidity, and earn through the ve(3,3) governance flywheel.
            Fully non-custodial. Zero sign-up required.
          </p>

          {/* Feature list */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {[
              { icon: Shield, text: 'Non-custodial & secure' },
              { icon: Zap, text: 'Best rates, always' },
              { icon: TrendingUp, text: 'Earn via governance' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-indigo-400 shrink-0" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={APP_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="btn-primary text-sm w-full sm:w-auto justify-center">
              <span>Launch App</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={GITHUB_URL}
               target="_blank"
               rel="noopener noreferrer"
               className="btn-ghost text-sm w-full sm:w-auto justify-center">
              View on GitHub
            </a>
          </div>

          <p className="mt-6 text-slate-700 text-xs">
            No account needed · No KYC · Fully decentralized
          </p>
        </motion.div>
      </div>
    </section>
  )
}
