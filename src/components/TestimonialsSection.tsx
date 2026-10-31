import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const reviews = siteConfig.testimonials.reviews;

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Navy panel — full width on mobile, right side on desktop */}
      <div className="absolute inset-0 lg:left-auto lg:w-[58%] bg-primary" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-40 h-40 stripe-accent opacity-30" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Heading (right on desktop) */}
          <div className="lg:order-last">
            <SectionHeading
              align="left"
              tone="dark"
              badge={siteConfig.testimonials.badge}
              title={siteConfig.testimonials.heading}
              description={siteConfig.testimonials.description}
            />
          </div>

          {/* Testimonial card carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="cursor-grab active:cursor-grabbing"
          >
            <Carousel opts={{ align: "start", loop: true }} setApi={setApi} className="w-full">
              <CarouselContent className="py-4">
                {reviews.map((t, i) => (
                  <CarouselItem key={`${t.name}-${i}`}>
                    <figure className="relative bg-white shadow-elevated p-8 sm:p-10 border-l-4 border-gold h-full">
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <figcaption className="flex items-center gap-4">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                            loading="lazy"
                          />
                          <div>
                            <p className="font-extrabold text-foreground">{t.name}</p>
                            <p className="text-xs text-muted-foreground">{t.title}</p>
                          </div>
                        </figcaption>
                        <Quote className="text-gold fill-gold shrink-0" size={40} aria-hidden="true" />
                      </div>
                      <blockquote className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        "{t.quote}"
                      </blockquote>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                className="w-11 h-11 rounded-sm bg-gold text-primary flex items-center justify-center hover:bg-white transition-colors shadow-card"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                className="w-11 h-11 rounded-sm bg-gold text-primary flex items-center justify-center hover:bg-white transition-colors shadow-card"
                aria-label="Next testimonial"
              >
                <ArrowRight size={18} />
              </button>
              <div className="flex gap-2 ml-3">
                {reviews.map((r, i) => (
                  <button
                    key={r.name}
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === i ? "w-8 bg-gold" : "w-3 bg-white/40 lg:bg-primary/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
