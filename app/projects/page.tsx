import FramerWrapper from "@/components/animations/framer-wrapper";
import Heading from "@/components/ui/heading";
import ProjectCards from "./project-card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "YNAB-Clone",
      description: `A clone of You Need A Budget (YNAB) built with Next.js, React, Node.js, PostgreSQL, and NextAuth.`,
      tags: ["Zustand", "Postgres", "ShadcnUi", "Nextjs", "Next-auth"],
      link: "https://github.com/ShadmanShakib/ynab-clone",
    },

    {
      title: "Shakib Admin",
      description: "Admin Dashboard using React 18, Next JS 14, Tailwind CSS",
      tags: ["Nextjs", "Typescript", "Tailwind CSS"],
      link: "https://github.com/ShadmanShakib/shakib-admin",
    },
    {
      title: "Social X",
      description: "Social Media Post schedular application",
      tags: ["Nextjs", "Typescript", "Tailwind", "Next-Auth", "Postgres"],
      link: "https://youtu.be/inCUXYCWAKI",
    },
    {
      title: "Juggle Rewards",
      description: "Shopping application Admin dashboard. Worked as a Full stack developer. ",
      tags: ["Reactjs", "Express.js", "MongoDB", "Node.js"],
      link: "https://youtu.be/EZ85JL2ibqU",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 ">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated collection of my
            creative endeavors and technical projects. Each piece represents a journey of
            innovation, problem-solving, and continuous learning. Feel free to explore this showcase
            of my passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
