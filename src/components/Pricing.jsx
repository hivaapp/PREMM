import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹5,000",
    features: [
      "WhatsApp Chat Integration",
      "Contact Us Form",
      "Free Hosting",
      "Google Map Integration",
      "Social Media Integration",
      "Free Domain"
    ],
    buttonText: "Inquire Now",
    isPopular: false
  },
  {
    name: "Professional",
    price: "₹10,000",
    features: [
      "Everything in Starter plan",
      "Call Us Button",
      "Custom Free Domain",
      "Priority Support",
      "Premium Design",
      "SEO Optimization"
    ],
    buttonText: "Get Started",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Ask for Quote based on functionality",
      "Complex Web Applications",
      "E-commerce Solutions",
      "Custom API Integrations",
      "Dedicated Project Manager",
      "Lifetime Maintenance"
    ],
    buttonText: "Contact Us",
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 border-t border-[var(--color-border)]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Our Pricing Plans</h2>
        <p className="text-[var(--color-text-mid)] max-w-2xl mx-auto">
          Transparent pricing tailored to your business needs. No hidden costs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`card flex flex-col h-full ${plan.isPopular ? 'border-[var(--color-brand)] border-2' : ''}`}
          >
            {plan.isPopular && (
              <span className="bg-[var(--color-brand)] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full self-start mb-4">
                Most Popular
              </span>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[var(--color-text)]">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm text-[var(--color-text-mid)]">/one-time</span>}
              </div>
            </div>

            <ul className="flex-grow space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[var(--color-text-mid)]">
                  <Check size={16} className="text-[var(--color-brand)] mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/916302024335"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn w-full gap-2 ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
            >
              <MessageCircle size={18} />
              {plan.buttonText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
