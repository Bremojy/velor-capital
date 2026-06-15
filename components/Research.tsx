// components/Research.tsx

import Link from "next/link";

const articles = [
  {
    category: "Forex",
    title: "Global Currency Trends for Long-Term Investors",
  },
  {
    category: "Economics",
    title: "Macroeconomic Signals Driving Capital Markets",
  },
  {
    category: "Investment Research",
    title: "Disciplined Capital Allocation in Uncertain Markets",
  },
];

export default function Research() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#D4A017] font-semibold uppercase tracking-wider">
            Research & Insights
          </span>

          <h2 className="text-4xl font-bold text-[#0B1F4D] mt-4">
            Market Intelligence & Investment Commentary
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Research-driven decision making remains at the core of
            Velor Capital's investment philosophy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {articles.map((article) => (
            <div
              key={article.title}
              className="
                border
                rounded-2xl
                p-8
                hover:shadow-xl
                transition
              "
            >
              <span className="text-sm text-[#D4A017] font-semibold">
                {article.category}
              </span>

              <h3 className="text-xl font-bold text-[#0B1F4D] mt-4">
                {article.title}
              </h3>

              <Link
                href="/research"
                className="inline-block mt-6 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}