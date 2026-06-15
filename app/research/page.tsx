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
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#D4A017] uppercase tracking-wider">
            Research Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Market Intelligence & Investment Insights
          </h1>
        </div>
      </section>

      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          {reports.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-[#0B1F4D]">
                No research articles published yet
              </h2>

              <p className="mt-4 text-gray-600">
                Create and publish articles from the Sanity Studio.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {reports.map((report) => (
                <ResearchCard
                  key={report._id}
                  category={report.category}
                  title={report.title}
                  summary={report.excerpt}
                  date={new Date(report.publishedAt).toLocaleDateString()}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}