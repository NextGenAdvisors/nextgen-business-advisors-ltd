import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnimatedSVGBackground } from "@/components/FloatingShapes";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const TeamCard = ({ m, i }: { m: any; i: number }) => {
  const [expanded, setExpanded] = useState(false);
  const words = m.bio.split(" ");
  const isLong = words.length > 20;
  const shortBio = isLong ? words.slice(0, 20).join(" ") + "..." : m.bio;

  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      className="group flex flex-col items-center bg-transparent rounded-[3rem] overflow-hidden hover:bg-primary/10 transition-colors duration-500 ease-out h-full p-6 md:p-8"
    >
      {/* Photo */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
      </div>
      
      {/* Info */}
      <div className="flex flex-col flex-grow items-center w-full">
        <p className="text-sm text-primary/80 font-semibold mb-2 lowercase tracking-wide">
          {m.role}
        </p>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {m.name}
        </h3>
        
        <div className="flex flex-col flex-grow items-center">
          <p className="text-sm text-muted-foreground leading-relaxed transition-all text-center">
            {expanded ? m.bio : shortBio}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-background/50 text-foreground/80 hover:text-foreground transition-colors"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
        
        {/* Always visible icons */}
        <div className="flex gap-4 mt-6 pt-2 shrink-0 justify-center">
          <a
            href={m.memberLinkedInUrl}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={2} />
          </a>
          <a
            href={`mailto:${m.memberEmailAddress}`}
            target="_blank"
            className="text-foreground/80 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} strokeWidth={2} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => (
  <section id="team" className="py-20 md:py-28 relative overflow-hidden radial-bg">
    <AnimatedSVGBackground variant="light" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
          {siteConfig.team.badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {siteConfig.team.heading}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {siteConfig.team.description}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch"
      >
        {siteConfig.team.members.map((m, i) => (
          <TeamCard key={m.name} m={m} i={i} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
