import type { Metadata } from "next";
import ResearchCard from "@/components/ResearchCard";
import { client } from "@/lib/sanity";
import { ARTICLES_QUERY } from "@/lib/queries";
import { Article } from "@/types/article";

export const metadata: Metadata = {
  title: "Research Hub",
  description:
    "Market commentary, economic analysis, and investment research from Velor Capital.",
};

export default async function ResearchPage() {
  const reports: Article[] = await client.fetch(ARTICLES_QUERY);

  return (
    <main>

      {/* Hero Section */}

      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Research Hub
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Market Intelligence &
            Investment Insights
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Explore our latest market commentary,
            investment research, and economic analysis.
          </p>

        </div>
      </section>

      {/* Research Articles */}

      <section className="py-24 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          {reports.length === 0 ? (

            <div className="bg-white rounded-3xl p-12 text-center border shadow-sm">

              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4A017]/10 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#D4A017]" />
              </div>

              <h2 className="mt-8 text-3xl font-bold text-[#0B1F4D]">
                No Research Published Yet
              </h2>

              <p className="mt-4 text-gray-700 max-w-xl mx-auto">
                Research articles will appear here once
                they are published through the Sanity Studio.
              </p>

            </div>

          ) : (

            <>
              <div className="text-center mb-16">

                <span className="text-[#D4A017] uppercase tracking-widest">
                  Latest Publications
                </span>

                <h2 className="mt-4 text-5xl font-bold text-[#0B1F4D]">
                  Research & Analysis
                </h2>

              </div>

              <div className="grid lg:grid-cols-3 gap-8">

                {reports.map((report) => (
                  <ResearchCard
                    key={report._id}
                    category={report.category}
                    title={report.title}
                    summary={report.excerpt}
                    date={new Date(
                      report.publishedAt
                    ).toLocaleDateString()}
                  />
                ))}

              </div>
            </>

          )}

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#071632] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-[#D4A017] uppercase tracking-widest">
            Stay Informed
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Research-Driven Investing
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Our investment philosophy is grounded in
            disciplined research, risk management,
            and long-term value creation.
          </p>

        </div>

      </section>

    </main>
  );
}