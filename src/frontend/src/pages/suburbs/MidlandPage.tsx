import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function MidlandPage() {
  useMetaTags({
    title: "Bond Cleaning Midland Perth | Tru Bond Back Cleaning",
    description:
      "Bond cleaning in Midland, Perth. Professional vacate cleaning with 100% bond back guarantee. Full REIWA checklist standard. Book Tru Bond Back Cleaning today.",
    keywords:
      "bond cleaning Midland, end of lease cleaning Midland, vacate cleaning Midland Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/midland",
  });

  return (
    <SuburbPageLayout
      suburbName="Midland"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Midland Perth"
    >
      <p>
        Heading out of your Midland rental? Tru Bond Back Cleaning Perth covers
        all of Midland and the Swan Valley region. Our team delivers a spotless,
        REIWA-standard bond clean every time so you get your full bond back
        without the stress.
      </p>

      <h2>Midland Rentals — What Our Team Knows</h2>
      <p>
        Midland sits at the eastern gateway of Perth, right on the edge of the
        beautiful Swan Valley wine region. It's a busy hub with a growing
        population of families, healthcare workers from Swan Districts Hospital,
        and people who love the river and valley lifestyle.
      </p>
      <p>
        Midland has a solid mix of older established homes and character
        properties that have been in families for generations. Older kitchens,
        original bathroom tiles, and years of life lived in these homes means
        they need a thorough, careful clean at the end of a tenancy. We know
        exactly what it takes.
      </p>

      <h2>Full Bond Cleaning in Midland — What We Do</h2>
      <p>
        Our Midland bond cleaning service follows the full REIWA checklist. We
        cover every spot your property manager will check:
      </p>
      <ul>
        <li>Kitchen — full oven clean, stovetop, rangehood, benchtops, sink</li>
        <li>
          Bathrooms — grout scrubbed, mould treated, tiles and screens sparkling
        </li>
        <li>All toilets cleaned thoroughly inside and out</li>
        <li>
          Hard floors vacuumed and mopped, carpets steam cleaned on request
        </li>
        <li>Windows and sliding doors — tracks, sills, and glass cleaned</li>
        <li>Walls — scuff marks, grease, and fingerprints removed</li>
        <li>Laundry, patio, and garage cleaned on request</li>
      </ul>
      <p>
        We treat every property — whether it's a heritage home in Glen Forrest
        or a newer build in Midvale — with the same high level of care.
      </p>

      <h2>100% Bond Back Guarantee — Midland</h2>
      <p>
        Tru Bond Back Cleaning Perth backs every Midland job with our 100% bond
        back guarantee. If your property manager isn't satisfied with any part
        of the clean, we'll return and sort it out at no extra cost. No
        arguments, no delays — we fix it and you keep your bond.
      </p>
      <p>
        We cover Midland, Midvale, Guildford, Swan View, Baskerville, and all
        surrounding Swan Valley suburbs. We're local and we know the area well.
      </p>

      <h2>Get Your Free Midland Bond Cleaning Quote</h2>
      <p>
        Contact us today for a free, no-obligation quote on your Midland bond
        clean. Fill in our quick form or send a WhatsApp message. We'll get back
        to you with a fixed price based on your property size. We work 7 days a
        week so we can always fit around your move-out date. Let Tru Bond Back
        Cleaning Perth take the stress out of moving!
      </p>
    </SuburbPageLayout>
  );
}
