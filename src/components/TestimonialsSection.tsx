import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

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
          {siteConfig.testimonials.badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {siteConfig.testimonials.heading}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {siteConfig.testimonials.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {siteConfig.testimonials.reviews.map((t, i) => (
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
