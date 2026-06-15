import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071632] via-[#0B1F4D] to-[#102A66] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#D4A017]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A017]/30 bg-white/5 text-[#D4A017] text-sm mb-8">
              Strategic Capital Management
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Wealth Through
              <span className="block text-[#D4A017]">
                Disciplined Capital Allocation
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-relaxed">
              Velor Capital combines market intelligence,
              strategic research, and disciplined investment
              execution to create sustainable long-term value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/strategy"
                className="
                  bg-[#D4A017]
                  text-[#0B1F4D]
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:scale-105
                  transition duration-300
                "
              >
                Explore Strategy
              </Link>

              <Link
                href="/contact"
                className="
                  border border-[#D4A017]/30
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-[#D4A017]/10
                  transition duration-300
                "
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="bg-white/10 backdrop-blur-md border border-[#D4A017]/20 rounded-3xl p-10">

              <div className="flex justify-center">

                <Image
                  src="/logo.jpeg"
                  alt="Velor Capital"
                  width={250}
                  height={250}
                  className="object-contain"
                />

              </div>

            </div>

            {/* Floating Cards */}

            <div className="absolute -top-6 -left-6 bg-[#D4A017] text-[#0B1F4D] px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-bold text-2xl">
                Research
              </div>
              <div className="text-sm">
                Market Intelligence
              </div>
            </div>

            <div className="absolute bottom-0 -right-4 bg-white text-[#071632] px-6 py-4 rounded-2xl shadow-xl">
              <div className="font-bold text-2xl">
                Strategy
              </div>
              <div className="text-sm">
                Long-Term Focus
              </div>
            </div>

          </div>

        </div>

        {/* Metrics Bar */}

        <div className="mt-24 grid md:grid-cols-4 gap-6">

          <div className="bg-white/10 border border-[#D4A017]/15 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-[#D4A017]">
              10+
            </h3>
            <p className="text-gray-300 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white/10 border border-[#D4A017]/15 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-[#D4A017]">
              5
            </h3>
            <p className="text-gray-300 mt-2">
              Investment Sectors
            </p>
          </div>

          <div className="bg-white/10 border border-[#D4A017]/15 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-[#D4A017]">
              Research
            </h3>
            <p className="text-gray-300 mt-2">
              Driven Decisions
            </p>
          </div>

          <div className="bg-white/10 border border-[#D4A017]/15 rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-[#D4A017]">
              Long-Term
            </h3>
            <p className="text-gray-300 mt-2">
              Capital Growth
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}