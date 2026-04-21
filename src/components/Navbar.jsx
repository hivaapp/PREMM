import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-[var(--color-border)] h-[var(--topbar-height)] md:h-[64px] flex items-center">
      <div className="max-w-[var(--max-width)] mx-auto w-full px-[var(--padding-mobile)] md:px-[var(--padding-desktop)] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-[var(--color-text)]">
            PREMM TECH
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">Services</a>
          <a href="#projects" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">Projects</a>
          <a 
            href="https://wa.me/916302024335" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Let's Talk &rarr;
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[var(--color-text)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-sm md:hidden flex flex-col p-4 gap-4"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-2 text-[var(--color-text)] font-medium">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="px-4 py-2 text-[var(--color-text)] font-medium">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="px-4 py-2 text-[var(--color-text)] font-medium">Projects</a>
          <a 
            href="https://wa.me/916302024335" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary w-full mt-2"
          >
            Let's Talk &rarr;
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
