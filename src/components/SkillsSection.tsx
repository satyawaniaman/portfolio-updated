"use client";

import { motion } from "framer-motion";
import { Icon } from "./icons/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Skill = {
  id: string;
  name: string;
  icon: string;
  level: number;
  color: string;
  description: string;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      {
        id: "js",
        name: "JavaScript",
        icon: "2",
        level: 90,
        color: "#F7DF1E",
        description:
          "Strong knowledge of JavaScript ES6+, DOM manipulation, async programming, and modern patterns.",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: "8",
        level: 85,
        color: "#3178C6",
        description:
          "Strong typing skills with TypeScript for building safer, more maintainable applications.",
      },
      {
        id: "python",
        name: "Python",
        icon: "5",
        level: 78,
        color: "#3776AB",
        description:
          "Working knowledge of Python for automation, data processing, and backend development.",
      },
      {
        id: "java",
        name: "Java",
        icon: "9",
        level: 75,
        color: "#ED8B00",
        description:
          "Experience with Java for building robust, object-oriented applications and enterprise solutions.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      {
        id: "html",
        name: "HTML",
        icon: "0",
        level: 95,
        color: "#E34F26",
        description:
          "Expert in HTML5 semantics, accessibility, and best practices for structuring web content.",
      },
      {
        id: "css",
        name: "CSS",
        icon: "1",
        level: 90,
        color: "#1572B6",
        description:
          "Proficient in modern CSS features, animations, Grid, Flexbox, and responsive design principles.",
      },
      {
        id: "react",
        name: "React",
        icon: "3",
        level: 92,
        color: "#61DAFB",
        description:
          "Skilled in building scalable applications with React, hooks, context API, and state management.",
      },
      {
        id: "nextjs",
        name: "Next.js",
        icon: "6",
        level: 85,
        color: "#C0C0C0",
        description:
          "Experienced with Next.js for server-side rendering, static site generation, and API routes.",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "3",
        level: 90,
        color: "#38B2AC",
        description:
          "Expert in utility-first CSS with Tailwind for rapid UI development and consistent design systems.",
      },
      {
        id: "shadcn",
        name: "Shadcn UI",
        icon: "3",
        level: 88,
        color: "#C0C0C0",
        description:
          "Proficient with Shadcn UI components for building accessible and customizable interfaces.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      {
        id: "node",
        name: "Node.js",
        icon: "5",
        level: 85,
        color: "#339933",
        description:
          "Proficient in building server-side applications, RESTful APIs, and microservices with Node.js.",
      },
      {
        id: "express",
        name: "Express.js",
        icon: "6",
        level: 88,
        color: "#68A063", // Green for Express
        description:
          "Skilled in creating robust web applications and APIs using Express.js middleware architecture.",
      },
      {
        id: "supabase",
        name: "Supabase",
        icon: "7",
        level: 82,
        color: "#3ECF8E",
        description:
          "Experienced with Supabase for authentication, real-time databases, and serverless functions.",
      },
      {
        id: "postgres",
        name: "PostgreSQL",
        icon: "7",
        level: 84,
        color: "#336791",
        description:
          "Strong knowledge of PostgreSQL databases, queries, and performance optimization.",
      },
      {
        id: "prisma",
        name: "Prisma ORM",
        icon: "8",
        level: 86,
        color: "#5A67D8",
        description:
          "Skilled with Prisma ORM for type-safe database access and schema migrations.",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "7",
        level: 80,
        color: "#47A248",
        description:
          "Experienced with MongoDB for document databases, aggregation pipelines, and data modeling.",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    skills: [
      {
        id: "git",
        name: "Git",
        icon: "9",
        level: 90,
        color: "#F05032",
        description:
          "Proficient in version control with Git, including branching strategies and collaborative workflows.",
      },
      {
        id: "docker",
        name: "Docker",
        icon: "5",
        level: 75,
        color: "#2496ED",
        description:
          "Working knowledge of containerization with Docker for consistent deployment environments.",
      },
      {
        id: "clerk",
        name: "Clerk",
        icon: "9",
        level: 80,
        color: "#6C47FF",
        description:
          "Proficient with Clerk for user management, authentication, and session handling.",
      },
      {
        id: "payload",
        name: "Payload CMS",
        icon: "6",
        level: 78,
        color: "#38BDF8", // Light blue
        description:
          "Experience with Payload CMS for headless content management and admin interfaces.",
      },
    ],
  },
];

type SkillBadgeProps = {
  skill: Skill;
  index: number;
};

function SkillBadge({ skill, index }: SkillBadgeProps) {
  // Special handling for problematic skills
  const isSpecialCase = skill.id === "nextjs" || skill.id === "shadcn";

  // Default styling
  let bgColor = `${skill.color}30`;
  let borderColor = `${skill.color}60`;
  let nameColor = "text-foreground"; // Default text color from theme

  // Special handling for visibility issues
  if (isSpecialCase) {
    bgColor = `${skill.color}40`; // Slightly reduced opacity for better text contrast
    borderColor = skill.color; // Full color for border
    nameColor = "text-foreground font-semibold"; // Using theme foreground color
  } else if (skill.color === "#FFFFFF") {
    bgColor = "rgba(255,255,255,0.25)";
    borderColor = "rgba(255,255,255,0.5)";
    nameColor = "text-foreground";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`inline-flex items-center px-3 py-2 rounded-md m-1 ${isSpecialCase ? "shadow-md" : ""}`}
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
              }}
            >
              <Icon
                name={skill.icon}
                className="w-4 h-4 mr-2"
                style={{ color: skill.color }}
              />
              <span className={`text-sm font-medium ${nameColor}`}>
                {skill.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs p-3">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10">
                  {skill.level}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {skill.description}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-heading">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Technologies I use to build modern web applications, from frontend
            interfaces to backend systems.
          </motion.p>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap -m-1">
                {category.skills.map((skill, index) => (
                  <SkillBadge key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
