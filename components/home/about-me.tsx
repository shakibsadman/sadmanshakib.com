import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Responsive Design",
    "Performance Optimization",
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "Netlify",
    "Figma",
    "Adobe XD",
    "Postman",
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-50">
          About <span className="text-teal-400">Me</span>
        </h2>
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8">
            <Card className="bg-purple-800 border-purple-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-400">Professional Summary</h3>
                <p className="text-purple-100">
                  I&apos;m a passionate Next.js developer with 5 years of experience in creating
                  high-performance web applications. My expertise lies in building scalable,
                  user-friendly interfaces and robust backend systems. I thrive on solving complex
                  problems and continuously learning new technologies to stay at the forefront of
                  web development.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800 border-purple-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-400">Personal Background</h3>
                <p className="text-purple-100">
                  Born and raised in Dhaka, Bangladesh, I discovered my passion for coding during my
                  teenage years. I hold a Bachelor&apos;s degree in Computer Science from Bangladesh
                  University of Engineering and Technology. When I&apos;m not coding, you can find
                  me exploring new hiking trails, experimenting with fusion cooking, or contributing
                  to open-source projects.
                </p>
              </CardContent>
            </Card>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Skills and Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-purple-700 text-purple-100">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-400">Tools and Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="border-teal-400 text-teal-400">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Sadman Shakib - Video Introduction"
                fill
                className="object-cover"
              />
              <Button className="absolute inset-0 flex items-center justify-center bg-purple-900/50 text-purple-50 hover:bg-purple-900/75">
                <Play className="mr-2 h-6 w-6" />
                Watch Video Introduction
              </Button>
            </div>
            <Button className="w-full bg-teal-400 text-purple-900 hover:bg-teal-500">
              Download Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
