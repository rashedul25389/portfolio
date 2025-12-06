import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, User, Code, Folder, MessageSquare, Mail, FileText, Moon, Sun } from 'lucide-react';

const items = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: Code, label: 'Skills' },
  { icon: Folder, label: 'Projects' },
  { icon: MessageSquare, label: 'Testimonials' },
  { icon: Mail, label: 'Contact' },
  { icon: FileText, label: 'Blog' },
  { icon: Moon, label: 'Theme' },
];

const FloatingDock = ({ toggleTheme, currentTheme }) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-4 px-4 pb-3 mx-auto border rounded-2xl bg-(--bg-surface) border-(--border-surface) backdrop-blur-lg"
      >
        {items.map((item, i) => (
          <IconContainer 
            mouseX={mouseX} 
            key={i} 
            {...item}
            icon={item.label === 'Theme' ? (currentTheme === 'light' ? Sun : Moon) : item.icon}
            toggleTheme={toggleTheme}
            currentTheme={currentTheme}
          />
        ))}
      </motion.div>
    </div>
  );
};

function IconContainer({ mouseX, icon: Icon, label, toggleTheme, currentTheme }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const handleClick = () => {
    if (label === 'Theme') {
        toggleTheme();
        return;
    }
    const sectionId = label.toLowerCase();
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={handleClick}
      className="relative flex items-center justify-center bg-(--bg-card) border rounded-full aspect-square border-(--border-surface) group cursor-pointer"
    >
      <Icon className="w-5 h-5 text-(--text-secondary) transition-colors group-hover:text-(--text-primary)" />
      {/* Tooltip */}
      <span className="absolute px-2 py-1 text-xs text-(--text-primary) transition-opacity -translate-x-1/2 bg-(--bg-card) border border-(--border-surface) rounded opacity-0 -top-10 left-1/2 group-hover:opacity-100 whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </motion.div>
  );
}

export default FloatingDock;
