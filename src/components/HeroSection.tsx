import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import RevealText from "@/components/RevealText";
import { Eyebrow } from "@/components/SectionHeading";

/* ---------- Hero Section ---------- */
const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
    {/* Background image with slow zoom */}
    <motion.div
      initial={{ scale: 1.12 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${siteConfig.hero.images.main})` }}
      aria-hidden="true"
    />
    {/* Navy overlay, heavier on the text side */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary/40" aria-hidden="true" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" aria-hidden="true" />

    {/* Gold accent block bottom-right (theme detail) */}
    <div className="hidden md:block absolute bottom-0 right-0 w-40 h-40 stripe-accent opacity-40" aria-hidden="true" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <Eyebrow tone="dark">{siteConfig.hero.badge}</Eyebrow>

        <RevealText
          as="h1"
          text={siteConfig.hero.headingMain}
          highlight={siteConfig.hero.headingHighlight}
          highlightClassName="text-gold"
          delay={0.15}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-7"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
        >
          {siteConfig.hero.description1}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <a
            href={siteConfig.hero.cta1.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-secondary-foreground font-extrabold text-base px-8 h-14 rounded-sm hover:bg-white transition-colors"
          >
            {siteConfig.hero.cta1.label}
            <ArrowRight size={18} />
          </a>

          <a
            href={siteConfig.hero.cta2.href}
            target="_blank"
            className="group inline-flex items-center gap-4 text-white font-bold"
          >
            <span className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center animate-ring-pulse group-hover:bg-gold group-hover:border-gold group-hover:text-primary transition-colors">
              <Phone size={20} />
            </span>
            <span className="group-hover:text-gold transition-colors">
              {siteConfig.hero.cta2.label}
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
