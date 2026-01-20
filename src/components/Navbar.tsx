'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/50 border-b border-glass-border"
        >
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="relative flex items-center justify-center">
                    <div className="w-9 h-9 border-2 border-white/20 rounded-lg rotate-45 group-hover:rotate-90 group-hover:border-accent transition-all duration-700 flex items-center justify-center">
                        <div className="w-5 h-5 bg-white rounded-sm -rotate-45" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl tracking-tight text-white leading-none">we<span className="text-accent underline decoration-white/10 underline-offset-4">Work</span></span>
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold mt-1">Enterprise AI</span>
                </div>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
                <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
                <Link href="#process" className="hover:text-foreground transition-colors">Process</Link>
                <Link href="#work" className="hover:text-foreground transition-colors">Work</Link>
                <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            </div>

            <Link
                href="#contact"
                className="px-4 py-2 text-sm bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
                Book a Call
            </Link>
        </motion.nav>
    );
}
