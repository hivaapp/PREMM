import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Repeat } from 'lucide-react';

const reasons = [
  {
    icon: <Zap size={24} />,
    title: "Fast Delivery",
    description: "We ship MVPs fast. LIKM hit 10,000 users within 4 days of launch."
  },
  {
    icon: <Repeat size={24} />,
    title: "End-to-End Ownership",
    description: "From design to deployment, we own the entire product lifecycle."
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 border-t border-[var(--color-border)]">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Why Clients Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col gap-3"
          >
            <div className="p-3 rounded-lg bg-[var(--color-surface-alt)] inline-flex self-start text-[var(--color-text)]">
              {reason.icon}
            </div>
            <h3 className="text-xl font-bold text-[var(--color-text)]">{reason.title}</h3>
            <p className="text-[var(--color-text-mid)]">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
