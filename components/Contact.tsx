"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Have a project in mind? Let&apos;s discuss how we can help bring your vision
                        to life. Our team is ready to assist you.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border bg-card p-8"
                    >
                        <h3 className="text-xl font-semibold">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="min-h-[150px] w-full"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:pl-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold">Contact Information</h3>
                            <p className="mt-2 text-muted-foreground">
                                Feel free to reach out through any of these channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-muted-foreground">
                                        contact@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-sm text-muted-foreground">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Office</p>
                                    <p className="text-sm text-muted-foreground">
                                        123 Innovation Street
                                        <br />
                                        Tech City, TC 12345
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border bg-primary/5 p-6">
                            <h4 className="font-semibold">Office Hours</h4>
                            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 