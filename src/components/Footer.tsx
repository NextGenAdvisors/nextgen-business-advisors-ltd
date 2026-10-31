import logo from "@/assets/logo-alt.png";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Link } from "react-router-dom";

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-white font-extrabold text-lg mb-6 relative pb-3">
    {children}
    <span className="absolute left-0 bottom-0 h-0.5 w-10 bg-gold" aria-hidden="true" />
  </h4>
);

const Footer = () => (
  <footer className="bg-primary text-white/65">
    <div className="container mx-auto px-4 pt-20 pb-12">
      {/* Main Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-12">
        {/* Company */}
        <div className="col-span-2 lg:col-span-4 lg:pr-8">
          <Link to="/" className="inline-block mb-5 -ml-2">
            <img
              src={logo}
              alt={siteConfig.global.name}
              className="h-20 w-auto"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            {siteConfig.footer.description}
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 lg:col-span-2">
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="space-y-3">
            {siteConfig.footer.quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="group text-sm hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight size={14} className="text-gold group-hover:translate-x-0.5 transition-transform" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1 lg:col-span-3">
          <FooterHeading>Our Services</FooterHeading>
          <ul className="space-y-3">
            {siteConfig.footer.serviceLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="group text-sm hover:text-gold transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight size={14} className="text-gold group-hover:translate-x-0.5 transition-transform" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-2 lg:col-span-3">
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-gold text-primary flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </span>
              <span className="text-sm pt-2">
                {siteConfig.global.location}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-gold text-primary flex items-center justify-center shrink-0">
                <Mail size={16} />
              </span>
              <a
                href={`mailto:${siteConfig.global.email}`}
                className="text-sm pt-2 hover:text-gold transition-colors break-all"
              >
                {siteConfig.global.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-full bg-gold text-primary flex items-center justify-center shrink-0">
                <Phone size={16} />
              </span>
              <a href={`tel:${siteConfig.global.phone}`} className="text-sm pt-2 hover:text-gold transition-colors">
                {siteConfig.global.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-primary-deep">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} {' ' }
          <Link to="/" className="hover:text-gold transition-colors">
            {siteConfig.global.name}. All rights
          </Link>
          {" "}reserved.{" "}
          | Website Developed By{" "}
          <a href={siteConfig.global.developer.link } target="_blank" className="text-gold hover:text-white transition-colors" rel="noopener noreferrer">
            {siteConfig.global.developer.label}
          </a>
        </p>
        <div className="flex gap-6">
          {siteConfig.footer.legalLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-xs text-white/50 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;
