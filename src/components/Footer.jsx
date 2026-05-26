import { MessageCircle, Send } from 'lucide-react'

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
import logo from '../assets/logo.png'

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/'
const GITHUB_URL = 'https://github.com/magnetar-finance'

const footerLinks = {
  Products: [
    { label: 've(3,3) DEX', href: APP_URL },
    { label: 'LP Aggregator', href: APP_URL },
    { label: 'Cross-Chain Bridge', href: '#' },
    { label: 'Web Wallet', href: '#' },
    { label: 'Lending & Borrowing', href: '#' },
  ],
  Developers: [
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Documentation', href: GITHUB_URL },
    { label: 'Bug Bounty', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
}

const socials = [
  { icon: XIcon, label: 'X / Twitter', href: 'https://x.com/mgn_finance' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: GITHUB_URL },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-32 bg-[#050508]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
           style={{ background: 'linear-gradient(90deg, transparent, #4f46e5, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={logo}
                alt="Magnetar Finance Logo"
                className="w-9 h-9 object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.5))' }}
              />
              <span className="text-white font-semibold text-lg">
                Magnetar
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              A ve(3,3) DEX and LP aggregator for DeFi natives — delivering sustainable tokenomics and best-rate swaps across chains.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href}
                   target={href !== '#' ? '_blank' : undefined}
                   rel={href !== '#' ? 'noopener noreferrer' : undefined}
                   className="w-9 h-9 rounded-md flex items-center justify-center text-slate-500 hover:text-white border border-white/5 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href !== '#' ? '_blank' : undefined}
                      rel={href !== '#' ? 'noopener noreferrer' : undefined}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Magnetar Finance. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            DeFi involves risk. Please do your own research before investing.
          </p>
        </div>
      </div>
    </footer>
  )
}
