"use client";

import { Box, GitMerge, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const defaultTaglines = [
  {
    title: "Fast MVP Launch",
    description:
      "Accelerate your SaaS product launch with our efficient and scalable MVP solutions.",
    subTags: ["Rapid Development", "Quick Turnaround", "Ready-to-Launch"],
  },
  {
    title: "Seamless Integrations",
    description:
      "Effortlessly integrate with popular tools and services like Stripe, Supabase, and more.",
    subTags: ["API Integrations", "Third-Party Services", "Automated Workflows"],
  },
  {
    title: "User-Centric Design",
    description: "Deliver an exceptional user experience with responsive and modern UI/UX design.",
    subTags: ["Intuitive Interfaces", "Mobile Responsive", "Tailored User Journeys"],
  },
];

const MotionCard = motion(Card);

export default function HeroFooter() {
  const icons = [
    <Box key="box" className="w-6 h-6 text-white" />,
    <Layout key="layout" className="w-6 h-6 text-white" />,
    <GitMerge key="git-merge" className="w-6 h-6 text-white" />,
  ];

  return (
    <div className="w-full p-6 max-w-screen-xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 `">
        {defaultTaglines.map((tagline, index) => (
          <MotionCard
            key={tagline.title}
            className="relative overflow-hidden bg-gradient-to-br from-backgroundSecondary to-gray-900 border-gray-800 group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            <CardContent className="p-6">
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: "easeOut" }}
              >
                {icons[index]}
                <h3 className="text-xl font-semibold text-white">{tagline.title}</h3>
              </motion.div>
              <motion.p
                className="text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
              >
                {tagline.description}
              </motion.p>
              <motion.ul
                className="space-y-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: "easeOut" }}
              >
                {tagline.subTags.map((tag, tagIndex) => (
                  <motion.li
                    key={tag}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.6 + tagIndex * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-emerald-500"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tag}
                  </motion.li>
                ))}
              </motion.ul>

            </CardContent>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
