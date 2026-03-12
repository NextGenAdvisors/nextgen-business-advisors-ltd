import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* ---------- Component ---------- */
const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      {/* ---- Why Choose Us ---- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto mb-24"
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
                  className="w-full h-full object-cover "
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
                  className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-elevated transition-shadow group"
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

      {/* ---- Vision & Mission ---- */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
            <Eye className="text-primary-foreground" size={22} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            {siteConfig.about.vision.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {siteConfig.about.vision.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow"
        >
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            <Target className="text-secondary-foreground" size={22} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            {siteConfig.about.mission.title}
          </h3>
          <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
            {siteConfig.about.mission.points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircle
                  className="text-primary mt-0.5 shrink-0"
                  size={14}
                />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ---- Core Values ---- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
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
              className="bg-card rounded-xl p-6 border border-border hover:shadow-card transition-shadow"
            >
              <Heart className="text-secondary mb-3" size={20} />
              <h4 className="font-bold text-foreground mb-1 font-body">
                {v.title}
              </h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default AboutSection;
