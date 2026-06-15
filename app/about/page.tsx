import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-widest">
            About Velor Capital
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl">
            Building Long-Term Value Through
            <span className="block text-[#D4A017]">
              Disciplined Investing
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            Velor Capital is an investment and research-driven
            firm focused on strategic capital allocation,
            market intelligence, and sustainable wealth creation.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-white border rounded-3xl p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B1F4D]">
                Our Mission
              </h2>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                To create sustainable long-term value through
                disciplined capital allocation, market research,
                and strategic investment thinking.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B1F4D]">
                Our Vision
              </h2>

              <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                To become a trusted investment brand recognized
                for research excellence, prudent risk management,
                and long-term wealth creation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="text-[#D4A017] uppercase tracking-widest">
                Our Philosophy
              </span>

              <h2 className="mt-4 text-5xl font-bold">
                Research First. Discipline Always.
              </h2>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed">
                At Velor Capital, we believe successful investing
                is built on rigorous research, disciplined execution,
                and long-term thinking.
              </p>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Every investment decision is guided by data,
                analysis, risk management, and a commitment to
                sustainable value creation.
              </p>

            </div>

            <div className="grid gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white">
                  Research Driven
                </h3>

                <p className="mt-3 text-gray-300">
                  Every investment decision begins with detailed
                  market analysis and economic research.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white">
                  Risk Management
                </h3>

                <p className="mt-3 text-gray-300">
                  Protecting capital remains as important as
                  growing it.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white">
                  Long-Term Perspective
                </h3>

                <p className="mt-3 text-gray-300">
                  We prioritize sustainable wealth creation over
                  short-term market speculation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-[#D4A017] uppercase tracking-widest">
              Core Values
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#0B1F4D]">
              Principles We Live By
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Integrity",
              "Discipline",
              "Research",
              "Transparency",
            ].map((value) => (
              <div
                key={value}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  text-center
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D4A017]/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#D4A017]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B1F4D]">
                  {value}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Let's Build Long-Term Value Together
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Connect with Velor Capital to discuss investment
            opportunities, market research, and strategic growth.
          </p>

        </div>

      </section>

    </main>
  );
}