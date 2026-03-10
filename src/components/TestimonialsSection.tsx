import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "NextGen Advisors made our entry into the Nigerian market seamless. Their compliance expertise saved us months and gave us confidence to invest further.",
    name: "Michael Adebayo",
    title: "CEO, Transatlantic Ventures",
    avatar: "/images/testimonial-avatar.png",
  },
  {
    quote:
      "From business registration to tax advisory, the team was professional and extremely knowledgeable. They truly understand cross-border business.",
    name: "Oluwaseun Ojo",
    title: "Director, Diaspora Capital Group",
    avatar: "/images/team-member-2.png",
  },
  {
    quote:
      "We needed a structured financial model and bank-ready documentation. NextGen delivered beyond expectations and helped us secure our first institutional loan.",
    name: "Amina Bello",
    title: "Founder, GreenLeaf Agritech",
    avatar: "/images/team-member-3.png",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Our Customers Have to Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trusted by diaspora investors, entrepreneurs, and foreign corporations building businesses in Nigeria.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-shadow relative"
          >
            <Quote className="text-primary/20 absolute top-6 right-6" size={36} />
            <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
