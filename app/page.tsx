import GithubBtn from "@/components/home/github-btn";
import HeroTexts from "@/components/home/hero-text";
import FramerWrapper from "@/components/animations/framer-wrapper";
import SocialLinks from "@/components/home/social-links";

export default function Home() {
  return (
    <div className="">
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
      </FramerWrapper>
      <GithubBtn />
    </div>
  );
}
