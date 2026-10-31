import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { homeSchema } from "@/config/schema";

const PRIMARY_KW =
  `audit firm in ${siteConfig.global.country}, chartered accountants in ${siteConfig.global.city}, tax advisory services ${siteConfig.global.country}, financial audit services ${siteConfig.global.country}, SME accounting services ${siteConfig.global.country}`;
const SECONDARY_KW =
  `IFRS financial reporting ${siteConfig.global.country}, VAT and WHT compliance ${siteConfig.global.country}, FIRS tax consultants, business advisory services ${siteConfig.global.country}, internal audit services ${siteConfig.global.country}`;


const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <PageTransition>
      <SEO
        title="Chartered Accountants & Business Advisors in Nigeria"
        description="NexGen Business Advisors Ltd — we turn numbers into clarity. Expert audit, tax advisory, financial compliance and SME accounting services in Lagos, Nigeria. Are you struggling with unreconciled accounts, tax compliance issues, audit delays, or unclear financial records? We fix the structure, fix the business."
        keywords={`${PRIMARY_KW}, ${SECONDARY_KW}`}
        canonical="/"
        schema={homeSchema}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
      <CTABanner />
      <Footer />
      <BackToTop />
      <WhatsAppFloatingButton />
    </PageTransition>
  );
};

export default Index;
