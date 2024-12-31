import { HeroSection, PricingSection, ProjectsSection, Footer } from "@/components/landing";
import { getProjects } from "@projects/services";
import { Suspense } from "react";

export default async function Home() {
  const data = await getProjects();
  return (
    <div className="">
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection projects={data.docs} />
      </Suspense>
      <PricingSection />
      <Footer />
    </div>
  );
}
