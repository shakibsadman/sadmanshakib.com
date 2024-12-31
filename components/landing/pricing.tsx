"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "MVP Development Package",
    price: "$2497",
    description: "One time",
    popular: true,
    features: [
      "Complete MVP development in 2-3 weeks",
      "Web application/ Mobile App",
      "Modern, scalable tech stack",
      "Seamless integrations (payments, auth, etc.)",
      "30 days of free maintenance",
      "Personalized, founder-led development",
      "Regular updates and transparent process",
    ],
    cta: "Get Started Now",
    note: "1 Spots left for January",
  },
  {
    name: "Growth Retainer Package",
    price: "$2997",
    period: "/month",
    description: "Monthly Retainer",
    features: [
      "60 hours of development time per month",
      "Flexible hours allocation",
      "Weekly strategy calls",
      "Priority feature development",
      "Continuous maintenance & optimization",
      "Same-day emergency support",
    ],
    cta: "Schedule a Call",
    note: "No commitment, cancel anytime",
  },
];

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function PricingSection() {
  return (
    <div className="relative py-24 overflow-hidden bg-black flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="relative z-10 container px-4 md:px-6"
      >
        <div className="text-center space-y-4 mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white">
            Ready to{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
            >
              ShakMVP
            </motion.span>{" "}
            Your Idea?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose the perfect package for your project and get started today
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ scale: 1 }}
              className={`relative rounded-xl p-8 border border-white/10 backdrop-blur-sm ${
                plan.popular ? "bg-white/5" : "bg-white/5"
              }`}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />

              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-3 left-4"
                >
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center text-lg gap-2">
                    <Check className="h-4 w-4 text-blue-400" />
                    <span className="text-lg text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => {
                    window.location.href = "https://cal.com/sadman-shakib/30min";
                  }}
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
                <p className="text-sm text-center text-gray-400">{plan.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
