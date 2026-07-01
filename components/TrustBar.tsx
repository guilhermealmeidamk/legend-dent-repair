const badges = [
  "Free Estimates",
  "We Come to You",
  "No Carfax Report",
  "Insurance & Hail Damage",
];

export default function TrustBar() {
  return (
    <section className="border-b border-white/10 bg-graphite">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4">
        {badges.map((badge) => (
          <div
            key={badge}
            className="flex items-center justify-center rounded-md border border-white/10 px-3 py-3 text-center text-sm font-medium text-steel"
          >
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
