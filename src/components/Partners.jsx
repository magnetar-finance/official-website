import { motion } from 'framer-motion';

const chains = [
  { name: 'Arc', abbr: 'ARC', color: '#6366f1' },
  { name: 'LitVM', abbr: 'LIT', color: '#10b981' },
];

const integrations = [
  { name: 'Chainlink', category: 'Price Feeds' },
  { name: 'LayerZero', category: 'Cross-chain' },
  { name: 'Pyth Network', category: 'Oracles' },
  { name: 'The Graph', category: 'Indexing' },
  { name: 'CertiK', category: 'Audited' },
  { name: 'OpenZeppelin', category: 'Security' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 px-6 overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-badge text-slate-500 border-slate-600/50 mb-6 inline-flex">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-5 tracking-tight">
            Built on Arc & LitVM
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
            Currently deployed on Arc and LitVM. Built on battle-tested
            infrastructure.
          </p>
        </motion.div>

        {/* Chain logos — minimal text-based identifiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {chains.map((chain, i) => (
            <motion.div
              key={chain.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-md glass-card border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              {/* Colored dot as network indicator */}
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: chain.color,
                  boxShadow: `0 0 6px ${chain.color}80`,
                }}
              />
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {chain.name}
              </span>
              <span className="text-xs mono text-slate-600 group-hover:text-slate-500 transition-colors">
                {chain.abbr}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="section-divider mb-14" />

        {/* Integration stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card border border-white/5 rounded-md p-4 hover:border-indigo-500/20 transition-all duration-300 group text-center"
            >
              {/* Text logomark */}
              <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors mb-1 leading-tight">
                {item.name}
              </p>
              <p className="text-xs mono text-slate-600 group-hover:text-slate-500 transition-colors">
                {item.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
