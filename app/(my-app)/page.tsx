import {
  HeroSection,
  PricingSection,
  ProjectsSection,
  Footer,
  AboutMe,
  FAQSection,
  FeatureCards,
} from "@/components/landing";
import { faqData } from "@/data/faq";
import { getProjects } from "@projects/actions";
import { getNotionDatabaseContents, NotionPage } from '@/app/api/blog/notion';
import BlogSection from '@/components/landing/blog';
import { Suspense } from "react";

export default async function Home() {
  const databaseId = '1843cfb5f9ce80da828df9c498fa7afc';
  
  const notionData = await getNotionDatabaseContents(databaseId);
  const data = await getProjects();

  const posts = notionData.results.slice(0, 3) as unknown as NotionPage[];

  return (
    <div className="bg-background">
      <HeroSection />
      <FeatureCards />
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
