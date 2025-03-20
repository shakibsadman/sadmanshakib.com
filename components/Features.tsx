"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Smartphone,
    Palette,
    Globe,
    Rocket,
    BarChart,
} from "lucide-react";

const features = [
    {
        name: "Custom Development",
        description:
            "Build scalable web applications with modern technologies and best practices.",
        icon: Code2,
    },
    {
        name: "Mobile Solutions",
        description:
            "Create native and cross-platform mobile apps that deliver exceptional user experiences.",
        icon: Smartphone,
    },
    {
        name: "UI/UX Design",
        description:
            "Design beautiful and intuitive interfaces that engage and delight users.",
        icon: Palette,
    },
    {
        name: "Digital Marketing",
        description:
            "Drive growth with data-driven marketing strategies and campaigns.",
        icon: Globe,
    },
    {
        name: "MVP Development",
        description:
            "Launch your product quickly with our rapid MVP development process.",
        icon: Rocket,
    },
    {
        name: "Analytics & Insights",
        description:
            "Make informed decisions with comprehensive analytics and reporting.",
        icon: BarChart,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Features() {
    return (
        <section className="bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Comprehensive Digital Solutions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Everything you need to build, launch, and grow your digital presence.
                        We provide end-to-end solutions tailored to your needs.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.name}
                            variants={itemVariants}
                            className="group relative rounded-2xl border bg-card p-8 transition-all hover:border-primary/50"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">{feature.name}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
} 