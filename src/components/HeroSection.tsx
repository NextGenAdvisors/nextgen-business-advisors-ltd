import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";

/* ---------- Animated Counter ---------- */
interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
}

const Counter = ({ end, suffix = "", label, icon: Icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const id = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(id);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
        <Icon className="text-primary-light" size={22} />
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-bold text-white leading-none">
          {count}
          {suffix}
        </p>
        <p className="text-xs text-white/60 mt-0.5">{label}</p>
      </div>
    </div>
  );
};

import { FloatingBackgroundShapes } from "./FloatingShapes";

/* ---------- Hero Section ---------- */
const HeroSection = () => (
  <section className="relative">
    {/* Main Hero */}
    <div className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-40 pb-20 lg:pt-40 lg:pb-32">
      {/* Background Image & Tinted Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteConfig.hero.images.main})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/80 mix-blend-hard-light opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <FloatingBackgroundShapes />

      <div className="md:pt-40 container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
              {siteConfig.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {siteConfig.hero.headingMain}{' '}
              <span className="text-primary-light">
                {siteConfig.hero.headingHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-2xl leading-relaxed">
              {siteConfig.hero.description1}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground text-base px-8 py-6 font-semibold hover:bg-primary/90 shadow-elevated"
                asChild
              >
                <a href={siteConfig.hero.cta1.href} target="_blank">
                  {siteConfig.hero.cta1.label}{' '}
                  <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="text-base px-8 py-6"
                asChild
              >
              </Button>

                <a href={siteConfig.hero.cta2.href} target="_blank" className="flex items-center gap-2">  
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-white/20 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm">
                  {siteConfig.hero.cta2.label}{' '}
                  <ArrowRight size={18} />
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    {/* <div className="gradient-dark-band py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {siteConfig.hero.stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div> */}
  </section>
)

export default HeroSection;
