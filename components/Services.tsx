const services = [
  {
    title: "Paintless Dent Removal (PDR)",
    text: "The body shop alternative. We massage dents and dings out from behind the panel — no sanding, no filler, no repaint. Your original paint stays untouched.",
  },
  {
    title: "Hail Damage Repair",
    text: "Caught in an Atlanta hailstorm? We're hail repair specialists and work directly with your insurance to restore your car to pre-storm condition.",
  },
  {
    title: "Door Dings & Creases",
    text: "Parking lot dings, shopping-cart dents, sharp creases — the everyday damage PDR was made for.",
  },
  {
    title: "Minor Collision Dents",
    text: "Many bumper and panel dents can be fixed paintless. Send a photo and we'll tell you straight if PDR is the right call.",
  },
];

const canFix = [
  "Large and small dents",
  "Door dings and creases",
  "Hail damage",
  "Wind and storm damage",
  "Minor bumper dents",
  "Most makes and models",
];

const cannotFix = [
  "Cracked or broken paint",
  "Pierced or torn metal",
  "Broken body panels",
  "Major collision or structural damage",
];

export default function Services() {
  return (
    <section id="services" className="border-b border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          Services
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-white/10 bg-graphite p-6"
            >
              <h3 className="font-display text-xl font-bold text-gold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-steel">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-graphite p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
              What PDR Can Fix
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              {canFix.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-signal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-graphite p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-steel">
              What PDR Can&apos;t Fix
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              {cannotFix.map((item) => (
                <li key={item} className="flex gap-2">
                  <span>✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel">
              Not a fit for PDR? We&apos;ll tell you straight and point you to
              a trusted body shop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
