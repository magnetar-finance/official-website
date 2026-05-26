import { motion } from 'framer-motion'
import { MessageCircle, Send, BookOpen, Users, Megaphone } from 'lucide-react'

const XIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const GITHUB_URL = 'https://github.com/magnetar-finance'

const channels = [
  {
    icon: XIcon,
    label: 'Twitter / X',
    handle: '@mgn_finance',
    description: 'Follow for announcements, protocol updates, and community highlights.',
    stat: 'Follow us',
    color: '#1da1f2',
    href: 'https://x.com/mgn_finance',
  },
  {
    icon: MessageCircle,
    label: 'Discord',
    handle: 'Coming soon',
    description: 'Join our community of traders, LPs, and DeFi builders.',
    stat: 'Join',
    color: '#5865f2',
    href: '#',
  },
  {
    icon: Send,
    label: 'Telegram',
    handle: 'Coming soon',
    description: 'Real-time updates, alerts, and community discussions.',
    stat: 'Join',
    color: '#26a5e4',
    href: '#',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: 'github.com/magnetar-finance',
    description: 'Explore our open-source code, contribute, and audit our contracts.',
    stat: 'Open source',
    color: '#e2e8f0',
    href: GITHUB_URL,
  },
]

const resources = [
  { icon: BookOpen, label: 'Documentation', href: GITHUB_URL },
  { icon: Users, label: 'Ambassador Program', href: '#' },
  { icon: Megaphone, label: 'Grant Program', href: '#' },
]

export default function Community() {
  return (
    <section id="community" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-lg glass-card border border-indigo-500/20">
            Community
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Join the{' '}
            <span className="gradient-text">Magnetar Community</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            DeFi enthusiasts, traders, and builders — all working toward a better financial system.
          </p>
        </motion.div>

        {/* Social channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((ch, i) => {
            const Icon = ch.icon
            return (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href !== '#' ? '_blank' : undefined}
                rel={ch.href !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card border border-white/5 rounded-lg p-6 hover:border-slate-500/30 hover:bg-white/5 transition-all duration-300 group cursor-pointer block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center"
                       style={{ background: `${ch.color}20`, border: `1px solid ${ch.color}30` }}>
                    <Icon className="w-5 h-5" style={{ color: ch.color }} />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-400 transition-colors">
                    {ch.stat}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base mb-1">{ch.label}</h3>
                <p className="text-xs text-slate-600 mb-3 font-mono">{ch.handle}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{ch.description}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {resources.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href}
               target={href !== '#' ? '_blank' : undefined}
               rel={href !== '#' ? 'noopener noreferrer' : undefined}
               className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-400 hover:text-white px-6 py-3 rounded-lg glass-card border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-200">
              <Icon className="w-4 h-4 text-indigo-400" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
