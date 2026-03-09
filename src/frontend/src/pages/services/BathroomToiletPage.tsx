import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>Why Bathrooms and Toilets Need a Deep Clean for Bond Returns</h2>
    <p>
      Bathrooms and toilets are the rooms that property managers scrutinise most
      closely after the kitchen. Soap scum on shower screens, mould in grout
      lines, limescale on taps, and a dirty toilet are guaranteed to trigger a
      bond deduction. These areas need a proper deep clean — not just a quick
      wipe down.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, our bathroom and toilet deep clean
      service tackles every surface in your bathroom from top to bottom. We use
      professional-grade bathroom cleaning products, including mould killers,
      tile and grout cleaners, and limescale removers that are far more
      effective than anything you'll find at the supermarket.
    </p>

    <h2>What Our Bathroom Deep Clean Covers</h2>
    <p>
      Our bathroom cleaning service is comprehensive and systematic. We cover
      every surface and fixture:
    </p>
    <ul>
      <li>
        <strong>Shower screens:</strong> We remove soap scum, hard water marks,
        and general build-up from shower screens and glass panels. We use a
        purpose-made glass cleaner for a streak-free finish.
      </li>
      <li>
        <strong>Tiles:</strong> All wall and floor tiles are scrubbed clean,
        paying special attention to grout lines where mould and mildew love to
        grow.
      </li>
      <li>
        <strong>Grout cleaning:</strong> We apply a specialised grout cleaner
        and scrub the grout lines thoroughly to remove black mould and built-up
        grime.
      </li>
      <li>
        <strong>Bathtub:</strong> We scrub the bathtub inside and out, removing
        soap scum, grime, and any discolouration around the drain.
      </li>
      <li>
        <strong>Sink and taps:</strong> We clean and descale the basin, taps,
        and surrounding surfaces, including the underneath of taps where
        limescale builds up.
      </li>
      <li>
        <strong>Toilet (inside and outside):</strong> We clean the toilet bowl
        inside (including under the rim), the cistern, the seat and lid (top and
        bottom), and all external surfaces.
      </li>
      <li>
        <strong>Mirrors:</strong> We clean bathroom mirrors to a streak-free
        shine using professional glass cleaner.
      </li>
      <li>
        <strong>Vanity:</strong> We wipe down the vanity unit, drawers, and
        cupboard doors inside and out.
      </li>
      <li>
        <strong>Exhaust fans:</strong> We dust and clean exhaust fans and
        ventilation grilles.
      </li>
    </ul>

    <h2>Mould Removal — A Common Problem in Perth Bathrooms</h2>
    <p>
      Perth's warm, humid climate creates perfect conditions for mould and
      mildew growth in bathrooms. Grout lines, silicon seals, and the ceiling
      above the shower are the most common mould hot spots. Property managers in
      Perth are very familiar with bathroom mould and will flag it immediately
      on inspection.
    </p>
    <p>
      Our team uses professional-strength mould removers and anti-mould
      treatments to eliminate mould and mildew from all bathroom surfaces. In
      severe cases, we may need to recommend that silicon seals be replaced (we
      can advise you on this before we start).
    </p>

    <h2>Soap Scum — Why It's So Hard to Remove</h2>
    <p>
      Soap scum is a combination of soap residue and hard water minerals that
      builds up on shower screens, tiles, and bathtubs over time. It's
      notoriously difficult to remove with regular household cleaners. Our
      professional-grade products, combined with proper technique and the right
      tools, cut through soap scum effectively and safely without scratching
      surfaces.
    </p>

    <h2>Our Bathroom Cleaning Results</h2>
    <p>
      When our team finishes your bathroom, every surface will be clean,
      sanitised, and ready for inspection. Shower screens will be streak-free
      and clear. Grout lines will be noticeably lighter and cleaner. Taps and
      fittings will shine. Toilets will be hygienically clean inside and out.
      This is the standard we hold ourselves to on every single job.
    </p>
  </>
);

export default function BathroomToiletPage() {
  useMetaTags({
    title: "Bathroom & Toilet Bond Cleaning Perth | Tru Bond Back Cleaning",
    description:
      "Professional bathroom and toilet deep cleaning Perth for bond returns. Tiles, grout, shower screens, mould removal, and full toilet clean. Book your end of lease clean today.",
    keywords:
      "bathroom cleaning Perth bond, toilet cleaning Perth end of lease, mould removal Perth bathroom, grout cleaning Perth, shower screen cleaning Perth",
    ogImage: "/assets/generated/service-bathroom-clean.dim_800x500.jpg",
    canonicalUrl:
      "https://trubondcleaningperth.com/services/bathroom-toilet-cleaning",
  });

  return (
    <ServicePageLayout
      title="Bathroom & Toilet Deep Clean Perth"
      subtitle="Professional deep clean of every bathroom and toilet in your rental. Tiles, grout, shower screens, mould removal, taps, toilets, and mirrors — all spotless for inspection day."
      heroImage="/assets/generated/service-bathroom-clean.dim_800x500.jpg"
      heroImageAlt="Professional bathroom and toilet deep cleaning Perth - spotless tiles grout shower for bond inspection"
      description={description}
      inclusions={[
        "Shower screen scrub",
        "Wall & floor tiles cleaned",
        "Grout lines scrubbed",
        "Mould & mildew removal",
        "Bathtub scrubbed inside/out",
        "Sink & taps descaled",
        "Toilet inside & outside",
        "Toilet rim & cistern",
        "Mirror cleaned streak-free",
        "Vanity inside & outside",
        "Exhaust fan cleaned",
        "Silicon seal inspection",
      ]}
      pricing={[
        { label: "1 Bathroom & 1 Toilet", price: "$60 – $90" },
        { label: "2 Bathrooms & 2 Toilets", price: "$110 – $160" },
        { label: "Ensuite (per room)", price: "$50 – $80" },
        { label: "Severe mould treatment", price: "POA" },
      ]}
      guaranteeText="Bathroom cleanliness is covered under our 100% Bond Back Guarantee. Any issues flagged by the property manager are fixed at no cost."
    />
  );
}
