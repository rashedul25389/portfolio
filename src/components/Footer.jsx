import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    ArrowUp,
    Send,
} from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
        alert('Thanks for subscribing!');
        setEmail('');
    };

    const socialLinks = [
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/rashedul25389/',
            label: 'LinkedIn',
        },
        {
            icon: Github,
            href: 'https://github.com/rashedul25389',
            label: 'GitHub',
        },
    ];

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const legalLinks = [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookies', href: '#' },
    ];

    return (
        <footer className="relative bg-(--bg-main) pt-20 pb-10 overflow-hidden border-t border-(--border-color) transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></motion.div>
                <div className="absolute bottom-[-20%] right-[30%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-(--text-primary)">
                            Rashedul
                        </h3>
                        <p className="text-(--text-secondary) leading-relaxed max-w-xs">
                            Digital designer & developer creating meaningful
                            experiences.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="text-(--text-secondary) hover:text-purple-400 transition-colors transform hover:scale-110"
                                    aria-label={social.label}>
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="text-sm font-bold text-(--text-primary) uppercase tracking-wider mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-(--text-secondary) hover:text-(--text-primary) transition-colors hover:translate-x-1 inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-bold text-(--text-primary) uppercase tracking-wider mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:zakirhasanhriday@gmail.com"
                                    className="group flex items-center gap-3 text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                    <Mail
                                        size={18}
                                        className="text-purple-500 group-hover:scale-110 transition-transform"
                                    />
                                    rashedul25389@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+8801613577742"
                                    className="group flex items-center gap-3 text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                    <Phone
                                        size={18}
                                        className="text-purple-500 group-hover:scale-110 transition-transform"
                                    />
                                    +88 01719033900
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-sm font-bold text-(--text-primary) uppercase tracking-wider mb-6">
                            Newsletter
                        </h4>
                        <p className="text-(--text-secondary) text-sm mb-6">
                            Subscribe to get updates on my latest work.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-(--bg-card) border border-(--border-color) rounded-lg px-4 py-3 text-(--text-primary) placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-(--bg-card-hover) transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-(--text-primary) text-(--bg-main) font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-(--border-color) flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-(--text-secondary) text-sm">
                        © 2025 Sahil. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {legalLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-(--bg-card) border border-(--border-color) rounded-full text-(--text-primary) hover:bg-purple-600 hover:border-purple-500 transition-all hover:-translate-y-1 text-white"
                        aria-label="Scroll to top"></button>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
