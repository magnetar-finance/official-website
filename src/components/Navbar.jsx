import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const APP_URL = 'https://p01--magnetar-finance-dex--h4tf7hg4gml2.code.run/';
const GITHUB_URL = 'https://github.com/magnetar-finance';

const navLinks = [
  { label: 'products', href: '/#products' },
  { label: 'how_it_works', href: '/#how-it-works' },
  { label: 'roadmap', href: '/#roadmap' },
  { label: 'community', href: '/#community' },
  { label: 'developers', href: '/developers', isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/90 backdrop-blur-xl border-b border-[rgba(41,98,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Magnetar Finance"
            className="w-7 h-7 object-contain"
            style={{
              filter:
                'drop-shadow(0 0 6px rgba(41,98,255,0.5)) saturate(0) brightness(10)',
            }}
          />
          <span className="font-bold text-sm tracking-tight">
            <span className="text-[#475569]">&gt; </span>
            <span className="text-[#ffffff]">magnetar</span>
            <span className="text-[#2962ff]">_finance</span>
            <span className="text-[#2962ff] cursor-blink">▌</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-[#475569] hover:text-[#2962ff] transition-colors duration-200 tracking-wider uppercase"
              >
                ./{link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#475569] hover:text-[#2962ff] transition-colors duration-200 tracking-wider uppercase"
              >
                ./{link.label}
              </a>
            ),
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#334155] hover:text-[#475569] transition-colors duration-200 tracking-wider"
          >
            [github]
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000000] bg-[#2962ff] hover:bg-[#1d4fdb] px-4 py-2 tracking-widest uppercase transition-all duration-150"
            style={{
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(41,98,255,0.25)',
            }}
          >
            launch_app
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#475569] hover:text-[#2962ff] transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[rgba(41,98,255,0.08)] bg-[#000000]/98 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <p className="text-[10px] text-[#334155] tracking-widest uppercase border-b border-[rgba(41,98,255,0.08)] pb-3 mb-1">
                magnetar@defi:~$ ls -la ./nav
              </p>
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-xs text-[#475569] hover:text-[#2962ff] transition-colors py-1 tracking-wider"
                    onClick={() => setMenuOpen(false)}
                  >
                    {'>'} {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-[#475569] hover:text-[#2962ff] transition-colors py-1 tracking-wider"
                    onClick={() => setMenuOpen(false)}
                  >
                    {'>'} {link.label}
                  </a>
                ),
              )}
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#000000] bg-[#2962ff] text-center py-3 mt-1 inline-flex items-center justify-center gap-2 tracking-widest uppercase"
                style={{ borderRadius: '2px' }}
              >
                launch_app <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
