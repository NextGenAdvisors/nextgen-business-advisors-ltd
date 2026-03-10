import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => (
  <section className="relative gradient-hero min-h-[90vh] flex items-center overflow-hidden pt-16">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block gradient-brand text-primary-foreground text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
          Business Growth & Strategy
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Structured, Compliant, and Growth-Ready Business Solutions{" "}
          <span className="text-primary-light">in Nigeria</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 mb-4 max-w-2xl">
          Helping Diaspora Investors, Foreign Corporations, and Entrepreneurs Build Sustainable and Compliant Businesses.
        </p>
        <p className="text-base text-primary-foreground/60 mb-8 max-w-2xl">
          NextGen Business Advisors Ltd delivers expert advisory services for business setup, regulatory compliance, financial structuring, and investment readiness in Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#contact">
              Book a Consultation <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#contact">
              <Phone className="mr-1" size={18} /> Speak With Our Advisors
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
