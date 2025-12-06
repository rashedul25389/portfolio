import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: 'Toys Center',
        category: 'Toys Management',
        image: 'https://i.ibb.co.com/H39R089/Screenshot-2025-12-06-052315.png',
        description:
            'A modern toy marketplace where users can securely buy and sell toys through an easy-to-use and responsive interface.',
        features: [
            'User Authentication (Register & Login)',
            'Add & Manage Toy Listings',
            'Mobile-Friendly & Responsive and Secure Data Handling',
        ],
        techStack: [' React.js', 'TailwindCSS', 'Firebase', 'Node.js'],
        links: {
            live: 'https://toys-center-c3436.web.app/',
            code: 'https://github.com/rashedul25389/toys-center',
        },
        isLive: true,
    },
    {
        id: 2,
        title: 'Bill Mate',
        category: 'Utility Management',
        image: 'https://i.ibb.co.com/pNR2mFb/Screenshot-2025-12-06-052234.png',
        description:
            'A full-stack Utility Bill Management System that enables users to register, log in, and manage Electricity, Gas, Water, and Internet bills through a secure and responsive dashboard.',
        features: [
            'User Authentication (Register & Login)',
            'Add, View & Manage Bills',
            'Fully Responsive UI and Secure Data Handling',
        ],
        techStack: [
            'React',
            'Node.js',
            'Stripe',
            'Firebase',
            'TailwindCSS',
            'Express.js',
        ],
        links: {
            live: 'https://toys-center-c3436.web.app',
            code: 'https://github.com/rashedul25389/a-10-bill-mate-client.git',
        },
        isLive: true,
    },
    {
        id: 3,
        title: 'Hero Apps',
        category: 'App management',
        image: 'https://i.ibb.co.com/60JmX3SG/Screenshot-2025-12-06-052404.png',
        description:
            'This project is a high-performance, responsive web application designed as a template for a modern single-page application (SPA). It provides a Web Application for handling real-time data, user authentication, and complex logic, ensuring a smooth and dynamic user experience across all devices',
        features: ['Responsive UI', 'Easy app browsing', 'Fast performance'],
        techStack: ['React', 'Node.js', 'Vite', 'TailwindCSS', 'JavaScript'],
        links: {
            live: 'https://web-hero-apps.netlify.app/',
            code: 'https://github.com/rashedul25389/hero-app',
        },
        isLive: true,
    },
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = [
        'All',
        'Toys Management',
        'Utility Management',
        'App management',
    ];

    const filteredProjects =
        activeCategory === 'All'
            ? projectsData
            : projectsData.filter(
                (project) => project.category === activeCategory
            );

    return (
        <section
            id="projects"
            className="py-24 relative bg-(--bg-main) transition-colors duration-300">
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/10 rounded-full border border-purple-500/20">
                        My Projects
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
                        Project <br />{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                            Portfolio
                        </span>
                    </h2>
                    <p className="text-(--text-secondary)/60 max-w-2xl mx-auto">
                        A collection of projects I've built to showcase my
                        skills in full-stack development and modern web
                        technologies.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                                activeCategory === category
                                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-(--bg-surface) border-(--border-surface) text-(--text-secondary) hover:bg-(--bg-card-hover) hover:text-(--text-primary)'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-2xl bg-(--bg-card) border border-(--border-color) overflow-hidden hover:border-purple-500/50 transition-colors duration-300 flex flex-col h-full">
        {/* Image Area */}
        <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent z-10" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                <a
                    href={project.links.live}
                    target="_blank"
                    className="p-3 bg-(--bg-surface) rounded-full hover:bg-purple-600 text-(--text-primary) hover:text-white transition-all hover:scale-110 pointer-events-none group-hover:pointer-events-auto">
                    <ExternalLink size={20} />
                </a>
                <a
                    href={project.links.code}
                    target="_blank"
                    className="p-3 bg-(--bg-surface) rounded-full hover:bg-(--bg-card-hover) text-(--text-primary) transition-all hover:scale-110 pointer-events-none group-hover:pointer-events-auto">
                    <Github size={20} />
                </a>
            </div>

            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />

            {/* Top Tags */}
            <div className="absolute top-3 left-3 z-20 px-3 py-1 text-[10px] font-medium text-white bg-gray-900/80 backdrop-blur-md rounded-full border border-white/10">
                {project.category}
            </div>

            {project.isLive && (
                <div className="absolute top-3 right-3 z-20 px-2 py-1 text-[10px] font-bold text-green-400 bg-green-950/30 border border-green-500/20 rounded-full flex items-center gap-1 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                </div>
            )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-(--text-primary) group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="text-amber-400 text-[10px] px-2 py-1 rounded border border-amber-500/20 bg-amber-500/5 flex items-center gap-1">
                        ★ Featured
                    </div>
                </div>
                <p className="text-sm text-(--text-secondary) leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                    {project.features.map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-400/80">
                            <span className="w-1 h-1 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags & Actions */}
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-[10px] text-(--text-secondary) bg-(--bg-surface) border border-(--border-surface) rounded-md hover:bg-(--bg-card-hover) transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-(--border-surface)">
                    {/* Live Demo */}
                    <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-[#6938ef] rounded-lg hover:bg-[#5b2ad4] transition-all hover:shadow-[0_0_20px_rgba(105,56,239,0.3)]active:scale-95">
                        <ExternalLink size={16} />
                        Live Demo
                    </a>

                    {/* Code */}
                    <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-(--text-primary) rounded-lg hover:bg-(--bg-card-hover) transition-colors active:scale-95">
                        <Github size={18} />
                        Code
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

export default Projects;
