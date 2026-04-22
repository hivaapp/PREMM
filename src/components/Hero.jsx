import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ShieldCheck, MessageCircle, ArrowDown } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-24 pb-16">
      <div className="max-w-[var(--max-width)] mx-auto w-full px-[var(--padding-mobile)] md:px-[var(--padding-desktop)] flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 w-full"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight mb-6 text-[var(--color-text)]">
            We Build Digital Products That{' '}
            <span className="inline-block min-w-[120px] font-extrabold text-[var(--color-brand)]">
              <TypeAnimation
                sequence={[
                  'Scale',
                  2000,
                  'Sell',
                  2000,
                  'Inspire',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-mid)] mb-10 max-w-2xl">
            Full-Stack Development · Mobile Apps · AI-Powered Solutions · E-Commerce
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-16 w-full sm:w-auto">
            <a 
              href="https://wa.me/916302024335" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary gap-2 w-full sm:w-auto px-8 h-12 text-base shadow-[var(--shadow-light)] hover:-translate-y-0.5 transition-transform"
            >
              <MessageCircle size={20} />
              WhatsApp Us &rarr;
            </a>
            <a 
              href="#projects" 
              className="btn btn-secondary gap-2 w-full sm:w-auto px-8 h-12 text-base hover:-translate-y-0.5 transition-transform"
            >
              View Our Work
              <ArrowDown size={20} />
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left border-t border-[var(--color-border)] pt-8 w-full">
            <div className="stat-group flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-[var(--color-text)] mb-1">6+</span>
              <span className="text-xs lg:text-sm font-medium text-[var(--color-text-mid)]">Projects Delivered</span>
            </div>
            <div className="stat-group flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-[var(--color-text)] mb-1">10k+</span>
              <span className="text-xs lg:text-sm font-medium text-[var(--color-text-mid)]">Users Reached</span>
            </div>
            <div className="stat-group flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-[var(--color-text)] mb-1">3</span>
              <span className="text-xs lg:text-sm font-medium text-[var(--color-text-mid)]">Countries Served</span>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          {/* Subtle background glow effect behind image */}
          <div className="absolute inset-0 bg-[var(--color-brand)] opacity-5 blur-3xl rounded-full scale-90"></div>
          <img 
            src={heroImg} 
            alt="Digital Products Concept" 
            className="w-full h-auto object-contain relative z-10 hover:-translate-y-2 transition-transform duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
