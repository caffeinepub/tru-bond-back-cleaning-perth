import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    title: "General Bond Cleaning",
    description:
      "Complete top-to-bottom clean of your entire rental property following the REIWA inspection checklist. Includes all rooms, floors, surfaces, light fittings, fans, skirting boards, and more.",
    image: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    imageAlt:
      "Professional general bond cleaning Perth - complete rental property clean for final inspection",
    href: "/services/bond-cleaning",
    highlights: [
      "All rooms vacuumed & mopped",
      "Skirting boards & doors",
      "Light fittings & fans",
      "Wardrobes inside & out",
    ],
    price: "From $250",
  },
  {
    title: "Carpet Steam Cleaning",
    description:
      "Industrial-grade carpet steam cleaning to remove stains, pet hair, odours, and allergens. Required by most property managers in WA for a successful bond return.",
    image: "/assets/generated/service-carpet-steam-clean.dim_800x500.jpg",
    imageAlt:
      "Professional carpet steam cleaning Perth - remove stains and odours for bond inspection",
    href: "/services/carpet-steam-cleaning",
    highlights: [
      "Industrial steam equipment",
      "Stain & odour removal",
      "Pet hair treatment",
      "All carpet areas",
    ],
    price: "From $80",
  },
  {
    title: "Oven & Kitchen Cleaning",
    description:
      "Deep clean of your oven, rangehood, stovetop, benchtops, cupboards (inside and out), sink, and all kitchen surfaces. The kitchen is the most scrutinised room on inspection day.",
    image: "/assets/generated/service-oven-kitchen-clean.dim_800x500.jpg",
    imageAlt:
      "Professional oven and kitchen bond cleaning Perth - deep clean for rental inspection",
    href: "/services/oven-kitchen-cleaning",
    highlights: [
      "Oven interior & exterior",
      "Rangehood & filters",
      "Cupboards inside/out",
      "Benchtops & splashback",
    ],
    price: "From $80",
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free window cleaning for all windows — interior and exterior — including tracks, sills, and fly screens. Dirty windows are a common reason for failed bond inspections.",
    image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    imageAlt:
      "Professional window cleaning Perth bond back cleaning - streak free windows",
    href: "/services/window-cleaning",
    highlights: [
      "Interior & exterior",
      "Tracks & sills",
      "Fly screens cleaned",
      "Streak-free finish",
    ],
    price: "From $80",
  },
  {
    title: "Bathroom & Toilet Deep Clean",
    description:
      "Thorough deep clean of all bathrooms and toilets — tiles, grout, shower screens, bathtub, sink, toilet, mirrors, and vanity. Mould and soap scum removal included.",
    image: "/assets/generated/service-bathroom-clean.dim_800x500.jpg",
    imageAlt:
      "Professional bathroom and toilet deep cleaning Perth bond cleaning service",
    href: "/services/bathroom-toilet-cleaning",
    highlights: [
      "Tile & grout scrub",
      "Shower screen clean",
      "Mould removal",
      "Toilet inside & out",
    ],
    price: "From $60",
  },
  {
    title: "Wall Washing & Spot Cleaning",
    description:
      "Removal of scuff marks, crayon, grease spots, and general dirt from all wall surfaces. Walls are carefully checked on inspection day — we make sure they pass.",
    image: "/assets/generated/service-wall-washing.dim_800x500.jpg",
    imageAlt:
      "Professional wall washing and spot cleaning Perth - remove scuffs and marks for bond return",
    href: "/services/wall-washing",
    highlights: [
      "Scuff mark removal",
      "Crayon & pen marks",
      "Grease spot treatment",
      "All wall surfaces",
    ],
    price: "From $60",
  },
];

export default function ServicesPage() {
  useMetaTags({
    title: "Bond Cleaning Services Perth | Tru Bond Back Cleaning",
    description:
      "Complete bond cleaning services in Perth: general bond clean, carpet steam cleaning, oven & kitchen, windows, bathrooms, and wall washing. REIWA standard. Free quotes.",
    keywords:
      "bond cleaning services Perth, carpet steam cleaning Perth, oven cleaning Perth, window cleaning Perth, bathroom cleaning Perth, end of lease cleaning WA",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/services",
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="bg-brand-navy py-16 md:py-24"
        aria-label="Services hero"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
              Our Bond Cleaning Services in Perth
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We offer a complete range of professional bond back cleaning
              services for Perth renters. Book individual services or combine
              them for a full package — we cover every corner of your rental.
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
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="py-16 bg-background"
        aria-labelledby="services-list-heading"
      >
        <div className="container mx-auto px-4">
          <h2 id="services-list-heading" className="sr-only">
            All Bond Cleaning Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.article
                key={service.href}
                data-ocid={`services.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card border border-border flex flex-col card-hover group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-brand-navy font-display">
                      {service.title}
                    </h2>
                    <span className="text-sm font-semibold text-brand-green bg-green-50 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link to={service.href} className="block">
                      <Button className="w-full bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 gradient-cta"
        aria-label="Services call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Just send us your property size and we'll recommend the right
            services to pass your final inspection and get your full bond back.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 font-bold px-8 py-4 h-auto"
            >
              Get a Free Recommendation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
