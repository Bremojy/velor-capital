import Container from "./Container";

export default function Stats() {
const stats = [
{
value: "10+",
label: "Years Experience",
},
{
value: "5",
label: "Investment Sectors",
},
{
value: "100%",
label: "Long-Term Focus",
},
];

return ( <section className="bg-[#071632] py-24"> <Container>

```
    <div className="text-center mb-16">
      <span className="text-[#D4A017] uppercase tracking-widest text-sm">
        Velor Capital
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        Investment Excellence
      </h2>

      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Built on research, discipline, and a commitment
        to sustainable long-term value creation.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-3xl
            p-10
            text-center
            hover:-translate-y-2
            hover:border-[#D4A017]/40
            transition-all
            duration-300
          "
        >
          <h3 className="text-6xl font-bold text-[#D4A017]">
            {stat.value}
          </h3>

          <p className="mt-4 text-lg text-gray-300">
            {stat.label}
          </p>
        </div>
      ))}

    </div>

  </Container>
</section>


);
}
