import {
  HeroSection,
  PricingSection,
  ProjectsSection,
  Footer,

  AboutMe,
  FAQSection,
  Features,
} from "@/components/landing";
import { faqData } from "@/data/faq";
import { getProjects } from "@projects/actions";
import { Suspense } from "react";

export default async function Home() {
  const data = await getProjects();
  return (
    <div className="bg-background">
      <HeroSection />


      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={data} />
      </Suspense>
      <FAQSection faq={faqData} />
      <PricingSection />
      <AboutMe />
      <Footer />
    </div>
  );
}
