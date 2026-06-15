export default function Credibility() {
  const pillars = [
    {
      title: "Research Driven",
      description:
        "Institutional-grade analysis supports every allocation.",
    },
    {
      title: "Risk Focused",
      description:
        "Capital preservation remains central to our strategy.",
    },
    {
      title: "Long-Term Vision",
      description:
        "Sustainable growth through disciplined investing.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

          <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Why Velor Capital
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Built on Discipline, Research & Integrity
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Velor Capital applies rigorous market research,
            disciplined risk management, and long-term thinking
            to every investment decision.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="
                bg-white
                p-8
                rounded-2xl
                border border-[#D4AF37]/20
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#D4AF37]
                transition-all
                duration-300
              "
            >
              <div className="w-10 h-1 bg-[#D4AF37] mb-5 rounded-full" />

              <h3 className="text-xl font-bold text-[#0B1F3A]">
                {pillar.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}