import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    LayoutDashboard,
    UserCircle,
    Code2,
    FolderKanban,
    MessageCircleHeart,
    Send,
    Newspaper,
    Sun,
    Moon,
} from 'lucide-react';

/* ----------------------------------
   DOCK ITEMS
----------------------------------- */
const items = [
    { label: 'Home', icon: LayoutDashboard, id: 'hero' },
    { label: 'About', icon: UserCircle, id: 'about' },
    { label: 'Skills', icon: Code2, id: 'skills' },
    { label: 'Projects', icon: FolderKanban, id: 'projects' },
    { label: 'Testimonials', icon: MessageCircleHeart, id: 'testimonials' },
    { label: 'Contact', icon: Send, id: 'contact' },
    // { label: 'Blog', icon: Newspaper, id: 'blog' },
    { label: 'Theme', id: 'theme' },
];

/* ----------------------------------
   MAIN COMPONENT
----------------------------------- */
const FloatingDock = ({ toggleTheme, currentTheme }) => {
    const mouseX = useMotionValue(Infinity);

    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    /* -------- Scroll Detect -------- */
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scroll Down
                setVisible(true);
            } else {
                // Scroll Up
                setVisible(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: visible ? 0 : 120,
                opacity: visible ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end h-16 gap-4 px-4 pb-3 mx-auto border rounded-2xl
        bg-(--bg-surface) border-(--border-surface) backdrop-blur-lg">
                {items.map((item) => (
                    <DockIcon
                        key={item.label}
                        mouseX={mouseX}
                        {...item}
                        toggleTheme={toggleTheme}
                        currentTheme={currentTheme}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

/* ----------------------------------
   SINGLE ICON
----------------------------------- */
function DockIcon({ mouseX, icon, label, id, toggleTheme, currentTheme }) {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (x) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return Infinity;
        return x - bounds.left - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const Icon =
        label === 'Theme' ? (currentTheme === 'light' ? Moon : Sun) : icon;

    const handleClick = () => {
        if (id === 'theme') {
            toggleTheme();
            return;
        }
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            onClick={handleClick}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center aspect-square rounded-full
      bg-(--bg-card) border border-(--border-surface) cursor-pointer group">
            <Icon className="w-5 h-5 text-(--text-secondary) group-hover:text-(--text-primary)" />

            {/* Tooltip */}
            <span
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs
      bg-(--bg-card) border border-(--border-surface) rounded opacity-0
      group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </motion.div>
    );
}

export default FloatingDock;
