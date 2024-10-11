import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

export default function Component() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">sadmanshakib.com</span>
        </Link>
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <Link
            href="/projects"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Projects
          </Link>
          <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Resume
          </Button>
          <Button>Contact Me</Button>
        </div>
      </div>
    </header>
  );
}
