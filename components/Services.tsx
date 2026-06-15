import Container from "./Container";
import SectionTitle from "./SectionTitle";

const services = [
  {
    title: "Investment Management",
    description:
      "Long-term capital allocation across strategic opportunities."
  },
  {
    title: "Market Research",
    description:
      "Institutional-grade analysis of global financial markets."
  },
  {
    title: "Strategic Investments",
    description:
      "Focused deployment into high-potential sectors."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          title="What We Do"
          subtitle="A disciplined approach to preserving and growing capital."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                border
                rounded-xl
                p-8
                hover:shadow-xl
                transition
              "
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}