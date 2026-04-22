import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, BrainCircuit, Users, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: <ShoppingCart size={24} />,
    title: "E-Commerce Platforms",
    description: "Custom storefronts that connect sellers directly to buyers, no middlemen."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Apps (iOS & Android)",
    description: "Cross-platform apps powered by React Native / Flutter."
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "AI-Powered Web Apps",
    description: "Manifestation tools, smart content systems, AI integrations."
  },
  {
    icon: <Users size={24} />,
    title: "Creator Economy Tools",
    description: "Apps for influencers, content lockers, matchmaking platforms."
  },
  {
    icon: <Paintbrush size={24} />,
    title: "UI/UX Design",
    description: "Beautiful interfaces that convert visitors into customers."
  }
];

import servicesImg from '../assets/services.png';

const Services = () => {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-border)]">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">What We Craft</h2>
          <p className="text-[var(--color-text-mid)] text-lg max-w-xl mx-auto lg:mx-0">
            We build end-to-end digital solutions designed to scale and succeed. From AI-powered platforms to robust e-commerce architectures.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm">
             <div className="absolute inset-0 bg-[var(--color-brand)] opacity-5 blur-3xl rounded-full scale-110"></div>
             <img 
               src={servicesImg} 
               alt="Services Illustration" 
               className="w-full h-auto object-contain relative z-10 hover:-translate-y-2 transition-transform duration-500" 
             />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card flex flex-col items-start hover:border-[var(--color-brand)] transition-colors group"
          >
            <div className="mb-4 p-3 rounded-lg bg-[var(--color-surface-alt)] text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{service.title}</h3>
            <p className="text-[var(--color-text-mid)]">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
