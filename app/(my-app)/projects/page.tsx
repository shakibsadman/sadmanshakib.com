import React from "react";
import { getProjects } from "@projects/services";
import { Project } from "@projects/types";

import ProjectCard from "@/components/landing/project-card";
export default async function ProjectsPage() {
  const data = await getProjects();
  const { docs } = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {docs.map((project: Project) => (
        <ProjectCard
          key={project.id}
          description={project.preview_text}
          name={project.title}
          image={project.preview_image}
          website={project.website}
        />
      ))}
    </div>
  );
}
