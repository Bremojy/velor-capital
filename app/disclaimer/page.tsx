import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important legal and investment-related disclosures from Velor Capital.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold text-[#0B1F4D] mb-8">
        Disclaimer
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-semibold text-[#0B1F4D] mb-3">
            Informational Purposes Only
          </h2>

          <p>
            The information provided on this website is for
            informational purposes only and should not be
            considered investment, financial, legal, or tax advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B1F4D] mb-3">
            No Investment Offer
          </h2>

          <p>
            Nothing contained on this website constitutes an offer,
            solicitation, recommendation, or invitation to buy or
            sell any investment product, security, or financial
            instrument.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B1F4D] mb-3">
            Investment Risk
          </h2>

          <p>
            All investments involve risk, including the possible
            loss of principal. Past performance is not indicative
            of future results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B1F4D] mb-3">
            No Guarantees
          </h2>

          <p>
            Velor Capital makes no representations or warranties
            regarding the accuracy, completeness, or reliability of
            information presented on this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#0B1F4D] mb-3">
            External Links
          </h2>

          <p>
            Links to third-party websites are provided for
            convenience only. Velor Capital is not responsible for
            the content, accuracy, or privacy practices of external
            sites.
          </p>
        </section>

      </div>

    </main>
  );
}