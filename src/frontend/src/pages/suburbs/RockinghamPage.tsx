import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function RockinghamPage() {
  useMetaTags({
    title: "Bond Cleaning Rockingham Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning in Rockingham, Perth. Expert vacate cleaning with 100% bond back guarantee. REIWA checklist standard. Free quotes.",
    keywords:
      "bond cleaning Rockingham, end of lease cleaning Rockingham, vacate cleaning Rockingham Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/rockingham",
  });

  return (
    <SuburbPageLayout
      suburbName="Rockingham"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Rockingham Perth"
    >
      <p>
        Moving out of a rental in Rockingham? Tru Bond Back Cleaning Perth
        serves the entire Rockingham area. Our expert team delivers a thorough
        REIWA-standard bond clean so you get every dollar of your bond back.
      </p>

      <h2>Rockingham's Rental Market — What You Need to Know</h2>
      <p>
        Rockingham is a popular beachside suburb south of Perth. Families love
        it for the beautiful beaches, parks, and relaxed lifestyle. Rockingham
        also has a large population of Defence families from HMAS Stirling on
        Garden Island — and Defence families move house a lot.
      </p>
      <p>
        Because of this high rental turnover, property managers in Rockingham
        are experienced and efficient. They know the REIWA inspection checklist
        inside out and they check every detail. Modern homes and units across
        Rockingham need a professional-quality clean to pass inspection first
        time.
      </p>

      <h2>What We Cover in Your Rockingham Bond Clean</h2>
      <p>
        Our Rockingham bond cleaning service covers every area your property
        manager will inspect:
      </p>
      <ul>
        <li>Kitchen — oven, rangehood, stovetop, benchtops, sink, cupboards</li>
        <li>Bathrooms — shower screens, tiles, grout, taps, mirrors</li>
        <li>Toilets — inside bowl, cistern, seat, and floor area</li>
        <li>
          All floors — hard floors vacuumed and mopped, carpets steam cleaned
        </li>
        <li>Windows — inside and outside, including tracks and sills</li>
        <li>Walls — scuff marks, handprints, and crayon removed</li>
        <li>Laundry, outdoor areas, and garage included on request</li>
      </ul>
      <p>
        We use the full REIWA bond cleaning checklist so nothing gets missed.
        Every job we do in Rockingham meets the same high standard — because
        your bond is worth it.
      </p>

      <h2>Our Bond Back Guarantee</h2>
      <p>
        Tru Bond Back Cleaning Perth gives you a 100% bond back guarantee on
        every Rockingham clean. If your property manager isn't satisfied after
        we've done our job, we'll return and re-clean for free. No fuss, no
        extra charges — we sort it out.
      </p>
      <p>
        We cover all of Rockingham including Safety Bay, Waikiki, Warnbro, Port
        Kennedy, and Baldivis. Our team is local, reliable, and knows the area
        well.
      </p>

      <h2>Book Your Bond Clean in Rockingham Today</h2>
      <p>
        Ready to book? Just fill in our contact form or send a WhatsApp message
        to get a free, fixed-price quote. We'll confirm your date quickly and
        turn up on time with all the gear needed to make your property sparkle.
        We work 7 days a week — including weekends and public holidays — to fit
        around your busy moving schedule.
      </p>
    </SuburbPageLayout>
  );
}
