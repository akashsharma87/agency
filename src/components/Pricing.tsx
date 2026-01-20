'use client';

import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Starter Essential",
        price: "₹5,000",
        duration: "Next-day start",
        description: "Essential digital foundation for your brand",
        icon: Sparkles,
        features: [
            "High-fidelity Figma designs",
            "5-page static website",
            "Timeline alignment",
            "Simple autonomous agent",
            "2-3 tools automation",
            "Zero-downtime deployment"
        ],
        cta: "Start Your Project",
        popular: false
    },
    {
        name: "Scale Master",
        price: "₹10,000",
        duration: "Priority queue",
        description: "Deep AI integration for scaling businesses",
        icon: Zap,
        features: [
            "AI web & mobile applications",
            "Agents, bots & voice assistants",
            "Custom workflow automation",
            "Full cloud deployment",
            "30-day premium maintenance",
            "Priority support"
        ],
        cta: "Go Pro Now",
        popular: true
    },
    {
        name: "Enterprise Partner",
        price: "Custom",
        duration: "Dedicated team",
        description: "Full cognitive transformation for enterprises",
        icon: Crown,
        features: [
            "Everything in Scale Master",
            "Lifetime maintenance facility",
            "Dedicated R&D and infra team",
            "Custom LLM fine-tuning",
            "On-premise deployment",
            "24/7 dedicated support"
        ],
        cta: "Book Strategy Call",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Transparent Pricing. <br />
                        <span className="text-muted">No Hidden Costs.</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Choose the plan that fits your startup stage. All plans include unlimited revisions
                        and dedicated support.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative glass-card p-8 rounded-3xl hover:bg-white/5 transition-all ${plan.popular ? 'border-2 border-accent' : ''
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <plan.icon className="w-10 h-10 text-accent mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-muted text-sm mb-4">{plan.description}</p>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-bold">{plan.price}</span>
                            </div>
                            <div className="text-sm text-muted">{plan.duration} delivery</div>
                        </div>

                        <Link
                            href="#contact"
                            className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 flex items-center justify-center ${plan.popular
                                ? 'bg-white text-black hover:bg-gray-200'
                                : 'bg-white/5 border border-glass-border hover:bg-white/10'
                                }`}
                        >
                            {plan.cta}
                        </Link>

                        <div className="space-y-3">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <p className="text-muted">
                    Need a custom solution? <a href="#contact" className="text-accent hover:underline font-medium">Let's talk</a>
                </p>
            </motion.div>
        </section>
    );
}
