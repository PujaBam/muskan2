import React from 'react';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES_LINKS = [
  'Interior Design',
  'Architecture',
  'Kitchen Design',
  'Office Design',
  'Renovation',
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-alabaster/5">
      <div className="px-6 md:px-[8vw] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <a href="#home">
              <span className="font-heading text-2xl text-alabaster tracking-tight">Muskan</span>
              <span className="font-heading text-2xl text-clay tracking-tight ml-1">Interior</span>
            </a>
            <p className="mt-4 text-alabaster/30 text-sm leading-relaxed max-w-xs font-light">
              Transforming spaces into timeless masterpieces. Premium interior design, architecture, and renovation solutions across Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-alabaster/40 font-medium">
              Navigate
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-alabaster/50 text-sm hover:text-clay transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-alabaster/40 font-medium">
              Services
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {SERVICES_LINKS.map((s) => (
                <a
                  key={s}
                  href="#services"
                  className="text-alabaster/50 text-sm hover:text-clay transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-alabaster/40 font-medium">
              Contact
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+9779808414973" className="text-alabaster/50 text-sm hover:text-clay transition-colors duration-300">
                +977 980-8414973
              </a>
              <a href="mailto:info@muskaninterior.com" className="text-alabaster/50 text-sm hover:text-clay transition-colors duration-300">
                info@muskaninterior.com
              </a>
              <span className="text-alabaster/50 text-sm">
                Kamaladi Marg, Kathmandu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-alabaster/5 px-6 md:px-[8vw] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-alabaster/20 text-[11px] tracking-wider">
            © {new Date().getFullYear()} Muskan Interior Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-alabaster/20 text-[11px] tracking-wider hover:text-clay transition-colors">
              Privacy Policy
            </a>
            <a href="#home" className="text-alabaster/20 text-[11px] tracking-wider hover:text-clay transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}