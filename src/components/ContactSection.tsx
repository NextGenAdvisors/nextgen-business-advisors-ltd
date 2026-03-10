import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            {siteConfig.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{siteConfig.contact.heading}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <MapPin className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">Office Location</h4>
                <p className="text-sm text-muted-foreground">{siteConfig.global.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Mail className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">Email</h4>
                <a href={`mailto:${siteConfig.global.email}`} className="text-sm text-primary hover:underline">
                  {siteConfig.global.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Phone className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground font-body mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">{siteConfig.global.phone}</p>
              </div>
            </div>

            {/* Consulting image */}
            <div className="rounded-xl overflow-hidden shadow-card hidden lg:block">
              <img
                src={siteConfig.contact.image}
                alt="Business consultation"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                {siteConfig.contact.quote}
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-xl p-8 border border-border shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name *" required className="bg-background" />
              <Input placeholder="Company Name (optional)" className="bg-background" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email Address *" required className="bg-background" />
              <Input type="tel" placeholder="Phone Number" className="bg-background" />
            </div>
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Service Required" />
              </SelectTrigger>
              <SelectContent>
                {siteConfig.contact.formServices.map(s => (
                  <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="Your Message" rows={4} className="bg-background resize-none" />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90" disabled={loading}>
              {loading ? "Sending..." : (
                <>Send Message <Send size={16} className="ml-1" /></>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
