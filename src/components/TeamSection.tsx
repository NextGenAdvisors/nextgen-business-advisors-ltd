import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Joy Ozua",
    role: "Managing Director / Lead Consultant",
    photo: "/images/team-lead.png",
    bio: "Licensed ICAN member, former CFO & Acting DG of the Nigerian-German Chamber of Commerce.",
  },
  {
    name: "Adeyemi Oladipo",
    role: "Tax & Compliance Officer",
    photo: "/images/team-member-2.png",
    bio: "Specialist in Nigerian tax regulation, corporate compliance, and audit governance.",
  },
  {
    name: "Chinelo Nwosu",
    role: "Financial Analyst",
    photo: "/images/team-member-3.png",
    bio: "Expert in cash-flow modelling, investment readiness, and financial structuring for SMEs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const TeamSection = () => (
  <section id="team" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
          Our People
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Meet The Expert Team Members
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A multidisciplinary team with deep expertise in accounting, tax, finance, and cross-border business advisory.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            variants={fadeUp}
            custom={i}
            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-shadow"
          >
            {/* Photo */}
            <div className="relative overflow-hidden h-72">
              <img
                src={m.photo}
                alt={m.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
