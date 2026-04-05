import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoAlt from "@/assets/logo-alt.png";
import logoMain from "@/assets/logo.png";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// Extract all section IDs from hash-based nav links
const HASH_LINKS = siteConfig.nav.links.filter((l) => l.href.startsWith("/#"));
const SECTION_IDS = HASH_LINKS.map((l) => l.href.replace("/#", ""));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in the viewport via IntersectionObserver
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.4,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  // Reset activeSection when hash changes via scroll-jump
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location.hash]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") return false;
      const id = href.replace("/#", "");
      return activeSection === id;
    }
    return location.pathname === href;
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [location]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          DESKTOP NAVBAR — 3-tier layout (lg and above)
          Mobile/Tablet — single-bar + drawer
          ═══════════════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "shadow-elevated" : ""
        )}
      >
        {/* ─── TIER 1: Top announcement bar (desktop only) ─── */}
        <div
          className={cn(
            "hidden lg:block bg-foreground text-white text-xs transition-all duration-500 overflow-hidden",
            scrolled ? "max-h-0 py-0 opacity-0" : "max-h-10 py-2 opacity-100"
          )}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <p className="font-medium tracking-wide">
              Expert Business Advisory Services in Nigeria —{" "}
              <span className="text-primary-light font-semibold">
                Audit · Tax · Strategy · Compliance
              </span>
            </p>
            <div className="flex items-center gap-1.5 text-white/80">
              <Clock size={13} className="text-primary-light" />
              <span>Mon–Fri: 08:00am – 6:00pm WAT</span>
            </div>
          </div>
        </div>

        {/* ─── TIER 2: Logo + Contact info bar (desktop only) ─── */}
        <div
          className={cn(
            "hidden lg:block bg-card transition-all duration-500 overflow-hidden relative shadow-sm",
            scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-24 opacity-100 border-b border-border"
          )}
        >
          {/* Edge-to-edge Slanted Blue Backgrounds */}
          <div className="absolute top-0 bottom-0 left-0 w-[42%] min-w-[350px]">
             {/* Back dark blue sliver */}
             <div 
               className="absolute inset-0 bg-[#0f172a]"
               style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
             />
             {/* Main primary solid background */}
             <div 
               className="absolute inset-x-0 inset-y-0 right-3 bg-primary"
               style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 0% 100%)" }}
             />
          </div>

          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <div className="relative py-4 pr-12 flex-shrink-0 flex items-center h-full z-10 w-[30%]">
              <Link to="/" className="flex-shrink-0" onClick={close}>
                <img
                  src={logoAlt}
                  alt="NextGen Business Advisors"
                  className="h-14 w-auto brightness-[1.15] drop-shadow-md"
                />
              </Link>
            </div>

            {/* Contact blocks */}
            <div className="flex items-center gap-6 ml-auto py-4">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.global.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center transition-colors flex-shrink-0 shadow-sm border border-border/50">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold">Call Us 24/7</p>
                  <p className="text-foreground font-bold text-sm leading-tight">{siteConfig.global.phone}</p>
                </div>
              </a>

              {/* Divider */}
              <div className="h-10 w-px bg-border/80" />

              {/* Email */}
              <a
                href={`mailto:${siteConfig.global.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center transition-colors flex-shrink-0 shadow-sm border border-border/50">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold">Mail for Support</p>
                  <p className="text-foreground font-bold text-sm leading-tight">{siteConfig.global.email}</p>
                </div>
              </a>

              {/* Divider */}
              <div className="h-10 w-px bg-border/80" />

              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0 shadow-sm border border-border/50">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-semibold">Office Address</p>
                  <p className="text-foreground font-bold text-sm leading-tight">{siteConfig.global.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── TIER 3 / MOBILE BAR: Nav links + CTA ─── */}
        <div
          className={cn(
            "bg-card/95 backdrop-blur-lg border-b border-border transition-all duration-500",
            scrolled ? "shadow-card" : ""
          )}
        >
          {/* Mobile single-row */}
          <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:hidden">
            <Link to="/" onClick={close}>
              <img src={logoMain} alt="NextGen Business Advisors" className="h-12 w-auto" />
            </Link>
            <button
              className="relative z-[60] flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-sm"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className={cn("absolute transition-all duration-300", open ? "opacity-100 rotate-0" : "opacity-0 rotate-90")}>
                <X size={20} strokeWidth={2} />
              </span>
              <span className={cn("absolute transition-all duration-300", open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0")}>
                <Menu size={20} strokeWidth={2} />
              </span>
            </button>
          </div>

          {/* Desktop nav-link row */}
          <div className="hidden lg:block">
            <div className="container mx-auto px-4 flex items-center justify-between h-14">
              {/* Nav links */}
              <nav className="flex items-center gap-1">
                {siteConfig.nav.links.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded-sm",
                      "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:rounded-full after:transition-all after:duration-300",
                      isActive(l.href)
                        ? "text-primary after:bg-primary after:opacity-100"
                        : "text-muted-foreground hover:text-primary after:bg-primary after:opacity-0 hover:after:opacity-50"
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              {/* CTA & Desktop Toggler */}
              <div className="flex items-center gap-8 pl-4 border-l border-border/60">
                <Link
                  to="/#contact"
                  className="text-primary text-sm font-extrabold uppercase hover:text-primary/80 transition-colors"
                >
                  {siteConfig.nav.cta}
                </Link>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-white hover:bg-foreground/90 transition-colors shadow-sm"
                  onClick={() => setOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  <Menu size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== Mobile Drawer ========== */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[56] h-full w-[75%] max-w-sm bg-card border-l border-border shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header (Shared) */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-card">
          <Link to="/" onClick={close} className="flex-1">
            <img
              src={logoMain}
              alt="NextGen Business Advisors"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={close}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Desktop Drawer Content ── */}
        <div className="hidden lg:flex flex-col overflow-y-auto w-full h-full p-8 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              NextGen Business Advisors Ltd is a premier strategic advisory firm, proudly associated with Jou & Co. We provide high-impact business setup, compliance, accounting, and tax advisory services, empowering diaspora investors, foreign corporations, and SMEs with the structured guidance needed to achieve sustainable growth in Nigeria.
            </p>
            <Link
              to="/#contact"
              onClick={close}
              className="inline-flex items-center justify-center bg-primary text-white text-sm font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0 text-white mt-1">
                  <MapPin size={14} />
                </div>
                <p className="text-muted-foreground text-sm leading-tight pt-1">
                  {siteConfig.global.location}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0 text-white">
                  <Phone size={14} />
                </div>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.global.phone}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0 text-white">
                  <Mail size={14} />
                </div>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.global.email}
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3 mt-auto pt-4">
             {/* Facebook */}
             <a href="#" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded hover:bg-primary/80 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             {/* Instagram */}
             <a href="#" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded hover:bg-primary/80 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
             </a>
             {/* LinkedIn */}
             <a href="#" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded hover:bg-primary/80 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
        </div>

        {/* ── Mobile Drawer Content ── */}
        <div className="flex lg:hidden flex-col h-full w-full">
          {/* Quick contact strip in drawer */}
          <div className="px-5 py-3 bg-muted/40 border-b border-border flex flex-col gap-1.5">
            <a href={`tel:${siteConfig.global.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Phone size={12} /> {siteConfig.global.phone}
            </a>
            <a href={`mailto:${siteConfig.global.email}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Mail size={12} /> {siteConfig.global.email}
            </a>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            {siteConfig.nav.links.map((l, i) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={close}
                className={cn(
                  "group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive(l.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span>{l.label}</span>
                <ChevronRight
                  size={15}
                  className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                />
              </Link>
            ))}
          </nav>

          {/* CTA Footer */}
          <div className="px-5 py-6 border-t border-border space-y-3">
            <Link
              to="/#contact"
              onClick={close}
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/30"
            >
              {siteConfig.nav.cta}
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
