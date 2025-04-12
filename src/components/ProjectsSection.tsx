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
    title: "Eleweight",
    description:
      "A personal fitness guide application helping users track workouts and maintain their health journey.",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    liveUrl: "https://eleweight.in",
    githubUrl: "https://github.com/satyawaniaman/eleweight",
    category: "fullstack",
    featured: true,
    technologies: [
      { name: "React" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "satya-check",
    title: "Satya Check",
    description:
      "Platform to combat misinformation in India's digital landscape with verification tools.",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    liveUrl: "https://satya-check.vercel.app",
    githubUrl: "https://github.com/satyawaniaman/satya-check",
    category: "fullstack",
    featured: true,
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Supabase" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Professional portfolio showcasing projects and skills with modern design.",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    liveUrl: "https://yourname.tech",
    githubUrl: "https://github.com/satyawaniaman/portfolio",
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
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency tracking dashboard with market data and portfolio management.",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    liveUrl: "https://crypto-dashboard.vercel.app",
    githubUrl: "https://github.com/satyawaniaman/crypto-dashboard",
    category: "frontend",
    featured: false,
    technologies: [
      { name: "React" },
      { name: "Chart.js" },
      { name: "Tailwind CSS" },
      { name: "CoinGecko API" },
    ],
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace Landing",
    description:
      "Landing page for an NFT marketplace with modern design and animations.",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    liveUrl: "https://nft-marketplace-landing.vercel.app",
    githubUrl: "https://github.com/satyawaniaman/nft-landing",
    category: "landing",
    featured: false,
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "GSAP" },
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
