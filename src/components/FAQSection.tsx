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
import SectionHeading from "@/components/SectionHeading";
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
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={badge}
          title={heading}
          description={description}
          className="mb-12 md:mb-16"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
          {groups.map(([category, groupItems]) => {
            const Icon = CATEGORY_ICONS[category] ?? HelpCircle;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-border border-t-4 border-t-gold shadow-card p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-sm bg-primary flex items-center justify-center text-gold shrink-0">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="divide-y divide-border/60">
                  {groupItems.map((item) => (
                    <details key={item.question} className="group py-1">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-3 [&::-webkit-details-marker]:hidden">
                        <h4 className="text-sm md:text-base font-bold text-foreground group-open:text-gold-deep group-hover:text-gold-deep transition-colors">
                          {item.question}
                        </h4>
                        <ChevronDown
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-gold-deep transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <p className="pb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </motion.div>
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
            <Button asChild variant="outline" className="rounded-sm border-primary text-primary font-bold h-11">
              <Link to="/#contact">
                Ask our team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="gold" className="rounded-sm h-11">
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
