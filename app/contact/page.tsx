import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Velor Capital for investment inquiries, partnerships, and investor relations.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0B1F4D] text-white py-28">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#D4A017] uppercase tracking-widest">
            Contact Velor Capital
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Let's Start a Conversation
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl">
            We welcome inquiries regarding investment opportunities,
            strategic partnerships, and investor relations.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl border p-10">

            <h2 className="text-3xl font-bold text-[#0B1F4D] mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  text-[#0B1F4D]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#D4A017]
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  text-[#0B1F4D]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#D4A017]
                "
              />

              <input
                type="text"
                placeholder="Company"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  text-[#0B1F4D]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#D4A017]
                "
              />

              <textarea
                rows={6}
                placeholder="How can we help?"
                className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-xl
                  text-[#0B1F4D]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#D4A017]
                "
              />

              <button
                type="submit"
                className="
                  bg-[#D4A017]
                  hover:bg-[#c79514]
                  transition
                  duration-300
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-[#0B1F4D]
                "
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Contact Details */}
      <section className="py-24 bg-[#071632] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-[#D4A017] uppercase tracking-widest">
              Get In Touch
            </span>

            <h2 className="mt-4 text-5xl font-bold">
              We're Here To Help
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white">
                Investor Relations
              </h3>

              <p className="mt-4 text-gray-300">
                For investor inquiries, reporting requests,
                and capital allocation discussions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white">
                Partnerships
              </h3>

              <p className="mt-4 text-gray-300">
                Discuss strategic collaborations, joint ventures,
                and business opportunities.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white">
                General Inquiries
              </h3>

              <p className="mt-4 text-gray-300">
                Reach out with any questions regarding
                Velor Capital and our services.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}