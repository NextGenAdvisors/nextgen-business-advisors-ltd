import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Building2,
  FileCheck,
  Globe,
  Handshake,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";
import { calendlyUrl, siteConfig } from "@/config/site";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";
import { Button } from "@/components/ui/button";

export type FAQItem = { category?: string; question: string; answer: string };

interface FAQSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  items?: FAQItem[];
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Company Registration": Building2,
  "Tax & Compliance": FileCheck,
  "Foreign & Diaspora Investors": Globe,
  "Working With NexGen": Handshake,
};

/** Group items by category, keeping first-seen order. */
const groupItems = (items: FAQItem[]) => {
  const groups = new Map<string, FAQItem[]>();
  for (const item of items) {
    const key = item.category ?? "General";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(item);
  }
  return [...groups.entries()];
};

/**
 * FAQ grouped by topic in a two-column grid. Each question is a native
 * <details>/<summary> dropdown toggle, so every answer stays in the HTML for
 * search engines and AI crawlers whether open or closed. The matching
 * FAQPage JSON-LD in src/config/schema.ts is built from the same items.
 */
const FAQSection = ({
  badge = siteConfig.faq.badge,
  heading = siteConfig.faq.heading,
  description = siteConfig.faq.description,
  items = siteConfig.faq.items,
}: FAQSectionProps) => {
  const groups = groupItems(items);

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

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
          {groups.map(([category, groupItems]) => {
            const Icon = CATEGORY_ICONS[category] ?? HelpCircle;
            return (
              <div
                key={category}
                className="bg-white rounded-2xl border border-border/50 shadow-card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-brand-subtle flex items-center justify-center text-primary shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="divide-y divide-border/60">
                  {groupItems.map((item) => (
                    <details key={item.question} className="group py-1">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-3 [&::-webkit-details-marker]:hidden">
                        <h4 className="text-sm md:text-base font-semibold text-foreground group-open:text-primary transition-colors">
                          {item.question}
                        </h4>
                        <ChevronDown
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <p className="pb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
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
