const sections = [
  "Performance Reporting",
  "Investor Information",
  "Disclosures",
  "FAQs",
  "Onboarding Information",
];

export default function InvestorRelationsPage() {
  return (
    <main className="py-24 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-[#0B1F4D]">
          Investor Relations
        </h1>

        <p className="mt-6 text-gray-600">
          Resources and information for current and prospective investors.
        </p>

        <div className="mt-16 space-y-6">

          {sections.map((section) => (
            <div
              key={section}
              className="bg-white p-8 rounded-xl border"
            >
              <h2 className="text-2xl font-semibold">
                {section}
              </h2>
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}