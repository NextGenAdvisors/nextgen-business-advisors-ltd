import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
};

/* ── Core-value icon map ── */
const valueIcons: Record<string, string> = {
  Integrity: "🛡️",
  Excellence: "⭐",
  Innovation: "💡",
  "Client-Centricity": "🤝",
  Collaboration: "🔗",
  Sustainability: "🌱",
};

/* ---------- Component ---------- */
const AboutSection = () => (
  <>
    {/* ════════ Why Choose Us — light section with subtle SVG shapes ════════ */}
    <section id="about" className="py-20 md:py-28 relative overflow-hidden radial-bg">
      <AnimatedSVGBackground variant="light" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Column */}
            <motion.div variants={fadeUp} custom={0} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={siteConfig.about.whyChooseUs.images.main}
                    alt="Professional team meeting"
                    className="w-full h-[420px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-xl overflow-hidden shadow-card border-4 border-primary">
                  <img
                    src={siteConfig.about.whyChooseUs.images.sub}
                    alt="Office collaboration"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating count */}
                <div className="absolute top-6 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-elevated text-center">
                  <p className="text-xl font-bold leading-none">
                    {siteConfig.about.whyChooseUs.floatingBadge.number}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider mt-0.5 opacity-80">
                    {siteConfig.about.whyChooseUs.floatingBadge.label}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Cards Column */}
            <div>
              <motion.span
                variants={fadeUp}
                custom={0}
                className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3"
              >
                {siteConfig.about.whyChooseUs.badge}
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                {siteConfig.about.whyChooseUs.heading}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {siteConfig.about.whyChooseUs.description}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-5">
                {siteConfig.about.whyChooseUs.features.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i + 3}
                    className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-elevated transition-all group shimmer-hover hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                      <item.icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={20}
                      />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1 font-body">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ════════ Mission & Vision — DARK gradient band ════════ */}
    <section className="gradient-dark-section relative overflow-hidden py-20 md:py-28">
      <AnimatedSVGBackground variant="dark" />

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">
            <Sparkles size={14} className="animate-glow-pulse" />
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vision & Mission
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-24">
          {/* ── Vision Split Section ── */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] group h-80 md:h-[450px]"
            >
              {/* Optional tinted overlay that fades on hover */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src="/images/vision-image.png" 
                alt="Our Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Eye className="text-primary-light" size={28} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {siteConfig.about.vision.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                {siteConfig.about.vision.description}
              </p>
            </motion.div>
          </div>

          {/* ── Mission Split Section ── */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image goes last on desktop for zig-zag layout, but can stay first on mobile if we wanted (here it handles automatically via order) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:order-last relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] group h-80 md:h-[450px]"
            >
              <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img 
                src="/images/mission-image.png" 
                alt="Our Mission" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:order-first"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {siteConfig.about.mission.title}
              </h3>

              {/* Animated timeline-style list */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-5"
              >
                {siteConfig.about.mission.points.map((point, idx) => (
                  <motion.li
                    key={point}
                    variants={staggerItem}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="flex flex-col items-center mt-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20 group-hover/item:ring-primary/40 transition-all duration-300" />
                      {idx < siteConfig.about.mission.points.length - 1 && (
                        <div className="w-px h-8 bg-white/10 mt-2" />
                      )}
                    </div>
                    <span className="text-white/75 text-base leading-relaxed group-hover/item:text-white transition-colors">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* ════════ Core Values — light section with premium cards ════════ */}
    <section className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      <AnimatedSVGBackground variant="light" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              {siteConfig.about.coreValues.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {siteConfig.about.coreValues.heading}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.about.coreValues.values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i + 1}
                className="bg-card rounded-xl p-7 border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all shimmer-hover group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {valueIcons[v.title] ?? "💎"}
                </div>
                <h4 className="font-bold text-foreground mb-1.5 font-body text-base">
                  {v.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                {/* Accent underline */}
                <div className="mt-4 h-0.5 w-10 rounded-full bg-primary/20 group-hover:w-full group-hover:bg-primary/40 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutSection;
