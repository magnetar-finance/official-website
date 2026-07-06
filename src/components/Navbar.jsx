import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const APP_URL = 'https://app.magnetarfi.xyz';
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
          ? 'backdrop-blur-2xl border-b border-[rgba(255,255,255,0.06)] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(8,6,11,0.85)' } : {}}
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
                'drop-shadow(0 0 8px rgba(31,199,212,0.6)) saturate(0) brightness(10)',
            }}
          />
          <span className="font-bold text-sm tracking-tight">
            <span className="text-[#b8add2]">&gt; </span>
            <span className="text-[#ffffff]">magnetar</span>
            <span className="text-[#1fc7d4]">_finance</span>
            <span className="text-[#ed4b9e] cursor-blink">▌</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-[#b8add2] hover:text-[#1fc7d4] transition-colors duration-200 tracking-wider uppercase font-medium"
              >
                ./{link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-[#b8add2] hover:text-[#1fc7d4] transition-colors duration-200 tracking-wider uppercase font-medium"
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
            className="text-xs text-[#b8add2] hover:text-[#1fc7d4] transition-colors duration-200 tracking-wider font-medium"
          >
            [github]
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-5 py-2.5 tracking-widest uppercase transition-all duration-200 hover:scale-105 hover:shadow-[0_6px_20px_rgba(118,69,217,0.4)]"
            style={{
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #1fc7d4 0%, #7645d9 100%)',
              boxShadow: '0 4px 15px rgba(31,199,212,0.3)',
            }}
          >
            launch_app
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#b8add2] hover:text-[#1fc7d4] transition-colors p-1"
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
            className="md:hidden border-t border-[rgba(255,255,255,0.06)] backdrop-blur-2xl"
            style={{ background: 'rgba(8,6,11,0.95)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <p className="text-[10px] text-[#b8add2] tracking-widest uppercase border-b border-[rgba(255,255,255,0.06)] pb-3 mb-1 font-bold">
                magnetar@defi:~$ ls -la ./nav
              </p>
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-xs text-[#b8add2] hover:text-[#1fc7d4] transition-colors py-1.5 tracking-wider font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {'>'} {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-[#b8add2] hover:text-[#1fc7d4] transition-colors py-1.5 tracking-wider font-medium"
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
                className="text-xs font-bold text-white text-center py-3.5 mt-1 inline-flex items-center justify-center gap-2 tracking-widest uppercase hover:scale-105 transition-transform duration-200"
                style={{
                  borderRadius: '9999px',
                  background:
                    'linear-gradient(135deg, #1fc7d4 0%, #7645d9 100%)',
                  boxShadow: '0 4px 15px rgba(31,199,212,0.3)',
                }}
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
