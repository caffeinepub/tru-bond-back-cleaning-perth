import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>Why Wall Cleanliness Matters for Your Bond Return in Perth</h2>
    <p>
      Walls are one of the most underestimated areas when tenants try to do
      their own bond clean. It's easy to forget about walls when you're focused
      on the kitchen and bathrooms — but property managers absolutely check
      them. Scuff marks from furniture, fingerprints around light switches and
      door frames, crayon from kids, and grease marks in the kitchen are all
      common reasons for bond deductions in Perth.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, our wall washing and spot cleaning
      service removes these marks carefully and effectively. We use the right
      products and techniques for each type of mark and each type of paint
      finish to get the best results without damaging the paint.
    </p>

    <h2>What Our Wall Washing Service Covers</h2>
    <p>
      Our wall washing service systematically works through every room in the
      property, checking and treating all wall surfaces:
    </p>
    <ul>
      <li>
        <strong>Scuff marks:</strong> Scuff marks from furniture, bags, and
        shoes are very common on rental property walls. We use gentle cleaning
        techniques to remove these without damaging paint.
      </li>
      <li>
        <strong>Fingerprints and smudges:</strong> We pay special attention to
        areas around light switches, power points, door handles, and door frames
        where fingerprints accumulate.
      </li>
      <li>
        <strong>Crayon and pen marks:</strong> Children's artwork on walls is a
        common bond issue. We treat crayon, texta, and pen marks with
        appropriate cleaning products designed to lift the marks without
        stripping the paint.
      </li>
      <li>
        <strong>Grease spots:</strong> Kitchen walls, particularly near the
        stove and food preparation areas, often develop grease spots that
        regular cleaning misses. We use degreasing products to lift these marks.
      </li>
      <li>
        <strong>Dirt and general grime:</strong> General dirt build-up,
        especially on lower wall sections and near doorways, is cleaned
        thoroughly.
      </li>
      <li>
        <strong>Door frames and skirting boards:</strong> We wipe down all door
        frames and skirting boards as part of our wall washing service.
      </li>
    </ul>

    <h2>Important Limitations — When Paint is Damaged</h2>
    <p>
      It's important to understand what wall washing can and can't fix. Our
      service removes marks and dirt from wall surfaces. If the paint itself is
      chipped, gouged, or badly scratched, no amount of cleaning will fix that —
      those are maintenance issues that require repainting, which is typically
      the landlord's responsibility (unless caused by tenant damage beyond fair
      wear and tear).
    </p>
    <p>
      If we find areas where the paint is damaged, we'll point them out to you
      so you're aware before the inspection. This gives you the option to
      address any genuine damage proactively.
    </p>

    <h2>Paint Types and Our Cleaning Approach</h2>
    <p>Different paint finishes require different cleaning approaches:</p>
    <ul>
      <li>
        <strong>Flat / matte paint:</strong> The most delicate finish. We use
        very gentle cleaning to avoid creating shiny patches or rubbing through
        the paint.
      </li>
      <li>
        <strong>Eggshell and satin paint:</strong> More durable and washable. We
        can be slightly more aggressive with cleaning on these surfaces.
      </li>
      <li>
        <strong>Semi-gloss and gloss paint:</strong> Common in kitchens,
        bathrooms, and on trim work. These surfaces are the most durable and
        cleanable.
      </li>
    </ul>

    <h2>
      Why Wall Cleaning is Often the Difference Between Passing and Failing
    </h2>
    <p>
      Many tenants lose a portion of their bond not because of the kitchen or
      bathroom — but because of walls. A few scuff marks in the hallway,
      fingerprints around the light switches, or marks near the front door are
      easy to miss in a DIY clean but are very visible to a trained property
      manager's eye.
    </p>
    <p>
      Our wall washing service gives you the confidence that walls throughout
      your property are clean and mark-free. Combined with our other bond
      cleaning services, it gives you the best possible chance of getting every
      dollar of your bond back.
    </p>
  </>
);

export default function WallWashingPage() {
  useMetaTags({
    title: "Wall Washing & Spot Cleaning Perth | Bond Back Cleaning",
    description:
      "Professional wall washing and spot cleaning Perth for bond returns. Remove scuff marks, crayon, fingerprints and grease from walls for end of lease inspection. Book today.",
    keywords:
      "wall washing Perth bond, spot cleaning Perth end of lease, scuff mark removal Perth, wall cleaning Perth rental, bond wall clean WA",
    ogImage: "/assets/generated/service-wall-washing.dim_800x500.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/services/wall-washing",
  });

  return (
    <ServicePageLayout
      title="Wall Washing & Spot Cleaning Perth"
      subtitle="Remove scuff marks, fingerprints, crayon, grease spots, and general dirt from all wall surfaces. Clean walls make the difference between passing and failing your bond inspection."
      heroImage="/assets/generated/service-wall-washing.dim_800x500.jpg"
      heroImageAlt="Professional wall washing and spot cleaning Perth - removing scuff marks for bond inspection"
      description={description}
      inclusions={[
        "Scuff mark removal",
        "Fingerprint & smudge cleaning",
        "Crayon & texta marks",
        "Pen and ink marks",
        "Grease spot treatment",
        "General dirt and grime",
        "Door frames wiped",
        "Skirting boards cleaned",
        "Light switch surrounds",
        "Power point surrounds",
        "All rooms throughout",
        "Paint-safe technique",
      ]}
      pricing={[
        { label: "Spot cleaning only (per room)", price: "$20 – $40" },
        { label: "Full wall wash (small property)", price: "$60 – $100" },
        { label: "Full wall wash (large property)", price: "$100 – $180" },
        { label: "Crayon & heavy marks", price: "POA" },
      ]}
      guaranteeText="Wall cleaning is covered under our 100% Bond Back Guarantee. We'll re-clean any areas the property manager flags within 72 hours."
    />
  );
}
