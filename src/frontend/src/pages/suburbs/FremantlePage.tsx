import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function FremantlePage() {
  useMetaTags({
    title: "Bond Cleaning Fremantle Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning in Fremantle, Perth. Expert end of lease cleaning with 100% bond back guarantee. REIWA-standard clean. Free quotes.",
    keywords:
      "bond cleaning Fremantle, end of lease cleaning Fremantle, vacate cleaning Fremantle Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/fremantle",
  });

  return (
    <SuburbPageLayout
      suburbName="Fremantle"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Fremantle Perth"
    >
      <p>
        Moving out of your rental in Fremantle? Tru Bond Back Cleaning Perth
        knows exactly what property managers in Freo expect. We deliver a
        thorough, REIWA-standard clean so you walk away with your full bond
        back.
      </p>

      <h2>Fremantle's Unique Rental Properties Need Expert Care</h2>
      <p>
        Fremantle is a one-of-a-kind suburb. The port city lifestyle, heritage
        buildings, and character homes give Freo its magic — but they also mean
        older properties with specific cleaning needs. Many Fremantle rentals
        feature original timber floors, heritage-listed features, ornate
        cornices, and older bathrooms that need special attention.
      </p>
      <p>
        Property managers in Fremantle are strict about returning homes to their
        original condition. They know every crack, crevice, and cornice in these
        older homes. Our team has cleaned hundreds of properties across
        Fremantle and we know what to look for.
      </p>

      <h2>What We Clean in Fremantle Rentals</h2>
      <p>
        Our comprehensive bond cleaning service in Fremantle covers every area
        of your property:
      </p>
      <ul>
        <li>Kitchen deep clean — oven, stovetop, rangehood, all cupboards</li>
        <li>Bathrooms and toilets — grout scrubbing, mould removal, tiles</li>
        <li>
          Timber and hard floors — vacuumed and mopped with appropriate products
        </li>
        <li>Windows, sashes, tracks, and sills — streak-free finish</li>
        <li>Walls — scuff marks, fingerprints, and crayon removed</li>
        <li>Skirting boards, picture rails, and light fittings cleaned</li>
        <li>Laundry, verandas, and any outdoor areas included</li>
      </ul>
      <p>
        We follow the full REIWA bond cleaning checklist every time. No
        shortcuts, no rubbish results — just a spotless clean your property
        manager will be stoked with.
      </p>

      <h2>100% Bond Back Guarantee in Fremantle</h2>
      <p>
        Tru Bond Back Cleaning Perth offers a 100% bond back guarantee on every
        Fremantle clean. If your landlord or property manager isn't 100%
        satisfied after our clean, we'll come back and re-clean the problem
        areas completely free of charge.
      </p>
      <p>
        We take pride in our work and we stand behind it. In a suburb like
        Fremantle where heritage and character matter, you need cleaners who
        take the same pride in the property that you do. That's us.
      </p>

      <h2>Book Your Fremantle Bond Clean</h2>
      <p>
        Don't leave it to the last minute — book Tru Bond Back Cleaning Perth
        today. We cover all of Fremantle including North Freo, Beaconsfield,
        White Gum Valley, and South Fremantle. Get a free, fixed-price quote by
        filling in our contact form or sending us a WhatsApp message. We're
        available 7 days a week to fit around your moving schedule.
      </p>
    </SuburbPageLayout>
  );
}
