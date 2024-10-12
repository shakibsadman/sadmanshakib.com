"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What services do you offer as a Next.js developer?",
    answer:
      "As a Next.js developer, I offer a wide range of services including building full-stack web applications, creating responsive and interactive user interfaces, implementing server-side rendering and static site generation, integrating APIs and databases, and optimizing website performance. I specialize in creating scalable, efficient, and SEO-friendly web solutions using the Next.js framework.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "The timeline for project completion varies depending on the scope and complexity of the project. A simple website might take 2-4 weeks, while a more complex web application could take 2-3 months or more. I always provide a detailed timeline estimate after thoroughly discussing the project requirements with the client.",
  },
  {
    question: "Do you offer ongoing maintenance and support after the project is completed?",
    answer:
      "Yes, I offer ongoing maintenance and support services to ensure your website or application continues to run smoothly after launch. This can include regular updates, bug fixes, security patches, and adding new features as needed. We can discuss a maintenance plan that suits your specific needs.",
  },
  {
    question: "Can you work with existing codebases or do you only build from scratch?",
    answer:
      "I'm comfortable working with both new projects and existing codebases. Whether you need to build a new application from the ground up or want to improve, refactor, or add features to an existing project, I can help. My experience allows me to quickly understand and adapt to different codebases and development environments.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer:
      "I believe in clear and consistent communication throughout the project. I typically use a combination of regular video calls, email updates, and project management tools (like Trello or Jira) to keep clients informed about progress, discuss any challenges, and gather feedback. I'm always available to answer questions and provide updates as needed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-50">
          Frequently Asked <span className="text-teal-400">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-purple-800 border-purple-700">
              <CardContent className="p-6">
                <Button
                  className="w-full flex justify-between items-center text-left bg-transparent hover:bg-purple-700 text-purple-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-wrap">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-teal-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-teal-400" />
                  )}
                </Button>
                {openIndex === index && <div className="mt-4 text-purple-200">{faq.answer}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
