import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useMetaTags } from "../hooks/useMetaTags";

const services = [
  {
    title: "General Bond Cleaning",
    description:
      "Full top-to-bottom clean of your entire rental property following the REIWA inspection checklist.",
    image: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    imageAlt:
      "Professional bond cleaning service Perth - spotless rental property",
    href: "/services/bond-cleaning",
  },
  {
    title: "Carpet Steam Cleaning",
    description:
      "Industrial-grade steam cleaning to remove stains, odours, and allergens from all carpet areas.",
    image: "/assets/generated/service-carpet-steam-clean.dim_800x500.jpg",
    imageAlt: "Professional carpet steam cleaning Perth - fresh clean carpets",
    href: "/services/carpet-steam-cleaning",
  },
  {
    title: "Oven & Kitchen Cleaning",
    description:
      "Deep clean of oven, rangehood, stovetop, cupboards, benchtops, and sink — all sparkling.",
    image: "/assets/generated/service-oven-kitchen-clean.dim_800x500.jpg",
    imageAlt: "Professional oven and kitchen cleaning Perth bond clean",
    href: "/services/oven-kitchen-cleaning",
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free clean of all windows inside and out, including tracks, sills, and fly screens.",
    image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    imageAlt: "Professional window cleaning Perth bond cleaning service",
    href: "/services/window-cleaning",
  },
  {
    title: "Bathroom & Toilet Clean",
    description:
      "Thorough deep clean of bathrooms and toilets — tiles, grout, screens, mould removal and more.",
    image: "/assets/generated/service-bathroom-clean.dim_800x500.jpg",
    imageAlt: "Professional bathroom and toilet bond cleaning Perth",
    href: "/services/bathroom-toilet-cleaning",
  },
  {
    title: "Wall Washing",
    description:
      "Removal of scuff marks, crayon, dirt, and grease from all wall surfaces throughout the home.",
    image: "/assets/generated/service-wall-washing.dim_800x500.jpg",
    imageAlt: "Professional wall washing and spot cleaning Perth bond clean",
    href: "/services/wall-washing",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Subiaco, Perth",
    text: "Tru Bond Cleaning did an absolutely brilliant job on our rental. The oven looked brand new and the property manager didn't ask us to re-clean a single thing. Got our full bond back the same week!",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Fremantle, Perth",
    text: "Very impressed with the level of detail. They cleaned areas I'd completely forgotten about — the rangehood filters, the window tracks, even behind the toilet. 100% recommend for anyone moving out.",
    rating: 5,
  },
  {
    name: "Emily K.",
    location: "Joondalup, Perth",
    text: "Booked online, they turned up on time, and the place was spotless. The carpet steam clean got rid of a stain that had been there for years. Property manager was over the moon. Five stars!",
    rating: 5,
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "If your landlord isn't happy, we come back and re-clean for free.",
  },
  {
    icon: CheckCircle,
    title: "REIWA-Standard Checklist",
    desc: "We clean to the Real Estate Institute of WA's full inspection checklist.",
  },
  {
    icon: Award,
    title: "Fully Insured Cleaners",
    desc: "All our professional cleaners are fully insured and background-checked.",
  },
  {
    icon: Clock,
    title: "Same-Day & Weekend Bookings",
    desc: "We work 7 days a week so you can book around your move-out schedule.",
  },
  {
    icon: MapPin,
    title: "All Perth Suburbs",
    desc: "We service every suburb across greater Perth and surrounds.",
  },
  {
    icon: Users,
    title: "Experienced Local Team",
    desc: "Perth-born team with hundreds of successful bond cleans completed.",
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and why is it required?",
    a: `Bond cleaning (also called end of lease cleaning or vacate cleaning) is a thorough top-to-bottom clean of your rental property when you move out. Your landlord or property manager requires it so the property is left in the same condition as when you moved in.

In Western Australia, most lease agreements include a cleaning clause — if you skip it, your landlord can take the cost out of your bond (security deposit). A proper bond clean covers every room, surface, appliance, and fixture in the home.

Think of it like this: you borrowed someone's house for a while, and now you need to hand it back in the same sparkling condition. That's exactly what bond cleaning does!`,
  },
  {
    q: "Why is bond cleaning important?",
    a: `Bond cleaning is important because it helps you get your full bond back. Your bond can be anywhere from $1,000 to $5,000 or more — that's your hard-earned money!

A professional bond clean makes sure every corner of the property is spotless, meeting the property manager's checklist. It also keeps you on good terms with your landlord and protects your rental history. A bad rental reference can make it harder to rent in the future.

Skipping a proper bond clean is one of the most common reasons tenants lose part of their bond in Western Australia. Don't let that happen to you!`,
  },
  {
    q: "How much for a bond clean?",
    a: `The cost of a bond clean in Perth depends on the size of the property. Here's a rough guide:

• 1 bedroom unit: $250 – $350
• 2 bedroom house: $350 – $450
• 3 bedroom house: $450 – $550
• 4 bedroom house: $550 – $700+

Carpet steam cleaning and window cleaning are usually priced separately. Contact Tru Bond Back Cleaning Perth for a free quote tailored to your property size and condition.`,
  },
  {
    q: "What is full bond cleaning?",
    a: `Full bond cleaning covers every single area of your rental property — kitchen, bathrooms, toilets, bedrooms, living areas, laundry, windows, walls, skirting boards, light fittings, fans, ovens, rangehoods, and more.

It goes much deeper than a regular clean. Full bond cleaning follows the REIWA (Real Estate Institute of Western Australia) checklist so your property manager is happy on inspection day.

Full bond cleaning is not just a quick vacuum and mop. It's a detailed, systematic clean of the entire home from ceiling to floor, including inside appliances, cupboards, and all the spots regular cleaning misses.`,
  },
  {
    q: "Which are the top rated bond cleaning companies near me?",
    a: `Here are five top-rated bond cleaning companies in Perth:

1. End of Lease Cleaning Perth (endofleasecleaningperth.com.au) — End of Lease Cleaning Perth delivers premium bond cleaning services across all Perth suburbs. Their trained team follows strict REIWA inspection standards, covering every inch of your property. They offer carpet steam cleaning and window cleaning as add-ons. Their bond back guarantee and same-day availability make them a popular choice among Perth renters. Customers praise their attention to detail and friendly service.

2. Absolute Bond Cleaning (absolutebondcleaning.com.au) — Absolute Bond Cleaning is a well-known Perth-based bond cleaning specialist with years of experience in the industry. They service residential properties of all sizes, from studio apartments to large family homes. Their cleaning team uses eco-friendly products and follows a thorough REIWA checklist. With competitive pricing and a satisfaction guarantee, Absolute Bond Cleaning has earned strong reviews from tenants and property managers alike.

3. Jim's Cleaning Perth (jimscleaning.com.au/locations/perth) — Jim's Cleaning is one of Australia's most recognised cleaning brands. The Perth franchise offers reliable end of lease cleaning, with trained and background-checked cleaners. Their national reputation means consistent service quality. Jim's Cleaning covers all Perth suburbs and offers online bookings. They include a re-clean guarantee if your property manager isn't satisfied, giving renters peace of mind on moving day.

4. Pristine Home Cleaning Perth (pristinehomecleaning.com.au) — Pristine Home Cleaning Perth focuses on high-quality residential cleaning with a strong bond cleaning service. Their team is fully insured and uses hospital-grade cleaning products. They specialise in helping tenants pass their final inspection first time. Pristine Home Cleaning Perth is known for prompt communication, transparent pricing, and thorough cleaning of kitchens, bathrooms, and carpets. They serve all major Perth suburbs with flexible booking times.

5. Tru Bond Back Cleaning Perth (trubondcleaningbrisbane.com) — Tru Bond Back Cleaning Perth is a locally owned and operated bond cleaning company dedicated to helping Perth tenants get their full bond back. Their experienced team follows the REIWA standard cleaning checklist and uses professional-grade equipment. Tru Bond Back Cleaning Perth offers a 100% bond back guarantee — if your landlord isn't satisfied, they'll re-clean for free. With affordable pricing, same-day availability, and friendly local service, they're Perth's go-to choice for stress-free bond cleaning.`,
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: `Professional bond cleaners use specific products for each area:

• Kitchen degreasers: White King Oven Buster, Easy-Off BAM Heavy Duty Cleaner
• Bathroom cleaners: Domestos Bleach, Shower Power
• Glass and window cleaners: Windex Glass Cleaner
• Carpet pre-treatment: Preen Carpet Stain Remover, Exit Mould
• All-purpose cleaners: Spray n' Wipe Multi-Purpose Cleaner, Pine O Cleen
• Mould removers: Exit Mould, Selleys Rapid Mould Killer

Always use products that are safe for your surfaces and ventilate rooms well when using strong chemicals. Professional cleaners know exactly which products work best for each surface so nothing gets damaged.`,
  },
  {
    q: "How much does professional bond cleaning typically cost?",
    a: `Professional bond cleaning in Perth typically costs between $250 and $700+ depending on the property size. A standard 3-bedroom house averages around $450–$550.

Carpet steam cleaning adds $80–$200 depending on the number of rooms. Window cleaning can add another $80–$150.

Most professional companies offer a fixed-price quote so you know exactly what you're paying upfront — no surprise bills at the end. Tru Bond Back Cleaning Perth offers free, no-obligation quotes — contact us today to get your price.`,
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: `For bond cleaning carpets, these products work best:

• Bissell Professional Pet Stain & Odour Remover (bissell.com.au) — great for tough stains and pet smells
• Preen Carpet Stain Remover (preen.com.au) — widely available at Woolworths and Coles
• Rug Doctor Carpet Detergent (rugdoctor.com.au) — designed for carpet cleaning machines
• Vanish Carpet Care (vanish.com.au) — easy-to-use foam for surface stains

For best results, always steam clean carpets after pre-treating stains. Professional carpet steam cleaning is usually required by property managers for bond returns in WA.`,
  },
  {
    q: "How do I choose a reliable bond cleaner?",
    a: `Here's how to pick a reliable bond cleaner in Perth:

• Check they offer a bond back guarantee or re-clean policy
• Read Google and Facebook reviews from real customers
• Make sure they're fully insured
• Ask if they follow the REIWA cleaning checklist
• Get a written fixed-price quote upfront
• Check they have experience with your property type
• Avoid the cheapest quote — quality matters when your bond is on the line

A good bond cleaner communicates clearly, turns up on time, and stands behind their work. If something isn't right, they fix it — no fuss.`,
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: `Yes! You can book Tru Bond Back Cleaning Perth online right here on our website. We offer a 100% satisfaction guarantee — if your property manager isn't happy with the clean, we'll come back and re-clean for free.

Booking is easy: fill in our contact form, tell us your property size and the services you need, and we'll send you a quote within a few hours. We work 7 days a week so we can fit around your moving schedule.`,
  },
  {
    q: "How much is a cleaner per hour in Perth?",
    a: `In Perth, a professional cleaner typically charges between $35 and $65 per hour depending on the type of cleaning and the company. Some specialised services like carpet steam cleaning or high-pressure window cleaning can be priced slightly higher.

Bond cleaning is usually priced as a fixed-rate job rather than hourly, because the price depends on the size and condition of the property rather than the time taken. A fixed price means no nasty surprises on your final bill!`,
  },
  {
    q: "How much is end of lease clean in Australia?",
    a: `End of lease cleaning costs across Australia vary by city and property size. In Perth, you can expect to pay $250–$700+. In Sydney and Melbourne, prices are slightly higher at $300–$800+.

The national average for a 3-bedroom home is around $400–$550 including standard cleaning. Carpet steam cleaning and window cleaning are usually charged separately.

Perth is generally one of the more affordable cities in Australia for bond cleaning, making it easier for tenants to get professional help without breaking the budget.`,
  },
  {
    q: "How much should I pay a cleaner for 3 hours?",
    a: `For a standard 3-hour cleaning session in Perth, you'd typically pay between $105 and $195 based on the hourly rate of $35–$65 per hour.

However, bond cleaning isn't usually done by the hour — it's a full-service fixed-price job that takes as long as needed to meet inspection standards. A proper bond clean on a 3-bedroom home can take 6–10 hours or more. The goal is to pass the final inspection, not to rush through in a set time.`,
  },
  {
    q: "What is the 20-minute rule in cleaning?",
    a: `The 20-minute rule in cleaning means tackling each room or area in focused 20-minute bursts. You clean as much as possible in 20 minutes, move on to another area, then come back for a second pass later. It's a handy trick for regular home cleaning to stay on top of chores without feeling overwhelmed.

Professional bond cleaners don't use this rule — they clean each area until it meets inspection standards, no matter how long it takes. The goal is a spotless result that passes the property manager's final inspection, not just a quick tidy-up.`,
  },
  {
    q: "What is bond back cleaning?",
    a: `Bond back cleaning (also called end of lease cleaning, vacate cleaning, or exit cleaning) is a detailed professional clean of your rental property when you move out. The goal is simple — make the property look exactly like it did when you moved in so your landlord returns your full security deposit (bond).

It covers every area of the home from top to bottom: kitchens, bathrooms, toilets, bedrooms, living areas, laundry, windows, walls, floors, carpets, light fittings, fans, appliances, and more. Bond back cleaning gives you the best chance of walking away with every dollar of your bond in your pocket.`,
  },
  {
    q: "Is bond cleaning required in WA?",
    a: `Yes, bond cleaning is generally required in Western Australia. Most residential tenancy agreements in WA include a clause requiring tenants to return the property in a clean condition.

Under the Residential Tenancies Act 1987 (WA), if you don't leave the property clean, your landlord can claim the cost of professional cleaning from your bond. The property manager will compare the property's condition to the entry condition report — if the cleaning falls short, you could lose part or all of your bond.

To protect your bond, always arrange a professional bond clean before your final inspection. It's the safest way to make sure you get every dollar back.`,
  },
  {
    q: "How much is vacate cleaning in Perth?",
    a: `Vacate cleaning in Perth costs between $250 and $700+ depending on your property size. Here's a quick guide:

• Studio/1 bedroom: $250 – $350
• 2 bedrooms: $350 – $450
• 3 bedrooms: $450 – $550
• 4+ bedrooms: $550 – $700+

Add-ons like carpet steam cleaning ($80–$200) and window cleaning ($80–$150) are usually priced separately. Contact Tru Bond Back Cleaning Perth for a free, no-obligation quote tailored to your exact property.`,
  },
];

