"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
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

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and deliverables.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              className="border border-primary/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 0 20px rgba(124, 58, 237, 0.1)" }}
            >
              <button
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                aria-expanded={openItems[index]}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-xl font-medium">{item.question}</span>
                <motion.div
                  animate={{
                    rotate: openItems[index] ? 180 : 0,
                    backgroundColor: openItems[index] ? "hsl(250, 84%, 54%)" : "transparent"
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/50"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openItems[index] && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-primary/10">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
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
