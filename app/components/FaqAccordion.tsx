'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={faq.question}
            className="rounded-2xl border border-[#e3d3ba] bg-white/80"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[#2f2419]">{faq.question}</span>
              <span className="text-xl leading-none text-[#8f6b3f]">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5">
                <p className="text-sm text-[#5f4c37]">{faq.answer}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
