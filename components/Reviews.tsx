import { siteConfig } from "@/lib/site-config";

// TODO: replace with real Google reviews once the client provides them.
const reviews = [
  {
    name: "Pending Google Review",
    rating: 5,
    text: "Real customer reviews will be added here once available.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="border-b border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          What Drivers Say
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-lg border border-white/10 bg-graphite p-6"
            >
              <div className="text-gold">{"★".repeat(review.rating)}</div>
              <p className="mt-3 text-sm text-steel">{review.text}</p>
              <p className="mt-4 text-sm font-semibold text-silver">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        <a
          href={siteConfig.googleReviewsUrl}
          className="mt-8 inline-block text-sm font-semibold text-gold hover:underline"
        >
          Read our Google Reviews →
        </a>
      </div>
    </section>
  );
}
