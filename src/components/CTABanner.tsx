import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const CTABanner = () => (
  <section className="py-16 gradient-cta relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5 blur-2xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {siteConfig.ctaBanner.heading}
        </h2>
        <p className="text-lg text-white/80 mb-8">
          {siteConfig.ctaBanner.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary font-semibold text-base px-8 py-6 hover:bg-white/90 shadow-elevated"
            asChild
          >
            <a href={siteConfig.ctaBanner.primaryButtonLink}>
              {siteConfig.ctaBanner.primaryButtonText} <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 text-white font-semibold text-base px-8 py-6 hover:bg-white/10"
            asChild
          >
            <a href={siteConfig.ctaBanner.secondaryButtonLink}>{siteConfig.ctaBanner.secondaryButtonText}</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
