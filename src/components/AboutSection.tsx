import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Sparkles, ShieldCheck, Award, Lightbulb, Handshake, Link, Leaf, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";
import RevealText from "@/components/RevealText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55 },
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
const valueIcons: Record<string, LucideIcon> = {
  Integrity: ShieldCheck,
  Excellence: Award,
  Innovation: Lightbulb,
  "Client-Centricity": Handshake,
  Collaboration: Link,
  Sustainability: Leaf,
};

/* ---------- Component ---------- */
const AboutSection = () => (
  <>
    {/* ════════ Why Choose Us — welcome split + feature row ════════ */}
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text Column */}
          <div>
            <SectionHeading
              align="left"
              badge={siteConfig.about.whyChooseUs.badge}
              title={siteConfig.about.whyChooseUs.heading}
              description={siteConfig.about.whyChooseUs.description}
            />
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative pl-6 pb-10 sm:pl-10"
          >
            <div className="absolute left-0 bottom-0 w-1/2 h-1/2 stripe-accent" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-sm shadow-elevated">
              <img
                src={siteConfig.about.whyChooseUs.images.main}
                alt="Professional team meeting"
                className="w-full h-[320px] sm:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-2 right-6 w-44 h-44 overflow-hidden rounded-sm shadow-elevated border-[6px] border-white">
              <img
                src={siteConfig.about.whyChooseUs.images.sub}
                alt="Office collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating count */}
            <div className="absolute top-8 left-0 bg-primary text-white px-6 py-5 shadow-elevated border-l-4 border-gold">
              <p className="text-3xl font-extrabold leading-none text-gold font-display">
                {siteConfig.about.whyChooseUs.floatingBadge.number}
              </p>
              <p className="text-[11px] uppercase tracking-[0.2em] mt-1 text-white/80">
                {siteConfig.about.whyChooseUs.floatingBadge.label}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-20 border-t border-border"
        >
          {siteConfig.about.whyChooseUs.features.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="group relative pt-8 pb-4 sm:pr-6 lg:pl-6 lg:first:pl-0 lg:border-l lg:first:border-l-0 border-border"
            >
              <span className="absolute top-[-1px] left-0 h-0.5 w-0 bg-gold group-hover:w-16 transition-all duration-500" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-sm bg-gold/15 text-gold-deep group-hover:bg-primary group-hover:text-gold transition-colors duration-300">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="font-extrabold text-foreground text-base mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ════════ Vision & Mission — overlapping navy panel + image ════════ */}
    <section className="bg-muted py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Our Purpose" title="Vision & Mission" className="mb-14 md:mb-20" />

        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-24">
          {/* ── Vision ── */}
          <div className="grid lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-primary text-white p-8 sm:p-12 lg:p-14 lg:pr-28 relative z-0"
            >
              <div className="w-14 h-14 rounded-sm bg-gold flex items-center justify-center mb-6">
                <Eye className="text-primary" size={26} />
              </div>
              <RevealText
                as="h3"
                text={siteConfig.about.vision.title}
                className="text-3xl lg:text-4xl font-extrabold text-white mb-5"
              />
              <p className="text-white/75 text-lg leading-relaxed">
                {siteConfig.about.vision.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 lg:-ml-20 relative z-10 group"
            >
              <div className="relative overflow-hidden shadow-elevated border-[6px] border-white h-72 lg:h-[420px]">
                <img
                  src="/images/vision-image.png"
                  alt="Our Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Mission ── */}
          <div className="grid lg:grid-cols-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 lg:-mr-20 relative z-10 group order-last lg:order-first"
            >
              <div className="relative overflow-hidden shadow-elevated border-[6px] border-white h-72 lg:h-[420px]">
                <img
                  src="/images/mission-image.png"
                  alt="Our Mission"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white shadow-card p-8 sm:p-12 lg:p-14 lg:pl-28 relative z-0 border-t-4 border-gold"
            >
              <div className="w-14 h-14 rounded-sm bg-primary flex items-center justify-center mb-6">
                <Target className="text-gold" size={26} />
              </div>
              <RevealText
                as="h3"
                text={siteConfig.about.mission.title}
                className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6"
              />

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {siteConfig.about.mission.points.map((point) => (
                  <motion.li
                    key={point}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-gold-deep mt-0.5 shrink-0" size={20} />
                    <span className="text-muted-foreground text-base leading-relaxed">
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

    {/* ════════ Core Values — navy band ════════ */}
    <section className="relative overflow-hidden py-20 md:py-24 bg-primary">
      <img
        src={siteConfig.about.whyChooseUs.images.sub}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary-deep/90" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          tone="dark"
          badge={siteConfig.about.coreValues.badge}
          title={siteConfig.about.coreValues.heading}
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto border-t border-l border-white/10"
        >
          {siteConfig.about.coreValues.values.map((v, i) => {
            const Icon = valueIcons[v.title] || Sparkles;
            return (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i}
                className="group p-8 border-r border-b border-white/10 hover:bg-white/5 transition-colors"
              >
                <Icon
                  className="text-gold mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                  size={40}
                  strokeWidth={1.3}
                />
                <h4 className="font-extrabold text-white mb-2 text-lg">
                  {v.title}
                </h4>
                <p className="text-sm text-white/65 leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutSection;
