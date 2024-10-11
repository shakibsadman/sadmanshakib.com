import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-50">
                Next.js Developer <span className="text-teal-400">Extraordinaire</span>
              </h1>
              <p className="max-w-[600px] text-purple-200 md:text-xl dark:text-purple-200">
                Crafting cutting-edge web experiences with React and Next.js. Turn your ideas into
                reality with clean, efficient, and scalable code.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-teal-400 text-purple-900 hover:bg-teal-500">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-purple-900"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/shadmanshakib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-teal-400"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-teal-400"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/placeholder.svg"
                alt="Sadman Shakib - Next.js Developer"
                fill
                className="object-cover rounded-full border-4 border-teal-400"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
