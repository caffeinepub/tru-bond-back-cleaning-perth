import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const suburbs = [
  { name: "Subiaco", path: "/suburbs/subiaco" },
  { name: "Fremantle", path: "/suburbs/fremantle" },
  { name: "Joondalup", path: "/suburbs/joondalup" },
  { name: "Rockingham", path: "/suburbs/rockingham" },
  { name: "Mandurah", path: "/suburbs/mandurah" },
  { name: "Armadale", path: "/suburbs/armadale" },
  { name: "Midland", path: "/suburbs/midland" },
  { name: "Osborne Park", path: "/suburbs/osborne-park" },
  { name: "Baldivis", path: "/suburbs/baldivis" },
  { name: "Clarkson", path: "/suburbs/clarkson" },
];

const pricingGuide = [
  { label: "Studio / 1 Bedroom", price: "$250 – $350" },
  { label: "2 Bedroom", price: "$350 – $450" },
  { label: "3 Bedroom", price: "$450 – $550" },
  { label: "4 Bedroom+", price: "$550 – $700+" },
];

interface SuburbPageLayoutProps {
  suburbName: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
}

export default function SuburbPageLayout({
  suburbName,
  heroImage,
  heroImageAlt,
  children,
}: SuburbPageLayoutProps) {
  const otherSuburbs = suburbs.filter((s) => s.name !== suburbName);

  return (
    <article className="pt-20">
      {/* Hero Banner */}
      <section
        className="relative bg-brand-navy overflow-hidden"
        aria-label={`Bond cleaning ${suburbName} hero`}
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/60" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 text-sm text-green-300 mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>Serving {suburbName} & Surrounds</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-display">
              Bond Cleaning in {suburbName}, Perth
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Professional end of lease cleaning in {suburbName}. We follow the
              full REIWA checklist and guarantee your bond back — or we re-clean
              for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" data-ocid="suburb.primary_button">
                <Button className="bg-brand-green text-white hover:bg-green-700 font-semibold px-6 py-3 h-auto">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.secondary_button"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-3 h-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-foreground [&_h2]:font-display [&_h2]:text-brand-navy [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:leading-relaxed [&_ul]:space-y-2 [&_li]:text-foreground">
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card sticky top-24 space-y-6">
              {/* Pricing Guide */}
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">
                  Pricing Guide — {suburbName}
                </h3>
                <ul className="divide-y divide-border">
                  {pricingGuide.map((item) => (
                    <li key={item.label} className="flex justify-between py-3">
                      <span className="text-foreground text-sm">
                        {item.label}
                      </span>
                      <span className="font-semibold text-brand-navy text-sm">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3 mb-4">
                  *Prices are a guide only. Contact us for a tailored quote.
                </p>
                <Link
                  to="/contact"
                  className="block"
                  data-ocid="suburb.save_button"
                >
                  <Button className="w-full bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800 font-medium">
                    100% Bond Back Guarantee — if your landlord isn't satisfied,
                    we re-clean for free.
                  </p>
                </div>
              </div>

              {/* Internal Links to Other Suburbs */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Other Perth Suburbs We Serve
                </h4>
                <ul className="space-y-2">
                  {otherSuburbs.map((suburb) => (
                    <li key={suburb.path}>
                      <Link
                        to={suburb.path}
                        className="text-sm text-brand-green hover:text-green-700 hover:underline transition-colors flex items-center gap-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                        Bond Cleaning {suburb.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
