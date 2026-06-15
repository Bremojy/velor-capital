import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Velor Capital's investment focus and portfolio strategy.",
};

const holdings = [
  {
    sector: "Financial Markets",
    title: "Global Equities",
    description:
      "Long-term investments in high-quality businesses with durable competitive advantages.",
  },
  {
    sector: "Alternative Investments",
    title: "Private Opportunities",
    description:
      "Selective investments in private companies and strategic ventures.",
  },
  {
    sector: "Capital Preservation",
    title: "Defensive Assets",
    description:
      "Liquidity and risk-managed holdings designed to preserve capital.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#D4A017] uppercase tracking-wider">
            Portfolio
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Strategic Capital Allocation
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {holdings.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-lg transition"
              >
                <span className="text-[#D4A017] font-semibold">
                  {item.sector}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}