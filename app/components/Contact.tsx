"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function ContactPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side: Form */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Contact Us</h1>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Please feel free to contact us and we will look to assist you as we can.
            </p>
          </motion.div>

          <motion.form variants={fadeInUp} className="space-y-6 max-w-md">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-white outline-none transition-colors duration-300"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-white outline-none transition-colors duration-300"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
              <textarea 
                rows={1}
                className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-white outline-none transition-colors duration-300 resize-none"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-40 bg-[#2A2A2A] hover:bg-white hover:text-black py-4 mt-4 font-medium transition-all duration-300 uppercase text-xs tracking-widest"
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Side: Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-end space-y-12 lg:pb-12"
        >
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500">Find us</h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              121 King Street, Melbourne<br />
              Victoria 3000 Australia
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500">Talk to us</h3>
            <p className="text-sm md:text-base text-gray-300">
              +123 411 123<br />
              hello@thebrand.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4">
            {[Twitter, Linkedin, Instagram, Github].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}