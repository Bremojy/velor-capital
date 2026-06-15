import Link from "next/link";

export default function FeaturedResearch() {
  const articles = [
    {
      category: "Forex",
      title: "Global Currency Outlook 2026",
      description:
        "Examining the major trends shaping global currency markets and investor positioning.",
    },
    {
      category: "Economics",
      title: "Macroeconomic Trends Shaping Markets",
      description:
        "Understanding inflation, interest rates, and economic cycles in a changing world.",
    },
    {
      category: "Investment Research",
      title: "Long-Term Capital Allocation Framework",
      description:
        "A disciplined approach to preserving and compounding capital across market cycles.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div>
            <div className="w-16 h-1 bg-[#D4AF37] mb-6 rounded-full" />

            <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
              Research & Insights
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Market Intelligence
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-2xl">
              Stay informed with our latest research,
              market commentary, and investment insights.
            </p>
          </div>

          <Link
            href="/research"
            className="
              bg-[#D4AF37]
              text-[#0B1F3A]
              font-semibold
              px-6
              py-4
              rounded-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View Research Hub
          </Link>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {articles.map((article) => (
            <div
              key={article.title}
              className="
                bg-white
                rounded-3xl
                p-8
                border border-[#D4AF37]/20
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#D4AF37]
                transition-all
                duration-300
              "
            >
              <span className="text-[#D4AF37] font-semibold text-sm uppercase">
                {article.category}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
                {article.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {article.description}
              </p>

              <div className="mt-8">
                <Link
                  href="/research"
                  className="
                    font-semibold
                    text-[#0B1F3A]
                    hover:text-[#D4AF37]
                    transition-colors
                  "
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}