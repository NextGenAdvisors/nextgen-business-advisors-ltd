import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Tag = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface RevealTextProps {
  text: string;
  /** Words appended after `text`, wrapped in a span styled by `highlightClassName`. */
  highlight?: string;
  highlightClassName?: string;
  as?: Tag;
  className?: string;
  /** Seconds before the first word starts moving. */
  delay?: number;
}

const word: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { delay: i, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/**
 * Heading that reveals word-by-word, sliding each word up from behind a mask
 * when it scrolls into view. Every word stays a real text node separated by
 * spaces, so the heading text, its accessible name and its SEO value are the
 * same as a plain heading.
 */
const RevealText = ({
  text,
  highlight,
  highlightClassName,
  as = "h2",
  className,
  delay = 0,
}: RevealTextProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className}>
        {text}
        {highlight && (
          <>
            {" "}
            <span className={highlightClassName}>{highlight}</span>
          </>
        )}
      </Plain>
    );
  }

  const MotionTag = motion[as];
  const baseWords = text.split(" ").filter(Boolean);
  const highlightWords = highlight ? highlight.split(" ").filter(Boolean) : [];

  const renderWord = (w: string, i: number) => (
    <span key={`${w}-${i}`}>
      <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
        <motion.span className="inline-block will-change-transform" variants={word} custom={delay + i * 0.06}>
          {w}
        </motion.span>
      </span>{" "}
    </span>
  );

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    >
      {baseWords.map((w, i) => renderWord(w, i))}
      {highlightWords.length > 0 && (
        <span className={highlightClassName}>
          {highlightWords.map((w, i) => renderWord(w, baseWords.length + i))}
        </span>
      )}
    </MotionTag>
  );
};

export default RevealText;
