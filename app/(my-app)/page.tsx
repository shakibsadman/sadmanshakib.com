import { HeroSection, PricingSection, ProjectsSection, Footer } from "@/components/landing";
import { getProjects } from "@projects/actions";
import { Suspense } from "react";

export default async function Home() {
  const data = await getProjects();
  return (
    <div className="">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={data} />
      </Suspense>
      <PricingSection />
      <Footer />
    </div>
  );
}
