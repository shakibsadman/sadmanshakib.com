"use client";

import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featureTabs } from "./constants";

export default function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-background/95">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium uppercase tracking-wider text-primary">Powerful Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">All Features</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our comprehensive suite of tools designed to accelerate your project development
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Tabs defaultValue="authentication" className="max-w-5xl mx-auto">
                        <ScrollArea className="w-full">
                            <TabsList className="mb-8 gap-2 bg-background/20 backdrop-blur-sm p-2 rounded-full border border-white/10 w-full justify-center">
                                {featureTabs.map(({ title, icon: Icon }) => (
                                    <TabsTrigger
                                        key={title.toLowerCase()}
                                        value={title.toLowerCase()}
                                        className="rounded-full h-[56px] px-6 font-medium text-base transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Icon
                                                className="opacity-80"
                                                size={18}
                                                strokeWidth={2.5}
                                                aria-hidden="true"
                                            />
                                            <span>{title}</span>
                                        </div>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            <ScrollBar orientation="horizontal" className="opacity-30" />
                        </ScrollArea>

                        <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            {featureTabs.map(({ title, content: Content }) => (
                                <TabsContent
                                    key={title.toLowerCase()}
                                    value={title.toLowerCase()}
                                    className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                                >
                                    <Content />
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    );
}