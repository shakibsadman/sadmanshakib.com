"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";

const content = [
  {
    title: "AI Integration",
    description:
      "Empower your MVP with cutting-edge AI capabilities tailored to your business needs. From natural language processing to predictive analytics, seamlessly embed intelligent solutions into your product.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/ai-integration.webp"
            width={1000}
            height={1000}
            alt="AI Integration capabilities"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Authentication",
    description:
      "Secure your MVP with robust authentication mechanisms. Implement multi-factor authentication, role-based access control, and secure data storage to protect your users' information and maintain the integrity of your application.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/auth.webp"
            width={1000}
            height={1000}
            alt="Authentication security features"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Payment Integration",
    description:
      "Ensure secure and user-friendly payment experiences with integrated gateways. Support for multiple currencies, recurring payments, and real-time processing included.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/payment.webp"
            width={1000}
            height={1000}
            alt="Payment integration solutions"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Landing Page",
    description:
      "Launch your MVP with a high-converting, professionally designed landing page. Highlight your value proposition and capture leads effortlessly.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/landing.webp"
            width={1000}
            height={1000}
            alt="High-converting landing page design"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Dashboard",
    description:
      "Provide users with a visually appealing and intuitive dashboard to access data, track progress, and manage activities efficiently. Fully customizable for your specific use case.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/dashboard.webp"
            width={1000}
            height={1000}
            alt="Intuitive dashboard interface"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
  {
    title: "Email",
    description:
      "Integrate robust email systems for communication, marketing, and user notifications. Our solutions support both transactional and marketing email flows with ease.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-white rounded-2xl shadow-2xl overflow-hidden p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-sm -m-2"></div>
          <Image
            src="/images/email.webp"
            width={1000}
            height={1000}
            alt="Email communication system"
            className="aspect-square h-[500px] w-[500px] rounded-xl object-cover shadow-lg border border-white/20"
          />
        </motion.div>
      </div>
    ),
  },
];

export default function Offer() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Complete <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">MVP Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to launch your product quickly and efficiently
          </p>
        </motion.div>
        <div className="h-[80vh] w-full">
          <StickyScroll content={content} />
        </div>
      </div>
    </section>
  );
}
