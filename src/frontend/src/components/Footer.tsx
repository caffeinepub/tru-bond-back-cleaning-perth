import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Shield, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" aria-label="Site footer">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_400x150.png"
              alt="Tru Bond Back Cleaning Perth Logo"
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/75 leading-relaxed mb-4">
              Perth's trusted bond back cleaning experts. We help tenants get
              their full bond back — guaranteed.
            </p>
            <div className="flex items-center gap-1.5 text-brand-gold mb-2">
              {["s1", "s2", "s3", "s4", "s5"].map((n) => (
                <Star key={n} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-white/75 text-sm ml-1">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/75">
              <Shield
                className="w-4 h-4 text-brand-green-light flex-shrink-0"
                style={{ color: "oklch(0.72 0.14 155)" }}
              />
              <span>100% Bond Back Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Get Free Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                {
                  name: "General Bond Cleaning",
                  href: "/services/bond-cleaning",
                },
                {
                  name: "Carpet Steam Cleaning",
                  href: "/services/carpet-steam-cleaning",
                },
                {
                  name: "Oven & Kitchen Cleaning",
                  href: "/services/oven-kitchen-cleaning",
                },
                { name: "Window Cleaning", href: "/services/window-cleaning" },
                {
                  name: "Bathroom & Toilet Clean",
                  href: "/services/bathroom-toilet-cleaning",
                },
                { name: "Wall Washing", href: "/services/wall-washing" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-white/75 hover:text-white transition-colors group"
                  aria-label="Contact Tru Bond Cleaning Perth on WhatsApp"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                  <div>
                    <div className="font-medium text-white">0488 841 883</div>
                    <div className="text-xs text-white/50">WhatsApp only</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                <div>
                  <div className="text-sm text-white/75">All Perth Suburbs</div>
                  <div className="text-xs text-white/50">Western Australia</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                <div>
                  <div className="text-sm text-white/75">
                    Mon–Sat: 7am – 7pm
                  </div>
                  <div className="text-sm text-white/75">Sun: 8am – 5pm</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/50 text-center md:text-left">
            © {currentYear} Tru Bond Back Cleaning Perth. All rights reserved.
          </p>
          <p className="text-sm text-white/50 text-center md:text-right">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
