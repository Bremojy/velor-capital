export default function WhyVelor() {
  const features = [
    {
      title: "Research Driven",
      description:
        "Every investment decision begins with rigorous market research, macroeconomic analysis, and risk evaluation.",
    },
    {
      title: "Disciplined Allocation",
      description:
        "Capital is deployed strategically with a focus on preserving value while pursuing sustainable growth opportunities.",
    },
    {
      title: "Long-Term Perspective",
      description:
        "We prioritize durable wealth creation over short-term speculation and market noise.",
    },
    {
      title: "Risk Management",
      description:
        "Protecting capital remains central to every strategy, ensuring resilience across economic cycles.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

          <span className="text-[#D4AF37] uppercase tracking-wider font-semibold">
            Why Velor Capital
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Investing With Discipline,
            Research & Conviction
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Our approach combines institutional research,
            strategic thinking, and disciplined capital
            allocation to pursue long-term value creation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/5
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                p-8
                hover:border-[#D4AF37]
                hover:bg-white/10
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
              </div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}