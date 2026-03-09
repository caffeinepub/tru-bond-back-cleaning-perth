import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  { name: "General Bond Cleaning", href: "/services/bond-cleaning" },
  { name: "Carpet Steam Cleaning", href: "/services/carpet-steam-cleaning" },
  { name: "Oven & Kitchen Cleaning", href: "/services/oven-kitchen-cleaning" },
  { name: "Window Cleaning", href: "/services/window-cleaning" },
  {
    name: "Bathroom & Toilet Clean",
    href: "/services/bathroom-toilet-cleaning",
  },
  { name: "Wall Washing", href: "/services/wall-washing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-card border-b border-border"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            data-ocid="nav.home_link"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_400x150.png"
              alt="Tru Bond Back Cleaning Perth Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            <Link
              to="/"
              data-ocid="nav.home_link"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-brand-navy rounded-md transition-colors"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                data-ocid="nav.services_link"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-brand-navy rounded-md transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div
                  data-ocid="nav.services_link"
                  className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-card-lg border border-border py-2 z-50"
                  role="menu"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-brand-navy transition-colors"
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              data-ocid="nav.about_link"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-brand-navy rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              data-ocid="nav.contact_link"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-brand-navy rounded-md transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-brand-green hover:text-brand-navy transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0488 841 883</span>
            </a>
            <Link to="/contact">
              <Button
                data-ocid="nav.quote_button"
                className="bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold"
              >
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-card-lg">
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            <Link
              to="/"
              data-ocid="nav.home_link"
              className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Home
            </Link>

            <button
              type="button"
              className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors w-full"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              <span data-ocid="nav.services_link">Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-1 border-l-2 border-brand-green pl-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="py-2 text-sm text-muted-foreground hover:text-brand-navy transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/about"
              data-ocid="nav.about_link"
              className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              data-ocid="nav.contact_link"
              className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-border mt-2">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-brand-green"
              >
                <Phone className="w-4 h-4" />
                0488 841 883
              </a>
              <Link to="/contact" className="block mt-2">
                <Button
                  data-ocid="nav.quote_button"
                  className="w-full bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
