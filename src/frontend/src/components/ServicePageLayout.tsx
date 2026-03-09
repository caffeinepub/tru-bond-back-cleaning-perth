import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  description: React.ReactNode;
  inclusions: string[];
  pricing: { label: string; price: string }[];
  guaranteeText?: string;
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  heroImageAlt,
  description,
  inclusions,
  pricing,
  guaranteeText,
}: ServicePageLayoutProps) {
  return (
    <article className="pt-20">
      {/* Hero banner */}
      <section
        className="relative bg-brand-navy overflow-hidden"
        aria-label="Service hero"
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 rounded-full px-4 py-1.5 text-sm text-green-300 mb-6">
              <CheckCircle className="w-4 h-4" />
              <span>100% Bond Back Guarantee</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight text-shadow-hero font-display">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-brand-green text-white hover:bg-green-700 font-semibold px-6 py-3 h-auto">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-3 h-auto"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">{description}</div>

            {/* What's Included */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 font-display">
                What's Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Pricing card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-card mb-6 sticky top-24">
              <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">
                Pricing Guide
              </h3>
              <ul className="divide-y divide-border">
                {pricing.map((item) => (
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
              <Link to="/contact" className="block">
                <Button className="w-full bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold">
                  Get Free Quote
                </Button>
              </Link>

              {/* Guarantee */}
              {guaranteeText && (
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-800 font-medium">
                      {guaranteeText}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
