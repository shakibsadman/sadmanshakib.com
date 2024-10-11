import Hero from "@/components/common/hero";
import Header from "@/components/common/header";
import BlogSection from "@/components/home/blog-section";
import Footer from "@/components/common/footer";
import AboutMe from "@/components/home/about-me";
import Projects from "@/components/home/projects";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <BlogSection />
      <Footer />
    </div>
  );
}
