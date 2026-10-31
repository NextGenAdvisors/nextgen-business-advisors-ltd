import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, FileSpreadsheet, Scale, TrendingUp, Building2, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import RevealText from "@/components/RevealText";
import { siteConfig } from "@/config/site";
import { auditTaxationSchema } from "@/config/schema";


const AuditTaxation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <SEO
        title={`Audit, Taxation & Statutory Compliance — Chartered Accountants ${siteConfig.global.country}`}
        description={`Compliance is not enough — clarity is key. Joy Ozua & Co. provides statutory audit, FIRS tax advisory, VAT and WHT compliance, IFRS financial reporting, and CAC corporate filings. Expert chartered accountants and FIRS tax consultants in ${siteConfig.global.city}, ${siteConfig.global.country}. Your numbers should tell the truth.`}
        keywords={`audit firm in ${siteConfig.global.country}, chartered accountants in ${siteConfig.global.city}, tax advisory services ${siteConfig.global.country}, financial audit services ${siteConfig.global.country}, IFRS financial reporting ${siteConfig.global.country}, VAT and WHT compliance ${siteConfig.global.country}, FIRS tax consultants, internal audit services ${siteConfig.global.country}`}
        canonical="/audit-taxation"
        schema={auditTaxationSchema}
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden gradient-hero min-h-[75vh] flex flex-col">
          <div className="absolute inset-0 z-0">
            <img src={siteConfig.pages.auditTaxation.heroImage} alt="Audit & Taxation Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <RevealText as="h1" text="Professional Assurance & Regulatory Compliance" className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight" />
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Joy Ozua &amp; Co. (Chartered Accountants) provides independent audit, tax, and advisory services delivered by a team of licensed professionals. As a strategic affiliate of NexGen Business Advisors, we bring collective decades of experience to Nigeria's complex regulatory landscape.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/#contact">
                  <Button size="lg" variant="gold" className="w-full sm:w-auto text-base h-14 px-8 rounded-sm">
                    Consult Our Partners <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#capabilities">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-sm border-white/40 text-white hover:border-gold hover:text-gold hover:bg-transparent bg-transparent font-bold">
                    View Firm Capabilities
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Firm's Identity */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <RevealText as="h2" text="The Firm's Identity" className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-6" />
              <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Joy Ozua &amp; Co. is a multi-partner accounting firm specializing in the unique financial and regulatory needs of businesses in Nigeria. We operate on a Partner-Led Engagement model, ensuring that every client benefits from the high-level oversight of our senior chartered accountants and tax experts.
              </p>
            </div>
          </div>
        </section>

        {/* Our Core Statutory Services */}
        <section id="capabilities" className="py-20 lg:py-28 bg-primary">
          <div className="container">
            <div className="text-center mb-16">
              <RevealText as="h2" text="Our Core Statutory Services" className="text-3xl md:text-4xl font-display font-extrabold text-white  mb-6" />
              <div className="w-16 h-1 bg-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-sm shadow-card border-b-4 border-gold hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl gradient-brand-subtle flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-foreground mb-4">Audit &amp; Financial Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team provides statutory and regulatory audits that go beyond signing reports—we provide a diagnostic look at your internal controls and financial truth.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-sm shadow-card border-b-4 border-gold hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl gradient-brand-subtle flex items-center justify-center mb-6 text-primary">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-foreground mb-4">Tax Intelligence &amp; Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Led by taxation professionals (ACTI), we manage FIRS and State tax advisory, PAYE/VAT/WHT structuring, and proactive tax health checks.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-sm shadow-card border-b-4 border-gold hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl gradient-brand-subtle flex items-center justify-center mb-6 text-primary">
                  <Scale className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-foreground mb-4">Regulatory &amp; CAC Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our dedicated compliance department simplifies the complexities of CAC filings, NSITF, ITF, and PENCOM for our corporate clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Approach */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/15 text-gold-deep font-bold rounded-sm text-sm mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>Why Choose Us</span>
                </div>
                <RevealText as="h2" text="The Team Approach: Why We Are Different" className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-6" />
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We combine deep technical expertise with global standards to deliver unmatched professional services tailored to the Nigerian market.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-gold-deep">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display text-foreground mb-2">Multidisciplinary Expertise</h4>
                      <p className="text-muted-foreground">We combine the skills of auditors, tax consultants, and financial analysts to give you a complete picture.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-gold-deep">
                      <Workflow className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display text-foreground mb-2">Technology-Driven Audit</h4>
                      <p className="text-muted-foreground">Our firm utilizes advanced reporting processes and cutting-edge software for transparency and speed.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-gold-deep">
                      <FileSpreadsheet className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display text-foreground mb-2">Local Insight, International Standards</h4>
                      <p className="text-muted-foreground">Our partners bring rich experience from globally connected firms directly to the Nigerian market context.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link to="/#contact">
                    <Button size="lg" variant="gold" className="text-base h-12 px-8 rounded-sm">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-sm transform translate-x-4 translate-y-4"></div>
                <div className="relative bg-muted/30 rounded-sm p-8 sm:p-12 border border-border shadow-elevated">
                  <div className="aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-lg relative bg-white flex items-center justify-center border border-border/50 group">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0"></div>
                    <img src="/images/audit_team.png" alt="Audit Team Professionals" className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg z-20 transform translate-y-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-xl text-white font-display font-extrabold text-foreground mb-1">Joy Ozua &amp; Co.</h3>
                      <p className="text-white font-medium text-sm">Chartered Accountants • Expert Audit Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />

        <Footer />
        <BackToTop />
        <WhatsAppFloatingButton />
      </div>
    </PageTransition>
  );
};

export default AuditTaxation;
