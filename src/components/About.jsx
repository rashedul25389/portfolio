import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
    User,
    Code,
    Database,
    Cloud,
    Mail,
    FileText,
    Github,
    Linkedin,
    Twitter,
    MessageSquare,
    CheckCircle,
    Clock,
    Briefcase,
} from 'lucide-react';

const About = () => {
    const [activeTab, setActiveTab] = useState('Personal');

    const tabs = ['Personal', 'Professional', 'Approach'];
    const tabContent = {
        Personal:
            "Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.",
        Professional:
            'Junior MERN Stack Developer with a strong foundation in building scalable web applications. Committed to writing clean, maintainable code and optimizing performance.',
        Approach:
            'I believe in a user-centric approach, focusing on intuitive interfaces and seamless user experiences. I prioritize effective communication and collaboration within teams.',
    };

    return (
        <section
            id="about"
            className="relative py-20 bg-(--bg-main) transition-colors duration-300">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/10 rounded-full border border-purple-500/20">
                        About Me
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 mb-4">
                        Transforming <br /> Ideas Into Reality
                    </h2>
                    <p className="text-(--text-secondary) max-w-2xl mx-auto">
                        Building digital experiences that combine{' '}
                        <span className="text-purple-400">innovation</span>,{' '}
                        <span className="text-purple-400">performance</span>,
                        and <span className="text-purple-400">elegance</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-(--bg-card) border border-(--border-color) relative overflow-hidden group transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors"></div>

                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Profile Image */}
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-2xl bg-gray-800 overflow-hidden border-2 border-white/10">
                                        <img
                                            src="https://i.ibb.co/35HVshjJ/IMG-20251015-112325-11.jpg"
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 bg-(--bg-main) p-1.5 rounded-full border border-(--border-surface)">
                                        <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-[#0a0a0b] animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="flex-1 w-full">
                                    <h3 className="text-2xl font-bold text-(--text-primary) mb-1">
                                        Md. Rashedul Islam
                                    </h3>
                                    <p className="text-purple-400 mb-6">
                                        MERN Stack Developer
                                    </p>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                        {[
                                            {
                                                icon: Briefcase,
                                                label: 'Projects',
                                                value: '8+',
                                            },
                                            {
                                                icon: Clock,
                                                label: 'Years Exp',
                                                value: '1+',
                                            },
                                            {
                                                icon: CheckCircle,
                                                label: 'Success',
                                                value: '90%',
                                            },
                                            {
                                                icon: User,
                                                label: 'Clients',
                                                value: '0+',
                                            },
                                        ].map((stat, i) => (
                                            <div
                                                key={i}
                                                className="p-3 rounded-xl bg-(--bg-surface) border border-(--border-surface)">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <stat.icon
                                                        size={14}
                                                        className="text-purple-400"
                                                    />
                                                    <span className="text-lg font-bold text-(--text-primary)">
                                                        {stat.value}
                                                    </span>
                                                </div>
                                                <p className="text-[10px] text-(--text-secondary) uppercase">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tabs */}
                                    <div className="border-t border-(--border-surface) pt-6">
                                        <div className="flex gap-6 mb-4 border-b border-(--border-surface)">
                                            {tabs.map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() =>
                                                        setActiveTab(tab)
                                                    }
                                                    className={`pb-2 text-sm font-medium transition-colors relative ${
                                                        activeTab === tab
                                                            ? 'text-purple-400'
                                                            : 'text-gray-500 hover:text-gray-300'
                                                    }`}>
                                                    {tab}
                                                    {activeTab === tab && (
                                                        <motion.div
                                                            layoutId="activeTab"
                                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                                            {tabContent[activeTab]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-(--bg-card) border border-(--border-color) transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-8">
                                <Code className="text-purple-400" />
                                <h3 className="text-xl font-bold text-(--text-primary)">
                                    Tech Stack Overview
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: 'Frontend',
                                        icon: Code,
                                        items: [
                                            'React',
                                            'Next.js',
                                            'JavaScript',
                                            'HTML',
                                            'Tailwind',
                                        ],
                                    },
                                    {
                                        title: 'Backend',
                                        icon: Database,
                                        items: [
                                            'Node.js',
                                            'Express',
                                            'JavaScript',
                                            'Firebase',
                                        ],
                                    },
                                    {
                                        title: 'Cloud',
                                        icon: Cloud,
                                        items: ['Vercel', 'MongoDB'],
                                    },
                                ].map((stack, i) => (
                                    <div
                                        key={i}
                                        className="p-5 rounded-2xl bg-(--bg-surface) border border-(--border-surface) hover:border-purple-500/30 transition-colors group">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                                <stack.icon size={16} />
                                            </div>
                                            <span className="font-semibold text-(--text-primary)">
                                                {stack.title}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {stack.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-sm text-(--text-secondary)">
                                                    <span className="w-1 h-1 rounded-full bg-purple-500/50"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Lets Work Together */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-3xl bg-(--bg-card) border border-(--border-color) transition-colors duration-300">
                            <h3 className="text-xl font-bold text-(--text-primary) mb-6 text-center">
                                Lets Work Together
                            </h3>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {/* Start a Project */}
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById('contact')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                    }}
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-colors">
                                    <Mail size={20} className="mb-2" />
                                    <span className="text-xs font-medium">
                                        Start a <br /> Project
                                    </span>
                                </button>

                                {/* Download Resume */}
                                <a
                                    href="/Md_Rashedul_Islam_Resume.pdf"
                                    download="Md_Rashedul_Islam_Resume.pdf"
                                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-(--bg-surface) hover:bg-(--bg-card-hover) border border-(--border-surface) text-(--text-secondary) transition-colors">
                                    <FileText size={20} className="mb-2" />
                                    <span className="text-xs font-medium">
                                        Download <br /> Resume
                                    </span>
                                </a>
                            </div>

                            {/* Quick Connect */}
                            <div className="p-4 rounded-xl bg-(--bg-surface) border border-(--border-surface)">
                                <div className="text-xs text-center text-(--text-secondary) mb-3">
                                    Quick Connect
                                </div>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://github.com/rashedul25389"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/rashedul25389/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                        <Twitter size={18} />
                                    </a>
                                    <a
                                        href="mailto:mrashel.dev@gmail.com"
                                        className="text-(--text-secondary) hover:text-(--text-primary) transition-colors">
                                        <MessageSquare size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Why Choose Me */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-6 rounded-3xl bg-(--bg-card) border border-(--border-color) transition-colors duration-300">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-purple-400 text-lg">
                                    ☆
                                </span>
                                <h3 className="text-lg font-bold text-(--text-primary)">
                                    Why Choose Me
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'MERN-stack expertise',
                                    'Clean, maintainable code',
                                    'Performance optimization',
                                    'Agile methodology',
                                    'Timely delivery',
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-sm text-gray-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-6 rounded-3xl bg-linear-to-br from-green-500/10 to-transparent border border-green-500/20">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="font-semibold text-white">
                                        Available
                                    </span>
                                </div>
                                <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                                    For new projects
                                </span>
                            </div>
                            <div className="text-xs text-green-400/80 pl-5">
                                › Response time: Under 24 hours
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
