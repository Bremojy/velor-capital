import Container from "./Container";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Investment Management",
    description:
      "Long-term capital allocation across strategic opportunities.",
  },
  {
    title: "Market Research",
    description:
      "Institutional-grade analysis of global financial markets.",
  },
  {
    title: "Strategic Investments",
    description:
      "Focused deployment into high-potential sectors.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#0B1F3A]">
      <Container>
        <SectionTitle
          title="What We Do"
          subtitle="A disciplined approach to preserving and growing capital."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                bg-white
                border border-[#D4AF37]/20
                rounded-xl
                p-8
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#D4AF37]
                transition-all
                duration-300
              "
            >
              <div className="w-12 h-1 bg-[#D4AF37] mb-5 rounded-full" />

              <h3 className="text-xl font-semibold text-[#0B1F3A] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}