'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Palette, Code2, Rocket, Headphones } from 'lucide-react';

const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, target audience, and technical requirements. Through collaborative workshops, we map out the perfect solution architecture.",
        icon: Lightbulb,
        deliverables: ["Project roadmap", "Technical specification", "Timeline & milestones"]
    },
    {
        number: "02",
        title: "Design & Prototyping",
        description: "Our design team creates high-fidelity prototypes that wow investors and users alike. Every pixel is crafted for conversion and engagement.",
        icon: Palette,
        deliverables: ["Wireframes", "UI/UX designs", "Interactive prototype", "Design system"]
    },
    {
        number: "03",
        title: "Development & Integration",
        description: "Using cutting-edge tech stacks, we build scalable, secure applications. AI models, voice agents, and automation workflows are seamlessly integrated.",
        icon: Code2,
        deliverables: ["Frontend & backend", "API integrations", "AI/ML models", "Quality assurance"]
    },
    {
        number: "04",
        title: "Launch & Deployment",
        description: "We handle everything from cloud deployment to DNS configuration. Your product goes live with zero downtime and maximum performance.",
        icon: Rocket,
        deliverables: ["Production deployment", "Performance optimization", "Security hardening", "Launch support"]
    },
    {
        number: "05",
        title: "Support & Scaling",
        description: "Post-launch, we provide 30-day complimentary support. Need to scale? We optimize infrastructure and add features as you grow.",
        icon: Headphones,
        deliverables: ["Bug fixes", "Performance monitoring", "Feature updates", "Scaling assistance"]
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-32 px-4 max-w-7xl mx-auto relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">
                        From Idea to Launch <br />
                        <span className="text-muted">in 5 Weeks</span>
                    </h2>
                    <p className="text-muted text-base md:text-lg max-w-2xl">
                        Our battle-tested process has helped 50+ startups ship products faster.
                        No bureaucracy, just results.
                    </p>
                </motion.div>
            </div>

            <div className="space-y-12">
                {processSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            {/* Number */}
                            <div className="md:col-span-2">
                                <div className="text-6xl font-bold text-accent/20">{step.number}</div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-10 glass-card p-8 rounded-2xl group hover:bg-white/5 transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                                        <step.icon className="w-8 h-8 text-accent" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-muted leading-relaxed mb-6">{step.description}</p>

                                        <div className="space-y-2">
                                            <p className="text-sm font-semibold text-foreground/80 mb-3">Key Deliverables:</p>
                                            <div className="grid sm:grid-cols-2 gap-2">
                                                {step.deliverables.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                                                        <span className="text-sm text-muted">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connector line */}
                        {index < processSteps.length - 1 && (
                            <div className="hidden md:block absolute left-[4.5rem] top-24 w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
