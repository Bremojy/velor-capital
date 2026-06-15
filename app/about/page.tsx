import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Velor Capital's mission, vision, values, and long-term investment philosophy.",
};

const values = [
  {
    title: "Integrity",
    description:
      "Transparency, accountability, and ethical decision making."
  },
  {
    title: "Discipline",
    description:
      "Research-driven investing guided by process and risk management."
  },
  {
    title: "Excellence",
    description:
      "Continuous improvement in strategy, execution, and outcomes."
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-wider">
            About Velor Capital
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Building Long-Term Value Through
            Disciplined Investing
          </h1>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B1F4D]">
            Our Story
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Velor Capital was established with the belief that
            disciplined capital allocation, independent research,
            and long-term thinking create sustainable investment
            success. We focus on identifying opportunities that
            combine strong fundamentals with durable growth
            potential.
          </p>

        </div>
      </section>

      {/* Founder Vision */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B1F4D]">
            Founder Vision
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            To create an investment institution recognized for
            disciplined decision making, responsible capital
            stewardship, and sustainable long-term value creation.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Mission
              </h3>

              <p className="mt-4 text-gray-600">
                Generate sustainable growth through disciplined
                investment strategies and prudent risk management.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0B1F4D]">
                Vision
              </h3>

              <p className="mt-4 text-gray-600">
                Become a trusted global investment partner known
                for excellence, integrity, and long-term results.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F7FA] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F4D]">
            Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B1F4D]">
            Growth Roadmap
          </h2>

          <div className="mt-12 space-y-8">

            <div className="border-l-4 border-[#D4A017] pl-6">
              <h3 className="font-bold">
                Foundation
              </h3>
              <p className="text-gray-600">
                Build institutional investment processes.
              </p>
            </div>

            <div className="border-l-4 border-[#D4A017] pl-6">
              <h3 className="font-bold">
                Expansion
              </h3>
              <p className="text-gray-600">
                Diversify opportunities across sectors.
              </p>
            </div>

            <div className="border-l-4 border-[#D4A017] pl-6">
              <h3 className="font-bold">
                Scale
              </h3>
              <p className="text-gray-600">
                Grow investment capabilities and investor services.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}