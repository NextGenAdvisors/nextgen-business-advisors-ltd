import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/SectionHeading";

type TeamMember = (typeof siteConfig.team.members)[number];

const TeamCard = ({ m, i }: { m: TeamMember; i: number }) => {
  const [expanded, setExpanded] = useState(false);
  const words = m.bio.split(" ");
  const isLong = words.length > 20;
  const shortBio = isLong ? words.slice(0, 20).join(" ") + "..." : m.bio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="group flex flex-col h-full"
    >
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={m.photo}
          alt={m.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

        {/* Social icons slide up on hover (also listed below for touch devices) */}
        <div className="absolute bottom-4 left-0 right-0 hidden md:flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {m.memberLinkedInUrl && (
            <a
              href={m.memberLinkedInUrl}
              target="_blank"
              className="w-10 h-10 rounded-full bg-gold text-primary flex items-center justify-center hover:bg-white transition-colors"
              aria-label={`${m.name} on LinkedIn`}
              tabIndex={-1}
            >
              <Linkedin size={18} />
            </a>
          )}
          {m.memberEmailAddress && (
            <a
              href={`mailto:${m.memberEmailAddress}`}
              target="_blank"
              className="w-10 h-10 rounded-full bg-gold text-primary flex items-center justify-center hover:bg-white transition-colors"
              aria-label={`Email ${m.name}`}
              tabIndex={-1}
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="relative bg-white shadow-card mx-4 -mt-10 p-6 text-center flex flex-col flex-grow border-b-4 border-transparent group-hover:border-gold transition-colors duration-500">
        <h3 className="text-xl font-extrabold text-foreground mb-1">
          {m.name}
        </h3>
        <p className="text-xs text-gold-deep font-black uppercase tracking-[0.12em] mb-4">
          {m.role}
        </p>

        <div className="flex flex-col flex-grow items-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {expanded ? m.bio : shortBio}
          </p>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs flex items-center gap-1 font-bold px-3 py-1.5 rounded-sm text-primary hover:text-gold-deep transition-colors"
            >
              {expanded ? "Read less" : "Read more"}
              {expanded ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}
            </button>
          )}
        </div>

        <div className="flex gap-3 mt-5 pt-4 border-t border-border justify-center">
          {m.memberLinkedInUrl && (
            <a
              href={m.memberLinkedInUrl}
              target="_blank"
              className="w-9 h-9 rounded-full bg-muted text-primary flex items-center justify-center hover:bg-primary hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
          {m.memberEmailAddress && (
            <a
              href={`mailto:${m.memberEmailAddress}`}
              target="_blank"
              className="w-9 h-9 rounded-full bg-muted text-primary flex items-center justify-center hover:bg-primary hover:text-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const displayMembers = siteConfig.team.members;

  return (
    <section id="team" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={siteConfig.team.badge}
          title={siteConfig.team.heading}
          description={siteConfig.team.description}
          className="mb-16"
        />

        <div
          className={cn(
            "grid gap-10 mx-auto items-stretch justify-center",
            displayMembers.length >= 3
              ? "sm:grid-cols-2 lg:grid-cols-3 max-w-6xl"
              : "sm:grid-cols-2 max-w-4xl"
          )}
        >
          {displayMembers.length > 0 ? (
            displayMembers.map((m, i) => (
              <TeamCard key={m.name || i} m={m} i={i} />
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-muted-foreground">
              No team members found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
