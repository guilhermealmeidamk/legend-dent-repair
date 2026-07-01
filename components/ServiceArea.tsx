import { siteConfig } from "@/lib/site-config";

export default function ServiceArea() {
  return (
    <section id="service-area" className="border-b border-white/10 bg-graphite">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          Serving Greater Atlanta
        </h2>

        <ul className="mt-8 flex flex-wrap gap-3">
          {siteConfig.serviceAreaCities.map((city) => (
            <li
              key={city}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-steel"
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
