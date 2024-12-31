"use client";

import { motion } from "framer-motion";
import { getProjects } from "@projects/actions";

import ProjectCard from "./project-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
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
      className="relative py-24 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

      <div className="relative z-10 container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white">
            A glimpse into the{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
            >
              websites
            </motion.span>{" "}
            that I have built.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of the MVPs I&apos;ve helped founders launch. They all had innovative
            ideas and I helped them convert them into reality.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
