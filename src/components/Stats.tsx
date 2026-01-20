'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Rocket, Award } from 'lucide-react';

const stats = [
    {
        number: "5",
        label: "Live Products",
        description: "Production-ready platforms",
        icon: Rocket
    },
    {
        number: "16K+",
        label: "Total Users",
        description: "Across all platforms",
        icon: Users
    },
    {
        number: "3K+",
        label: "Interviews Conducted",
        description: "Via AI voice assistant",
        icon: TrendingUp
    },
    {
        number: "99.9%",
        label: "Platform Uptime",
        description: "Reliable infrastructure",
        icon: Award
    }
];

export default function Stats() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center group"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 mb-4 group-hover:scale-110 transition-transform">
                            <stat.icon className="w-8 h-8 text-accent" />
                        </div>
                        <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">{stat.number}</div>
                        <div className="font-semibold mb-1">{stat.label}</div>
                        <div className="text-sm text-muted">{stat.description}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
