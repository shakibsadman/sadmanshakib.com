import { PricingSection, AboutMe, FAQSection, FeatureCards, HeroSection, Footer } from "@/components/landing";
import { faqData } from "@/data/faq";
// import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="relative">

      <main>
        <HeroSection />
        <FeatureCards />
        <PricingSection />

        <FAQSection faq={faqData} />
        <AboutMe />
        <Footer />
      </main>
    </div>
  );
}
