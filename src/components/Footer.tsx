import logo from "@/assets/logo.png";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Business Setup", href: "#services" },
  { label: "Tax & Compliance", href: "#services" },
  { label: "Accounting", href: "#services" },
  { label: "Loan Facilitation", href: "#services" },
  { label: "Banking Liaison", href: "#services" },
  { label: "Advisory Services", href: "#services" },
];

const Footer = () => (
  <footer className="gradient-hero pt-16 pb-8">
    <div className="container mx-auto px-4">
      {/* Main Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Company */}
        <div>
          <a href="#" className="inline-block mb-5">
            <img
              src={logo}
              alt="NextGen Business Advisors"
              className="h-14 w-auto brightness-200"
            />
          </a>
          <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
            Helping businesses establish strong, compliant, and sustainable
            operations in Nigeria.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-5 font-body">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors flex items-center gap-1"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0"
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-5 font-body">
            Our Services
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors flex items-center gap-1"
                >
                  <ArrowRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0"
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-5 font-body">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-primary-light mt-0.5 shrink-0"
              />
              <span className="text-sm text-primary-foreground/60">
                Lagos, Nigeria
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                size={16}
                className="text-primary-light mt-0.5 shrink-0"
              />
              <a
                href="mailto:info@nextgenadvisors.com"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
              >
                info@nextgenadvisors.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone
                size={16}
                className="text-primary-light mt-0.5 shrink-0"
              />
              <span className="text-sm text-primary-foreground/60">+234</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} NextGen Business Advisors Ltd. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
