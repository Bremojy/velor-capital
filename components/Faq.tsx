"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who can invest with Velor Capital?",
    answer:
      "Investor eligibility requirements will be detailed as investor programs become available.",
  },
  {
    question: "How often are reports provided?",
    answer:
      "Performance updates and investor communications are provided periodically.",
  },
  {
    question: "How is risk managed?",
    answer:
      "Risk management is integrated throughout our investment process.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0B1F3A]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

          <span className="text-[#D4AF37] uppercase tracking-widest font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Common Investor Questions
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Answers to some of the most common questions about
            our investment philosophy and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                bg-white/5
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                overflow-hidden
                hover:border-[#D4AF37]
                transition-all
                duration-300
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  p-6
                  text-left
                "
              >
                <span className="font-semibold text-white text-lg">
                  {faq.question}
                </span>

                <span className="text-[#D4AF37] text-2xl font-light">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-white/75 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}