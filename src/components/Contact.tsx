'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to automate your <br /> entire workflow?</h2>
                <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
                    From simple tasks to complex AI agents, we build the systems that scale you 10x.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all text-lg">
                        Schedule Consult
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-glass-border text-white font-medium rounded-lg hover:bg-white/5 transition-all text-lg">
                        View Capabilities
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
