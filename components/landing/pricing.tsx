"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "MVP Development Package",
    price: "$1998",
    description: "One time",
    popular: true,
    features: [
      "Complete MVP development in 2-3 weeks",
      "Web application",
      "Modern, scalable tech stack",
      "Seamless integrations (payments, auth, etc.)",
      "30 days of free maintenance",
      "Personalized, founder-led development",
      "Regular updates and transparent process",
    ],
    cta: "Get Started Now",
    note: "1 Spot left for March",
  },
  {
    name: "Growth Retainer Package",
    price: "$2998",
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
  const handlePlanClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="relative z-10 container px-4 md:px-6"
      >
        <div className="text-center space-y-6 mb-16">
          <motion.div variants={itemVariants} className="inline-block mb-2 px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Transparent Pricing, Exceptional Value
            </span>
          </motion.div>

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

          <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose the perfect package for your project and transform your vision into reality
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
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative rounded-2xl p-8 border ${plan.popular
                ? "border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-gray-900/40"
                : "border-white/10 bg-white/5"
                } backdrop-blur-sm shadow-xl`}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              />

              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-4"
                >
                  <span className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-gray-300 text-lg">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-blue-500/20 p-1">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-base text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => handlePlanClick("https://cal.com/sadman-shakib/30min")}
                  className={`w-full py-6 text-base font-medium rounded-xl transition-all duration-300 ${plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    }`}
                  aria-label={`Select ${plan.name} plan`}
                  tabIndex={0}
                >
                  {plan.cta}
                </Button>
                <p className="text-sm text-center text-gray-400 font-medium">{plan.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Not sure which plan is right for you? <a href="#contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Contact me</a> for a personalized consultation to find the perfect solution for your project.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
