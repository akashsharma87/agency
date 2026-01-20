'use client';

import { motion } from 'framer-motion';
import { Bot, Smartphone, Zap, Code, Workflow, Layers, MessageSquare, Mic, AppWindow } from 'lucide-react';
import React from 'react';

const services = [
    {
        title: "AI Voice Agents",
        description: "Human-like voice interactions for customer support and sales, available 24/7.",
        icon: Mic,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "iOS & Android Apps",
        description: "Native mobile experiences built with performance and aesthetics in mind.",
        icon: Smartphone,
        colSpan: "col-span-1",
    },
    {
        title: "Business Automation",
        description: "Automate repetitive tasks using Zapier, Make.com, n8n, and Zoho Flow.",
        icon: Workflow,
        colSpan: "col-span-1",
    },
    {
        title: "Intelligent Chatbots",
        description: "Context-aware bots with long-term memory support for deeper customer engagement.",
        icon: MessageSquare,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Modern Web Apps",
        description: "High-performance websites built with advanced frameworks and cutting-edge tech.",
        icon: Code,
        colSpan: "col-span-1",
    },
    {
        title: "Custom AI Solutions",
        description: "Tailored AI agents and allied applications for your specific business needs.",
        icon: Bot,
        colSpan: "col-span-1",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for scale. <br /><span className="text-muted">Designed for impact.</span></h2>
                <p className="text-muted text-lg max-w-2xl">
                    We combine cutting-edge AI with robust engineering to deliver products that redefine possibilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group p-8 rounded-2xl glass-card hover:bg-white/5 transition-colors border border-glass-border relative overflow-hidden ${service.colSpan}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <service.icon className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
