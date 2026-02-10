"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldAlert,
    Workflow,
    Database,
    SearchCode,
    UserCheck,
    FileCheck2
} from 'lucide-react';

const features = [
    {
        title: "Real-time Compliance",
        desc: "Monitor and audit AI operations against global legal standards instantly.",
        icon: <ShieldAlert size={32} className="text-black" />,
    },
    {
        title: "Automated Workflows",
        desc: "Streamline policy enforcement with intelligent, self-executing audit processes.",
        icon: <Workflow size={32} className="text-black" />,
    },
    {
        title: "Data Integrity",
        desc: "Ensure all policy data is immutable, transparent, and verifiable at any time.",
        icon: <Database size={32} className="text-black" />,
    },
    {
        title: "Risk Assessment",
        desc: "Identify potential legal and ethical risks before they become liabilities.",
        icon: <SearchCode size={32} className="text-black" />,
    },
    {
        title: "User Verification",
        desc: "Advanced authentication layers ensuring only authorized policy edits.",
        icon: <UserCheck size={32} className="text-black" />,
    },
    {
        title: "Policy Templates",
        desc: "Pre-built, legally-vetted templates for rapid AI governance deployment.",
        icon: <FileCheck2 size={32} className="text-black" />,
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export default function PolicyFeatures() {
    return (
        <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 border-t border-black/5">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight"
                    >
                        Custom AI Policy Solutions <br />
                        <span className="text-gray-400">for your organization</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-black mx-auto mt-6"
                    />
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="p-10 bg-white border border-black/5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center space-y-6"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-black/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action or Footer note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl">
                        Explore All Solutions
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
