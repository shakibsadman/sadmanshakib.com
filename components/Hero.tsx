"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
    "Custom Web Development",
    "UI/UX Design",
    "Mobile Applications",
    "Digital Marketing",
];

export default function Hero() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-background">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="pt-32 pb-16 text-center sm:pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            Transform Your Digital Presence with{" "}
                            <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                                Innovation
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
                    >
                        We build cutting-edge digital solutions that help businesses scale and succeed
                        in the modern world. From web applications to mobile solutions, we&apos;ve got
                        you covered.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 flex items-center justify-center gap-x-6"
                    >
                        <Button size="lg" className="gap-2">
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            View Our Work
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-sm font-medium"
                            >
                                <CheckCircle className="h-4 w-4 text-primary" />
                                {feature}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 