"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        content:
            "Working with this agency has been transformative for our business. Their team delivered a beautiful, high-performing website that exceeded our expectations.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
    },
    {
        content:
            "The team's expertise in both design and development is exceptional. They helped us launch our MVP in record time while maintaining the highest quality standards.",
        author: "Michael Chen",
        role: "Founder",
        company: "InnovateLab",
    },
    {
        content:
            "Their strategic approach to digital marketing has helped us achieve unprecedented growth. The results speak for themselves - our traffic has increased by 300%.",
        author: "Emily Rodriguez",
        role: "Marketing Director",
        company: "GrowthWave",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [autoplay]);

    const next = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="overflow-hidden bg-primary/5 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say
                        about their experience working with us.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div className="relative h-[400px] w-full overflow-hidden">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: current === index ? 1 : 0,
                                    x: current === index ? 0 : -100,
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                                style={{
                                    display: current === index ? "flex" : "none",
                                }}
                            >
                                <div className="mx-auto max-w-2xl text-center">
                                    <Quote className="mx-auto h-12 w-12 text-primary" />
                                    <p className="mt-8 text-xl font-medium italic text-foreground">
                                        {testimonial.content}
                                    </p>
                                    <div className="mt-8">
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-full transition-colors ${current === index ? "bg-primary" : "bg-primary/20"
                                    }`}
                                onClick={() => {
                                    setAutoplay(false);
                                    setCurrent(index);
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full"
                            onClick={prev}
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-12 w-12 rounded-full"
                            onClick={next}
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-none lg:grid-cols-5">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="h-8 w-full rounded-lg bg-primary/10"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 