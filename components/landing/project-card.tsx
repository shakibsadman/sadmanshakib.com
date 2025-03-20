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
    y: 100,
    scale: 0.95,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1.2,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 125,
      damping: 15,
      mass: 1,
    },
  },
};

export default function ProjectCard({ name, image, website, description }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-xl border border-gray-700"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={childVariants} className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 z-10" />
        <Image
          src={image}
          alt={name}
          width={1200}
          height={680}
          quality={90}
          className="xl:w-[600px] xl:h-[340px] lg:w-[500px] lg:h-[300px] w-full aspect-auto object-cover"
        />
      </motion.div>

      <motion.div
        className="w-full bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-b-2xl border-t border-gray-700"
        variants={childVariants}
      >
        <motion.h1
          className="text-2xl font-bold mb-3 text-white tracking-tight"
          variants={childVariants}
        >
          {name}
        </motion.h1>
        <motion.p className="text-gray-300 mb-5 leading-relaxed" variants={childVariants}>
          {description}
        </motion.p>
        <motion.a
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transition-all duration-300 font-medium"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          variants={childVariants}
          tabIndex={0}
          aria-label={`View ${name} project`}
          onKeyDown={handleKeyDown}
        >
          <ExternalLink className="w-4 h-4" />
          View Project
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
