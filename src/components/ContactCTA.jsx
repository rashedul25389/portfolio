import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Sparkles } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-20 relative bg-(--bg-main) transition-colors duration-300">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-(--bg-card) border border-(--border-color) p-12 text-center max-w-4xl mx-auto transition-colors duration-300">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                        <div className="absolute top-[-50%] left-[20%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-[-50%] right-[20%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-(--bg-card) border border-(--border-color) text-purple-400 text-sm font-medium">
                            <Sparkles size={14} />
                            <span>Get In Touch</span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-6">
                            Like what you see?
                        </h2>

                        {/* Subtitle */}
                        <p className="text-(--text-secondary) text-lg mb-10 max-w-2xl">
                            I'm always open to discussing new opportunities and
                            interesting projects.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="group relative flex items-center gap-2 px-8 py-4 bg-[#6938ef] text-white rounded-xl font-semibold hover:bg-[#5b2ad4] transition-all hover:shadow-[0_0_30px_rgba(105,56,239,0.4)] hover:-translate-y-1">
                                Contact Me
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>

                            <button className="flex items-center gap-2 px-8 py-4 bg-(--bg-card) border border-(--border-color) text-(--text-primary) rounded-xl font-medium hover:border-purple-500/50 transition-colors">
                                <Github size={20} />
                                View GitHub
                            </button>
                        </div>
                    </div>

                    {/* Stars/Particles Decoration */}
                    <div className="absolute top-10 right-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute top-20 left-20 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
