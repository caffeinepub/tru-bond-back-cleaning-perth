import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>Why Carpet Steam Cleaning is Required for Your Bond Return in Perth</h2>
    <p>
      In Western Australia, most tenancy agreements include a specific clause
      requiring carpets to be professionally steam cleaned at the end of a
      lease. This isn't just a suggestion — if your property manager sees dirty,
      stained, or smelly carpets on inspection day, they have the right to
      organise a professional steam clean and take the cost from your bond.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, we use industrial-grade carpet steam
      cleaning equipment that delivers results far beyond what a rental machine
      from the supermarket can achieve. Our hot water extraction process
      penetrates deep into carpet fibres, lifting out dirt, stains, pet hair,
      bacteria, and allergens that regular vacuuming simply can't touch.
    </p>

    <h2>How Our Carpet Steam Cleaning Process Works</h2>
    <p>Our carpet steam cleaning process follows four key steps:</p>
    <ol>
      <li>
        <strong>Pre-vacuum:</strong> We vacuum the carpets thoroughly to remove
        loose dirt, dust, and pet hair before steam cleaning begins.
      </li>
      <li>
        <strong>Pre-treatment:</strong> We apply professional-grade stain
        treatment to any visible spots, stains, or heavily soiled areas. This
        breaks down the stain before the steam clean removes it completely.
      </li>
      <li>
        <strong>Hot water extraction:</strong> Our industrial steam cleaning
        machine injects hot water and cleaning solution deep into the carpet
        pile, then extracts it together with all the lifted dirt, bacteria, and
        residue. This is the same process used by professional carpet cleaning
        companies across Australia.
      </li>
      <li>
        <strong>Deodorising:</strong> We apply a deodorising treatment to leave
        carpets smelling fresh and clean. This is especially important for homes
        with pets or smokers.
      </li>
    </ol>

    <h2>What Types of Stains Can We Remove?</h2>
    <p>
      Our professional steam cleaning process removes a wide range of common
      carpet stains, including:
    </p>
    <ul>
      <li>Pet stains and urine odours</li>
      <li>Red wine and juice spills</li>
      <li>Coffee and tea marks</li>
      <li>Mud and dirt tracked in from outside</li>
      <li>Grease and oil spots</li>
      <li>General wear and traffic marks</li>
    </ul>
    <p>
      Very old or deeply set stains may not be fully removable — our team will
      let you know before we start if we expect any limitations. We always aim
      for the best possible result.
    </p>

    <h2>Health Benefits of Professional Carpet Steam Cleaning</h2>
    <p>
      Carpets trap dust mites, allergens, pet dander, bacteria, and mould spores
      over time. Professional steam cleaning removes these from deep within the
      fibres, which is far healthier for the next tenants moving in — and it's
      what property managers expect to see on inspection day.
    </p>

    <h2>What to Prepare Before Your Steam Clean</h2>
    <p>
      To get the best results from your carpet steam clean, make sure the
      property is empty of furniture before our team arrives. Carpets should be
      cleared of all belongings, and the property should be vacuumed prior to
      our arrival if possible (though we do this as part of our process).
      Carpets will be slightly damp after cleaning and will dry within 2–4 hours
      depending on ventilation.
    </p>
  </>
);

export default function CarpetSteamPage() {
  useMetaTags({
    title: "Carpet Steam Cleaning Perth | Bond Back Cleaning Specialists",
    description:
      "Professional carpet steam cleaning Perth for bond returns. Industrial-grade hot water extraction removes stains, odours & allergens. REIWA standard. Book today.",
    keywords:
      "carpet steam cleaning Perth, bond carpet clean Perth, end of lease carpet cleaning WA, carpet stain removal Perth, professional carpet cleaning Perth",
    ogImage: "/assets/generated/service-carpet-steam-clean.dim_800x500.jpg",
    canonicalUrl:
      "https://trubondcleaningperth.com/services/carpet-steam-cleaning",
  });

  return (
    <ServicePageLayout
      title="Carpet Steam Cleaning Perth"
      subtitle="Industrial-grade hot water extraction carpet cleaning. Remove stains, odours, and allergens from all carpeted areas to pass your bond inspection first time."
      heroImage="/assets/generated/service-carpet-steam-clean.dim_800x500.jpg"
      heroImageAlt="Professional carpet steam cleaning Perth - industrial hot water extraction for bond returns"
      description={description}
      inclusions={[
        "Pre-vacuum all carpeted areas",
        "Stain pre-treatment",
        "Hot water extraction steam clean",
        "Pet odour treatment",
        "Deodorising treatment",
        "All bedrooms",
        "Living & dining areas",
        "Hallways & stairs",
        "Lounge room carpet",
        "Spot stain removal",
      ]}
      pricing={[
        { label: "1–2 Rooms", price: "$80 – $120" },
        { label: "3–4 Rooms", price: "$120 – $160" },
        { label: "5+ Rooms", price: "$160 – $220+" },
        { label: "Stairs (per flight)", price: "$40 – $60" },
      ]}
      guaranteeText="Carpet steam cleaning included in our 100% Bond Back Guarantee. If the property manager finds fault, we re-clean at no charge."
    />
  );
}
