import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// Extract all section IDs from hash-based nav links
const HASH_LINKS = siteConfig.nav.links.filter((l) => l.href.startsWith("/#"));
const SECTION_IDS = HASH_LINKS.map((l) => l.href.replace("/#", ""));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

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
          // Trigger when the section occupies ≥ 40% of the viewport
          threshold: 0.4,
          // Shrink top margin to account for fixed navbar height
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  // Reset activeSection when hash changes via scroll-jump (e.g., direct link)
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location.hash]);

  /**
   * Returns true when a nav link should be highlighted.
   *
   * - Hash links  (e.g. /#about)  → active when on "/" AND the section is in view
   * - Page links  (e.g. /audit-taxation) → active when pathname matches exactly
   */
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={close}>
            <img
              src={logo}
              alt="NextGen Business Advisors"
              className="h-48 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={cn(
                  "relative text-sm font-medium transition-colors pb-0.5",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:transition-all after:duration-300",
                  isActive(l.href)
                    ? "text-primary font-semibold after:bg-primary after:opacity-100"
                    : "text-muted-foreground hover:text-primary after:bg-primary after:opacity-0 hover:after:opacity-40"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {siteConfig.nav.cta}
            </Link>
          </div>

          {/* Hamburger — visible below lg */}
          <button
            className="lg:hidden relative z-[60] flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              )}
            >
              <X size={22} />
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
              )}
            >
              <Menu size={22} />
            </span>
          </button>
        </div>
      </nav>

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
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <Link to="/" onClick={close}>
            <img
              src={logo}
              alt="NextGen Business Advisors"
              className="h-36 w-auto brightness-110"
            />
          </Link>
          <button
            onClick={close}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
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
          <p className="text-center text-xs text-muted-foreground/60 pt-1">
            {siteConfig.global.phone}
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
