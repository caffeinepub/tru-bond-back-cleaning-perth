import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMetaTags } from "../hooks/useMetaTags";

const values = [
  {
    icon: Shield,
    title: "Reliable",
    desc: "We turn up when we say we will, and we get the job done right. No cancellations, no excuses.",
  },
  {
    icon: CheckCircle,
    title: "Thorough",
    desc: "We don't take shortcuts. Every corner, every surface, every fixture gets the attention it deserves.",
  },
  {
    icon: Heart,
    title: "Honest",
    desc: "Upfront pricing, no hidden fees, and honest advice. If something can't be fixed, we'll tell you.",
  },
  {
    icon: Award,
    title: "Affordable",
    desc: "Professional quality without the premium price tag. We believe everyone deserves to get their bond back.",
  },
];

export default function AboutPage() {
  useMetaTags({
    title: "About Tru Bond Back Cleaning Perth | Local Bond Cleaning Experts",
    description:
      "Tru Bond Back Cleaning Perth is a locally owned bond cleaning company dedicated to helping Perth tenants get their full bond back. Learn about our team and values.",
    keywords:
      "about Tru Bond Cleaning Perth, local bond cleaners Perth, Perth bond cleaning company, end of lease cleaning team Perth WA",
    ogImage: "/assets/generated/team-bond-cleaners-perth.dim_800x500.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/about",
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="bg-brand-navy py-16 md:py-24"
        aria-label="About page hero"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-6">
                <Users className="w-4 h-4 text-green-300" />
                <span>Locally owned &amp; operated in Perth, WA</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Perth's Bond Cleaning Specialists — We're Locals, Just Like You
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                We started Tru Bond Back Cleaning Perth because we understood
                the stress of moving out. As Perth locals, we've seen too many
                tenants lose part of their bond simply because the cleaning
                wasn't up to standard. We're here to fix that.
              </p>
              <Link to="/contact">
                <Button className="bg-brand-green text-white hover:bg-green-700 font-semibold px-6 py-3 h-auto">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/generated/team-bond-cleaners-perth.dim_800x500.jpg"
                alt="Tru Bond Back Cleaning Perth team - professional bond cleaners in blue and green uniforms ready for work"
                className="rounded-2xl shadow-card-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-16 bg-background"
        aria-labelledby="our-story-heading"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              id="our-story-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 font-display"
            >
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p>
                Tru Bond Back Cleaning Perth was born from a simple idea: every
                tenant deserves to get their full bond back. Moving out of a
                rental is already stressful enough — packing, logistics,
                changing addresses, setting up a new place. The last thing you
                need is to lose hundreds or thousands of dollars because of
                cleaning.
              </p>
              <p>
                Our founder is a Perth local who spent years working in the
                property management industry. He saw firsthand how often tenants
                lost bond money not because they were bad tenants, but simply
                because they didn't know exactly what property managers were
                looking for on inspection day. That knowledge — knowing exactly
                what needs to be cleaned, how to clean it, and what products to
                use — is what sets professional bond cleaners apart.
              </p>
              <p>
                We built Tru Bond Back Cleaning Perth around that knowledge.
                Every member of our team is trained to clean specifically for
                rental inspections. We follow the REIWA (Real Estate Institute
                of Western Australia) checklist because that's exactly what
                property managers use when they inspect your property.
              </p>
              <p>
                Since opening our doors, we've helped hundreds of Perth tenants
                successfully pass their bond inspections and walk away with
                their full deposit. We're proud of our track record, and we back
                every single job with our 100% Bond Back Guarantee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-12 gradient-section" aria-label="Our guarantee">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/about-bond-back-guarantee.dim_800x500.jpg"
                alt="Bond back guarantee - Tru Bond Cleaning Perth hands keys to satisfied tenant with certificate"
                className="rounded-2xl shadow-card-lg w-full"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-4 font-display">
                Our 100% Bond Back Guarantee
              </h2>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                We're so confident in the quality of our work that we back every
                bond clean with our 100% Bond Back Guarantee. Here's what it
                means:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "If your property manager finds any cleaning issues within 72 hours of our clean, we come back and re-clean those areas — completely free of charge.",
                  "No arguments, no excuses. We show up and fix it.",
                  "We've been doing this long enough to know what property managers look for, which is why we rarely need to use our guarantee.",
                  "But it's there, because we believe your bond is your money — and you should keep it.",
                ].map((item) => (
                  <li
                    key={item.slice(0, 20)}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold px-6 py-3 h-auto">
                  Book a Bond Clean <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background" aria-labelledby="values-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="values-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display"
            >
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              These four values guide everything we do at Tru Bond Back Cleaning
              Perth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-card rounded-xl p-6 shadow-card border border-border"
              >
                <div className="w-14 h-14 bg-brand-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 font-display">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 gradient-cta"
        aria-label="About page call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Ready to Work With Perth's Best Bond Cleaners?
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Book online today and join hundreds of Perth tenants who got their
            full bond back with Tru Bond Back Cleaning Perth.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 font-bold px-8 py-4 h-auto"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
