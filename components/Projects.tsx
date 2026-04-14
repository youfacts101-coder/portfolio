/**
 * Projects Section
 * Showcase of featured projects
 */

"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "YouTube Automation Tool",
      description:
        "An intelligent automation tool for YouTube channel management with AI-powered video analysis, scheduling, and performance tracking.",
      tags: ["Next.js", "Python", "AI", "API"],
      github: "https://github.com/maksimpet557-dev/youtube-automation",
      link: "https://youtube-automation.vercel.app",
    },
    {
      title: "Crypto Dashboard",
      description:
        "Real-time cryptocurrency market dashboard with price tracking, portfolio management, and advanced charting capabilities.",
      tags: ["React", "Crypto API", "TypeScript", "TradingView"],
      github: "https://github.com/maksimpet557-dev/crypto-dashboard",
      link: "https://crypto-dashboard.vercel.app",
    },
    {
      title: "AI Content Generator",
      description:
        "Full-stack application leveraging multiple AI models for generating optimized content across different platforms.",
      tags: ["Next.js", "OpenAI", "TypeScript", "Tailwind"],
      github: "https://github.com/maksimpet557-dev/ai-content-gen",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-10 text-lg">
            Want to see more? Check out my GitHub for additional projects
          </p>
          <motion.a
            href="https://github.com/maksimpet557-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
