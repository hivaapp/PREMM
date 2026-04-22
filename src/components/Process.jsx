import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery & Planning",
    description: "Our journey begins with understanding your business, goals, and target audience. This helps us design a strategy that aligns with your objectives and ensures your website meets market demands.",
    bgColor: "bg-[#ECF2F6]",
    accentColor: "text-[#2D58A7]",
    numColor: "text-[#2D58A7]/10"
  },
  {
    id: "02",
    title: "Design & Development",
    description: "Our team of experienced web designers in Hyderabad creates a prototype that brings your vision to life. From there, we refine and develop the website using the latest tools and techniques.",
    bgColor: "bg-[#F4F0F9]",
    accentColor: "text-[#7B61FF]",
    numColor: "text-[#7B61FF]/10"
  },
  {
    id: "03",
    title: "Testing & Optimization",
    description: "Every website we create undergoes rigorous testing to ensure it's fast, secure, and user-friendly. As a top web designing company in Hyderabad, we also focus on optimizing the site for better search engine performance.",
    bgColor: "bg-[#2D58A7]",
    accentColor: "text-white",
    numColor: "text-white/10",
    isPrimary: true
  },
  {
    id: "04",
    title: "Launch & Maintenance",
    description: "Once your website is live, we provide ongoing support to keep it updated and secure. Whether it's adding new features or improving SEO, our team is always ready to help.",
    bgColor: "bg-[#ECF9F5]",
    accentColor: "text-[#00B894]",
    numColor: "text-[#00B894]/10"
  }
];

const Process = () => {
  return (
    <section className="py-24 border-t border-[var(--color-border)]">
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl md:text-7xl font-bold opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
          How We Work
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-[var(--color-text)] relative z-10">
          A Simple and Transparent Process
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${step.bgColor} rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[360px] group hover:scale-[1.02] transition-transform duration-300`}
          >
            <span className={`text-xl font-bold ${step.accentColor} mb-6 block`}>
              {step.id}
            </span>
            
            <h3 className={`text-2xl font-bold mb-6 leading-tight ${step.isPrimary ? 'text-white' : 'text-[var(--color-text)]'}`}>
              {step.title}
            </h3>
            
            <p className={`text-sm leading-relaxed ${step.isPrimary ? 'text-white/90' : 'text-[var(--color-text-mid)]'}`}>
              {step.description}
            </p>

            <span className={`absolute -bottom-8 -right-4 text-[120px] font-black ${step.numColor} select-none pointer-events-none group-hover:scale-110 transition-transform duration-500`}>
              {step.id}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
