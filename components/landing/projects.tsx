"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "ThinkAI",
    description:
      "Think.ai is a smart study assistant that helps users engage deeply with study materials like PDFs and videos.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
    tags: ["AI", "EdTech", "Study Companion", "PDF/Video Analysis"],
  },
  {
    title: "TripChats",
    description:
      "TripChats is a social travel app designed for solo travelers to connect with locals and other travelers in popular destinations worldwide.",
    image: "https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?q=80&w=2070",
    tags: ["Mobile App", "Social Networking", "Travel", "Solo Travelers"],
  },
];

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

export default function ProjectsSection() {
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
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
              <div className="aspect-video relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl font-semibold mb-2 text-white"
                >
                  {project.title}
                </motion.h3>
                <motion.p variants={itemVariants} className="text-gray-400 mb-4">
                  {project.description}
                </motion.p>
                <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.div key={tag} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                      <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
