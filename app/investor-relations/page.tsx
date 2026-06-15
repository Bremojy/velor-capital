import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Resources and information for current and prospective investors.",
};

const sections = [
  {
    title: "Performance Reporting",
    description:
      "Access portfolio updates, performance summaries, and periodic reporting materials.",
  },
  {
    title: "Investor Information",
    description:
      "Key information for current and prospective investors regarding our investment approach.",
  },
  {
    title: "Disclosures",
    description:
      "Important disclosures, legal notices, and investment-related documentation.",
  },
  {
    title: "FAQs",
    description:
      "Answers to common questions about Velor Capital and our investment philosophy.",
  },
  {
    title: "Onboarding Information",
    description:
      "Guidance for prospective investors seeking to engage with Velor Capital.",
  },
];

export default function InvestorRelationsPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-[#0B1F4D] text-white py-28">

        <div className="max-w-6xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Investor Relations
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Investor Resources
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            Access important information, disclosures, and
            resources designed for current and prospective investors.
          </p>

        </div>

      </section>

      {/* Content */}
      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {sections.map((section) => (
              <div
                key={section.title}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  border
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

      {/* CTA */}
      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">
            Need Additional Information?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Contact Velor Capital for investor inquiries,
            reporting requests, or partnership discussions.
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
            Contact Investor Relations
          </a>

        </div>

      </section>

    </main>
  );
}