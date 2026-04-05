import { motion } from "framer-motion";

/* ────────────── Shape Definitions ────────────── */

interface ShapeConfig {
  id: string;
  /** Position: top, left, etc.— Tailwind arbitrary values */
  className: string;
  svg: React.ReactNode;
  animation: {
    y?: number[];
    x?: number[];
    rotate?: number[];
    scale?: number[];
    opacity?: number[];
  };
  duration: number;
}

/* ── Shapes for DARK backgrounds ── */
const darkShapes: ShapeConfig[] = [
  {
    id: "circle-ring-tl",
    className: "absolute top-[8%] left-[6%]",
    svg: (
      <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="38" stroke="hsl(210,65%,55%)" strokeWidth="3" fill="none" opacity="0.25" />
        <circle cx="50" cy="50" r="22" stroke="hsl(210,65%,55%)" strokeWidth="1.5" fill="none" opacity="0.12" />
      </svg>
    ),
    animation: { y: [0, -16, 0], rotate: [0, 15, -10, 0] },
    duration: 7,
  },
  {
    id: "dot-cluster-tr",
    className: "absolute top-[15%] right-[8%]",
    svg: (
      <svg width="60" height="60" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        {[0, 20, 40, 60].map((x) =>
          [0, 20, 40, 60].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="2" fill="hsl(210,65%,55%)" opacity="0.18" />
          ))
        )}
      </svg>
    ),
    animation: { y: [0, 12, 0], x: [0, -8, 0], opacity: [0.6, 1, 0.6] },
    duration: 9,
  },
  {
    id: "squiggle-bl",
    className: "absolute bottom-[12%] left-[10%]",
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 18 Q 18 4, 32 18 T 60 18 T 88 18 T 116 18"
          fill="none"
          stroke="hsl(350,65%,52%)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
    animation: { x: [0, 14, 0], y: [0, -6, 0] },
    duration: 8,
  },
  {
    id: "diamond-br",
    className: "absolute bottom-[20%] right-[6%]",
    svg: (
      <svg width="44" height="44" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" rx="4" transform="rotate(45 25 25)" fill="none" stroke="hsl(210,65%,55%)" strokeWidth="2" opacity="0.2" />
      </svg>
    ),
    animation: { rotate: [0, 90, 180, 270, 360], scale: [1, 1.08, 1] },
    duration: 12,
  },
  {
    id: "plus-center",
    className: "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    svg: (
      <svg width="32" height="32" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="5" x2="20" y2="35" stroke="hsl(210,65%,55%)" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
        <line x1="5" y1="20" x2="35" y2="20" stroke="hsl(210,65%,55%)" strokeWidth="2" strokeLinecap="round" opacity="0.12" />
      </svg>
    ),
    animation: { rotate: [0, 45, 0], scale: [1, 1.15, 1] },
    duration: 10,
  },
];

/* ── Shapes for LIGHT backgrounds ── */
const lightShapes: ShapeConfig[] = [
  {
    id: "light-ring-tl",
    className: "absolute top-[10%] left-[5%]",
    svg: (
      <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="hsl(210,65%,45%)" strokeWidth="2" fill="none" opacity="0.08" />
      </svg>
    ),
    animation: { y: [0, -18, 0], x: [0, 8, 0] },
    duration: 6,
  },
  {
    id: "light-dots-tr",
    className: "absolute top-[18%] right-[7%]",
    svg: (
      <svg width="50" height="50" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        {[0, 20, 40].map((x) =>
          [0, 20, 40].map((y) => (
            <circle key={`${x}-${y}`} cx={x + 15} cy={y + 15} r="2.5" fill="hsl(210,65%,45%)" opacity="0.08" />
          ))
        )}
      </svg>
    ),
    animation: { y: [0, 10, 0], opacity: [0.5, 1, 0.5] },
    duration: 8,
  },
  {
    id: "light-squiggle-br",
    className: "absolute bottom-[15%] right-[10%]",
    svg: (
      <svg width="100" height="30" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 15 Q 16 4, 28 15 T 52 15 T 76 15 T 96 15"
          fill="none"
          stroke="hsl(350,65%,42%)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.08"
        />
      </svg>
    ),
    animation: { x: [0, -12, 0], y: [0, 6, 0] },
    duration: 9,
  },
  {
    id: "light-diamond-bl",
    className: "absolute bottom-[22%] left-[8%]",
    svg: (
      <svg width="36" height="36" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="26" height="26" rx="3" transform="rotate(45 25 25)" fill="none" stroke="hsl(210,65%,45%)" strokeWidth="1.5" opacity="0.07" />
      </svg>
    ),
    animation: { rotate: [0, 60, 0], scale: [1, 1.06, 1] },
    duration: 11,
  },
];

/* ────────────── Component ────────────── */

interface AnimatedSVGBackgroundProps {
  /** "dark" for dark-gradient sections, "light" for white/muted sections */
  variant?: "dark" | "light";
  className?: string;
}

export const AnimatedSVGBackground = ({
  variant = "light",
  className = "",
}: AnimatedSVGBackgroundProps) => {
  const shapes = variant === "dark" ? darkShapes : lightShapes;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={shape.className}
          animate={{
            ...shape.animation,
            transition: {
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {shape.svg}
        </motion.div>
      ))}
    </div>
  );
};

/* Keep backward-compatible export */
export const FloatingBackgroundShapes = AnimatedSVGBackground;
