'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Clock, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const caseStudies = [
    {
        title: "AI Interview Platform",
        category: "AI Voice Interviewer",
        description: "Built an AI-powered voice assistant interviewer that conducts technical interviews with real-time feedback. Features natural conversation flow and comprehensive candidate evaluation.",
        image: "/images/voiceflow.png",
        link: "https://interview.engineer.cv/",
        stats: [
            { label: "Interviews", value: "1000+", icon: Users },
            { label: "Accuracy", value: "95%", icon: TrendingUp },
            { label: "Avg Duration", value: "30 min", icon: Clock }
        ],
        tags: ["OpenAI", "Voice AI", "Autonomous", "Real-time"],
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Engineer.cv",
        category: "AI Hiring Portal",
        description: "Comprehensive AI-powered hiring platform that streamlines the recruitment process. Automated candidate screening, skill assessment, and intelligent matching algorithms.",
        image: "/images/autoflow.png",
        link: "https://engineer.cv/",
        stats: [
            { label: "Candidates", value: "5K+", icon: Users },
            { label: "Match Rate", value: "87%", icon: TrendingUp },
            { label: "Time Saved", value: "70%", icon: Clock }
        ],
        tags: ["AI Matching", "Fullstack", "PostgreSQL", "OpenAI"],
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "SystemDesign.tech",
        category: "AI Learning Platform",
        description: "AI-powered learning platform for system design. Interactive tutorials, real-world case studies, and personalized learning paths powered by advanced AI.",
        image: "/images/mediconnect.png",
        link: "https://systemdesign.tech/",
        stats: [
            { label: "Students", value: "10K+", icon: Users },
            { label: "Completion", value: "82%", icon: TrendingUp },
            { label: "Avg Rating", value: "4.9★", icon: TrendingUp }
        ],
        tags: ["Education AI", "React", "LLM", "Interactive"],
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "HotelMoguls.com",
        category: "AI Chatbot",
        description: "Intelligent hotel booking assistant with long-term memory support. Provides personalized recommendations and handles complex booking queries 24/7.",
        image: "/images/chatgenius.png",
        link: "https://hotelmoguls.com/",
        stats: [
            { label: "Bookings", value: "2K+", icon: TrendingUp },
            { label: "Uptime", value: "99.9%", icon: Clock },
            { label: "Satisfaction", value: "96%", icon: Users }
        ],
        tags: ["GPT-4", "Long Memory", "Vector DB", "Hospitality"],
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "AG-UI Client",
        category: "LLM Enhancement",
        description: "Modern LLM response enhancement platform with advanced UI components. Improves AI interactions with beautiful, functional interfaces and real-time streaming.",
        image: "/images/voiceflow.png",
        link: "https://ag-ui-client-seven.vercel.app/",
        stats: [
            { label: "Response Time", value: "<100ms", icon: Clock },
            { label: "UI Components", value: "50+", icon: TrendingUp },
            { label: "Active Users", value: "500+", icon: Users }
        ],
        tags: ["React", "Vercel", "Streaming", "Modern UI"],
        gradient: "from-purple-500/20 to-pink-500/20"
    }
];

// Parallax Image Component
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <div ref={ref} className="relative z-10 aspect-video md:aspect-square rounded-2xl border border-glass-border overflow-hidden">
            <motion.div style={{ y, scale }} className="w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}

export default function CaseStudies() {
    return (
        <section id="work" className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">
                        Work That Speaks <br />
                        <span className="text-muted">Louder Than Words</span>
                    </h2>
                    <p className="text-muted text-base md:text-lg max-w-2xl px-2">
                        Real projects. Real results. We've helped startups raise $10M+ in funding
                        and scale to millions of users.
                    </p>
                </motion.div>
            </div>

            <div className="grid gap-12">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="grid md:grid-cols-2 gap-8 glass-card p-8 rounded-3xl hover:bg-white/5 transition-all relative overflow-hidden">
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                            {/* Project Image with Parallax */}
                            <ParallaxImage src={study.image} alt={study.title} />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-between">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
                                        {study.category}
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                                        {study.title}
                                    </h3>

                                    <p className="text-muted leading-relaxed mb-6">
                                        {study.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {study.stats.map((stat, i) => (
                                            <div key={i} className="text-center p-3 rounded-lg bg-background/50">
                                                <stat.icon className="w-4 h-4 text-accent mx-auto mb-1" />
                                                <div className="text-lg font-bold">{stat.value}</div>
                                                <div className="text-xs text-muted">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {study.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-glass-border text-muted">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={study.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all hover:underline"
                                >
                                    Visit Live Project
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
