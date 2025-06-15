"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Cloud, 
  ShoppingCart, 
  BarChart3, 
  Wrench, 
  Users, 
  Camera, 
  DollarSign, 
  Zap 
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    icon: Bot,
  },
  {
    title: "SaaS Applications",
    icon: Cloud,
  },
  {
    title: "Online Marketplaces",
    icon: ShoppingCart,
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
  },
  {
    title: "Internal Tools",
    icon: Wrench,
  },
  {
    title: "Community Platforms",
    icon: Users,
  },
  {
    title: "Content & Media Apps",
    icon: Camera,
  },
  {
    title: "Financial Tools",
    icon: DollarSign,
  },
  {
    title: "Integrations and APIs",
    icon: Zap,
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 40,
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

export default function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-block"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            What Can We Build
          </span>
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-textPrimary"
        >
          Built to build just about any idea
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl text-textSecondary max-w-3xl mx-auto"
        >
          From AI to marketplaces, we build the core features you need to test 
          your idea and start generating real revenue.
        </motion.p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-backgroundSecondary/40 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-light/30 transition-all duration-300">
                  <Icon 
                    className="w-6 h-6 text-primary group-hover:text-primary-light transition-colors duration-300" 
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-textPrimary group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
} 