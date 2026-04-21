import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ShieldCheck, MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-16 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="badge badge-warning mb-8 px-3 py-1 gap-1">
          <span>🇮🇳</span>
          <span>Government Registered Company · PREMM TECH Solutions</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6 text-[var(--color-text)]">
          We Build Digital Products That{' '}
          <span className="inline-block min-w-[120px] font-extrabold">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <a 
            href="https://wa.me/916302024335" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary gap-2 w-full sm:w-auto"
          >
            <MessageCircle size={18} />
            WhatsApp Us &rarr;
          </a>
          <a 
            href="#projects" 
            className="btn btn-secondary gap-2 w-full sm:w-auto"
          >
            View Our Work
            <ArrowDown size={18} />
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border-t border-[var(--color-border)] pt-8 w-full max-w-4xl">
          <div className="stat-group">
            <span className="stat-number">6+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-group">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Users Reached</span>
          </div>
          <div className="stat-group">
            <span className="stat-number">3</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat-group flex items-center justify-center">
            <div className="flex items-center gap-1">
              <ShieldCheck size={24} className="text-[var(--color-text)]" />
            </div>
            <span className="stat-label">Registered Company</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
