import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  // Duplicate reviews to ensure enough items for looping
  const reviews = [...siteConfig.testimonials.reviews, ...siteConfig.testimonials.reviews];

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="gradient-dark-section relative overflow-hidden py-20 md:py-28 cursor-grab active:cursor-grabbing">
      <AnimatedSVGBackground variant="dark" />
      {/* Dot overlay */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
            {siteConfig.testimonials.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {siteConfig.testimonials.heading}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {siteConfig.testimonials.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto relative px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6 py-4">
              {reviews.map((t, i) => (
                <CarouselItem key={`${t.name}-${i}`} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="glass-card h-full rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 relative group flex flex-col"
                  >
                    {/* Quote icon with glow */}
                    <div className="absolute top-6 right-6">
                      <Quote className="text-primary/30 group-hover:text-primary/50 transition-colors animate-glow-pulse" size={36} />
                    </div>
                    <p className="text-white/75 leading-relaxed flex-grow mb-8 relative z-10 text-lg md:text-base">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-bold text-white text-sm">{t.name}</p>
                        <p className="text-xs text-white/50">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Nav Buttons visible on desktop */}
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/5 text-white border-white/10 hover:bg-white/20 hover:text-white -left-4 hover:border-white/30 backdrop-blur-md" />
              <CarouselNext className="bg-white/5 text-white border-white/10 hover:bg-white/20 hover:text-white -right-4 hover:border-white/30 backdrop-blur-md" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
