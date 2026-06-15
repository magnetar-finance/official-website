import { motion } from 'framer-motion';

const chains = [
  { name: 'Arc', abbr: 'chain_id:5042002', color: '#4f46e5' },
  { name: 'LitVM', abbr: 'chain_id:4441', color: '#2962ff' },
];

const integrations = [
  { name: 'Chainlink', category: 'price_feeds' },
  { name: 'LayerZero', category: 'cross_chain' },
  { name: 'Pyth Network', category: 'oracles' },
  { name: 'The Graph', category: 'indexing' },
  { name: 'CertiK', category: 'audited' },
  { name: 'OpenZeppelin', category: 'security' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-[10px] text-[#334155] tracking-widest uppercase mb-4">
            magnetar@defi:~$ cat /etc/networks.conf
          </p>
          <span className="section-badge text-[#4f46e5] border-[rgba(41,98,255,0.2)] mb-5 inline-flex">
            // infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffffff] mb-4 mt-5 tracking-tight">
            Built on Arc & LitVM
          </h2>
          <p className="text-[#475569] text-sm max-w-md leading-relaxed">
            # Currently deployed on Arc and LitVM.
            <br /># Built on battle-tested infrastructure.
          </p>
        </motion.div>

        {/* Chain identifiers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {chains.map((chain, i) => (
            <motion.div
              key={chain.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-3 px-4 py-2.5 term-card group"
              style={{ borderRadius: '2px' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse-glow"
                style={{
                  background: chain.color,
                  boxShadow: `0 0 8px ${chain.color}80`,
                }}
              />
              <span className="text-xs font-bold text-[#ffffff] tracking-wide">
                {chain.name}
              </span>
              <span className="text-[10px] text-[#334155] tracking-wider">
                {chain.abbr}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="section-divider mb-12" />

        {/* Integration stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="term-card p-4 text-center group"
              style={{ borderRadius: '2px' }}
            >
              <p className="text-xs font-bold text-[#94a3b8] group-hover:text-[#ffffff] transition-colors mb-1 leading-tight tracking-wide">
                {item.name}
              </p>
              <p className="text-[10px] text-[#334155] tracking-wider">
                # {item.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
