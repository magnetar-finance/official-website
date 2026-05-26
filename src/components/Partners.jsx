import { motion } from 'framer-motion'

const partners = [
  { name: 'Chainlink', category: 'Oracle' },
  { name: 'Uniswap', category: 'DEX' },
  { name: 'Aave', category: 'Lending' },
  { name: 'Arbitrum', category: 'L2' },
  { name: 'Optimism', category: 'L2' },
  { name: 'Polygon', category: 'Chain' },
  { name: 'LayerZero', category: 'Bridge' },
  { name: 'Pyth', category: 'Oracle' },
  { name: 'Base', category: 'L2' },
  { name: 'CertiK', category: 'Security' },
  { name: 'Avalanche', category: 'Chain' },
  { name: 'BNB Chain', category: 'Chain' },
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-pink-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-lg glass-card border border-pink-500/20">
            Partners & Integrations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Built With the{' '}
            <span className="gradient-text">Best in Web3</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Trusted integrations across chains, protocols, and infrastructure providers.
          </p>
        </motion.div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card border border-white/5 rounded-lg p-5 flex flex-col items-center justify-center gap-2 hover:border-slate-500/30 hover:bg-white/5 transition-all duration-300 group cursor-pointer"
            >
              {/* Partner icon placeholder — circular with initial */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold text-white"
                   style={{
                     background: `hsl(${(i * 47) % 360}, 60%, 20%)`,
                     border: `1px solid hsl(${(i * 47) % 360}, 60%, 35%)`,
                   }}>
                {partner.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors text-center">
                {partner.name}
              </span>
              <span className="text-xs text-slate-600 group-hover:text-slate-500 transition-colors">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          + 40 more integrations and growing. <a href="#" className="text-violet-400 hover:text-violet-300 transition-colors">View all →</a>
        </motion.p>
      </div>
    </section>
  )
}
