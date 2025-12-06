import React from 'react';
import { Github, Linkedin, Globe, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center py-6 pointer-events-none max-w-6xl mx-auto">
            {/* Center: Status Pill - animate fade down */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-300 border rounded-full bg-purple-900/20 border-purple-500/30 backdrop-blur-sm pointer-events-auto">
                <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                    <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                Currently Accepting new Opportunities
            </motion.div>

            {/* Right: Social Icons - animate fade down */}
            <div className="absolute right-0 flex items-center gap-4 pointer-events-auto">
                {[
                    { Icon: Globe, href: '#' },
                    { Icon: Github, href: 'https://github.com/rashedul25389' },
                    {
                        Icon: Linkedin,
                        href: 'https://www.linkedin.com/in/rashedul25389/',
                    },
                    { Icon: Volume2, href: '#' }, // Using Volume as placeholder for the speaker icon
                ].map((item, index) => (
                    <motion.a
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        href={item.href}
                        className="p-2 text-(--text-secondary) transition-all border rounded-full border-(--border-color) hover:text-(--text-primary) hover:bg-(--bg-card) hover:border-(--text-primary) active:scale-95">
                        <item.Icon size={18} />
                    </motion.a>
                ))}
            </div>
        </header>
    );
};

export default Header;
