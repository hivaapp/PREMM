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

        <a 
          href="https://wa.me/916302024335" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary gap-2 px-8 h-12 text-base shadow-[var(--shadow-light)] hover:-translate-y-0.5 transition-transform"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp &rarr;
        </a>
        
        <p className="text-sm text-[var(--color-text-light)] mt-4 font-mono">
          +91 63020 24335
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
