/**
 * ProjectCard Component
 * Glassmorphic card with hover animations
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative h-full p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors duration-300">
        {/* Image Placeholder or Icon */}
        {image ? (
          <div className="w-full h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 opacity-50 group-hover:opacity-75 transition-opacity">
            {/* Image would be rendered here */}
          </div>
        ) : (
          <div className="w-full h-40 mb-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity">
            <span className="text-5xl">📦</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-base mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-6 border-t border-white/10">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-sm font-semibold rounded-lg transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-3 bg-gray-700/20 hover:bg-gray-700/30 text-gray-300 text-sm font-semibold rounded-lg transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
