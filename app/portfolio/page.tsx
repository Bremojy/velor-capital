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
      "Long-term investments in high-quality businesses with durable competitive advantages and strong cash generation.",
  },
  {
    sector: "Alternative Investments",
    title: "Private Opportunities",
    description:
      "Selective investments in private companies, strategic ventures, and emerging growth opportunities.",
  },
  {
    sector: "Capital Preservation",
    title: "Defensive Assets",
    description:
      "Liquidity-focused holdings and risk-managed allocations designed to preserve capital through market cycles.",
  },
];

export default function PortfolioPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Portfolio
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Strategic Capital Allocation
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            Our portfolio is built around disciplined risk management,
            long-term value creation, and strategic diversification
            across carefully selected opportunities.
          </p>

        </div>

      </section>

      {/* Holdings */}
      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {holdings.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white
                  border
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#D4A017]" />
                </div>

                <span className="text-[#D4A017] font-semibold uppercase tracking-wide">
                  {item.sector}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#0B1F4D]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Portfolio Philosophy */}
      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Portfolio Philosophy
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Built for Long-Term Growth
          </h2>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe successful investing requires patience,
            discipline, and a structured approach to capital
            allocation. Our portfolio seeks to balance growth,
            preservation, and opportunity while remaining adaptable
            to changing market conditions.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0B1F4D] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Interested In Our Investment Approach?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Learn more about our investment philosophy,
            research process, and capital allocation strategy.
          </p>

          <a
            href="/contact"
            className="
              inline-block
              mt-10
              bg-[#D4A017]
              text-[#071632]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#c79514]
              transition
            "
          >
            Contact Us
          </a>

        </div>

      </section>

    </main>
  );
}