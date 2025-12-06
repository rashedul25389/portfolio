import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
    Instagram,
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically handle form submission (e.g., EmailJS, API)
        alert('Message sent! (Simulation)');
        setFormData({ name: '', email: '', message: '' });
    };

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Instagram, href: '#', label: 'Instagram' },
    ];

    return (
        <section
            className="py-24 relative bg-(--bg-main) transition-colors duration-300"
            id="contact">
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/10 rounded-full border border-purple-500/20">
                        Let's Connect
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
                        Get In{' '}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                            Touch
                        </span>
                    </h2>
                    <p className="text-(--text-secondary) max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? My inbox
                        is always open.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-(--bg-card) border border-(--border-color) rounded-3xl p-8 md:p-10 flex flex-col h-full relative overflow-hidden transition-colors duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
                        <h3 className="text-2xl font-bold text-(--text-primary) mb-2 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                            Contact Details
                        </h3>

                        <div className="space-y-8 mt-12 mb-12">
                            {/* Email */}
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-(--text-secondary) mb-1">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:zakirhasanhriday@gmail.com"
                                        className="text-lg font-medium text-(--text-primary) hover:text-purple-400 transition-colors">
                                        rashedul25389@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-(--text-secondary) mb-1">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+8801613577742"
                                        className="text-lg font-medium text-(--text-primary) hover:text-purple-400 transition-colors">
                                        +88 01719033900
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-(--text-secondary) mb-1">
                                        Location
                                    </p>
                                    <p className="text-lg font-medium text-(--text-primary)">
                                        Kushtia, Khulna, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-auto">
                            <p className="text-sm text-(--text-secondary) mb-4">
                                Find me on
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="p-3 rounded-lg bg-(--bg-surface) border border-(--border-surface) text-(--text-secondary) hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                                        aria-label={social.label}>
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-(--bg-card) border border-(--border-color) rounded-3xl p-8 md:p-10 relative transition-colors duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
                        <h3 className="text-2xl font-bold text-(--text-primary) mb-8 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-(--text-secondary) ml-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-xl bg-(--bg-card) border border-(--border-color) text-(--text-primary) placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-(--bg-card-hover) transition-all"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-(--text-secondary) ml-1">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-xl bg-(--bg-card) border border-(--border-color) text-(--text-primary) placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-(--bg-card-hover) transition-all"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-(--text-secondary) ml-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hey, I'd love to collaborate on..."
                                    rows="4"
                                    className="w-full px-5 py-4 rounded-xl bg-(--bg-card) border border-(--border-color) text-(--text-primary) placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-(--bg-card-hover) transition-all resize-none"
                                    required></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Send Message
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
