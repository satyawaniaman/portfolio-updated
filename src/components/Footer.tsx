"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1">
            <Link href="#hero" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold gradient-heading">
                Aman Satyawani
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md text-sm">
              Developer who gets the product, cuts the fluff, and gets it
              done—fast, clean, and functional.
            </p>
          </div>

          <div className="flex-1 flex md:justify-center">
            <div className="space-y-2">
              <p className="font-medium mb-2">Quick Links</p>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="font-medium mb-2">Connect with me</p>
            <div className="flex space-x-2 md:justify-end">
              <Button asChild variant="ghost" size="icon">
                <Link href="https://github.com/satyawaniaman" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link
                  href="https://www.linkedin.com/in/aman-satyawani-2566a5222/"
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://x.com/satyawani_aman" target="_blank">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="mailto:amansatyawani10@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Aman Satyawani. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
