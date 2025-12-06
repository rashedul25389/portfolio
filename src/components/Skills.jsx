import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ currentTheme }) => {
    const [activeCategory, setActiveCategory] = useState('All Skills');
    const categories = ['All Skills', 'Frontend', 'Backend', 'Tools'];

    const getIconUrl = (base, color) => {
        // If specific color is 'white' and theme is light, change to '000000' (black)
        if (color === 'white' && currentTheme === 'light') {
            return `https://cdn.simpleicons.org/${base}/000000`;
        }
        return `https://cdn.simpleicons.org/${base}/${color}`;
    };

    const skillsData = [
        {
            name: 'React',
            category: 'Frontend',
            icon: getIconUrl('react', '61DAFB'),
        },
        {
            name: 'Next.js',
            category: 'Frontend',
            icon: getIconUrl('nextdotjs', 'white'),
        },
        {
            name: 'JavaScript',
            category: 'Frontend',
            icon: getIconUrl('javascript', 'F7DF1E'),
        },
        {
            name: 'TypeScript',
            category: 'Frontend',
            icon: getIconUrl('typescript', '3178C6'),
        },
        {
            name: 'Tailwind',
            category: 'Frontend',
            icon: getIconUrl('tailwindcss', '06B6D4'),
        },
        {
            name: 'HTML5',
            category: 'Frontend',
            icon: getIconUrl('html5', 'E34F26'),
        },
        {
            name: 'CSS3',
            category: 'Frontend',
            icon: getIconUrl('css3', '1572B6'),
        },
        {
            name: 'Framer',
            category: 'Frontend',
            icon: getIconUrl('framer', '0055FF'),
        },

        {
            name: 'Node.js',
            category: 'Backend',
            icon: getIconUrl('nodedotjs', '339933'),
        },
        {
            name: 'Express',
            category: 'Backend',
            icon: getIconUrl('express', 'white'),
        },
        {
            name: 'MongoDB',
            category: 'Backend',
            icon: getIconUrl('mongodb', '47A248'),
        },
        {
            name: 'Firebase',
            category: 'Backend',
            icon: getIconUrl('firebase', 'FFCA28'),
        },
        {
            name: 'PostgreSQL',
            category: 'Backend',
            icon: getIconUrl('postgresql', '4169E1'),
        },

        { name: 'Git', category: 'Tools', icon: getIconUrl('git', 'F05032') },
        {
            name: 'GitHub',
            category: 'Tools',
            icon: getIconUrl('github', 'white'),
        },
        {
            name: 'VS Code',
            category: 'Tools',
            icon: getIconUrl('visualstudiocode', '007ACC'),
        },
        {
            name: 'Postman',
            category: 'Tools',
            icon: getIconUrl('postman', 'FF6C37'),
        },
        {
            name: 'Vercel',
            category: 'Tools',
            icon: getIconUrl('vercel', 'white'),
        },
        {
            name: 'Figma',
            category: 'Tools',
            icon: getIconUrl('figma', 'F24E1E'),
        },
    ];

    const filteredSkills =
        activeCategory === 'All Skills'
            ? skillsData
            : skillsData.filter((skill) => skill.category === activeCategory);

    // Duplicate for infinite marquee effect when showing all
    const marqueeSkills = [...skillsData, ...skillsData];

    return (
        <section
            id="skills"
            className="py-24 relative overflow-hidden bg-(--bg-main) transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
                        My Skills
                    </h2>
                    <p className="text-(--text-secondary)">
                        Technologies I've mastered and my proficiency levels
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4) scale-105'
                                    : 'bg-(--bg-card) text-(--text-secondary) hover:text-(--text-primary) border border-(--border-color)'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Display */}
                <div className="min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {activeCategory === 'All Skills' ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative w-full overflow-hidden mask-linear-fade">
                                {/* Row 1: Marquee Left */}
                                <div className="flex gap-8 mb-12 w-max animate-marquee">
                                    {marqueeSkills
                                        .slice(0, 15)
                                        .map((skill, index) => (
                                            <SkillCard
                                                key={`row1-${index}`}
                                                skill={skill}
                                            />
                                        ))}
                                </div>

                                {/* Row 2: Marquee Right (slower/reverse if needed, for now just offset) */}
                                <div className="flex gap-8 w-max animate-marquee-reverse ml-[-100px]">
                                    {marqueeSkills
                                        .slice(8, 24)
                                        .map((skill, index) => (
                                            <SkillCard
                                                key={`row2-${index}`}
                                                skill={skill}
                                            />
                                        ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                                {filteredSkills.map((skill, index) => (
                                    <SkillCard key={index} skill={skill} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill }) => (
    <div className="group flex flex-col items-center justify-center p-6 w-32 h-32 rounded-2xl bg-(--bg-card) border border-(--border-color) hover:border-purple-500/50 transition-all duration-300 relative cursor-pointer">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
        />
        <span className="text-xs font-medium text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
            {skill.name}
        </span>
    </div>
);

export default Skills;
