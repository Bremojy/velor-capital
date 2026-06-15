import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071632] via-[#0B1F4D] to-[#102a66] text-white">

      {/* Glow effect */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4A017]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-[#D4A017]/40 text-[#D4A017] text-sm mb-6">
              Institutional Investment Firm
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Wealth Through{" "}
              <span className="block text-[#D4A017]">
                Disciplined Capital Allocation
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-300 max-w-2xl">
              Velor Capital invests in financial markets and strategic opportunities
              with a focus on long-term value creation, risk management, and growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/strategy"
                className="bg-[#D4A017] text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Explore Strategy
              </Link>

              <Link
                href="/investor-relations"
                className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white/10 transition"
              >
                Investor Relations
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-[#D4A017]">10+</h3>
              <p className="mt-2 text-gray-300">Years of Investment Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-5xl font-bold text-[#D4A017]">5</h3>
              <p className="mt-2 text-gray-300">Core Investment Sectors</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-[#D4A017]">
                Long-Term Focus
              </h3>
              <p className="mt-2 text-gray-300">
                Sustainable capital growth strategy
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}