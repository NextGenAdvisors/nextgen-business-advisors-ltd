import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      <Navbar />
      <div className="relative gradient-hero min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="  lg:pt-40 relative z-10 max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-8 bg-card/10 flex items-center justify-center rounded-3xl shadow-xl border border-white/10 rotate-3 backdrop-blur-sm">
            <FileQuestion className="text-primary-light w-12 h-12" />
          </div>
          
          <span className="inline-block bg-primary/20 text-primary-light text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border border-primary-light/20 shadow-sm">
            Error 404
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Page Not <span className="text-primary-light">Found</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground text-base px-8 py-6 font-semibold hover:bg-primary/90 shadow-elevated w-full sm:w-auto"
              asChild
            >
              <Link to="/">
                <Home className="mr-2" size={18} />
                Back to Home
              </Link>
            </Button>
        
          </div>
        </motion.div>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default NotFound;
