import React, { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';

function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Check system preference or localStorage could be added here
        document.documentElement.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <Layout>
            <div className="max-w-6xl mx-auto">
                <Header />
                <Hero />
                <About />
                <Skills currentTheme={theme} />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
                <FloatingDock toggleTheme={toggleTheme} currentTheme={theme} />
            </div>
        </Layout>
    );
}

export default App;
