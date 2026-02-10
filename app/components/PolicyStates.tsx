"use client";

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Shield, Zap, Globe, Target } from 'lucide-react';

const stats = [
    {
        label: "Policy Cross-Checks",
        value: "10M+",
        icon: <Shield size={20} />,
        desc: "Analyzed annually"
    },
    {
        label: "Compliance Accuracy",
        value: "99.9%",
        icon: <Target size={20} />,
        desc: "Verified precision"
    },
    {
        label: "Audit Response",
        value: "< 2s",
        icon: <Zap size={20} />,
        desc: "Real-time execution"
    },
    {
        label: "Jurisdictions",
        value: "50+",
        icon: <Globe size={20} />,
        desc: "Global coverage"
    }
];

export default function PolicyStats() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="bg-white py-12 px-6 border-y border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center text-center space-y-2"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-black/20">{stat.icon}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                    {stat.label}
                                </span>
                            </div>
                            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-black">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                {stat.desc}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}