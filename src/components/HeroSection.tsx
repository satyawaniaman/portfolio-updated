"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Background with grid and gradient */}
      <div className="absolute inset-0 grid-background"></div>
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left column - Text content */}
          <div className="flex-1 space-y-6 max-w-2xl staggered-fade-in">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                Available for Freelancing Projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi I'm <span className="gradient-heading">Aman Satyawani</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl"
            >
              Developer who gets the product, cuts the fluff, and gets it
              done—fast, clean, and functional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="#contact">
                  Let's Chat <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/Aman_Satyawani_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="https://github.com/satyawaniaman" target="_blank">
                  <Github className="mr-2 h-4 w-4" /> My GitHub
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center pt-4 space-x-4"
            >
              <div className="h-px flex-1 bg-border"></div>
              <span className="text-sm text-muted-foreground font-medium">
                Full-Stack Developer
              </span>
              <div className="h-px flex-1 bg-border"></div>
            </motion.div>
          </div>

          {/* Right column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-card animate-float">
              <Image
                src="./profile.jpeg"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full shadow-lg">
              <span className="font-medium text-sm">1+ Years Experience</span>
            </div>

            {/* Tech stack badge */}
            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full shadow-lg">
              <span className="font-medium text-sm">MERN Stack Developer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
