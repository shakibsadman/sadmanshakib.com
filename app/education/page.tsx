import FramerWrapper from "@/components/animations/framer-wrapper";
import Heading from "@/components/ui/heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 ">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Exprience / Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            Aug 2024 - Oct 2024
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Full Stack Developer, <br /> Linkaraby
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I worked as a Full Stack Developer at Linkaraby, where I gained valuable experience in
              both front-end and back-end development. I was responsible to building Admin dashbaord
              using Next.js (app router), MongoDB, Prisma, Server actions, Tailwind CSS, Shadcn UI.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            Oct 2023 - May 2024
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Full Stack Developer, <br /> Juggle Rewards
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I worked as a Full Stack Developer at Linkaraby, where I gained valuable experience in
              both React.js and Express.js . I was responsible to building Admin dashbaord using
              React.js , MongoDB, Mongoose, API integration, Tailwind CSS, Express.js.
            </p>
          </FramerWrapper>
        </div>
        <div className="w-full h-fit flex">
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base "
          >
            April 2017 - May 2023
          </FramerWrapper>
          <FramerWrapper
            y={0}
            x={100}
            delay={0.35}
            className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point "
          >
            <div className="text-2xl font-rubik max-sm:text-xl">
              Doctor of Veterinary Medicine(DVM), <br /> HSTU, Dinajpur, Bangladesh
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
              I completed my Doctor of Veterinary Medicine (DVM) from the HSTU, Dinajpur, Bangladesh
              in 2023. This degree provided me with a comprehensive understanding of veterinary
              science and practice, equipping me with the skills and knowledge needed to work in the
              field of veterinary medicine.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
