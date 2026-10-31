import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMain from "@/assets/logo.png";
import logoLight from "@/assets/logo-alt.png";
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

  // Solidify navbar on scroll (it sits transparent over the dark hero at the top)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: the active section is the last one whose top has passed the
  // activation line (just below the fixed header). Position-based so tall
  // sections still activate, and nothing is active while over the hero.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line || (atBottom && top < window.innerHeight)) current = id;
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

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
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* ─── Top info bar (desktop only) ─── */}
        <div
          className={cn(
            "hidden lg:block bg-primary-deep text-white/75 text-xs transition-all duration-500 overflow-hidden",
            scrolled ? "max-h-0 opacity-0" : "max-h-11 opacity-100"
          )}
        >
          <div className="container mx-auto px-4 h-11 flex items-center justify-between border-b border-white/10">
            <p className="font-medium tracking-wide">
              Expert Business Advisory Services in Nigeria —{" "}
              <span className="text-gold font-bold">
                Audit · Tax · Strategy · Compliance
              </span>
            </p>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.global.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone size={13} className="text-gold" />
                {siteConfig.global.phone}
              </a>
              <a
                href={`mailto:${siteConfig.global.email}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail size={13} className="text-gold" />
                {siteConfig.global.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-gold" />
                {siteConfig.global.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={13} className="text-gold" />
                Mon–Fri: 08:00am – 6:00pm WAT
              </span>
            </div>
          </div>
        </div>

        {/* ─── Main bar ─── */}
        <div
          className={cn(
            "transition-all duration-500",
            scrolled
              ? "bg-white/95 backdrop-blur-lg shadow-card"
              : "bg-gradient-to-b from-primary-deep/70 to-transparent"
          )}
        >
          <div
            className={cn(
              "container mx-auto px-4 flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16 lg:h-[72px]" : "h-16 lg:h-[88px]"
            )}
          >
            {/* Logo */}
            <Link to="/" onClick={close} className="flex-shrink-0">
              <img
                src={scrolled ? logoMain : logoLight}
                alt="NexGen Business Advisors"
                className={cn(
                  "w-auto transition-all duration-500",
                  scrolled ? "h-11 lg:h-12" : "h-12 lg:h-16"
                )}
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1">
              {siteConfig.nav.links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={cn(
                    "relative px-3 xl:px-4 py-2 text-[15px] font-bold transition-colors",
                    "after:absolute after:-bottom-0.5 after:left-3 xl:after:left-4 after:h-0.5 after:bg-gold after:transition-all after:duration-300",
                    isActive(l.href)
                      ? "text-gold after:w-5"
                      : cn(
                          scrolled ? "text-foreground" : "text-white",
                          "hover:text-gold after:w-0 hover:after:w-5"
                        )
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA & toggler */}
            <div className="flex items-center gap-3">
              <Link
                to="/#contact"
                className="hidden lg:inline-flex items-center gap-2 bg-gold text-secondary-foreground text-sm font-extrabold px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
              >
                {siteConfig.nav.cta}
              </Link>
              <button
                className={cn(
                  "relative z-[60] flex items-center justify-center w-11 h-11 rounded-sm transition-colors",
                  scrolled
                    ? "bg-primary text-white hover:bg-gold hover:text-primary"
                    : "bg-white/10 text-white border border-white/25 hover:bg-gold hover:text-primary hover:border-gold"
                )}
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <Menu size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========== Drawer ========== */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={cn(
          "fixed inset-0 z-[55] bg-primary-deep/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />

      {/* Slide-in Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[56] h-full w-[80%] max-w-sm bg-card shadow-2xl",
          "flex flex-col transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header (Shared) */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-card">
          <Link to="/" onClick={close} className="flex-1">
            <img
              src={logoMain}
              alt="NexGen Business Advisors"
              className="h-9 w-auto"
            />
          </Link>
          <button
            onClick={close}
            className="flex items-center justify-center w-9 h-9 rounded-sm bg-primary text-white hover:bg-gold hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Desktop Drawer Content ── */}
        <div className="hidden lg:flex flex-col overflow-y-auto w-full h-full p-8 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-foreground mb-4">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              NexGen Business Advisors Ltd is a premier strategic advisory firm, proudly associated with Jou & Co. We provide high-impact business setup, compliance, accounting, and tax advisory services, empowering diaspora investors, foreign corporations, and SMEs with the structured guidance needed to achieve sustainable growth in Nigeria.
            </p>
            <Link
              to="/#contact"
              onClick={close}
              className="inline-flex items-center justify-center bg-gold text-secondary-foreground text-sm font-extrabold px-6 py-3 rounded-sm hover:bg-primary hover:text-white transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 text-gold mt-0.5">
                  <MapPin size={15} />
                </div>
                <p className="text-muted-foreground text-sm leading-tight pt-2">
                  {siteConfig.global.location}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 text-gold">
                  <Phone size={15} />
                </div>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.global.phone}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 text-gold">
                  <Mail size={15} />
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
            <a href="#" aria-label="Facebook" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full hover:bg-gold hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full hover:bg-gold hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-primary text-white flex items-center justify-center rounded-full hover:bg-gold hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* ── Mobile Drawer Content ── */}
        <div className="flex lg:hidden flex-col h-full w-full min-h-0">
          {/* Quick contact strip in drawer */}
          <div className="px-5 py-3 bg-primary text-white/80 flex flex-col gap-1.5">
            <a href={`tel:${siteConfig.global.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-xs hover:text-gold transition-colors">
              <Phone size={12} className="text-gold" /> {siteConfig.global.phone}
            </a>
            <a href={`mailto:${siteConfig.global.email}`} className="flex items-center gap-2 text-xs hover:text-gold transition-colors">
              <Mail size={12} className="text-gold" /> {siteConfig.global.email}
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
                  "group flex items-center justify-between px-4 py-3.5 rounded-sm text-sm font-bold transition-all duration-200 border-l-2",
                  isActive(l.href)
                    ? "bg-muted text-primary border-gold"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/60 hover:border-gold/60"
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
              className="flex items-center justify-center gap-2 w-full bg-gold text-secondary-foreground text-sm font-extrabold px-5 py-3.5 rounded-sm hover:bg-primary hover:text-white transition-colors"
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
