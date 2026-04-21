const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <div className="max-w-[var(--max-width)] mx-auto px-[var(--padding-mobile)] md:px-[var(--padding-desktop)] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-lg tracking-tight text-[var(--color-text)]">
            PREMM TECH
          </span>
          <span className="text-sm text-[var(--color-text-mid)]">
            Building tomorrow's products, today.
          </span>
        </div>

        <div className="flex gap-4">
          <a href="#about" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">Services</a>
          <a href="#projects" className="text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors">Projects</a>
        </div>

        <div className="text-sm text-[var(--color-text-light)]">
          <p>&copy; {new Date().getFullYear()} PREMM TECH Solutions.</p>
          <p>Registered in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
