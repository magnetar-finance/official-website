import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Code2 } from 'lucide-react';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';
const GITHUB_URL = 'https://github.com/magnetar-finance';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(41,98,255,0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial headline block */}
          <div className="mb-16">
            <span className="section-badge text-blue-500 border-blue-600/30 mb-8 inline-flex">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tighter mt-6">
              The DeFi
              <br />
              <span className="gradient-text">Infrastructure</span>
              <br />
              You Deserve.
            </h2>
            <p className="text-slate-500 text-lg mt-8 max-w-xl leading-relaxed">
              Permissionless swap routing, gauge-directed liquidity, and
              sustainable yield through ve(3,3) governance. No accounts. No KYC.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-10 mb-16">
            {[
              { value: 'Phase 1', label: 'Live & Deployed' },
              { value: 'Non-custodial', label: 'Your keys, your funds' },
              { value: 'Open Source', label: 'Fully verifiable' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="text-sm text-slate-600 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Zap className="w-4 h-4" />
              Launch App
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              View Source
            </a>
          </div>

          {/* Bottom disclaimer */}
          <p className="mt-8 text-slate-700 text-xs mono tracking-wider">
            &gt; No sign-up required · Fully decentralized · DeFi carries risk —
            DYOR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
