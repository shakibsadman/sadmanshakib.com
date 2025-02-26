"use client";
import { ChevronDown } from "lucide-react";
import { useAccordion } from "@/app/hooks";

import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faq: FAQItem[];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  const { openItems, toggleItem } = useAccordion(faq.length);

  return (
    <section className="py-12 bg-background text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faq.map((item, index) => (
            <div
              key={index}
              className={cn(
                "mb-4 rounded-md transition-colors duration-300",
                openItems[index]
                  ? "bg-[hsl(240deg_7.32%_10.04%)]"
                  : "bg-[hsl(240deg_7.32%_8.04%)]"
              )}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span
                  className={cn(
                    "transform transition-transform duration-300",
                    openItems[index] ? "rotate-180" : "rotate-0"
                  )}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems[index]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                )}
              >
                <div className="px-4 pb-4">
                  <p className="text-textSecondary">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
