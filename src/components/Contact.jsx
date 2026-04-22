import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 border-t border-[var(--color-border)]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Have a project in mind? Let's build it together.
        </h2>
        <p className="text-[var(--color-text-mid)] max-w-2xl mb-8">
          We're just a WhatsApp message away. No long forms, no waiting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://wa.me/916302024335" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary gap-2 px-8 h-12 text-base shadow-[var(--shadow-light)] hover:-translate-y-0.5 transition-transform w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
          
          <a 
            href="https://wa.me/917013503737" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary gap-2 px-8 h-12 text-base shadow-[var(--shadow-light)] hover:-translate-y-0.5 transition-transform w-full sm:w-auto"
          >
            <MessageCircle size={20} />
            Alt. WhatsApp
          </a>
        </div>
        
        <p className="text-sm text-[var(--color-text-light)] mt-6 font-mono flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>+91 63020 24335</span>
          <span className="hidden sm:inline text-[var(--color-border)]">|</span>
          <span>+91 70135 03737</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
