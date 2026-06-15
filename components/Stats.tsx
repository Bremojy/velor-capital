import Container from "./Container";

export default function Stats() {
  return (
    <section className="bg-[#0B1F4D] py-20 text-white">

      <Container>

        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-bold text-[#D4A017]">
              10+
            </h3>

            <p className="mt-3">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#D4A017]">
              5
            </h3>

            <p className="mt-3">
              Investment Sectors
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#D4A017]">
              100%
            </h3>

            <p className="mt-3">
              Long-Term Focus
            </p>
          </div>

        </div>

      </Container>

    </section>
  );
}