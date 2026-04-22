import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12">
      <div className="max-w-[var(--max-width)] mx-auto px-[var(--padding-mobile)] md:px-[var(--padding-desktop)] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <img src={logo} alt="PREMM TECH" className="h-10 md:h-12 w-auto object-contain scale-[1.5] md:scale-[1.6] origin-center md:origin-left" />
          <span className="text-sm text-[var(--color-text-mid)] mt-6 md:mt-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
