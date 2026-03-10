import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Terminal } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300">
            <div
                className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 overflow-hidden relative ${scrolled
                        ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20'
                        : 'bg-transparent border border-transparent'
                    }`}
            >
                {scrolled && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
                )}

                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 font-mono text-lg font-bold text-white hover:text-primary transition-colors duration-300 relative z-10"
                >
                    <Terminal size={18} className="text-primary" />
                    <span>Youssef.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 relative z-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium text-sm text-slate-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons + Mobile Toggle */}
                <div className="flex items-center gap-1 relative z-10">
                    <div className="hidden md:flex items-center mr-2 border-r border-slate-700/50 pr-3 gap-1">
                        <a
                            href="https://github.com/YoussefAshraf711"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/youssef-ashraf711"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#0a66c2] transition-colors duration-300 p-2 rounded-full hover:bg-white/5"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>

                    <a
                        href="/links"
                        className="hidden md:flex text-sm font-medium text-primary hover:text-white px-4 py-2 border border-primary/30 hover:border-primary/60 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] bg-primary/5 hover:bg-primary/10"
                    >
                        All Links
                    </a>

                    <button
                        className="md:hidden text-slate-300 p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-[80px] left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-2 shadow-2xl shadow-black/50"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="font-medium text-base text-slate-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                                <span className="text-primary/40 text-sm">→</span>
                            </motion.a>
                        ))}
                        <div className="h-px w-full bg-slate-800 my-2"></div>
                        <motion.a
                            href="/links"
                            className="font-medium text-base text-primary py-3 px-4 rounded-xl bg-primary/10 border border-primary/20 text-center mt-2"
                        >
                            View All Links / Contact
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
