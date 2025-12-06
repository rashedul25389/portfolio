import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonialsData = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Product Director at TechCorp',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
        quote: "Working with Sahil was seamless from day one. Not only did they deliver a full-stack solution ahead of schedule, but they also communicated clearly throughout the project. It's rare to find a developer who understands both the tech and the business side so well.",
        rating: 5,
    },
    {
        id: 2,
        name: 'Maria Chen',
        role: 'Senior UX Designer at DesignHub',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
        quote: "I've reviewed hundreds of portfolios, and his work is truly exceptional. The way the animations guide attention while maintaining performance is masterful. The gradient elements add depth without overwhelming.",
        rating: 5,
    },
    {
        id: 3,
        name: 'David Wilson',
        role: 'CTO at Startup Ventures',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
        quote: "From wireframes to deployment, Sahil owned the entire stack with confidence and creativity. The final product is fast, reliable, and looks incredible. I wouldn't hesitate to work with them again.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="py-24 relative bg-(--bg-main) overflow-hidden transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[20%] right-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-(--bg-card) border border-(--border-color) text-purple-400 text-xs font-medium tracking-wider uppercase">
                        <span className="text-purple-400">✧</span> Client
                        Feedback <span className="text-purple-400">✧</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-primary) mb-4">
                        What People Say
                    </h2>
                    <p className="text-(--text-secondary)">
                        What Clients Will Say About Working with Me.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group p-8 rounded-3xl bg-(--bg-card) border border-(--border-color) hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.05) flex flex-col h-full relative">
        {/* Quote Icon */}
        <div className="mb-6">
            <Quote
                className="text-purple-500/30 w-10 h-10 rotate-180"
                strokeWidth={1}
                fill="currentColor"
            />
        </div>

        {/* Text */}
        <p className="text-(--text-secondary) leading-relaxed mb-8 flex-1 italic relative z-10">
            "{testimonial.quote}"
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
            {[
                ...Array(testimonial.rating).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className="text-amber-400 fill-amber-400"
                    />
                )),
            ]}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-4 mt-auto">
            <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-(--border-surface) group-hover:border-purple-500/50 transition-colors">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Online Dot */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0a0b] rounded-full"></div>
            </div>

            <div>
                <h4 className="text-(--text-primary) font-semibold text-sm group-hover:text-purple-400 transition-colors">
                    {testimonial.name}
                </h4>
                <p className="text-xs text-(--text-secondary)">
                    {testimonial.role}
                </p>
            </div>
        </div>

        {/* Gradient Glow Effect on Hover */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
    </motion.div>
);

export default Testimonials;
