import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const scrolled = Math.round((scrollTop / docHeight) * 100);
        setScrollPercent(Math.min(100, Math.max(0, scrolled)));
      } else {
        setScrollPercent(0);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = window.scrollY > 200 || scrollPercent > 0;

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-elevated flex items-center justify-center hover:scale-105 transition-transform bg-white"
          aria-label="Back to top"
        >
          {/* SVG Circular Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              className="text-gray-100 fill-transparent"
              strokeWidth="3.5"
            />
            {/* Progress circle */}
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              className="text-primary"
              strokeWidth="3.5"
              fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ ease: "easeOut", duration: 0.15 }}
              strokeLinecap="round"
            />
          </svg>

          {/* Content inside the circle */}
          <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">
            <AnimatePresence mode="wait">
              {scrollPercent === 100 ? (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowUp size={22} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.span
                  key="percent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="text-[13px] tracking-tight"
                >
                  {scrollPercent}%
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
