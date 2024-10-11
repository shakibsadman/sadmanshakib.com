import Hero from "@/components/home/hero";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import BlogPosts from "@/components/home/blog-posts";
import AboutMe from "@/components/home/about-me";
import Projects from "@/components/home/projects";
import FAQSection from "@/components/home/faq";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <BlogPosts />
      <FAQSection />
      <Footer />
    </div>
  );
}
