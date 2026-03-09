import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>What is Professional Bond Cleaning in Perth?</h2>
    <p>
      Bond cleaning (also called end of lease cleaning or vacate cleaning) is
      the most thorough clean your rental property will ever receive. When you
      move out of a rental in Perth, your landlord or property manager checks
      the property against your entry condition report. If the place isn't
      spotless, they take the cleaning cost straight out of your bond — and that
      can be thousands of dollars.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, we take that stress away completely. Our
      experienced team cleans every single area of your home — from ceiling fans
      to floor tiles — following the REIWA (Real Estate Institute of Western
      Australia) inspection checklist. We don't leave until the job is done
      right.
    </p>

    <h2>Why Professional Bond Cleaning Beats DIY Every Time</h2>
    <p>
      A lot of tenants try to do their own bond clean and end up losing part of
      their bond because they miss things that property managers specifically
      look for. DIY cleaning often misses areas like oven interiors, rangehood
      filters, grout between tiles, inside cupboards, window tracks, and light
      fittings.
    </p>
    <p>
      Our professional cleaners know exactly what property managers check. We
      work through a systematic, detailed checklist so nothing gets overlooked.
      We also use professional-grade cleaning products that are far more
      effective than what you can buy at the supermarket. The result? A property
      that passes inspection first time.
    </p>

    <h2>What Our Bond Cleaning Covers</h2>
    <p>
      Our general bond clean is a complete, room-by-room clean of the entire
      property. Here's a taste of what we cover:
    </p>
    <ul>
      <li>
        <strong>Kitchen:</strong> Oven inside and out, rangehood, stovetop,
        benchtops, splashback, cupboards inside and out, sink, and taps.
      </li>
      <li>
        <strong>Bathrooms & toilets:</strong> Tiles, grout, shower screens,
        bathtub, sink, toilet, mirrors, and vanity — including mould and soap
        scum removal.
      </li>
      <li>
        <strong>Bedrooms & living areas:</strong> Vacuumed and mopped floors,
        skirting boards, doors and door frames, light switches, power points,
        and window sills.
      </li>
      <li>
        <strong>Windows:</strong> Interior glass (exterior available as an
        add-on), tracks, sills, and fly screens.
      </li>
      <li>
        <strong>Laundry:</strong> Tub, taps, cupboards, and surrounding
        surfaces.
      </li>
      <li>
        <strong>Ceilings & fans:</strong> Light fittings dusted and wiped,
        ceiling fans cleaned.
      </li>
      <li>
        <strong>Walls:</strong> Spot cleaning of scuff marks, fingerprints, and
        marks.
      </li>
    </ul>

    <h2>What to Expect on the Day</h2>
    <p>
      Our team arrives on time with all their own equipment and cleaning
      products — you don't need to provide anything. We work efficiently and
      methodically, cleaning from top to bottom in each room so dust and debris
      doesn't fall on already-cleaned areas.
    </p>
    <p>
      Most bond cleans take anywhere from 4 to 10 hours depending on the
      property size and condition. We ask that the property be empty of
      furniture and belongings so we can clean every area thoroughly.
    </p>

    <h2>Our 100% Bond Back Guarantee</h2>
    <p>
      We're so confident in the quality of our work that we back every bond
      clean with a 100% bond back guarantee. If your property manager finds any
      issues with our cleaning within 72 hours of the clean, we'll come back and
      re-clean those areas at no extra cost. Your bond is our priority.
    </p>
    <p>
      Don't leave your bond to chance. Book Perth's most trusted bond cleaning
      team today and get your full bond back guaranteed.
    </p>
  </>
);

export default function BondCleaningPage() {
  useMetaTags({
    title: "Professional Bond Cleaning Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning Perth with 100% bond back guarantee. REIWA-standard full end of lease clean for all Perth suburbs. Free quotes available — book today.",
    keywords:
      "bond cleaning Perth, end of lease cleaning Perth, professional bond clean Perth WA, vacate cleaning Perth, REIWA bond clean",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/services/bond-cleaning",
  });

  return (
    <ServicePageLayout
      title="Professional Bond Cleaning Perth"
      subtitle="Complete end of lease cleaning following the REIWA checklist. We clean every room, every surface, every corner — until your property passes inspection."
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning Perth - complete rental property clean for REIWA inspection"
      description={description}
      inclusions={[
        "All rooms vacuumed & mopped",
        "Kitchen deep clean",
        "Oven interior & exterior",
        "Rangehood & filters",
        "Bathroom & toilet scrub",
        "Tile & grout cleaning",
        "Shower screens & mirrors",
        "All windows (interior)",
        "Window tracks & sills",
        "Skirting boards wiped",
        "Doors & door frames",
        "Light fittings & fans",
        "Inside all wardrobes",
        "Laundry tub & surfaces",
        "Wall spot cleaning",
        "Power points & switches",
      ]}
      pricing={[
        { label: "Studio / 1 Bedroom", price: "$250 – $350" },
        { label: "2 Bedroom", price: "$350 – $450" },
        { label: "3 Bedroom", price: "$450 – $550" },
        { label: "4 Bedroom", price: "$550 – $700+" },
      ]}
      guaranteeText="100% Bond Back Guarantee — if your landlord isn't satisfied, we re-clean for free within 72 hours."
    />
  );
}
