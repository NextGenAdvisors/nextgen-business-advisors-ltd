import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import RevealText from "@/components/RevealText";

const CTABanner = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    {/* Background image + navy overlay */}
    <img
      src="/images/team-meeting.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-primary-deep/90" aria-hidden="true" />
    <div className="absolute -left-10 top-0 w-48 h-48 stripe-accent opacity-25" aria-hidden="true" />
    <div className="absolute -right-10 bottom-0 w-48 h-48 stripe-accent opacity-25" aria-hidden="true" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto">
        <RevealText
          as="h2"
          text={siteConfig.ctaBanner.heading}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold leading-tight mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/80 mb-10"
        >
          {siteConfig.ctaBanner.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={siteConfig.ctaBanner.primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 bg-gold text-secondary-foreground font-extrabold text-base px-8 h-14 rounded-sm hover:bg-white transition-colors"
          >
            {siteConfig.ctaBanner.primaryButtonText} <ArrowRight size={18} />
          </a>
          <a
            href={siteConfig.ctaBanner.secondaryButtonLink}
            className="inline-flex items-center justify-center border-2 border-white/40 text-white font-extrabold text-base px-8 h-14 rounded-sm hover:border-gold hover:text-gold transition-colors"
          >
            {siteConfig.ctaBanner.secondaryButtonText}
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTABanner;
