"use client";

import { motion } from "framer-motion";
import { getProjects } from "@projects/actions";

import ProjectCard from "./project-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type ProjectsSectionProps = {
  projects: Awaited<ReturnType<typeof getProjects>>;
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />

      <div className="relative z-10 container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-white">
            A glimpse into the{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text"
            >
              websites
            </motion.span>{" "}
            that I have built.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-300 text-base max-w-2xl mx-auto">
            Here are some of the MVPs I&apos;ve helped founders launch. They all had innovative
            ideas and I helped them convert them into reality.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-5 mx-auto"
        >
          {projects.docs.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.title}
              image={project.preview_image as string}
              website={project.website as string}
              description={project.preview_text}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
