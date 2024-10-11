"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-purple-900 text-purple-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Sadman Shakib</h3>
            <p className="text-sm">Next.js Developer crafting exceptional web experiences.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm hover:text-teal-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sadmanshakib"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sadmanshakib"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/sadmanshakib"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:sadman@example.com" className="hover:text-teal-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">Stay Updated</h3>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-purple-800 border-purple-700 text-purple-200 placeholder-purple-400 focus:border-teal-400"
              />
              <Button
                type="submit"
                className="w-full bg-teal-400 text-purple-900 hover:bg-teal-500"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sadman Shakib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
