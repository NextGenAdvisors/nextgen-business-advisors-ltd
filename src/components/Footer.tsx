import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="gradient-hero py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NextGen Business Advisors" className="h-12 w-auto brightness-200" />
        </div>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">About</a>
          <a href="#services" className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">Services</a>
          <a href="#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} NextGen Business Advisors Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
