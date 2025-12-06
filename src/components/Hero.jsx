import React from 'react';
import { motion } from 'framer-motion';
import CodeWindow from './CodeWindow';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-between min-h-screen pt-32 pb-20 md:flex-row md:pt-0 gap-10">
            {/* Left: Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start w-full max-w-2xl gap-6 mb-16 md:w-1/2 md:mb-0 mt-20 ">
                <h1 className="text-5xl font-black leading-tight tracking-tight text-(--text-primary) md:text-6xl">
                    I'm Md. Rashedul Islam <br />
                </h1>

                <h2 className="text-4xl font-bold md:text-5xl">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">
                        MERN-Stack
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">
                        Developer
                    </span>
                </h2>

                <p className="max-w-xl text-lg leading-relaxed text-(--text-secondary)">
                    I build{' '}
                    <span className="text-purple-400">
                        high-performance web applications
                    </span>
                    . Junior MERN Stack Developer with experience building
                    full-stack applications using React, Node, Express, and
                    MongoDB. Skilled in responsive UIs, REST APIs, JWT
                    authentication, and deploying apps on Vercel/Netlify.
                    Passionate about clean code and contributing to impactful
                    team projects.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4 w-full max-w-2xl">
                    {[
                        { label: 'Years in Production', value: '1+' },
                        { label: 'Projects Delivered', value: '15+' },
                        { label: 'Client Satisfaction', value: '100%' },
                        { label: 'Projects completed', value: '15+' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 border rounded-xl bg-(--bg-card) border-(--border-color) backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                            <span className="text-2xl font-bold text-(--text-primary)">
                                {stat.value}
                            </span>
                            <span className="text-[10px] text-(--text-secondary) text-center uppercase tracking-wider mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-8">
                    <button className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <span className="text-sm">
                            View Case <br /> Studies
                        </span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                    </button>

                    <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-(--text-primary) transition-all border rounded-lg bg-(--bg-card) border-(--border-color) hover:border-gray-500 hover:bg-gray-800/20 active:scale-95">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect width="20" height="14" x="2" y="3" rx="2" />
                            <line x1="8" x2="16" y1="21" y2="21" />
                            <line x1="12" x2="12" y1="17" y2="21" />
                        </svg>
                        Technical <br /> Interview
                    </button>

                    <button className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-(--text-primary) transition-all border rounded-lg bg-(--bg-card) border-(--border-color) hover:border-gray-500 hover:bg-gray-800/20 active:scale-95">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
                        View <br /> Resume
                    </button>
                </div>

                {/* Availability Status */}
                <div className="flex items-center gap-2 mt-6 text-xs text-(--text-secondary)">
                    <span className="text-purple-400">🚀</span>
                    <span>
                        <span className="text-purple-400 font-semibold">
                            Available Immediately
                        </span>{' '}
                        for Full Stack and Frontend roles
                    </span>
                </div>
            </motion.div>

            {/* Right: Code Block */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2">
                <CodeWindow />
            </motion.div>
        </section>
    );
};

export default Hero;
