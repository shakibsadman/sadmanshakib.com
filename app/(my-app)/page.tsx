import {
  HeroSection,
  PricingSection,
  ProjectsSection,
  Footer,
  AboutMe,
  FAQSection,
  FeatureCards,
  BlogSection,
} from "@/components/landing";
import { faqData } from "@/data/faq";
import { getProjects } from "@projects/actions";
import { getRecentPosts } from "@/app/api/blog/actions";
import { Suspense } from "react";

export default async function Home() {
  const [data, posts] = await Promise.all([
    getProjects(),
    getRecentPosts(3),
  ]);

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
