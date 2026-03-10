import { motion } from "framer-motion";
import {
  Building2,
  FileCheck,
  Calculator,
  Landmark,
  Building,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Setup & Market Entry",
    items: ["Company registration and branch setup", "Market research and feasibility support", "Regulatory guidance"],
  },
  {
    icon: FileCheck,
    title: "Tax & Compliance Advisory",
    items: ["Tax registration and advisory", "Compliance with Nigerian regulations", "Ongoing monitoring support"],
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Structuring",
    items: ["Accounting system setup", "Cash flow management", "Internal controls for sustainable operations"],
  },
  {
    icon: Landmark,
    title: "Loan & Investment Facilitation",
    items: ["Business proposals and funding documents", "Cash flow projections and feasibility studies", "Bank-ready financial documentation", "Advisory for institutional financing"],
  },
  {
    icon: Building,
    title: "Banking & Institutional Liaison",
    items: ["Corporate banking setup support", "Liaison with regulatory institutions"],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Advisory & Retainer Services",
    items: ["Monthly compliance oversight", "Financial health review", "Strategic advisory support", "Governance strengthening"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 gradient-brand-subtle">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
          What We Do
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive advisory solutions designed to help you establish, grow, and sustain your business in Nigeria.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-7 border border-border shadow-card hover:shadow-elevated transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3 font-body">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
