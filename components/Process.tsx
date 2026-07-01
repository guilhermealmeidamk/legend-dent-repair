import { smsHref } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    title: "Send Photos",
    text: "Snap a few photos of the dent and text them to us.",
  },
  {
    number: "02",
    title: "Get Your Estimate",
    text: "We review the damage and send you a free, no-obligation quote.",
  },
  {
    number: "03",
    title: "We Come to You",
    text: "Pick a time that works. We bring the shop to your home or office — no drop-off, no rental car.",
  },
  {
    number: "04",
    title: "Drive Away Flawless",
    text: "Most repairs are done the same day, right in your driveway. Factory finish, restored.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-white/10 bg-graphite">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          How It Works
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-4xl font-extrabold text-gold">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-silver">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-steel">{step.text}</p>
            </div>
          ))}
        </div>

        <a
          href={smsHref}
          className="mt-10 inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-graphite hover:bg-gold/90 transition-colors"
        >
          Start With a Photo
        </a>
      </div>
    </section>
  );
}
