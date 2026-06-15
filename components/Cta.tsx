import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Gold Accent */}
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full" />

        <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
          Get Started
        </span>

        <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
          Partner With Velor Capital
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Discover research-driven investment strategies
          designed for long-term value creation.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            mt-10
            px-8
            py-4
            rounded-xl
            font-semibold
            bg-[#D4AF37]
            text-[#0B1F3A]
            hover:scale-105
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}