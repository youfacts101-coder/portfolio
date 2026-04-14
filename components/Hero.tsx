/**
 * Hero Component
 * Minimalist hero section with Framer Motion animations
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <p className="text-sm text-gray-300">
              Welcome to my digital space
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="mb-8">
          <span className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            Maxim Petrov
          </span>
          <br />
          <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-4 block">
            Fullstack Developer & AI Creator
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          I build modern web applications with Next.js, create AI-powered tools,
          and explore blockchain technologies. Passionate about clean code and
          exceptional user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-10 py-4 border border-gray-500 hover:border-white text-white hover:bg-white/5 rounded-lg font-semibold transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
