import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Settings2, ShieldCheck, TrendingUp, Presentation, Landmark, Lightbulb, Handshake, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Button } from "@/components/ui/button";

const FinancialStrategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 z-0">
          <img src="/images/financial_strategy.png" alt="Financial Strategy Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0 bg-cyan-900/40 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Transforming Financial Chaos into Strategic Clarity
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              At Joy Ozua & Co., our senior consultants specialize in fixing the "broken" parts of your business finance. We deliver the structure, control, and visibility required for sustainable growth and investment readiness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/#contact">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-cyan-600 hover:bg-cyan-700 text-white border-0 shadow-lg shadow-cyan-900/30">
                  Engage Our Consultants <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#framework">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm">
                  View Success Framework
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">The Problem We Solve (Team-Based Solution)</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most businesses struggle with unreconciled accounts and regulatory pressure not because of a lack of effort, but because of a structure problem. Our team steps in to deliver clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-t-red-400 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                <Settings2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">Fix what others ignore</h3>
              <p className="text-muted-foreground">Reconciling messy or incomplete financial records across modern platforms like Xero, Zoho, and Sage.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-t-blue-400 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">Restore Confidence</h3>
              <p className="text-muted-foreground">Restating inaccurate reports to meet strict IFRS standards and ensure zero regulatory issues.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-t-green-400 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">Enable Scale</h3>
              <p className="text-muted-foreground">Providing the <i>"Numbers that make sense"</i> so that leadership can confidently drive decisions based on data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The J.O.Y. System™ */}
      <section id="framework" className="py-20 lg:py-28 bg-white border-y border-border/50">
        <div className="container relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm mb-4 border border-blue-100 tracking-wide">
              OUR METHODOLOGY
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              The <span className="text-primary">J.O.Y. System™</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              We implement a proprietary three-stage framework across all our advisory engagements to guarantee transformative results.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-0 bg-white rounded-3xl overflow-hidden shadow-elevated border border-slate-100 relative z-10">
              {/* Item 1 */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-slate-100 relative group">
                <div className="absolute inset-x-0 top-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
                  <span className="text-3xl font-display font-bold text-blue-600">J</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Justify</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our auditors rigorously validate and verify your existing financial records for absolute credibility and accuracy.
                </p>
              </div>

              {/* Item 2 */}
              <div className="p-10 border-b md:border-b-0 md:border-r border-slate-100 relative group bg-slate-50/50">
                <div className="absolute inset-x-0 top-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 border border-cyan-100">
                  <span className="text-3xl font-display font-bold text-cyan-600">O</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Optimize</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our tax and process experts restructure your business reporting and operations for maximum efficiency.
                </p>
              </div>

              {/* Item 3 */}
              <div className="p-10 relative group">
                <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100">
                  <span className="text-3xl font-display font-bold text-emerald-600">Y</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground mb-4">Yield</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our strategy team continually transforms robust data into highly actionable insights for profit generation.
                </p>
              </div>
            </div>
            
            {/* Background design line connecting them */}
            <div className="hidden md:block absolute top-[55%] left-0 w-full h-[1px] bg-slate-200 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-20 lg:py-28 bg-[#0F2942] text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Strategic Partnership:<br/><span className="text-cyan-400">NextGen + Joy Ozua & Co.</span></h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                By choosing our firm, you gain access to an Integrated Advisory Ecosystem. While our accounting arm (Joy Ozua & Co.) handles strict compliance and audit, our strategy arm (NextGen Business Advisors) focuses on market entry, loan facilitation, and complete business setup.
              </p>
              
              <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4 mb-2">
                  <Network className="text-cyan-400 w-8 h-8" />
                  <h4 className="text-xl font-bold font-display">The Result</h4>
                </div>
                <p className="text-slate-300 italic pl-12">
                  "You get both the profound vision of a leading strategist and the exacting precision of an auditor."
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                 <img src="/images/corporate_partnership.png" alt="Corporate Partnership" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] to-transparent opacity-80"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                      <p className="text-white font-medium text-lg italic mb-2">"Integrated Advisory Ecosystem"</p>
                      <div className="flex items-center gap-4 text-sm text-cyan-200">
                        <span className="flex items-center gap-1"><Landmark className="w-4 h-4" /> Compliance</span>
                        <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                        <span className="flex items-center gap-1"><Lightbulb className="w-4 h-4" /> Strategy</span>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Build a Stronger Financial Foundation Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Whether your firm needs a rigorous audit, a total financial cleanup, or a path to investment readiness, our partners are ready to lead the way.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-base bg-cyan-700 hover:bg-cyan-800 text-white shadow-lg">
                Schedule a Team Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-cyan-200 text-cyan-800 hover:bg-cyan-50">
                Speak to a Senior Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default FinancialStrategy;
