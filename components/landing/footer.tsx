"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Xicon } from "../icons";
import { Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <Mail className="h-5 w-5" />
            <p>sm.shakib007@gmail.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/shadmanshakib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/thesadmanshakib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Xicon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/thesadmanshakib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Sadman Shakib. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
