"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import AvailabilityBanner from "./availability-banner";
import HeroFooter from "./hero-footer";



const textVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  initial: {
    opacity: 0,
    y: 100,
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

export default function HeroSection() {
  return (
    <div className="relative w-full bg-black">
      <motion.div
        variants={{
          initial: { opacity: 0, y: -60 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.2,
            },
          },
        }}
        className="relative z-50"
      >
        <AvailabilityBanner />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      <motion.div
        initial="initial"
        animate="animate"
        variants={textVariants}
        className="relative z-10 max-w-5xl mx-auto px-4 pb-16 text-center"
      >
        <motion.h1
          variants={wordVariants}
          className="text-4xl sm:text-8xl font-bold tracking-tight mb-6 text-white"
        >
          SaaS MVP for the <br />
          <motion.span
            variants={{
              initial: { opacity: 0, y: 50, scale: 0.9 },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.2,
                },
              },
            }}
            className="bg-gradient-to-r from-primary to-violet-400 text-transparent bg-clip-text"
          >
            21st Century
          </motion.span>
        </motion.h1>

        <motion.p variants={wordVariants} className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
          The modern way to build your SaaS MVP and get it to market within weeks.
        </motion.p>

        <motion.div
          variants={wordVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a target="_blank" rel="noopener noreferrer" href="https://cal.com/sadman-shakib/30min">
            <Button className="gap-2 text-lg bg-primary hover:bg-primary/90 h-14 w-72 rounded-full text-black">
              <Calendar className="w-6 h-6" />
              Schedule a Call
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={{
            initial: { opacity: 0, y: 60 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.4,
              },
            },
          }}
          className="mt-16 flex justify-center"
        >
          <HeroFooter />
        </motion.div>
      </motion.div>
    </div>
  );
}
