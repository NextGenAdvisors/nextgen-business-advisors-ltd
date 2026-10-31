import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, ChevronDown } from "lucide-react";
import { calendlyUrl, siteConfig } from "@/config/site";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";

export type FAQItem = { question: string; answer: string };

interface FAQSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  items?: FAQItem[];
}

/**
 * FAQ as native <details>/<summary> dropdown toggles.
 *
 * Every answer is present in the HTML whether the toggle is open or closed,
 * so Google, Bing and AI crawlers (GPTBot, ClaudeBot, PerplexityBot) read the
 * full question-and-answer text without executing JavaScript. The matching
 * FAQPage JSON-LD in src/config/schema.ts is built from the same items.
 */
const FAQSection = ({
  badge = siteConfig.faq.badge,
  heading = siteConfig.faq.heading,
  description = siteConfig.faq.description,
  items = siteConfig.faq.items,
}: FAQSectionProps) => {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden radial-bg">
      <AnimatedSVGBackground variant="light" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, i) => (
            <details
              key={item.question}
              className="group bg-white rounded-xl border border-border/50 shadow-card open:border-primary/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {item.question}
                </h3>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div
                className="px-6 pb-6 text-base text-muted-foreground leading-relaxed"
                id={`faq-answer-${i}`}
              >
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-muted-foreground">
            Still have a question about your situation?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline">
              <Link to="/#contact">
                Ask our team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild>
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-4 w-4" /> Book a consultation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
