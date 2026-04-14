/**
 * Header Component
 * Navigation bar with smooth animations and glassmorphism effect
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <motion.span
            className="text-white hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            MP
          </motion.span>
        </Link>

        {/* Navigation Items */}
        <ul className="hidden md:flex gap-12 items-center">
          {navItems.map((item) => (
            <motion.li key={item.href} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors relative group text-lg"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </nav>
    </motion.header>
  );
}
