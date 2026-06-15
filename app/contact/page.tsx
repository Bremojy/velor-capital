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
      <section className="bg-[#0B1F4D] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#D4A017] uppercase tracking-wider">
            Contact Velor Capital
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Let's Start a Conversation
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We welcome inquiries regarding investment opportunities,
            strategic partnerships, and investor relations.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm p-10">
            <h2 className="text-3xl font-bold text-[#0B1F4D] mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />

              <textarea
                rows={6}
                placeholder="How can we help?"
                className="w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
              />

              <button
                type="submit"
                className="
                  bg-[#D4A017]
                  hover:bg-[#c79514]
                  transition
                  px-8
                  py-4
                  rounded-lg
                  font-semibold
                  text-black
                "
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0B1F4D]">
                Investor Relations
              </h3>
              <p className="mt-4 text-gray-600">
                For investor inquiries and reporting requests.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0B1F4D]">
                Partnerships
              </h3>
              <p className="mt-4 text-gray-600">
                Discuss strategic collaborations and opportunities.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#0B1F4D]">
                General Inquiries
              </h3>
              <p className="mt-4 text-gray-600">
                Reach out for any questions about Velor Capital.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}