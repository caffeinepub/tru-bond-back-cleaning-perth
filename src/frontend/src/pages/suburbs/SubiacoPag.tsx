import SuburbPageLayout from "../../components/SuburbPageLayout";
import { useMetaTags } from "../../hooks/useMetaTags";

export default function SubiacoPage() {
  useMetaTags({
    title: "Bond Cleaning Subiaco Perth | Tru Bond Back Cleaning",
    description:
      "Professional bond cleaning in Subiaco, Perth. Tru Bond Back Cleaning Perth follows the full REIWA checklist. 100% bond back guarantee. Free quotes available.",
    keywords:
      "bond cleaning Subiaco, end of lease cleaning Subiaco, vacate cleaning Subiaco Perth",
    ogImage: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    canonicalUrl: "https://trubondcleaningperth.com/suburbs/subiaco",
  });

  return (
    <SuburbPageLayout
      suburbName="Subiaco"
      heroImage="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
      heroImageAlt="Professional bond cleaning service in Subiaco Perth"
    >
      <p>
        Moving out of your rental in Subiaco? You're in good hands. Tru Bond
        Back Cleaning Perth helps Subiaco tenants get their full bond back every
        time. We know how strict property managers are in this part of Perth —
        and we're ready for it.
      </p>

      <h2>Why Subiaco Renters Need a Pro Bond Clean</h2>
      <p>
        Subiaco is one of Perth's most popular inner-city suburbs. It sits right
        next to Kings Park and is packed with young professionals, students, and
        families renting apartments and character houses. Because Subiaco is so
        desirable, landlords and property managers expect properties to be
        returned in top condition.
      </p>
      <p>
        Whether you're moving out of a sleek apartment on Rokeby Road or a
        heritage cottage near Subiaco Oval, your property manager will check
        every corner against the entry condition report. A proper bond clean
        makes sure you tick every box on the REIWA inspection checklist.
      </p>

      <h2>What We Clean in Your Subiaco Property</h2>
      <p>
        Our team works through your entire home from top to bottom. We cover
        everything the property manager will check:
      </p>
      <ul>
        <li>Kitchen — oven, rangehood, stovetop, benchtops, cupboards, sink</li>
        <li>Bathrooms and toilets — tiles, grout, shower screens, taps</li>
        <li>
          All floors — vacuumed and mopped, carpet steam cleaning available
        </li>
        <li>Windows inside and out, tracks, sills, and fly screens</li>
        <li>Walls — scuff marks and fingerprints removed</li>
        <li>Skirting boards, light fittings, fans, and wardrobes</li>
        <li>Laundry — tub, taps, and behind appliances</li>
      </ul>
      <p>
        We follow the full REIWA bond cleaning checklist on every job in
        Subiaco. Nothing gets missed, mate.
      </p>

      <h2>Our 100% Bond Back Guarantee</h2>
      <p>
        We reckon you shouldn't have to worry about losing your bond over a
        cleaning dispute. That's why Tru Bond Back Cleaning Perth offers a 100%
        bond back guarantee on every Subiaco clean. If your property manager
        finds any issues with the clean, we come straight back and fix it at no
        extra cost.
      </p>
      <p>
        The rental market in Subiaco is competitive, and most leases involve
        significant bond amounts. Don't risk losing thousands of dollars — let
        our experienced team handle it properly the first time.
      </p>

      <h2>Book Your Subiaco Bond Clean Today</h2>
      <p>
        Getting a free quote from Tru Bond Back Cleaning Perth is easy. Just
        fill in our contact form or send us a WhatsApp message. Tell us your
        property size, the services you need, and your move-out date. We'll get
        back to you with a fixed price — no nasty surprises.
      </p>
      <p>
        We service Subiaco and all surrounding suburbs including Shenton Park,
        West Perth, Floreat, and Jolimont. Book today and tick bond cleaning off
        your moving-out checklist.
      </p>
    </SuburbPageLayout>
  );
}
