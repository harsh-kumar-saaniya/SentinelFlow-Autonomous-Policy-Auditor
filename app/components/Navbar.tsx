"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Orbit } from "lucide-react"; // Close match to your logo icon

const NavItems = [
  { name: "Work", href: "#" },
  { name: "About", href: "#" },
  { name: "Playground", href: "#" },
  { name: "Resource", href: "#" },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-[#1a1a1a] p-2 rounded-full shadow-2xl border border-white/5 backdrop-blur-md">
        
        {/* Logo Section /}
        <div className="bg-white p-2 rounded-full ml-1">
          <Orbit className="w-5 h-5 text-black" />
        </div>

        {/ Navigation Links */}
        <div className="flex items-center px-2 relative">
          {NavItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </div>

        {/* Email Pill */}
        <a 
          href="mailto:ihyaet@gmail.com"
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors mr-1"
        >
          ihyaet@gmail.com
        </a>
      </div>
    </nav>
  );
}