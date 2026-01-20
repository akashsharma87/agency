'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: "How long does it take to build an MVP?",
        answer: "Our standard MVP timeline is 5 weeks from kickoff to deployment. This includes design, development, testing, and launch. For simpler projects, we can deliver in as little as 3-4 weeks. Complex enterprise solutions may take 8-12 weeks."
    },
    {
        question: "What if I'm not technical? Can you still help me?",
        answer: "Absolutely! 80% of our clients are non-technical founders. We handle all the technical complexity and explain everything in plain English. You focus on your business—we handle the code, infrastructure, and deployment."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes! All MVP projects include 30 days of complimentary post-launch support. This covers bug fixes, minor adjustments, and performance monitoring. We also offer ongoing maintenance packages for long-term partnerships."
    },
    {
        question: "Can you integrate with existing systems?",
        answer: "Definitely. We specialize in integrations with platforms like Zapier, Make.com, n8n, Zoho Flow, Salesforce, HubSpot, and custom APIs. We can connect your new product with any existing tools in your tech stack."
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, battle-tested stacks: React-based frameworks for web, high-performance mobile architectures, Python/Node.js for backends, and industry-leading cloud platforms. For AI, we leverage OpenAI, LangChain, and custom ML models."
    },
    {
        question: "How much does it cost to build an AI voice agent?",
        answer: "AI voice agent projects typically range from $8K-$15K depending on complexity. This includes voice recognition, natural language processing, integration with your systems, and deployment. We provide detailed quotes after understanding your requirements."
    },
    {
        question: "Do you sign NDAs?",
        answer: "Yes, we're happy to sign NDAs before any detailed discussions. Your intellectual property and business ideas are completely protected. We take confidentiality very seriously."
    },
    {
        question: "Can you help with investor pitch decks?",
        answer: "Yes! Our Enterprise Partner plan includes pitch deck assistance. We help you create compelling presentations that showcase your product, traction, and vision to investors."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-4 max-w-4xl mx-auto">
            <div className="mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Frequently Asked <br />
                        <span className="text-muted">Questions</span>
                    </h2>
                    <p className="text-muted text-lg">
                        Everything you need to know about working with us.
                    </p>
                </motion.div>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="glass-card rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="font-semibold pr-8">{faq.question}</span>
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                            ) : (
                                <Plus className="w-5 h-5 text-muted flex-shrink-0" />
                            )}
                        </button>

                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-5"
                            >
                                <p className="text-muted leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        )}
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
                    Still have questions? <a href="#contact" className="text-accent hover:underline font-medium">Get in touch</a>
                </p>
            </motion.div>
        </section>
    );
}
