import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Philosophy() {
  return (
    <section className="py-24 bg-gray-50">

      <Container>

        <SectionTitle
          title="Our Philosophy"
          subtitle="Disciplined investing built on research and risk management."
        />

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-lg text-gray-700 leading-relaxed">
            Velor Capital believes that sustainable wealth
            creation comes from disciplined capital
            allocation, thorough research, risk awareness,
            and patience.
          </p>

        </div>

      </Container>

    </section>
  );
}