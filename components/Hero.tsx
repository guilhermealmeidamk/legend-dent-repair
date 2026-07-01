import { smsHref, telHref } from "@/lib/site-config";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-gunmetal"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-graphite via-gunmetal to-graphite" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Greater Atlanta &middot; Paintless Dent Repair (PDR)
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-silver sm:text-6xl">
          Atlanta&apos;s Dent Repair Legend
        </h1>
        <p className="mt-6 max-w-xl text-lg text-steel">
          The body shop alternative — mobile service for paintless dent
          repair (PDR), anywhere in Greater Atlanta. Faster and more
          affordable than a traditional body shop, and we keep your factory
          finish intact. Free estimates in minutes: just text us a photo of
          your dent.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={smsHref}
            className="rounded-md bg-gold px-6 py-3 text-center text-base font-semibold text-graphite hover:bg-gold/90 transition-colors"
          >
            Text a Photo — Get a Free Estimate
          </a>
          <a
            href={telHref}
            className="rounded-md border border-white/20 px-6 py-3 text-center text-base font-semibold text-silver hover:border-gold hover:text-gold transition-colors"
          >
            Call Now
          </a>
        </div>

        <p className="mt-4 font-mono text-sm text-steel">
          No paint. No filler. No Carfax record. Just your car, like it never
          happened.
        </p>
      </div>
    </section>
  );
}
