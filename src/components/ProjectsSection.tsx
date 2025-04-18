"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Tech = {
  name: string;
  color?: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  category: "fullstack" | "frontend" | "landing";
  featured: boolean;
  technologies: Tech[];
};

const projects: Project[] = [
  {
    id: "eleweight",
    title: "Sales Coach",
    description:
      "SaaS MVP that enables users to upload sales call transcripts, analyze their content using AI-powered NLP, and generate personalized sales coaching insights. ",
    imageUrl: "salesCoach.png",
    liveUrl: "https://ai-transcript-fe.vercel.app/",
    githubUrl: "https://github.com/satyawaniaman/AI-Transcript-fe",
    category: "fullstack",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "Express" },
      { name: "Tailwind CSS" },
      { name: "Prisma ORM" },
      { name: "OpenAI" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "satya-check",
    title: "Link Vault",
    description:
      "A full-stack React + Express app with Prisma, Tailwind, and ShadCN that lets you store and manage YouTube links, tweets, and documents in a sleek personal dashboard.",
    imageUrl: "second_brain.png",
    liveUrl: "https://second-brain-app-phi.vercel.app//",
    githubUrl: "https://github.com/satyawaniaman/second-brain-app",
    category: "fullstack",
    featured: true,
    technologies: [
      { name: "React" },
      { name: "Shadcn UI" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "Prisma ORM" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Professional portfolio showcasing projects and skills with modern design.",
    imageUrl: "portfolio_img.png",
    liveUrl: "https://amansatyawani.online",
    githubUrl: "https://github.com/satyawaniaman/portfolio-updated",
    category: "frontend",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "crypto-dashboard",
    title: "CollabCanvas",
    description:
      "CollabCanvas is a collaborative, real-time whiteboard application designed to bring teams together seamlessly.",
    imageUrl: "collabCanvas.png",
    liveUrl: "http://collab-canvas.buildspark.online/",
    githubUrl: "https://github.com/satyawaniaman/CollabCanvas",
    category: "frontend",
    featured: false,
    technologies: [
      { name: "Next.js" },
      { name: "Convex" },
      { name: "Tailwind CSS" },
      { name: "Cleark" },
      { name: "LiveBlocks" },
      { name: "Shadcn UI" },
    ],
  },
  {
    id: "nft-marketplace",
    title: "Learnly",
    description:
      "a modern e-learning application built with React, Tailwind CSS, and Framer Motion for a seamless and interactive user experience.",
    imageUrl: "learnly.png",
    liveUrl: "https://learnly-sigma.vercel.app/",
    githubUrl: "https://github.com/satyawaniaman/e-learning-app",
    category: "landing",
    featured: false,
    technologies: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Framer Motion" },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden rounded-xl group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <Button size="sm" variant="default" asChild>
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="h-4 w-4 mr-1" /> Live
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4 mr-1" /> Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={`${project.id}-${tech.name}`} className="tech-pill">
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-heading">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A showcase of my web development journey, featuring full-stack
            applications, frontend projects, and landing pages.
          </motion.p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="landing">Landing Pages</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="landing" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-16">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/satyawaniaman" target="_blank">
              <Github className="mr-2 h-4 w-4" /> View All Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
