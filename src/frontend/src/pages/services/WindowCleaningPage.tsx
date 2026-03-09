import ServicePageLayout from "../../components/ServicePageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

const description = (
  <>
    <h2>Why Streaky Windows Fail Bond Inspections in Perth</h2>
    <p>
      Windows are one of the most visible features of any rental property — and
      one of the most commonly failed items on bond inspection day. Property
      managers hold windows up to the light and look for streaks, smears, dust,
      cobwebs in the corners, dirty tracks, and grime on the sills. If your
      windows don't sparkle, you risk losing part of your bond.
    </p>
    <p>
      At Tru Bond Back Cleaning Perth, our professional window cleaning service
      delivers a streak-free, crystal-clear finish every time. We clean all
      windows from the inside, and offer exterior window cleaning as part of a
      full package. Fly screens, tracks, and sills are all included.
    </p>

    <h2>Interior vs Exterior Window Cleaning for Bond Returns</h2>
    <p>
      Most bond cleaning companies only clean windows from the interior. At Tru
      Bond Back Cleaning Perth, we can handle both:
    </p>
    <ul>
      <li>
        <strong>Interior window cleaning:</strong> Full clean of the glass,
        frame, sill, and track from the inside. This is included in our standard
        bond clean package.
      </li>
      <li>
        <strong>Exterior window cleaning:</strong> Full clean of the outside
        glass and frame. This requires appropriate access and is priced
        separately depending on the property's accessibility and number of
        windows.
      </li>
    </ul>
    <p>
      Most property managers in Perth check both interior and exterior window
      cleanliness, so we recommend booking both services for the best chance of
      passing your inspection first time.
    </p>

    <h2>What's Included in Our Window Cleaning Service</h2>
    <p>
      Our window cleaning service is thorough and systematic. For each window in
      the property, our team:
    </p>
    <ol>
      <li>Removes any fly screens and washes them separately</li>
      <li>
        Cleans the window tracks and sills, removing all dirt and grime build-up
      </li>
      <li>
        Cleans the glass using professional squeegees and streak-free cleaning
        solution
      </li>
      <li>Wipes down the window frame</li>
      <li>Reinstalls the fly screens after cleaning</li>
    </ol>

    <h2>The Equipment We Use</h2>
    <p>
      We use professional-grade squeegees, microfibre cloths, and streak-free
      window cleaning solution to achieve a perfectly clear finish. Unlike
      household products that can leave residue or streaks, our professional
      equipment and technique delivers results that look great even in direct
      sunlight.
    </p>

    <h2>Tracks and Sills — The Most Overlooked Part of Window Cleaning</h2>
    <p>
      Window tracks and sills are magnets for dead insects, dust, mould, and
      general grime. They're also one of the first things property managers
      check when inspecting windows. Many tenants clean the glass but forget
      about the tracks — and that oversight can cost them their bond.
    </p>
    <p>
      Our team uses purpose-made brushes and solutions to get into every corner
      of the window track, removing all build-up until the tracks are clean and
      the window slides smoothly.
    </p>

    <h2>Fly Screen Cleaning</h2>
    <p>
      Fly screens collect dust, pollen, spider webs, and grime over time. We
      remove each fly screen, wash it thoroughly with a purpose-made screen
      cleaner and soft brush, rinse it clean, allow it to dry, and reinstall it
      correctly. Clean fly screens make a big difference to the overall
      appearance of the property and are often noticed by property managers on
      inspection day.
    </p>
  </>
);

export default function WindowCleaningPage() {
  useMetaTags({
    title: "Window Cleaning Perth | Bond Back Cleaning Specialists",
    description:
      "Professional window cleaning Perth for bond returns. Streak-free interior and exterior windows, tracks, sills, and fly screens. End of lease window clean. Book today.",
    keywords:
      "window cleaning Perth bond, end of lease window cleaning Perth, streak free windows Perth, fly screen cleaning Perth, window tracks cleaning Perth",
    ogImage: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/services/window-cleaning",
  });

  return (
    <ServicePageLayout
      title="Window Cleaning Perth"
      subtitle="Streak-free window cleaning for bond inspections — interior and exterior glass, tracks, sills, and fly screens. Crystal-clear windows that pass every property manager's check."
      heroImage="/assets/generated/service-window-cleaning.dim_800x500.jpg"
      heroImageAlt="Professional window cleaning Perth for bond return - streak free glass inside and outside"
      description={description}
      inclusions={[
        "Interior glass cleaned",
        "Exterior glass (if accessible)",
        "Window tracks cleaned",
        "Window sills wiped",
        "Window frames wiped",
        "Fly screens removed & washed",
        "Fly screens reinstalled",
        "Cobwebs removed from corners",
        "All windows throughout property",
        "Streak-free squeegee finish",
      ]}
      pricing={[
        { label: "Interior Only (small property)", price: "$80 – $120" },
        { label: "Interior Only (large property)", price: "$120 – $160" },
        { label: "Interior & Exterior", price: "$160 – $250+" },
        {
          label: "Per window (exterior, difficult access)",
          price: "$10 – $20",
        },
      ]}
      guaranteeText="If streaky or dirty windows are noted on your inspection report, we'll return and re-clean at no charge."
    />
  );
}
