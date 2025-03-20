"use client";

import { Box, GitMerge, Layout, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const defaultTaglines = [
    {
        title: "Fast MVP Launch",
        description:
            "Accelerate your SaaS product launch with our efficient and scalable MVP solutions.",
        subTags: ["Rapid Development", "Quick Turnaround", "Ready-to-Launch"],
        color: "from-blue-600/20 to-blue-900/40",
        iconColor: "text-blue-400",
        tagColor: "text-blue-300",
        checkColor: "text-blue-500",
    },
    {
        title: "Seamless Integrations",
        description:
            "Effortlessly integrate with popular tools and services like Stripe, Supabase, and more.",
        subTags: ["API Integrations", "Third-Party Services", "Automated Workflows"],
        color: "from-purple-600/20 to-purple-900/40",
        iconColor: "text-purple-400",
        tagColor: "text-purple-300",
        checkColor: "text-purple-500",
    },
    {
        title: "User-Centric Design",
        description: "Deliver an exceptional user experience with responsive and modern UI/UX design.",
        subTags: ["Intuitive Interfaces", "Mobile Responsive", "Tailored User Journeys"],
        color: "from-emerald-600/20 to-emerald-900/40",
        iconColor: "text-emerald-400",
        tagColor: "text-emerald-300",
        checkColor: "text-emerald-500",
    },
];

const MotionCard = motion(Card);

export default function HeroFooter() {
    const icons = [
        <Box key="box" className="w-6 h-6" />,
        <Layout key="layout" className="w-6 h-6" />,
        <GitMerge key="git-merge" className="w-6 h-6" />,
    ];

    return (
        <div className="w-full py-12 px-6 max-w-screen-xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {defaultTaglines.map((tagline, index) => (
                    <MotionCard
                        key={tagline.title}
                        className={`relative overflow-hidden bg-gradient-to-br ${tagline.color} border border-gray-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl group`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        <div className="absolute -top-24 -right-24 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                        <CardContent className="p-8">
                            <motion.div
                                className="flex items-center gap-4 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                            >
                                <div className={`p-3 rounded-lg bg-background/30 backdrop-blur-sm ${tagline.iconColor}`}>
                                    {icons[index]}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{tagline.title}</h3>
                            </motion.div>

                            <motion.p
                                className="text-gray-300 mb-8 text-base leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                            >
                                {tagline.description}
                            </motion.p>

                            <motion.div
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                            >
                                {tagline.subTags.map((tag, tagIndex) => (
                                    <motion.div
                                        key={tag}
                                        className={`flex items-center ${tagline.tagColor}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2 + 0.6 + tagIndex * 0.1,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <CheckCircle className={`w-5 h-5 mr-3 ${tagline.checkColor}`} />
                                        <span className="font-medium">{tag}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl bg-white"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </CardContent>
                    </MotionCard>
                ))}
            </div>
        </div>
    );
}