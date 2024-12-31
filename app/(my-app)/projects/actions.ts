"use server";
import { payload } from "@/lib/payload";

export const getProjects = async () => {
  const projects = await payload.find({
    collection: "projects",
  });
  return projects;
};
