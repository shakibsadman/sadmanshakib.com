"use server";
import { payload } from "@/lib/payload";

export const getProjects = async () => {
  const projects = await payload.find({
    collection: "projects",
    sort: "published_at",
    limit: 4,
  });
  return projects;
};
