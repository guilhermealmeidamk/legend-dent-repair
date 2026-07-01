import BeforeAfterSlider from "./BeforeAfterSlider";

const cases = [
  { caption: "Roof — multi-dent repair", beforeSrc: "/b1.jpeg", afterSrc: "/b2.jpeg" },
  { caption: "Mercedes-Benz — hood dent", beforeSrc: "/meca2.jpeg", afterSrc: "/meca1.jpeg" },
  { caption: "Honda — door dent", beforeSrc: "/h1.jpeg", afterSrc: "/h2.jpeg" },
  { caption: "Door panel — dent repair", beforeSrc: "/p1_before.jpeg", afterSrc: "/p2_after.jpeg" },
];

export default function BeforeAfter() {
  return (
    <section id="gallery" className="border-b border-white/10 bg-graphite">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          The Proof Is in the Panel
        </h2>
        <p className="mt-2 text-steel">
          Real dents. Real results. Drag to see the difference.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <BeforeAfterSlider
              key={item.caption}
              caption={item.caption}
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
