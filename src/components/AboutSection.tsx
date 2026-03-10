import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const expertiseItems = [
  "Market entry and business setup",
  "Regulatory compliance and tax advisory",
  "Audit, fraud investigation, and financial governance",
  "Accounting system design and cash flow management",
  "Loan facilitation, business proposals, and investment readiness",
  "SME capacity-building and sustainability programs",
  "Bilateral trade facilitation and cross-border advisory",
];

const coreValues = [
  { title: "Integrity", desc: "Highest ethical standards in all advisory services." },
  { title: "Excellence", desc: "Top-quality, accurate, and actionable solutions." },
  { title: "Innovation", desc: "Creative and practical strategies for sustainable growth." },
  { title: "Client-Centricity", desc: "Every strategy designed for the client's success." },
  { title: "Collaboration", desc: "Multidisciplinary expertise and holistic solutions." },
  { title: "Sustainability", desc: "Lasting structures that grow responsibly." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      {/* Main About with Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image Column */}
          <motion.div variants={fadeUp} custom={0} className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/images/team-meeting.jpg"
                  alt="Professional team meeting"
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-xl overflow-hidden shadow-card border-4 border-background">
                <img
                  src="/images/office-work.jpg"
                  alt="Office collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <div className="lg:col-span-3">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
              Who We Are
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About NextGen Business Advisors Ltd
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4">
              NextGen Business Advisors Ltd is a Nigerian-based advisory firm dedicated to helping businesses establish strong, compliant, and sustainable operations in Nigeria. We serve Nigerians in diaspora investing in Nigeria, foreign corporations establishing subsidiaries or branches, and entrepreneurs seeking structured growth and funding.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
              Led by <span className="font-semibold text-foreground">Joy Ozua</span>, a licensed member of the Institute of Chartered Accountants of Nigeria (ICAN) and former CFO and Acting Director General of the Nigerian-German Chamber of Commerce, the firm combines regulatory expertise, financial governance, and cross-border experience to deliver institutional-level advisory.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-8">
              Joy trained and practiced with Parker Randall Offor, a globally recognized accounting and advisory firm, and previously served as Staff Partner and Chief Operating Officer at Moore Bishop & Rooks. She brings extensive banking experience in credit, marketing, and banking operations, giving her unique insight into financial systems, investment readiness, and institutional engagement.
            </motion.p>

            {/* Expertise list */}
            <motion.div variants={fadeUp} custom={5} className="grid sm:grid-cols-2 gap-3 mb-8">
              {expertiseItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              custom={6}
              className="border-l-4 border-secondary pl-6 py-2 italic text-foreground font-medium text-lg"
            >
              "We don't just register companies — we build structured foundations for long-term success."
            </motion.blockquote>
          </div>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl p-8 shadow-card border border-border"
        >
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
            <Eye className="text-primary-foreground" size={22} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            To be the most trusted and innovative advisory partner in Nigeria for diaspora investors, foreign corporations, and entrepreneurs, enabling sustainable, compliant, and growth-oriented businesses.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card rounded-xl p-8 shadow-card border border-border"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
            <Target className="text-secondary-foreground" size={22} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
          <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
            <li>• Deliver exceptional market entry, regulatory, and financial advisory services.</li>
            <li>• Empower SMEs, foreign investors, and entrepreneurs to achieve sustainable growth.</li>
            <li>• Facilitate compliance, transparency, and efficiency in every business we support.</li>
            <li>• Build institutional trust through professional integrity and global best practices.</li>
          </ul>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">What Drives Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i + 1}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-card transition-shadow"
            >
              <Heart className="text-secondary mb-3" size={20} />
              <h4 className="font-bold text-foreground mb-1 font-body">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
