import { Badge } from "@/components/ui/badge";

export default function AboutMe() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "Responsive Design",
    "Performance Optimization",
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "Netlify",
    "Figma",
    "Adobe XD",
    "Postman",
  ];

  return (
    <section id="about" className="w-full   ">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-teal-400">Skills </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} className="">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-teal-400">Tools and Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge key={index} variant="outline" className="">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
