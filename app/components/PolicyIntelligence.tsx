"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Zap, Scale, FileText, UserSearch } from 'lucide-react';

const services = [
    {
        title: "COMPLIANCE AUDITING",
        icon: <ShieldCheck size={24} />,
        desc: "Real-time regulatory sync",
        delay: 0.1
    },
    {
        title: "RISK INTELLIGENCE",
        icon: <Search size={24} />,
        desc: "Autonomous threat mapping",
        delay: 0.2
    },
    {
        title: "AUTOMATED MONITORING",
        icon: <Zap size={24} />,
        desc: "24/7 AI policy guardrails",
        delay: 0.3
    },
    {
        title: "STRATEGY CONSULTING",
        icon: <Scale size={24} />,
        desc: "High-level legal frameworking",
        delay: 0.4
    },
    {
        title: "ETHICAL AI SYSTEMS",
        icon: <FileText size={24} />,
        desc: "Bias & fairness validation",
        delay: 0.5
    },
    {
        title: "PERSONAL COMPLIANCE",
        icon: <UserSearch size={24} />,
        desc: "Tailored institutional safety",
        delay: 0.6
    }
];

export default function PolicyIntelligence() {
    return (
        <section className="bg-white text-black pt-32 pb-12 px-6 overflow-hidden h-auto flex flex-col items-center justify-center">
            <div className="max-w-7xl mx-auto w-full text-center mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-black uppercase tracking-[0.5em] text-xs font-black block mb-4"
                >
                    Intelligence Layers
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                >
                    OUR SERVICES
                </motion.h2>
            </div>

            {/* Hexagonal Staggered Grid */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-5xl">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: service.delay, duration: 0.5 }}
                        className={`relative group cursor-pointer ${index % 2 === 1 ? 'md:mt-24' : ''}`}
                    >
                        {/* Hexagon Shape Container */}
                        <div className="relative w-[280px] h-[320px] transition-all duration-500 group-hover:scale-105">
                            {/* SVG Hexagon Background */}
                            <svg
                                viewBox="0 0 100 100"
                                className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(0,0,0,0.15)]"
                            >
                                <path
                                    d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
                                    fill="white"
                                    stroke="black"
                                    strokeWidth="0.5"
                                    className="transition-all duration-500 group-hover:stroke-gray-600"
                                />
                            </svg>

                            {/* Content Inside Hexagon */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-sm font-black tracking-widest uppercase max-w-[150px] leading-tight">
                                    {service.title}
                                </h3>
                                <div className="w-8 h-[1px] bg-black/10 group-hover:w-full transition-all duration-500"></div>
                                <p className="text-[10px] text-black font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    Read more
                                </p>
                            </div>
                        </div>

                        {/* Subtitle/Desc below (Optional) */}
                        <div className="mt-4 text-center opacity-100 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{service.desc}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Bottom Line */}
            <div className="mt-32 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        </section>
    );
}