import { motion } from 'framer-motion';
import { BookOpen, Users, Megaphone, ExternalLink } from 'lucide-react';

const XIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const DiscordIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.179.101 18.3.103 18.418a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const GITHUB_URL = 'https://github.com/magnetar-finance';

const channels = [
  {
    icon: XIcon,
    label: 'Twitter / X',
    handle: '@mgn_finance',
    description:
      'Follow for announcements, protocol updates, and community highlights.',
    color: '#e2e8f0',
    href: 'https://x.com/mgn_finance',
    available: true,
  },
  {
    icon: DiscordIcon,
    label: 'Discord',
    handle: 'Coming soon',
    description: 'Community hub for traders, LPs, and DeFi builders.',
    color: '#5865f2',
    href: '#',
    available: false,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: 'magnetar-finance',
    description:
      'Explore open-source code, contribute, and audit our contracts.',
    color: '#94a3b8',
    href: GITHUB_URL,
    available: true,
  },
];

const resources = [
  { icon: BookOpen, label: 'Documentation', href: GITHUB_URL },
  { icon: Users, label: 'Ambassador Program', href: '#' },
];

export default function Community() {
  return (
    <section id="community" className="relative py-32 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-badge text-slate-500 border-slate-600/50 mb-6 inline-flex">
            Community
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4 tracking-tight">
            Join the <span className="gradient-text">Magnetar Community</span>
          </h2>
          <p className="text-slate-500 text-base max-w-lg leading-relaxed">
            DeFi traders, LPs, and builders — all working toward a better
            financial system.
          </p>
        </motion.div>

        {/* Social channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href !== '#' ? '_blank' : undefined}
                rel={ch.href !== '#' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group glass-card border border-white/5 rounded-lg p-6 hover:border-white/10 transition-all duration-300 block ${
                  !ch.available ? 'opacity-50 cursor-default' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center"
                    style={{
                      background: `${ch.color}12`,
                      border: `1px solid ${ch.color}22`,
                    }}
                  >
                    <Icon
                      className="w-4.5 h-4.5"
                      style={{ color: ch.available ? ch.color : '#475569' }}
                    />
                  </div>
                  {ch.available ? (
                    <ExternalLink className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-500 transition-colors" />
                  ) : (
                    <span
                      className="mono text-xs text-slate-700 border border-slate-700/50 px-2 py-0.5"
                      style={{ borderRadius: '3px' }}
                    >
                      Soon
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-white text-sm mb-0.5">
                  {ch.label}
                </h3>
                <p className="mono text-xs text-slate-600 mb-3">{ch.handle}</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {ch.description}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {resources.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href !== '#' ? '_blank' : undefined}
              rel={href !== '#' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-500 hover:text-white px-5 py-3 rounded-md glass-card border border-white/5 hover:border-blue-600/25 transition-all duration-200"
            >
              <Icon className="w-4 h-4 text-blue-600 shrink-0" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
