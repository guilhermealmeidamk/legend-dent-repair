import { telHref, smsHref } from "@/lib/site-config";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/10 bg-gunmetal lg:hidden">
      <a
        href={telHref}
        className="flex-1 py-3 text-center text-sm font-semibold text-silver border-r border-white/10 active:bg-white/5"
      >
        Call Now
      </a>
      <a
        href={smsHref}
        className="flex-1 py-3 text-center text-sm font-semibold text-graphite bg-gold active:bg-gold/90"
      >
        Text a Photo
      </a>
    </div>
  );
}
