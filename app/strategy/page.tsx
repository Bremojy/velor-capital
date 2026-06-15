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

          <span className="text-[#D4A017] uppercase tracking-widest">
            Investment Strategy
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Research-Driven Investing.
            <br />
            Disciplined Execution.
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            Our investment framework combines rigorous research,
            prudent risk management, and long-term thinking to
            pursue sustainable value creation.
          </p>

        </div>
      </section>

      {/* Strategy Cards */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-[#D4A017] uppercase tracking-widest">
              Our Framework
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#0B1F4D]">
              How We Invest
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {strategySections.map((section) => (
              <div
                key={section.title}
                className="
                  bg-white
                  border
                  rounded-3xl
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-[#D4A017]" />
                </div>

                <h2 className="text-2xl font-bold text-[#0B1F4D]">
                  {section.title}
                </h2>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  {section.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Philosophy CTA */}

      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Long-Term Thinking
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Investing With Discipline
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            We seek sustainable growth through careful capital
            allocation, research-driven decision making,
            diversification, and prudent risk management.
          </p>

        </div>

      </section>

    </main>
  );
}