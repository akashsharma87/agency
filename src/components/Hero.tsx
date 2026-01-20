'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Brain, Zap, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';
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

const mainStats = [
  { number: "50+", label: "Agents Deployed" },
  { number: "16K+", label: "Total Users" },
  { number: "500k+", label: "Tasks Automations" },
  { number: "99.9%", label: "System Uptime" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0} className="top-[20%] left-[15%]">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Brain className="w-8 h-8 text-accent" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1} className="top-[60%] left-[10%]">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Zap className="w-8 h-8 text-yellow-500" />
          </div>
        </FloatingElement>
        <FloatingElement delay={2} className="top-[25%] right-[15%]">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Cpu className="w-8 h-8 text-blue-400" />
          </div>
        </FloatingElement>
        <FloatingElement delay={1.5} className="top-[65%] right-[12%]">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </FloatingElement>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 group hover:border-accent/50 transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-white/80">The Future of AI Automation is Here</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="inline-block text-white">We Build</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-accent bg-[length:200%_auto] animate-shimmer">
            Next-Gen AI Systems.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From Autonomous AI Agents to Enterprise Automation Workflows.
          We leverage <span className="text-white font-medium">LangChain</span>,
          <span className="text-white font-medium"> RAG</span>, and
          <span className="text-white font-medium"> Vertex AI</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5 relative transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#work"
            className="px-8 py-4 text-white/90 font-semibold rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Tech Marquee Carousel */}
        <div className="mb-20 relative group/marquee max-w-6xl mx-auto overflow-hidden py-10">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex overflow-hidden gap-12 select-none">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex flex-none gap-20 items-center min-w-full"
            >
              {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
                <div key={i} className="flex-none flex items-center gap-4 opacity-30 hover:opacity-100 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0">
                  <div className="relative w-12 h-12">
                    <Image
                      src={logo.path}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-sm font-black text-white tracking-[0.3em] uppercase hidden md:block">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Single Consolidated Row of Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 lg:gap-32"
        >
          {mainStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white">{stat.number}</span>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/30 mt-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  );
}

function FloatingElement({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={`absolute z-0 hidden lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}
