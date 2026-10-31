import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RevealText from "@/components/RevealText";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  /** "dark" when the heading sits on a navy background. */
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}

/** Eyebrow label + scroll-revealed title + optional intro, in the theme's style. */
export const Eyebrow = ({ children, tone = "light", className }: { children: React.ReactNode; tone?: "light" | "dark"; className?: string }) => (
  <motion.span
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn(
      "inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] mb-4",
      tone === "dark" ? "text-gold" : "text-gold-deep",
      className
    )}
  >
    <span className="h-0.5 w-8 bg-gold" aria-hidden="true" />
    {children}
  </motion.span>
);

const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
  tone = "light",
  as = "h2",
  className,
}: SectionHeadingProps) => (
  <div className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "text-left", className)}>
    {badge && (
      <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
        {badge}
      </Eyebrow>
    )}
    <RevealText
      as={as}
      text={title}
      highlight={highlight}
      highlightClassName={tone === "dark" ? "text-gold" : "text-gold-deep"}
      className={cn(
        "text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight",
        tone === "dark" ? "text-white" : "text-foreground",
        description ? "mb-5" : ""
      )}
    />
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className={cn("leading-relaxed", tone === "dark" ? "text-white/70" : "text-muted-foreground")}
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionHeading;
