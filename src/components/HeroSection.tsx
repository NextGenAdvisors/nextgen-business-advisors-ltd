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

/* ---------- Hero Section ---------- */
const HeroSection = () => (
  <section className="relative">
    {/* Main Hero */}
    <div className="relative gradient-hero min-h-[92vh] flex items-center overflow-hidden pt-20">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/10">
              {siteConfig.hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {siteConfig.hero.headingMain}{' '}
              <span className="text-primary-light block">
                {siteConfig.hero.headingHighlight}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-2xl">
              {siteConfig.hero.description1}
            </p>
            <p className="text-base text-primary-foreground/60 mb-8 max-w-2xl">
              {siteConfig.hero.description2}
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
                <a href={siteConfig.hero.cta2.href} target="_blank">
                  <Phone className="mr-1" size={18} />{' '}
                  {siteConfig.hero.cta2.label}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Images – overlapping composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src={siteConfig.hero.images.main}
                  alt="Modern corporate skyline"
                  className="w-full h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <img
                  src={siteConfig.hero.images.sub}
                  alt="Business consulting session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating accent badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-elevated text-center">
                <p className="text-2xl font-bold leading-none">
                  {siteConfig.hero.floatingBadge.number}
                </p>
                <p className="text-[10px] uppercase tracking-wider mt-0.5 opacity-80">
                  {siteConfig.hero.floatingBadge.label}
                </p>
              </div>
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
