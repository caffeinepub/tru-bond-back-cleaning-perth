import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function ArmadalePage() {
  useMetaTags({
    title: "Bond Cleaning Armadale Perth | Tru Bond Back Cleaning",
    description:
      "Bond cleaning in Armadale, Perth. Professional end of lease cleaning with 100% bond back guarantee. REIWA-standard. Free quotes from Tru Bond Back Cleaning.",
    keywords:
      "bond cleaning Armadale, end of lease cleaning Armadale, vacate cleaning Armadale Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/armadale",
  });

  return (
    <SuburbPageLayout
      suburbName="Armadale"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Armadale Perth"
    >
      <p>
        Moving out of your Armadale rental? Tru Bond Back Cleaning Perth gives
        Armadale tenants a thorough, REIWA-standard bond clean at a fair price.
        We're here to make sure you get every dollar of your bond back.
      </p>

      <h2>Great Value Bond Cleaning in Armadale</h2>
      <p>
        Armadale is one of Perth's most affordable outer suburbs, sitting in the
        south-east of the city near the Armadale Hills. It's a popular spot for
        families, first-time renters, and people who want more space for their
        money. The mix of older established homes and newer builds across the
        Armadale area means our team needs to be flexible — and we are.
      </p>
      <p>
        Even though Armadale is known as great value, that doesn't mean property
        managers here cut corners on inspections. They use the same REIWA
        checklist as any other Perth suburb. A professional bond clean is just
        as important here as it is in any other part of Perth.
      </p>

      <h2>What's Included in Our Armadale Bond Clean</h2>
      <p>
        We clean every area your property manager will inspect, following the
        full REIWA bond cleaning checklist:
      </p>
      <ul>
        <li>Kitchen — oven deep clean, stovetop, rangehood, all cupboards</li>
        <li>
          Bathrooms — tiles, grout, shower screens, mould removal, mirrors
        </li>
        <li>Toilets — full inside and out clean</li>
        <li>
          All floors — hard floors mopped and polished, carpets steam cleaned if
          needed
        </li>
        <li>Windows, tracks, sills, and fly screens cleaned</li>
        <li>Walls — scuff marks and crayon removed</li>
        <li>Skirting boards, light fittings, ceiling fans, and blinds</li>
      </ul>
      <p>
        Whether it's an older brick home in Kelmscott or a new estate house in
        Harrisdale, we apply the same careful approach to every job.
      </p>

      <h2>Our Bond Back Guarantee in Armadale</h2>
      <p>
        Every Armadale bond clean comes with our 100% bond back guarantee. Tru
        Bond Back Cleaning Perth stands behind our work — if your property
        manager isn't happy with any part of the clean, we come back and fix it
        for free. Simple as that.
      </p>
      <p>
        We serve all of Armadale and surrounding suburbs including Kelmscott,
        Byford, Harrisdale, Forrestdale, and Seville Grove. Our team is local
        and available 7 days a week.
      </p>

      <h2>Book a Free Quote Today</h2>
      <p>
        Getting a quote is dead easy. Fill in our quick contact form or send a
        WhatsApp message with your address, property size, and move-out date.
        We'll get back to you with a fixed price — no hidden costs, no hourly
        rates. Just a fair price for a guaranteed clean. Book today and cross
        one big thing off your moving-out list!
      </p>
    </SuburbPageLayout>
  );
}
