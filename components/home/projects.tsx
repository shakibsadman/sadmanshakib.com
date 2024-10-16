import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "YNAB Clone",
    description:
      "A clone of You Need A Budget (YNAB) built with Next.js, React, Node.js, PostgreSQL, and NextAuth.",
    image: "/images/ynab-01.png",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "NextAuth"],
    githubLink: "https://github.com/shadmanshakib/ynab-clone",
    liveLink: "https://youtu.be/wV2ZV5vnJkc",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "A responsive admin dashboard built with Next.js, Shadcn UI, and Supabase.",
    image: "/images/admin-dashboard.png",
    tags: ["Next.js", "Shadcn UI", "TailwindCSS", "React", "Zustand"],
    githubLink: "https://github.com/shadmanshakib/admin-dashboard",
    liveLink: "https://shakib-admin.vercel.app/p",
  },
  {
    id: 3,
    title: "Linkaraby",
    description: "An dashboard for affiliate marketing company.",
    image: "/images/linkaraby-01.png",
    tags: ["Next.js", "Shadcn UI", "TailwindCSS", "Recharts"],
    githubLink: "https://github.com/sadmanshakib/ai-content-generator",
    liveLink: "https://admin-dashboard-phi-teal.vercel.app/home",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-purple-800">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-50">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="bg-purple-900 border-purple-700 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className="w-full h-60 "
              />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-teal-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-700 text-purple-100"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-purple-900"
                  >
                    <GitHubLogoIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-teal-400 text-purple-900 hover:bg-teal-500">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" passHref>
            <Button className="bg-teal-400 text-purple-900 hover:bg-teal-500">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
