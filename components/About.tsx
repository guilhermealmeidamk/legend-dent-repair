import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section className="border-b border-white/10 bg-graphite">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          About {siteConfig.name}
        </h2>
        <p className="mt-4 text-steel">
          {siteConfig.name} was built on one belief: a dent shouldn&apos;t
          cost you a week and a repaint. We&apos;re paintless dent repair
          specialists serving Greater Atlanta — fast, precise, and obsessed
          with leaving your car exactly the way the factory built it.
        </p>
        <p className="mt-4 text-steel">
          We&apos;re mobile by design — no shop to drive to, no car to drop
          off. We bring the tools and the craft straight to your driveway.
        </p>
      </div>
    </section>
  );
}
