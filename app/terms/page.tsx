import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the Velor Capital website.",
};

export default function TermsPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-wider">
            Legal Information
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Terms of Service
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            These Terms of Service govern your access to and use
            of the Velor Capital website and its content.
          </p>

        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-8">

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Acceptance of Terms
              </h2>

              <p className="text-gray-700 leading-relaxed">
                By accessing and using the Velor Capital website,
                you agree to comply with and be bound by these
                Terms of Service and all applicable laws and
                regulations.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Website Use
              </h2>

              <p className="text-gray-700 leading-relaxed">
                This website is provided solely for informational
                purposes. Nothing contained herein constitutes
                investment, legal, accounting, or tax advice.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Intellectual Property
              </h2>

              <p className="text-gray-700 leading-relaxed">
                All content, trademarks, branding, graphics,
                research materials, and intellectual property
                displayed on this website are owned by or licensed
                to Velor Capital and may not be reproduced without
                prior written consent.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Limitation of Liability
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Velor Capital shall not be liable for any direct,
                indirect, incidental, or consequential damages
                arising from the use of this website or reliance
                on its content.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#0B1F4D] mb-4">
                Changes to Terms
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Velor Capital reserves the right to update or
                modify these Terms of Service at any time without
                prior notice. Continued use of the website
                constitutes acceptance of any revised terms.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}