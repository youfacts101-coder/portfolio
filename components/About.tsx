/**
 * About Section
 * Skills and experience showcase
 */

"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & AI",
      items: ["AI Tools", "Crypto API", "Web3", "Framer Motion"],
    },
    {
      category: "Other",
      items: ["Git", "Docker", "AWS", "GitHub Actions"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">About Me</h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-28">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              I'm a passionate fullstack developer based in Russia, specializing
              in building modern web applications with Next.js and exploring
              emerging technologies like AI and blockchain.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              With expertise in TypeScript, React, and cloud technologies, I
              create scalable solutions that combine elegant UI design with
              robust backend infrastructure.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              When I'm not coding, I'm experimenting with AI tools, exploring
              crypto APIs, and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Projects", value: "15+" },
              { label: "Experience", value: "3+ years" },
              { label: "Clients", value: "20+" },
              { label: "Technologies", value: "20+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                variants={itemVariants}
              >
                <div className="text-4xl font-bold text-blue-400 mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              className="p-8 border border-white/10 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
