import { Metadata } from "next";
import {
  HeroSection,
  PricingSection,
  ProjectsSection,
  Footer,
  AboutMe,
  FAQSection,
  FeatureCards,
  ServicesSection,
} from "@/components/landing";
import { faqData } from "@/data/faq";
import { getProjects } from "@projects/actions";
import { getNotionDatabaseContents, NotionPage } from '@/app/api/blog/notion';
import BlogSection from '@/components/landing/blog';
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sadman Shakib - Full Stack Developer & MVP Specialist",
  description: "Full Stack Developer specializing in MVP development for startups and scaleups. Expert in Next.js, React, TypeScript, and modern web technologies. Fast, reliable, and scalable solutions.",
  keywords: [
    "Full Stack Developer",
    "MVP Development", 
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Startup MVP",
    "SaaS Development",
    "Sadman Shakib",
    "ShakibMVP"
  ],
  openGraph: {
    title: "Sadman Shakib - Full Stack Developer & MVP Specialist",
    description: "Full Stack Developer specializing in MVP development for startups and scaleups. Expert in Next.js, React, TypeScript, and modern web technologies.",
    type: "website",
    url: "https://sadmanshakib.com",
    images: [
      {
        url: "/dr_sadman_shakib.jpg",
        width: 1200,
        height: 630,
        alt: "Sadman Shakib - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadman Shakib - Full Stack Developer & MVP Specialist",
    description: "Full Stack Developer specializing in MVP development for startups and scaleups.",
    images: ["/dr_sadman_shakib.jpg"],
    creator: "@sadmanshakib",
  },
  alternates: {
    canonical: "https://sadmanshakib.com",
  },
};

// JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sadman Shakib",
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer specializing in MVP development for startups and scaleups",
  "url": "https://sadmanshakib.com",
  "image": "https://sadmanshakib.com/dr_sadman_shakib.jpg",
  "sameAs": [
    "https://x.com/drsadmanshakib",
    "https://linkedin.com/in/drsadmanshakib",
    "https://github.com/shakibsadman"
  ],
  "knowsAbout": [
    "Next.js",
    "Next.js 15",
    "AI",
    "AI Agent",
    "AI Agentic",
    "AI Agentic Development",
    "AI Agentic Development Services",
    "AI Agentic Development Services for Startups",
    "AI Agentic Development Services for Scaleups",
    "React",
    "Tailwind CSS",
    "Shadcn UI",
    "Tailwind UI",
    "Tailwind UI Components",
    "Tailwind UI Components for Startups",
    "Tailwind UI Components for Scaleups",
    "Tailwind UI Components for Startups and Scaleups",
    "TypeScript",
    "Web Development",
    "MVP Development",
    "Full Stack Development"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full Stack Developer",
    "description": "Develops web applications and MVPs for startups"
  },
  "offers": {
    "@type": "Service",
    "name": "MVP Development",
    "description": "Full-stack MVP development services for startups and scaleups",
    "provider": {
      "@type": "Person",
      "name": "Sadman Shakib"
    }
  }
};

export default async function Home() {
  const databaseId = '1843cfb5f9ce80da828df9c498fa7afc';
  
  const notionData = await getNotionDatabaseContents(databaseId);
  const data = await getProjects();

  const posts = notionData.results.slice(0, 3) as unknown as NotionPage[];

  return (
    <div className="bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <HeroSection />
      <FeatureCards />
      <ServicesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={data} />
      </Suspense>
      <BlogSection posts={posts} />
      <FAQSection faq={faqData} />
      <PricingSection />
      <AboutMe />
      <Footer />
    </div>
  );
}
