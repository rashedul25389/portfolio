import React, { useRef } from 'react';
import { Github, Linkedin, Globe, Volume2 } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Header = () => {
    const audioRef = useRef(null);

    const socials = [
        { Icon: Globe, type: 'link', href: '#' },
        {
            Icon: Github,
            type: 'external',
            href: 'https://github.com/rashedul25389',
        },
        {
            Icon: Linkedin,
            type: 'external',
            href: 'https://www.linkedin.com/in/rashedul25389/',
        },
        { Icon: Volume2, type: 'audio' },
    ];

    const handleVolumeClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center py-6 pointer-events-none max-w-6xl mx-auto">
            {/* Status Pill */}
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

            {/* Social Icons */}
            <div className="absolute right-0 flex items-center gap-4 pointer-events-auto">
                {socials.map((item, index) => {
                    const commonClasses =
                        'p-2 border rounded-full border-gray-600 text-gray-400 transition-all active:scale-95 ' +
                        'hover:text-white hover:border-transparent ' +
                        'hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500';

                    if (item.type === 'audio') {
                        return (
                            <motion.button
                                key={index}
                                onClick={handleVolumeClick}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={commonClasses}>
                                <Volume2 size={18} />
                            </motion.button>
                        );
                    }

                    if (item.type === 'external') {
                        return (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={commonClasses}>
                                <item.Icon size={18} />
                            </motion.a>
                        );
                    }

                    // Normal link (Globe)
                    return (
                        <motion.a
                            key={index}
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={commonClasses}>
                            <item.Icon size={18} />
                        </motion.a>
                    );
                })}
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/click-sound.mp3" />
        </header>
    );
};

export default Header;
