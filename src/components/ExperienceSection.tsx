"use client";

import { motion } from "framer-motion";

type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: "exp-2",
    title: "Full Stack Developer",
    company: "Dream Launch Studios",
    location: "Remote",
    date: "Apr 2025 - Present",
    description: [
      "Leading the full development of a complex SaaS platform.",
      "Implemented advanced state management patterns resulting in a 40% improvement in performance.",
      "Collaborated with UX/UI designers to create intuitive user interfaces and experiences.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "GraphQL",
      "Supabase",
      "OpenAI",
      "Prisma ORM",
    ],
  },
  {
    id: "exp-1",
    title: "Full Stack Developer",
    company: "Ezintsha Systems Private Limited ",
    location: "Delhi,India",
    date: "Jul 2024 - Sep 2024",
    description: [
      "Developed and maintained multiple web applications for clients across various industries.",
      "Created RESTful APIs and microservices to support web applications.",
      "Participated in agile development processes, including daily standups and sprint planning.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Docker", "AWS"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="gradient-heading">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            My professional journey and the experience I've gained along the
            way.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-12 md:ml-auto md:mr-0 md:pl-0"
                  : "md:pl-12 md:mr-auto md:ml-0 md:pr-0"
              } md:w-1/2 w-full pl-10`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background" />
              </div>

              {/* Content card */}
              <div className="glass-card p-6 rounded-xl">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold">
                      {experience.title}
                    </h3>
                    <span className="text-xs text-primary px-2 py-1 rounded-full bg-primary/10 whitespace-nowrap">
                      {experience.date}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-1 sm:gap-3">
                    <span className="font-medium">{experience.company}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <li
                      key={`${experience.id}-desc-${idx}`}
                      className="text-sm flex items-start"
                    >
                      <span className="mr-2 mt-1 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={`${experience.id}-tech-${tech}`}
                      className="tech-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
