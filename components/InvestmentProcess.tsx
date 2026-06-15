export default function InvestmentProcess() {
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "Comprehensive market, economic, and industry research identifies opportunities and emerging trends.",
    },
    {
      number: "02",
      title: "Analysis",
      description:
        "Potential investments are evaluated using fundamental, technical, and macroeconomic frameworks.",
    },
    {
      number: "03",
      title: "Capital Allocation",
      description:
        "Capital is deployed selectively into opportunities offering attractive risk-adjusted returns.",
    },
    {
      number: "04",
      title: "Risk Management",
      description:
        "Continuous monitoring protects capital and maintains portfolio resilience.",
    },
    {
      number: "05",
      title: "Long-Term Growth",
      description:
        "Investments are managed with a focus on sustainable compounding and wealth creation.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

          <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            A Disciplined Investment Framework
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Every decision follows a structured process designed
            to balance opportunity, risk, and long-term value creation.
          </p>

        </div>

        <div className="mt-20">

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  bg-white
                  rounded-2xl
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
                <div className="text-5xl font-bold text-[#D4AF37]/30">
                  {step.number}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}