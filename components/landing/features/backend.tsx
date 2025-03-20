"use client";

import { Database, Server, RefreshCw, Table2, Zap, } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function FeatureSection() {
    const features = [
        {
            icon: <Database className="w-5 h-5 text-primary" />,
            title: "Database Integration",
            description: "Ready-to-use Supabase Postgres database with complete CRUD examples and optimized query patterns."
        },
        {
            icon: <Server className="w-5 h-5 text-primary" />,
            title: "Serverless Functions",
            description: "Pre-configured serverless endpoints with production-ready examples for authentication, payments, and more."
        },
        {
            icon: <RefreshCw className="w-5 h-5 text-primary" />,
            title: "Data Management",
            description: "Integrated React Query for efficient server state management, caching, and real-time updates with minimal code."
        },
        {
            icon: <Table2 className="w-5 h-5 text-primary" />,
            title: "Migrations & Seeding",
            description: "Preconfigured database migrations and seed data for quick development setup and consistent environments."
        }
    ];

    return (
        <div className="bg-gradient-to-b from-background/80 to-background py-16">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                        <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Full-Stack Ready
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                        Build a complete SaaS app in record time
                    </p>
                    <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
                        Leverage the power of Supabase Backend with PostgreSQL database, authentication, and
                        serverless functions — all preconfigured and ready for your MVP.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/5">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
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
