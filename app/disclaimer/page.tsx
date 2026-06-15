import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important legal and investment-related disclosures from Velor Capital.",
};

export default function DisclaimerPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Disclaimer
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Please review the following disclosures carefully before
            relying on information provided by Velor Capital.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-8">

            <div className="bg-white rounded-3xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Informational Purposes Only
              </h2>

              <p className="text-gray-700 leading-relaxed">
                The information provided on this website is for
                informational purposes only and should not be
                considered investment, financial, legal, or tax advice.
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                No Investment Offer
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Nothing contained on this website constitutes an offer,
                solicitation, recommendation, or invitation to buy or
                sell any investment product, security, or financial
                instrument.
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Investment Risk
              </h2>

              <p className="text-gray-700 leading-relaxed">
                All investments involve risk, including the possible
                loss of principal. Past performance is not indicative
                of future results.
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                No Guarantees
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Velor Capital makes no representations or warranties
                regarding the accuracy, completeness, or reliability of
                information presented on this website.
              </p>
            </div>

            <div className="bg-white rounded-3xl border shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                External Links
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Links to third-party websites are provided for
                convenience only. Velor Capital is not responsible for
                the content, accuracy, or privacy practices of external
                websites.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}