export default function HomePage() {
  useMetaTags({
    title: "Tru Bond Back Cleaning Perth | 100% Bond Back Guarantee",
    description:
      "Perth's trusted bond back cleaning experts. Professional end of lease cleaning with 100% bond back guarantee. Serving all Perth suburbs. Free quotes available.",
    keywords:
      "bond cleaning Perth, end of lease cleaning Perth, vacate cleaning Perth, bond back cleaning Perth, REIWA bond clean",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/",
  });

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        <img
          src="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
          alt="Professional bond back cleaning Perth - spotless clean rental property ready for inspection"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Perth's Most Trusted Bond Cleaners</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-shadow-hero font-display">
              Get Your Full Bond Back —{" "}
              <span className="text-green-300">Guaranteed</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Perth's trusted bond back cleaning experts. We clean your rental
              so spotlessly that your landlord will hand back your full bond, no
              questions asked.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="bg-brand-green text-white hover:bg-green-700 font-bold px-8 py-4 h-auto text-base shadow-hero"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  data-ocid="hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy font-bold px-8 py-4 h-auto text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {[
              { icon: Shield, text: "Bond Back Guarantee" },
              { icon: CheckCircle, text: "REIWA Checklist" },
              { icon: Star, text: "5-Star Rated" },
              { icon: Clock, text: "Same Day Available" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-white/90 text-sm"
              >
                <Icon className="w-4 h-4 text-green-300" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section
        className="py-16 gradient-section"
        aria-labelledby="trust-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="trust-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display"
            >
              Why Perth Renters Trust Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We take the stress out of moving out. Here's why hundreds of Perth
              tenants choose Tru Bond Back Cleaning every year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustSignals.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border card-hover"
              >
                <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-2 font-display">
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

      {/* Services Overview */}
      <section
        className="py-16 bg-background"
        aria-labelledby="services-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display"
            >
              Our Bond Cleaning Services in Perth
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a complete range of bond back cleaning services. You can
              book individual services or combine them for the full package.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.href}
                data-ocid={`services.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-xl overflow-hidden shadow-card border border-border card-hover group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-2 font-display">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold px-8 py-3 h-auto">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-16 bg-brand-navy"
        aria-labelledby="how-it-works-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="how-it-works-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-display"
            >
              How It Works — 3 Easy Steps
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Getting your bond back has never been simpler. Here's what happens
              from booking to bond return.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Book Online or Call Us",
                desc: "Fill in our quick contact form or send us a WhatsApp message. Tell us your property size and services you need. We'll send a fixed-price quote within hours.",
              },
              {
                step: "02",
                title: "Our Team Arrives On Time",
                desc: "Our experienced cleaners arrive on the day you choose, fully equipped with professional-grade cleaning products. We work methodically through your property from top to bottom.",
              },
              {
                step: "03",
                title: "You Get Your Full Bond Back",
                desc: "Once we're done, your property will pass the final inspection. If your property manager finds any issues, we come back and fix it free of charge. Your bond stays in your pocket.",
              },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white font-display">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  {title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist image section */}
      <section
        className="py-16 bg-background"
        aria-label="Bond cleaning checklist"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display">
                We Follow the Full REIWA Bond Cleaning Checklist
              </h2>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                The Real Estate Institute of Western Australia (REIWA) sets the
                standard for what property managers check on final inspection
                day. Our team cleans to this exact checklist every single time —
                nothing gets missed.
              </p>
              <ul className="grid grid-cols-2 gap-2.5 mb-8">
                {[
                  "All rooms vacuumed & mopped",
                  "Kitchen deep cleaned",
                  "Oven & rangehood",
                  "Bathrooms & toilets",
                  "Windows inside & out",
                  "Walls spot cleaned",
                  "Carpets steam cleaned",
                  "Skirting boards wiped",
                  "Light fittings dusted",
                  "Wardrobe interiors",
                  "Fly screens cleaned",
                  "Laundry cleaned",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-brand-navy text-white hover:bg-brand-green transition-colors font-semibold px-6 py-3 h-auto">
                  Book a Bond Clean Today{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/assets/generated/bond-cleaning-checklist.dim_800x500.jpg"
                alt="REIWA bond cleaning checklist for Perth rental inspections - comprehensive cleaning standards"
                className="rounded-2xl shadow-card-lg w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-brand-green text-white rounded-xl p-4 shadow-card-lg">
                <div className="text-2xl font-bold font-display">100%</div>
                <div className="text-xs text-green-100">Bond Back Rate</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-16 gradient-section"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display"
            >
              What Perth Renters Say About Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from real Perth customers who got their full bond
              back.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border"
              >
                <div className="flex gap-0.5 mb-4">
                  {["a", "b", "c", "d", "e"].slice(0, t.rating).map((n) => (
                    <Star
                      key={n}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-semibold text-brand-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-display"
            >
              Bond Cleaning Perth — Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about bond cleaning in Perth, WA.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                // biome-ignore lint/suspicious/noArrayIndexKey: stable FAQ list
                key={i}
                value={`faq-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-card border border-border rounded-xl px-6 shadow-xs"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-green py-5 font-display">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground text-sm leading-relaxed pb-5 whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 gradient-cta"
        aria-label="Book bond cleaning call to action"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to Get Your Bond Back?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              Book Perth's most trusted bond cleaning team today. We guarantee
              your full bond return or we re-clean for free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-brand-green hover:bg-white/90 font-bold px-8 py-4 h-auto text-base shadow-hero"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 h-auto text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
