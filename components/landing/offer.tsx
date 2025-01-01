"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "AI Integration",
    description:
      "Empower your MVP with cutting-edge AI capabilities tailored to your business needs. From natural language processing to predictive analytics, seamlessly embed intelligent solutions into your product.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center ">
        <Image
          src="/images/ai-integration.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Authentication",
    description:
      "Secure your MVP with robust authentication mechanisms. Implement multi-factor authentication, role-based access control, and secure data storage to protect your users' information and maintain the integrity of your application.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/auth.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Payment Integration",
    description:
      "Ensure secure and user-friendly payment experiences with integrated gateways. Support for multiple currencies, recurring payments, and real-time processing included.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/payment.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Landing Page",
    description:
      "Launch your MVP with a high-converting, professionally designed landing page. Highlight your value proposition and capture leads effortlessly.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/landing.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Dashboard",
    description:
      "Provide users with a visually appealing and intuitive dashboard to access data, track progress, and manage activities efficiently. Fully customizable for your specific use case.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/dashboard.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
  {
    title: "Email",
    description:
      "Integrate robust email systems for communication, marketing, and user notifications. Our solutions support both transactional and marketing email flows with ease.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/images/email.webp"
          width={1000}
          height={1000}
          alt="linear board demo"
          className="aspect-square h-[500px] w-[500px] rounded-md"
        />
      </div>
    ),
  },
];

export default function Offer() {
  return (
    <div className="h-screen w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
