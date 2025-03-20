"use client";

import { Grid, Link, Moon, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function StyleSection() {
    const features = [
        {
            icon: <Grid className="w-6 h-6 text-primary" />,
            title: "UI Library",
            description: "Uses Gluestack UI, a modern and customizable UI library inspired by Radix/ShadCN."
        },
        {
            icon: <Link className="w-6 h-6 text-primary" />,
            title: "TailwindCSS",
            description: "By integrating NativeWind you can use TailwindCSS to style your app."
        },
        {
            icon: <Moon className="w-6 h-6 text-primary" />,
            title: "Dark Mode",
            description: "Demo app comes with dark mode support out of the box."
        },
        {
            icon: <Settings className="w-6 h-6 text-primary" />,
            title: "Customizable",
            description: "You can customize the theme, fonts, and colors to match your brand."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-background/80 to-background py-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">Design System</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Simple, Modern, Customizable
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        NativeExpress leverages familiar web styling patterns with NativeWind (TailwindCSS for React Native) and
                        Gluestack UI, providing a Radix/ShadCN-like component system.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5">
                                <div className="p-8 h-full flex flex-col">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
