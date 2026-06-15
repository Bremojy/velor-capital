export default function CorePrinciples() {
  const principles = [
    {
      title: "Capital Preservation",
      description:
        "Protecting capital remains the foundation of every investment decision.",
    },
    {
      title: "Risk Management",
      description:
        "Structured risk controls help navigate uncertainty and market volatility.",
    },
    {
      title: "Research Excellence",
      description:
        "Every allocation decision is supported by rigorous market analysis.",
    },
    {
      title: "Long-Term Growth",
      description:
        "We focus on sustainable compounding rather than short-term speculation.",
    },
    {
      title: "Transparency",
      description:
        "Clear communication and disciplined reporting build lasting confidence.",
    },
    {
      title: "Strategic Thinking",
      description:
        "Investment opportunities are evaluated within broader economic trends.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

          <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Our Philosophy
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Principles That Guide Every Decision
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Our investment philosophy combines discipline,
            research, and risk management to pursue long-term value creation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {principles.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/5
                backdrop-blur-sm
                border border-white/10
                rounded-3xl
                p-8
                hover:border-[#D4AF37]
                hover:bg-white/10
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]" />
              </div>

              <h3 className="text-2xl font-bold text-white">
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