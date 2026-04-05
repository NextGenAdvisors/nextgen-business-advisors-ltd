import { motion } from "framer-motion";

const shapeVariants = {
  animate1: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
    }
  },
  animate2: {
    y: [0, 30, 0],
    x: [0, -15, 0],
    rotate: [0, -15, 15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
    }
  },
  animate3: {
    y: [0, -15, 0],
    x: [0, -20, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
    }
  }
};

export const FloatingBackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Decorative Blob 1 */}
      <motion.div
        variants={shapeVariants}
        animate="animate1"
        className="absolute top-[40%] left-[5%] opacity-15 md:opacity-24"
      >
             <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#b1253d" strokeWidth="8" fill="none" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Circle Shape */}
      {/* <motion.div
        variants={shapeVariants}
        animate="animate2"
        className="absolute top-[20%] right-[10%] opacity-20 md:opacity-40"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#b1253d" strokeWidth="8" fill="none" opacity="0.6" />
        </svg>
      </motion.div> */}

      {/* Triangle Pattern */}
      {/* <motion.div
        variants={shapeVariants}
        animate="animate3"
        className="absolute bottom-[10%] left-[45%] opacity-20 md:opacity-40 hidden sm:block"
      >
        <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" fill="#87bff5" opacity="0.4" />
        </svg>
      </motion.div> */}

    

      {/* Squiggle Line */}
      <motion.div
        variants={shapeVariants}
        animate="animate3"
        className="absolute top-[60%] right-[5%] opacity-20 md:opacity-40"
      >
        <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q 15 5, 30 20 T 60 20 T 90 20 T 120 20" fill="none" stroke="#3498DB" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
};
