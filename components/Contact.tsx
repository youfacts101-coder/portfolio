/**
 * Contact Section
 * Get in touch with social links
 */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const contactMethods = [
    {
      title: "GitHub",
      description: "Check out my open-source projects",
      icon: "🔗",
      link: "https://github.com/maksimpet557-dev",
      external: true,
    },
    {
      title: "Telegram",
      description: "Quick messaging and direct contact",
      icon: "💬",
      link: "https://t.me/maksimshtrih",
      external: true,
    },
    {
      title: "Email",
      description: "Send me a message directly",
      icon: "✉️",
      link: "mailto:maksimpet557@gmail.com",
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-28 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-10" />
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.link}
              target={method.external ? "_blank" : "_self"}
              rel={method.external ? "noopener noreferrer" : ""}
              className="group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-10 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all h-full">
                <div className="text-6xl mb-6">{method.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6">{method.description}</p>
                <div className="inline-flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                  <span className="font-semibold">Get in touch</span>
                  <svg
                    className="w-5 h-5 ml-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-16 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 mb-4">
            © 2026 Maxim Petrov. All rights reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/maksimpet557-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://t.me/maksimshtrih"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Telegram
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
