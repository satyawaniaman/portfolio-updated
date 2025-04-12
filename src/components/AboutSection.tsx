"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Database,
  Lightbulb,
  Sparkles,
  Zap,
  Rocket,
  Clock,
  Layout,
} from "lucide-react";
import { useState, useEffect } from "react";

const features = [
  {
    id: "feature-1",
    icon: <Code className="h-5 w-5" />,
    title: "Modern Web Stack",
    description:
      "Building fast, responsive apps with React, Next.js, and the latest JavaScript tools.",
  },
  {
    id: "feature-2",
    icon: <Database className="h-5 w-5" />,
    title: "Full-Stack Dev",
    description:
      "From frontend to backend—Node.js, Express, MongoDB, REST & GraphQL APIs, I've got it covered.",
  },
  {
    id: "feature-3",
    icon: <Layout className="h-5 w-5" />,
    title: "Landing Page Design",
    description:
      "Crafting high-converting landing pages that capture attention and drive results for your business.",
  },
  {
    id: "feature-4",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Clean UI/UX",
    description:
      "Designing intuitive interfaces with sharp detail and modern aesthetics using Tailwind & Shadcn.",
  },
  {
    id: "feature-5",
    icon: <Rocket className="h-5 w-5" />,
    title: "MVP Building",
    description:
      "Turning your ideas into functional MVPs to validate concepts and attract early users or investors.",
  },
  {
    id: "feature-6",
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Shipping",
    description:
      "Delivering projects in days, not months—rapid development without sacrificing quality or performance.",
  },
];

type CounterProps = {
  end: number;
  label: string;
  duration?: number;
  delay?: number;
};

function Counter({ end, label, duration = 2000, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(Math.floor(start), end));
        if (start >= end) {
          clearInterval(timer);
        }
      }, 16);
      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-heading mb-2">
        {count}+
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="gradient-heading">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Full-stack developer diving deep into AI and Python—building
            scalable products end to end. Always shipping, always learning,
            always leveling up.
          </motion.p>
        </div>

        {/* Stats/Counters */}
        <motion.div
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
        >
          <Counter end={8} label="Projects Completed" delay={100} />
          <Counter end={5} label="Happy Clients" delay={300} />
          <Counter end={1} label="Years Experience" delay={500} />
          <Counter end={10} label="Technologies Mastered" delay={700} />
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
