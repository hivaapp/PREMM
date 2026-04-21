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

const Services = () => {
  return (
    <section id="services" className="py-24 border-t border-[var(--color-border)]">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">What We Craft</h2>
        <p className="text-[var(--color-text-mid)] max-w-2xl">
          We build end-to-end digital solutions designed to scale and succeed.
        </p>
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
