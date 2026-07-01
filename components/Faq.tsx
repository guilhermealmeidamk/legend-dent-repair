"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-silver sm:text-4xl">
          FAQ
        </h2>

        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 text-left text-silver"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-gold">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm text-steel">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
