import { smsHref, telHref } from "@/lib/site-config";
import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section className="border-b border-white/10 bg-gold">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold text-graphite sm:text-4xl">
          Got a Dent? Send Us a Photo.
        </h2>
        <p className="mt-3 text-graphite/80">
          Free estimate, no obligation. Text or call — we&apos;ll handle the
          rest.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={smsHref}
            className="rounded-md bg-graphite px-6 py-3 text-base font-semibold text-silver hover:bg-graphite/90 transition-colors"
          >
            Text a Photo
          </a>
          <a
            href={telHref}
            className="rounded-md border border-graphite px-6 py-3 text-base font-semibold text-graphite hover:bg-graphite/10 transition-colors"
          >
            Call Now
          </a>
        </div>

        <div className="mt-10 border-t border-graphite/20 pt-8">
          <p className="mb-4 text-sm font-medium text-graphite/80">
            Prefer to fill out a form instead?
          </p>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
