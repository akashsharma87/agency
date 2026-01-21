'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, TechFlow AI",
        company: "Series A ($8M raised)",
        content: "weWork built our entire AI voice platform in 5 weeks. The quality was exceptional, and their automation expertise saved us 6 months of development time.",
        rating: 5,
        image: "/images/sarah.png",
        size: "large"
    },
    {
        name: "Marcus Rodriguez",
        role: "Founder, AutomateHub",
        company: "Bootstrapped to $500K ARR",
        content: "Robo is the future of home automation. It's incredibly smart and handles everything from fixing to cleaning with ease.",
        rating: 5,
        image: "/images/marcus.png",
        size: "medium"
    },
    {
        name: "Priya Sharma",
        role: "CTO, HealthConnect",
        company: "Acquired by MedTech Corp",
        content: "The mobile app they built was production-ready from day one. Clean code and beautiful UI.",
        rating: 5,
        image: "/images/priya.png",
        size: "small"
    },
    {
        name: "David Kim",
        role: "Product Lead, ChatSupport",
        company: "YC W23",
        content: "Our AI chatbot with long-term memory was a game-changer. They understood our vision and executed flawlessly.",
        rating: 5,
        image: "/images/david.png",
        size: "medium"
    },
    {
        name: "Emma Thompson",
        role: "Founder, RetailAI",
        company: "Seed Round ($2M)",
        content: "From Figma designs to deployed product in 4 weeks. The speed and quality were unmatched.",
        rating: 5,
        image: "/images/emma.png",
        size: "small"
    },
    {
        name: "Alex Johnson",
        role: "CEO, VoiceBot Inc",
        company: "Series B ($15M)",
        content: "They don't just code—they think like founders. Their AI agents handle thousands of calls daily with zero issues.",
        rating: 5,
        image: "/images/alex.png",
        size: "medium"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 px-4 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
                            Trusted by Founders <br />
                            <span className="text-white/40">Who Ship Fast</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-white/60 text-base md:text-lg max-w-md"
                    >
                        We've helped 50+ startups automate their core operations and launch
                        AI-native products in record time.
                    </motion.p>
                </div>

                {/* Bento Grid Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="break-inside-avoid relative group"
                        >
                            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden">
                                {/* Quote Icon */}
                                <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-10 shadow-2xl transition-opacity duration-500">
                                    <Quote className="w-24 h-24 text-white" />
                                </div>

                                {/* Author Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent/50 transition-colors duration-500">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                        <p className="text-white/40 text-sm">{testimonial.role}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:text-accent transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-white/80 text-lg leading-relaxed mb-8 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Company Footer */}
                                <div className="pt-6 border-t border-white/5">
                                    <span className="text-xs uppercase tracking-widest text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                                        {testimonial.company}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

