import { MessageCircle, Send } from 'lucide-react';
import logo from '../assets/logo.png';

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

const APP_URL = 'https://app.magnetarfi.xyz';
const GITHUB_URL = 'https://github.com/magnetar-finance';

const footerLinks = {
  products: [
    { label: 've(3,3)_dex', href: APP_URL },
    { label: 'lp_aggregator', href: APP_URL },
    { label: 'cross_chain_bridge', href: '#' },
    { label: 'web_wallet', href: '#' },
    { label: 'lending_v1', href: '#' },
  ],
  developers: [
    { label: 'github', href: GITHUB_URL },
    { label: 'documentation', href: GITHUB_URL },
    { label: 'bug_bounty', href: '#' },
  ],
  company: [
    { label: 'about', href: '#' },
    { label: 'blog', href: '#' },
    { label: 'careers', href: '#' },
    { label: 'contact', href: '#' },
  ],
  legal: [
    { label: 'terms_of_service', href: '#' },
    { label: 'privacy_policy', href: '#' },
    { label: 'disclaimer', href: '#' },
  ],
};

const socials = [
  { icon: XIcon, label: 'X / Twitter', href: 'https://x.com/mgn_finance' },
  { icon: MessageCircle, label: 'Discord', href: '#' },
  { icon: Send, label: 'Telegram', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: GITHUB_URL },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(41,98,255,0.08)] bg-[#000000]">
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-60"
        style={{
          background:
            'linear-gradient(90deg, transparent, #2962ff, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 pb-12 border-b border-[rgba(41,98,255,0.06)]">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={logo}
                alt="Magnetar Finance"
                className="w-6 h-6 object-contain"
                style={{
                  filter:
                    'drop-shadow(0 0 5px rgba(41,98,255,0.5)) saturate(0) brightness(10)',
                }}
              />
              <span className="font-bold text-sm tracking-tight">
                <span className="text-[#475569]">&gt; </span>
                <span className="text-[#ffffff]">magnetar</span>
                <span className="text-[#2962ff]">_finance</span>
              </span>
            </div>
            <p className="text-[#475569] text-xs leading-relaxed mb-2 max-w-xs">
              # A ve(3,3) DEX and LP aggregator for DeFi natives.
            </p>
            <p className="text-[#334155] text-[10px] leading-relaxed mb-5 max-w-xs tracking-wide">
              # Sustainable tokenomics and best-rate swaps.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-7 h-7 flex items-center justify-center text-[#334155] hover:text-[#2962ff] border border-[rgba(41,98,255,0.06)] hover:border-[rgba(41,98,255,0.25)] hover:bg-[rgba(41,98,255,0.04)] transition-all duration-200"
                  style={{ borderRadius: '2px' }}
                  aria-label={label}
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Links — man page style */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] font-bold text-[#2962ff] tracking-widest uppercase mb-4">
                [{category}]
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href !== '#' ? '_blank' : undefined}
                      rel={href !== '#' ? 'noopener noreferrer' : undefined}
                      className={`text-[11px] transition-colors duration-200 tracking-wide ${
                        href === '#'
                          ? 'text-[#1e293b] cursor-default'
                          : 'text-[#475569] hover:text-[#2962ff]'
                      }`}
                    >
                      {href === '#' ? `# ${label}` : `> ${label}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom status bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[#334155] text-[10px] tracking-wider">
            # © 2025 Magnetar Finance — All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#2962ff] animate-pulse-glow" />
            <p className="text-[#334155] text-[10px] tracking-wider">
              # DeFi involves risk. Please do your own research before
              investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
