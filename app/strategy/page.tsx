import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Strategy",
  description:
    "Explore Velor Capital's investment philosophy, risk management framework, and capital allocation approach.",
};

const strategySections = [
  {
    title: "Risk Management Framework",
    description:
      "Capital preservation remains central to our investment process. Every opportunity is evaluated through rigorous risk assessment, scenario analysis, and portfolio impact evaluation.",
  },
  {
    title: "Capital Allocation Model",
    description:
      "We allocate capital to opportunities offering attractive risk-adjusted returns while maintaining diversification and liquidity objectives.",
  },
  {
    title: "Diversification Strategy",
    description:
      "Exposure is diversified across industries, asset classes, and economic cycles to improve resilience and support sustainable long-term growth.",
  },
  {
    title: "Market Research Process",
    description:
      "Independent research, macroeconomic analysis, sector evaluation, and continuous monitoring guide our investment decisions.",
  },
  {
    title: "Investment Philosophy",
    description:
      "We focus on disciplined investing, long-term value creation, and patient capital deployment rather than short-term speculation.",
  },
];

export default function StrategyPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-wider">
            Investment Strategy
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Research-Driven Investing.
            Disciplined Execution.
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            Our investment framework combines rigorous research,
            prudent risk management, and long-term thinking to
            pursue sustainable value creation.
          </p>

        </div>
      </section>

      {/* Strategy Sections */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="space-y-10">

            {strategySections.map((section) => (
              <div
                key={section.title}
                className="
                  border
                  rounded-2xl
                  p-8
                  hover:shadow-lg
                  transition
                "
              >
                <h2 className="text-2xl font-bold text-[#0B1F4D]">
                  {section.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}