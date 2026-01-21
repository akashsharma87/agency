'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Work', href: '#work' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-[70] px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/50 border-b border-glass-border"
            >
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group cursor-pointer">
                    <div className="relative flex items-center justify-center">
                        <div className="w-8 h-8 md:w-9 md:h-9 border-2 border-white/20 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-accent transition-all duration-700 flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-sm -rotate-45" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg md:text-xl tracking-tight text-white leading-none">we<span className="text-accent underline decoration-white/10 underline-offset-4">Work</span></span>
                        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mt-1">Enterprise AI</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden md:block px-4 py-2 text-sm bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
                    >
                        Book a Call
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-[60] p-2 text-white hover:text-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[55] md:hidden overflow-hidden"
                    >
                        {/* Background Elements to add texture and break the 'total black' look */}
                        <div className="absolute inset-0 z-0">
                            {/* Grid Texture */}
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                            {/* Ambient Glows */}
                            <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[40%] bg-accent/15 blur-[100px] rounded-full" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full" />

                            {/* Large Watermark Logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="w-[120vw] h-[120vw] border border-white/40 rounded-[20%] flex items-center justify-center"
                                >
                                    <div className="w-[80%] h-[80%] border border-white/20 rounded-[20%]" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                            <div className="flex flex-col gap-8 w-full max-w-xs">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group relative inline-block text-4xl font-bold tracking-tight"
                                        >
                                            <span className="relative z-10 text-white/40 group-hover:text-accent transition-colors duration-300">
                                                {link.name}
                                            </span>
                                            {/* Hover underline effect */}
                                            <motion.div
                                                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                            />
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="pt-8"
                                >
                                    <Link
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-center w-full px-8 py-5 bg-white text-black rounded-2xl text-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                                    >
                                        Book a Call
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Mobile Menu Footer Area */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-12 left-0 right-0 flex flex-col items-center"
                            >
                                <p className="text-white/20 text-xs uppercase tracking-[0.3em] font-bold mb-4">The Future of AI</p>
                                <div className="flex gap-4 text-white/40">
                                    <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    </div>
                                    <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    </div>
                                    <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
