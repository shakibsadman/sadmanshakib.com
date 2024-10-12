import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-purple-700 bg-purple-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://avatars.githubusercontent.com/u/72305492?v=4"
            alt="Sadman Shakib - Next.js Developer"
            className="rounded-full"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold text-teal-400 hidden md:block">Sadman Shakib</span>
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="text-base font-medium text-purple-200 hover:text-teal-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-base font-medium text-purple-200 hover:text-teal-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="text-base font-medium text-purple-200 hover:text-teal-400 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-purple-200 hover:text-teal-400 transition-colors"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-purple-900"
          >
            Resume
          </Button>
          <Button className="bg-teal-400 text-purple-900 hover:bg-teal-500">Contact Me</Button>
        </div>
      </div>
    </header>
  );
}
