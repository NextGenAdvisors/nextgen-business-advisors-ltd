import { motion } from "framer-motion";
import {
  Building2,
  FileCheck,
  Calculator,
  Landmark,
  Building,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Setup & Market Entry",
    items: [
      "Company registration and branch setup",
      "Market research and feasibility support",
      "Regulatory guidance",
    ],
  },
  {
    icon: FileCheck,
    title: "Tax & Compliance Advisory",
    items: [
      "Tax registration and advisory",
      "Compliance with Nigerian regulations",
      "Ongoing monitoring support",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting & Financial Structuring",
    items: [
      "Accounting system setup",
      "Cash flow management",
      "Internal controls for sustainable operations",
    ],
  },
  {
    icon: Landmark,
    title: "Loan & Investment Facilitation",
    items: [
      "Business proposals and funding documents",
      "Cash flow projections and feasibility studies",
      "Bank-ready financial documentation",
      "Advisory for institutional financing",
    ],
  },
  {
    icon: Building,
    title: "Banking & Institutional Liaison",
    items: [
      "Corporate banking setup support",
      "Liaison with regulatory institutions",
    ],
  },
  {
    icon: RefreshCw,
    title: "Ongoing Advisory & Retainer Services",
    items: [
      "Monthly compliance oversight",
      "Financial health review",
      "Strategic advisory support",
      "Governance strengthening",
    ],
  },
];

const ServicesSection = () => (
  <>
    {/* Dark Feature Band */}
    <section className="gradient-dark-band relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/business-team.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/images/business-team.png"
                alt="Our qualified team"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
              Why Our Clients Trust Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We Are Qualified In Every Department
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              From regulatory compliance and financial governance to cross-border
              advisory, our multidisciplinary team brings institutional-grade
              expertise to every engagement.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Chartered Accountants (ICAN)",
                "Tax & Regulatory Specialists",
                "Banking & Investment Experts",
                "Cross-Border Advisory",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Service Cards */}
    <section id="services" className="py-20 md:py-28 bg-muted/50">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive advisory solutions designed to help you establish,
            grow, and sustain your business in Nigeria.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all group hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-primary group-hover:h-1.5 transition-all" />
              <div className="p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <s.icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={22}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 font-body">
                  {s.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:gap-3 gap-1 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ServicesSection;
