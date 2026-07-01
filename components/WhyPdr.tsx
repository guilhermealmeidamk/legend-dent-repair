const rows = [
  { label: "Paint", shop: "Repainted (color may not match)", legend: "Factory paint kept" },
  { label: "Time", shop: "Days to weeks", legend: "Often same day" },
  { label: "Cost", shop: "$$$", legend: "A fraction of the price" },
  { label: "Carfax", shop: "May be recorded", legend: "No record" },
  { label: "Resale value", shop: "Can drop", legend: "Protected" },
];

export default function WhyPdr() {
  return (
    <section className="border-b border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          Why PDR
        </h2>
        <p className="mt-2 text-steel">The body shop alternative, side by side.</p>

        <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-graphite text-steel">
                <th className="px-4 py-3 font-medium"></th>
                <th className="px-4 py-3 font-medium">Traditional Body Shop</th>
                <th className="px-4 py-3 font-medium text-gold">Legend PDR</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-gunmetal" : "bg-graphite"}
                >
                  <td className="px-4 py-3 font-semibold text-silver">{row.label}</td>
                  <td className="px-4 py-3 text-steel">{row.shop}</td>
                  <td className="px-4 py-3 text-silver">{row.legend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
