import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-[#0B1F4D] text-white py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Partner With Velor Capital
        </h2>

        <p className="mt-6 text-xl text-gray-300">
          Discover research-driven investment strategies
          designed for long-term value creation.
        </p>

        <Link
          href="/contact"
          className="
            inline-block
            mt-10
            bg-[#D4A017]
            text-black
            px-8
            py-4
            rounded-lg
            font-semibold
          "
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}