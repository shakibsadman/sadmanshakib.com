"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useAccordion } from "@/app/hooks";

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
            <motion.div
              key={index}
              className="mb-4 rounded-md"
              initial={false}
              animate={{
                backgroundColor: openItems[index]
                  ? "hsl(240deg 7.32% 10.04%)"
                  : "hsl(240deg 7.32% 8.04%)",
              }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg focus:outline-none  "
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <motion.span
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openItems[index] && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-4 pb-4">
                      <p className="text-textSecondary">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
