import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-alabaster/80 backdrop-blur-xl border-b border-obsidian/5'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-[8vw] py-5">
          <a href="#home" className="relative z-50">
            <span className="font-heading text-xl md:text-2xl tracking-tight text-obsidian">
              Muskan
            </span>
            <span className="font-heading text-xl md:text-2xl tracking-tight text-clay ml-1">
              Interior
            </span>
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] lg:text-[13px] tracking-[0.15em] uppercase text-obsidian/60 hover:text-obsidian transition-colors duration-300 font-body font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a
              href="tel:+9779808414973"
              className="flex items-center gap-2 text-[13px] tracking-wider uppercase text-obsidian/60 hover:text-clay transition-colors"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-block px-4 lg:px-6 py-2.5 bg-obsidian text-alabaster text-[11px] lg:text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-clay transition-colors duration-500"
            >
              Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} className="text-alabaster" /> : <Menu size={22} className="text-obsidian" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="text-alabaster/80 hover:text-alabaster text-3xl font-heading tracking-wide transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+9779808414973"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4 px-8 py-3 border border-alabaster/30 text-alabaster text-[12px] tracking-[0.2em] uppercase hover:bg-alabaster hover:text-obsidian transition-all duration-500"
              >
                +977 980-8414973
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}