'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Database, Cpu, MessageSquare, Workflow, Search, Globe } from 'lucide-react';
import Image from 'next/image';

const techLogos = [
    { name: "n8n", path: "/images/n8n.png" },
    { name: "Zapier", path: "/images/zapier.png" },
    { name: "Make", path: "/images/make.png" },
    { name: "LangChain", path: "/images/langchain.png" },
    { name: "Vertex AI", path: "/images/vertexai.png" },
    { name: "RAG", path: "/images/rag.png" },
    { name: "Vector DB", path: "/images/vectordb.png" },
    { name: "AI Agents", path: "/images/agents.png" },
    { name: "Pabbly", path: "/images/pabbly.png" },
    { name: "Zoho Flow", path: "/images/zohoflow.png" },
];

const techCategories = [
    {
        name: "AI & Intelligence",
        icon: Brain,
        description: "Autonomous agents and cognitive systems that think and learn.",
        gradient: "from-blue-500/20 to-purple-500/20",
        borderColor: "border-blue-500/30",
        iconColor: "text-blue-400",
        techs: ["RAG Systems", "LangChain", "Vertex AI", "OpenAI GPT-4o", "Anthropics Claude 3.5"]
    },
    {
        name: "Automation Engine",
        icon: Workflow,
        description: "Seamless orchestration across your entire software stack.",
        gradient: "from-orange-500/20 to-red-500/20",
        borderColor: "border-orange-500/30",
        iconColor: "text-orange-400",
        techs: ["n8n.io", "Make.com", "Zapier", "Zoho Flow", "Pabbly Connect"]
    },
    {
        name: "Knowledge Systems",
        icon: Database,
        description: "High-performance vector storage and retrieval for AI memory.",
        gradient: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
        iconColor: "text-green-400",
        techs: ["Pinecone", "Milvus", "Weaviate", "Supabase Vector", "MongoDB Atlas"]
    },
    {
        name: "Agentic Workflows",
        icon: Cpu,
        description: "Multi-agent systems designed for complex problem solving.",
        gradient: "from-cyan-500/20 to-blue-500/20",
        borderColor: "border-cyan-500/30",
        iconColor: "text-cyan-400",
        techs: ["AutoGPT", "CrewAI", "Microsoft AutoGen", "Custom MCPs", "Tool-Calling APIs"]
    }
];

export default function TechStack() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-bold mb-6 text-white"
                    >
                        Our Tech <span className="text-accent">Arsenal</span>
                    </motion.h2>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto px-4">
                        We don't just use tools; we engineer ecosystems. Our stack is curated for
                        maximum performance, reliability, and scale.
                    </p>
                </div>

                {/* Infinite Marquee */}
                <div className="mb-32 relative group">
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

                    <div className="flex overflow-hidden gap-12 select-none">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="flex flex-none gap-12 items-center min-w-full"
                        >
                            {[...techLogos, ...techLogos].map((logo, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 group/logo">
                                    <div className="relative w-24 h-24 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover/logo:border-accent/50 transition-all duration-500 group-hover/logo:scale-110">
                                        <Image
                                            src={logo.path}
                                            alt={logo.name}
                                            fill
                                            className="object-contain p-4 opacity-80 group-hover/logo:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-white/40 group-hover/logo:text-white/80 transition-colors uppercase tracking-widest">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-3xl border ${category.borderColor} bg-gradient-to-br ${category.gradient} p-8 hover:scale-[1.02] transition-all duration-500`}
                        >
                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border ${category.borderColor}`}>
                                    <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                                <p className="text-white/60 mb-6 leading-relaxed">{category.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {category.techs.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

