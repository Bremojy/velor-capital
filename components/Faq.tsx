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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">

      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="border rounded-xl"
        >
          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="
              w-full
              text-left
              p-6
              font-semibold
            "
          >
            {faq.question}
          </button>

          {open === index && (
            <div className="px-6 pb-6 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}

    </div>
  );
}