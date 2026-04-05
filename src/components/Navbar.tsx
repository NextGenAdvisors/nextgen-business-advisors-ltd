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
            "hidden lg:block bg-primary text-white text-xs transition-all duration-500 overflow-hidden",
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
            "hidden lg:block gradient-hero transition-all duration-500 overflow-hidden",
            scrolled ? "max-h-0 py-0 opacity-0" : "max-h-24 py-4 opacity-100"
          )}
        >
          <div className="container mx-auto px-4 flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" onClick={close}>
              <img
                src={logoAlt}
                alt="NextGen Business Advisors"
                className="h-14 w-auto brightness-[1.15] drop-shadow-md"
              />
            </Link>

            {/* Contact blocks */}
            <div className="flex items-center gap-6 ml-auto">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.global.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Call Us 24/7</p>
                  <p className="text-white font-bold text-sm leading-tight">{siteConfig.global.phone}</p>
                </div>
              </a>

              {/* Divider */}
              <div className="h-10 w-px bg-white/20" />

              {/* Email */}
              <a
                href={`mailto:${siteConfig.global.email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center group-hover:bg-white/25 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Mail for Support</p>
                  <p className="text-white font-bold text-sm leading-tight">{siteConfig.global.email}</p>
                </div>
              </a>

              {/* Divider */}
              <div className="h-10 w-px bg-white/20" />

              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Office Address</p>
                  <p className="text-white font-bold text-sm leading-tight">{siteConfig.global.location}</p>
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

              {/* CTA */}
              <Link
                to="/#contact"
                className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-px"
              >
                {siteConfig.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ========== Mobile Drawer ========== */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[56] h-full w-[75%] max-w-sm bg-card border-l border-border shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border gradient-hero ">
          <Link to="/" onClick={close}>
            <img
              src={logoAlt}
              alt="NextGen Business Advisors"
              className="h-10 w-auto brightness-110"
            />
          </Link>
          <button
            onClick={close}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

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
      </aside>
    </>
  );
};

export default Navbar;
