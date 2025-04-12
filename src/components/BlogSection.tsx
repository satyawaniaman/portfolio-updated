"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful responsive interfaces efficiently using utility-first CSS with Tailwind.",
    date: "Apr 2, 2023",
    readTime: "6 min read",
    category: "Web Development",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    slug: "/blog/building-responsive-uis-with-tailwind",
  },
  {
    id: "post-2",
    title: "State Management Patterns in React Applications",
    excerpt: "Explore different approaches to state management in React and when to use each pattern for optimal performance.",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    category: "React",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    slug: "/blog/state-management-patterns-react",
  },
  {
    id: "post-3",
    title: "Building a Full-Stack Application with Next.js",
    excerpt: "A comprehensive guide to building and deploying a full-stack application using Next.js and serverless functions.",
    date: "Feb 28, 2023",
    readTime: "10 min read",
    category: "Full-Stack",
    imageUrl: "https://ext.same-assets.com/2734862169/1367426873.png",
    slug: "/blog/full-stack-nextjs-application",
  },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden group"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>

        <Button variant="link" className="p-0 h-auto font-medium" asChild>
          <Link href={post.slug}>
            Read article <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="gradient-heading">Blog</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Insights, tutorials, and thoughts on web development and technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
