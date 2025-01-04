import {
  HeroSection,
  PricingSection,
  ProjectsSection,
  Footer,
  Offer,
  AboutMe,
} from "@/components/landing";
import { getProjects } from "@projects/actions";
import { Suspense } from "react";

export default async function Home() {
  const data = await getProjects();
  return (
    <div className="">
      <HeroSection />
      <div className=" relative">
        <Offer />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={data} />
      </Suspense>
      <PricingSection />
      <AboutMe />
      <Footer />
    </div>
  );
}
