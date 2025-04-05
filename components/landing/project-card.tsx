"use client";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  image: string;
  website: string;
  description: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
};

export default function ProjectCard({ name, image, website, description }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-950 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <motion.div variants={childVariants} className="relative w-full h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/90 z-10" />
        <Image
          src={image}
          alt={name}
          width={1200}
          height={680}
          quality={90}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 right-3 z-20">
          <motion.div 
            className="bg-gray-900/80 backdrop-blur-md p-1.5 rounded-full border border-gray-700/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} website`}>
              <ExternalLink className="w-4 h-4 text-gray-300" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="p-5 space-y-3"
        variants={childVariants}
      >
        <motion.h3
          className="text-xl font-bold text-white tracking-tight"
          variants={childVariants}
        >
          {name}
        </motion.h3>
        <motion.p className="text-gray-400 text-sm leading-relaxed line-clamp-3" variants={childVariants}>
          {description}
        </motion.p>
        <motion.a
          className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          variants={childVariants}
          whileHover={{ x: 3 }}
        >
          View Project
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
