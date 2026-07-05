import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Code2 } from 'lucide-react';

const APP_URL = 'https://app.magnetarfi.xyz';
const GITHUB_URL = 'https://github.com/magnetar-finance';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(41,98,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal boot block */}
          <div className="mb-16">
            <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-6">
              magnetar@defi:~$ ./deploy --env production --confirm
            </p>
            <span className="section-badge text-[#4f46e5] border-[rgba(41,98,255,0.2)] mb-8 inline-flex">
              // get_started
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffffff] leading-[0.92] tracking-tighter mt-6">
              The DeFi
              <br />
              <span className="gradient-text">Infrastructure</span>
              <br />
              You Deserve.
            </h2>
            <p className="text-[#475569] text-sm mt-8 max-w-xl leading-relaxed">
              # Permissionless swap routing, gauge-directed liquidity,
              <br />
              # and sustainable yield through ve(3,3) governance.
              <br /># No accounts. No KYC.
            </p>
          </div>

          {/* Stats row — key-value terminal style */}
          <div
            className="flex flex-wrap gap-8 mb-14 p-5 border border-[rgba(41,98,255,0.07)] bg-[rgba(41,98,255,0.02)]"
            style={{ borderRadius: '2px' }}
          >
            {[
              { key: 'DEPLOYMENT', value: 'Phase 1' },
              { key: 'CUSTODY', value: 'Non-custodial' },
              { key: 'SOURCE', value: 'Open Source' },
            ].map(({ key, value }) => (
              <div key={key}>
                <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-1">
                  {key}:
                </p>
                <p className="text-sm font-bold text-[#ffffff]">{value}</p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Zap className="w-4 h-4" />
              $ launch_app
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group"
            >
              <Code2 className="w-4 h-4 text-[#334155]" />$ view_source
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-[#334155] text-[10px] tracking-wider">
            # no-signup-required · fully-decentralized · defi-carries-risk —
            DYOR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
