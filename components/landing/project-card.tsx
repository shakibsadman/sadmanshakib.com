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
    scale: 0.8,
    rotateX: -15,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 35px 70px rgba(0,0,0,0.5)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 1,
    },
  },
};

export default function ProjectCard({ name, image, website, description }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-gray-700 perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
    >
      <motion.div variants={childVariants} className="relative w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black opacity-20 z-10"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
        <Image
          src={image}
          alt={name}
          width={1200}
          height={680}
          quality={100}
          className="xl:w-[600px] xl:h-[340px] lg:w-[500px] lg:h-[300px] w-full aspect-auto transform transition-transform duration-500 hover:scale-110"
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
        <motion.p className="text-gray-400 mb-4 leading-relaxed" variants={childVariants}>
          {description}
        </motion.p>
        <motion.a
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          variants={childVariants}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#374151",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-5 h-5" />
          View Project
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
