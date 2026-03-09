import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function JoondalupPage() {
  useMetaTags({
    title: "Bond Cleaning Joondalup Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning in Joondalup, Perth. Full REIWA-standard end of lease clean with 100% bond back guarantee. Book today for a free quote.",
    keywords:
      "bond cleaning Joondalup, end of lease cleaning Joondalup, vacate cleaning Joondalup Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/joondalup",
  });

  return (
    <SuburbPageLayout
      suburbName="Joondalup"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Joondalup Perth"
    >
      <p>
        Moving out of your Joondalup rental? Tru Bond Back Cleaning Perth covers
        all of Perth's northern hub — and we know exactly what property managers
        up here expect. Let us take care of the clean so you can focus on your
        move.
      </p>

      <h2>Why Joondalup Families Choose Tru Bond Cleaning</h2>
      <p>
        Joondalup is Perth's major northern centre. Families, students from
        Edith Cowan University, and workers from the CBD all call Joondalup
        home. The suburb has a huge mix of rental properties — from brand new
        townhouses in Edgewater to larger 3 and 4 bedroom family homes near
        Joondalup Resort.
      </p>
      <p>
        Carpet cleaning is one of the most common requirements for bond return
        in Joondalup. Families with kids and pets often need a thorough carpet
        steam clean before final inspection. Our professional steam cleaning
        service removes stains, odours, and allergens that regular vacuuming
        leaves behind.
      </p>

      <h2>Our Full Bond Cleaning Service in Joondalup</h2>
      <p>
        We clean every part of your Joondalup property to REIWA inspection
        standard. Here's what we cover:
      </p>
      <ul>
        <li>
          Full kitchen clean — oven, rangehood filters, stovetop, splashback
        </li>
        <li>All bathrooms and toilets — limescale, mould, soap scum removed</li>
        <li>
          Carpet steam cleaning — removes stains, pet hair, and odours from all
          carpeted areas
        </li>
        <li>Windows, sliding door tracks, and fly screens cleaned</li>
        <li>Garage and outdoor laundry included on request</li>
        <li>Skirting boards, light fittings, ceiling fans wiped down</li>
        <li>Inside wardrobes, linen cupboards, and all drawers cleaned</li>
      </ul>
      <p>
        We follow the full REIWA bond cleaning checklist. Every area that your
        property manager will inspect gets the same thorough attention.
      </p>

      <h2>100% Bond Back Guarantee for Joondalup Tenants</h2>
      <p>
        Tru Bond Back Cleaning Perth backs every Joondalup clean with a 100%
        bond back guarantee. If your property manager raises any issues with our
        clean, we return and re-clean at zero extra cost. That's our promise,
        and we keep it every time.
      </p>
      <p>
        Whether you're in Joondalup, Ocean Reef, Currambine, or Beldon, we've
        got your bond clean covered. Our local team knows the area well and can
        get to you quickly.
      </p>

      <h2>Get a Free Quote for Your Joondalup Bond Clean</h2>
      <p>
        Getting a free quote is easy — just contact us via our website form or
        WhatsApp. Tell us how many bedrooms, whether you need carpet steam
        cleaning, and when you need the clean done. We'll send a fixed-price
        quote back to you fast. We work 7 days a week, including weekends, to
        suit your move-out schedule.
      </p>
    </SuburbPageLayout>
  );
}
