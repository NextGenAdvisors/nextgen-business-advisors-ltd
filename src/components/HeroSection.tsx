import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => (
  <section className="relative gradient-hero min-h-[90vh] flex items-center overflow-hidden pt-16">
    {/* Subtle decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/10">
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
            <Button size="lg" className="bg-primary text-primary-foreground text-base px-8 py-6 font-semibold hover:bg-primary/90" asChild>
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

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img
                src="/images/hero-skyline.jpg"
                alt="Modern corporate skyline"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-card transform -rotate-3">
              <img
                src="/images/consulting.jpg"
                alt="Business consulting session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
