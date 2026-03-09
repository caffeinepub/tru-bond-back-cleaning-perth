import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>Why the Kitchen is the Most Important Room in Your Bond Clean</h2>
    <p>
      Ask any property manager in Perth what they check most carefully on
      inspection day, and nine times out of ten they'll say the kitchen. The
      kitchen takes the most punishment in any rental — baked-on grease, oven
      grime, rangehood build-up, and cupboard residue all accumulate over a
      tenancy. If the kitchen doesn't meet inspection standards, you're looking
      at a cleaning deduction from your bond.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, our oven and kitchen cleaning service is
      one of the most thorough in the business. We use professional-grade
      degreasers and cleaning products specifically designed to cut through
      baked-on grease and grime — the stuff that household cleaners simply can't
      shift.
    </p>

    <h2>What Our Oven & Kitchen Clean Covers</h2>
    <p>
      Our kitchen cleaning service covers every surface, appliance, and fitting
      in the room:
    </p>
    <ul>
      <li>
        <strong>Oven interior:</strong> We remove all racks and trays, soak them
        in degreaser, and scrub every internal surface of the oven — including
        the door glass, walls, floor, and roof of the oven cavity.
      </li>
      <li>
        <strong>Oven exterior:</strong> We clean the outside of the oven,
        including knobs, handle, and surrounding surfaces.
      </li>
      <li>
        <strong>Rangehood:</strong> We remove, soak, and clean the rangehood
        filters. We degrease the inside of the rangehood housing and clean the
        exterior surface and buttons.
      </li>
      <li>
        <strong>Stovetop / cooktop:</strong> We thoroughly clean gas burners and
        ring covers, or glass cooktop surfaces, removing all grease and food
        residue.
      </li>
      <li>
        <strong>Benchtops:</strong> All benchtop surfaces are wiped down and
        sanitised, including behind appliances.
      </li>
      <li>
        <strong>Splashback:</strong> We clean the splashback tile or surface to
        remove grease splatter and grime.
      </li>
      <li>
        <strong>Cupboards (inside and outside):</strong> We wipe all cupboard
        doors, handles, and interior surfaces including shelves and corners.
      </li>
      <li>
        <strong>Sink and taps:</strong> We clean and descale the sink, taps, and
        surrounding area.
      </li>
      <li>
        <strong>Dishwasher (exterior):</strong> We wipe down the front and top
        of the dishwasher if present.
      </li>
    </ul>

    <h2>The Products We Use in the Kitchen</h2>
    <p>
      Our team uses professional-grade degreasers and oven cleaners that are
      significantly more powerful than supermarket products. We use these
      products safely and ventilate the kitchen properly to protect surfaces and
      ensure a safe working environment.
    </p>
    <p>
      Products we commonly use include heavy-duty oven busters, commercial-grade
      alkaline degreasers for rangehoods, and purpose-made stainless steel
      cleaners for sinks and appliances. All products are chosen to be safe for
      the surfaces in your kitchen.
    </p>

    <h2>Why Professional Cleaning Gets Better Results Than DIY</h2>
    <p>
      Most tenants try to clean the oven themselves and find it nearly
      impossible to get truly clean. Baked-on grease inside an oven builds up
      over months or years and requires chemical soaking, time, and proper
      equipment to remove completely.
    </p>
    <p>
      Our cleaners have the experience, tools, and chemicals to get your oven
      looking like new — or as close to it as possible. A clean oven is one of
      the biggest factors in passing your bond inspection, and it's one of the
      areas property managers check most carefully.
    </p>
  </>
);

export default function OvenKitchenPage() {
  useMetaTags({
    title: "Oven & Kitchen Bond Cleaning Perth | Tru Bond Back Cleaning",
    description:
      "Professional oven and kitchen bond cleaning Perth. Deep clean of oven, rangehood, stovetop, cupboards, and benchtops for end of lease inspection. Book online today.",
    keywords:
      "oven cleaning Perth bond, kitchen bond cleaning Perth, rangehood cleaning Perth, end of lease kitchen clean WA, oven degreasing Perth",
    ogImage: "/assets/generated/service-oven-kitchen-clean.dim_800x500.jpg",
    canonicalUrl:
      "https://trubondcleaningperth.com/services/oven-kitchen-cleaning",
  });

  return (
    <ServicePageLayout
      title="Oven & Kitchen Cleaning Perth"
      subtitle="Deep clean of your entire kitchen — oven, rangehood, stovetop, cupboards, benchtops, and sink. Professional-grade degreasers for results that pass the toughest inspection."
      heroImage="/assets/generated/service-oven-kitchen-clean.dim_800x500.jpg"
      heroImageAlt="Professional oven and kitchen deep cleaning Perth for bond back rental inspection"
      description={description}
      inclusions={[
        "Oven interior scrub & degrease",
        "Oven racks & trays cleaned",
        "Oven exterior & glass door",
        "Rangehood filters cleaned",
        "Rangehood interior & exterior",
        "Stovetop / cooktop",
        "Gas burner rings & covers",
        "Benchtops & splashback",
        "Cupboards inside & outside",
        "Sink & taps descaled",
        "Dishwasher exterior",
        "Microwave inside & out",
      ]}
      pricing={[
        { label: "Basic Kitchen Clean", price: "$80 – $120" },
        { label: "Full Kitchen Deep Clean", price: "$120 – $180" },
        { label: "Oven Clean Only", price: "$60 – $90" },
        { label: "Large Commercial Kitchen", price: "POA" },
      ]}
      guaranteeText="If your property manager isn't happy with the kitchen on inspection, we come back and re-clean at no extra cost."
    />
  );
}
