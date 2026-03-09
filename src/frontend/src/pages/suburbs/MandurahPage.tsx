import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function MandurahPage() {
  useMetaTags({
    title: "Bond Cleaning Mandurah Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning in Mandurah. Full end of lease clean with 100% bond back guarantee. REIWA-standard checklist. Contact Tru Bond Back Cleaning today.",
    keywords:
      "bond cleaning Mandurah, end of lease cleaning Mandurah, vacate cleaning Mandurah",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/mandurah",
  });

  return (
    <SuburbPageLayout
      suburbName="Mandurah"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Mandurah Perth"
    >
      <p>
        Moving out of a rental in Mandurah? Tru Bond Back Cleaning Perth
        services the entire Mandurah area, including the canals and waterfront
        estates. We make sure your rental is spotless so you get your full bond
        back.
      </p>

      <h2>Why Mandurah Rentals Need a Specialist Bond Clean</h2>
      <p>
        Mandurah is about an hour south of Perth along the coast. It's famous
        for its beautiful canals, waterways, and relaxed lifestyle. Mandurah
        attracts retirees, holiday renters, and families — and it has a very
        active property management scene.
      </p>
      <p>
        Many Mandurah rental properties are older homes or holiday-style
        properties that haven't been renovated in years. These properties
        accumulate grime in ways that newer homes don't — think older ovens,
        grout staining in bathrooms, and watermarks on windows near the canals.
        Our team handles all of it with ease.
      </p>

      <h2>Our Bond Cleaning Service in Mandurah</h2>
      <p>
        We work through the complete REIWA bond cleaning checklist at every
        Mandurah property. Here's what we clean:
      </p>
      <ul>
        <li>Kitchen — full oven clean inside and out, stovetop, rangehood</li>
        <li>
          Bathrooms — tiles, grout, shower screens, mirrors, sinks, and taps
        </li>
        <li>All toilets — thorough clean inside and out</li>
        <li>Floors — hard floors mopped, carpets steam cleaned on request</li>
        <li>
          Windows — inside and out including canal-facing windows that collect
          salt and dust
        </li>
        <li>Walls, skirtings, light fittings, and ceiling fans</li>
        <li>Laundry and any outdoor entertaining areas included</li>
      </ul>
      <p>
        Property managers in Mandurah are thorough. We make sure every item on
        the checklist is ticked off so your inspection goes without a hitch.
      </p>

      <h2>100% Bond Back Guarantee — Mandurah</h2>
      <p>
        Tru Bond Back Cleaning Perth guarantees your bond back on every Mandurah
        clean. If your property manager finds any issue with our work, we come
        back and re-clean for free — no drama, no excuses. That's our commitment
        to every tenant we work with.
      </p>
      <p>
        We cover all areas of Mandurah including Halls Head, Falcon, Dawesville,
        Dudley Park, and the canal estates. Getting to you is never a problem.
      </p>

      <h2>Get Your Free Mandurah Bond Clean Quote</h2>
      <p>
        Book your Mandurah bond clean today. Fill in our online contact form or
        send us a WhatsApp message with your property details and move-out date.
        We'll reply with a fixed-price quote fast — no hourly rates, no surprise
        bills. Just a fair, upfront price and a guaranteed result.
      </p>
    </SuburbPageLayout>
  );
}
