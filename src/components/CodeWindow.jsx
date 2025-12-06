import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu } from 'lucide-react';

const CodeWindow = () => {
    // The code snippets tokenized for coloring
    const tokens = [
        { text: 'import', color: 'text-[var(--code-purple)]' },
        { text: ' { ', color: 'text-[var(--text-primary)]' },
        { text: 'MERN-Stack-Developer', color: 'text-[var(--code-yellow)]' },
        { text: ' } ', color: 'text-[var(--text-primary)]' },
        { text: 'from', color: 'text-[var(--code-purple)]' },
        { text: " 'Md. Rashedul Islam'", color: 'text-[var(--code-green)]' },
        { text: ';\n\n', color: 'text-[var(--code-gray)]' },

        { text: 'const', color: 'text-[var(--code-purple)]' },
        { text: ' developer', color: 'text-[var(--code-blue)]' },
        { text: ' = ', color: 'text-[var(--text-primary)]' },
        { text: 'new', color: 'text-[var(--code-purple)]' },
        { text: ' MERN-Stack-Developer', color: 'text-[var(--code-yellow)]' },
        { text: '({\n', color: 'text-[var(--text-primary)]' },

        { text: '  name: ', color: 'text-[var(--code-red)]' },
        { text: "'Md. Rashedul Islam'", color: 'text-[var(--code-green)]' },
        { text: ',\n', color: 'text-[var(--code-gray)]' },

        { text: '  stack: ', color: 'text-[var(--code-red)]' },
        { text: '[', color: 'text-[var(--text-primary)]' },
        { text: "'React'", color: 'text-[var(--code-green)]' },
        { text: ', ', color: 'text-[var(--text-primary)]' },
        { text: "'Next.js'", color: 'text-[var(--code-green)]' },
        { text: ', ', color: 'text-[var(--text-primary)]' },
        { text: "'Node.js'", color: 'text-[var(--code-green)]' },
        { text: ',\n          ', color: 'text-[var(--text-primary)]' },
        { text: "'Javascript'", color: 'text-[var(--code-green)]' },
        { text: '],\n', color: 'text-[var(--text-primary)]' },

        { text: '  focus: ', color: 'text-[var(--code-red)]' },
        {
            text: "'Building Scalable web \n          applications'",
            color: 'text-[var(--code-green)]',
        },
        { text: ',\n', color: 'text-[var(--code-gray)]' },

        { text: '  status: ', color: 'text-[var(--code-red)]' },
        {
            text: "'Open to new opportunities'",
            color: 'text-[var(--code-green)]',
        },
        { text: '\n});\n\n', color: 'text-[var(--text-primary)]' },

        { text: 'await', color: 'text-[var(--code-purple)]' },
        { text: ' developer', color: 'text-[var(--code-blue)]' },
        { text: '.', color: 'text-[var(--text-primary)]' },
        { text: 'launchPortfolio', color: 'text-[var(--code-yellow)]' },
        { text: '();\n', color: 'text-[var(--text-primary)]' },

        {
            text: '// Featured: E-commerce, SaaS, Enterprise,\n',
            color: 'text-[var(--code-gray)]',
        },
        { text: '// Startup MVPs', color: 'text-[var(--code-gray)]' },
    ];

    // Calculate total length
    const totalLength = tokens.reduce(
        (acc, token) => acc + token.text.length,
        0
    );

    // Typing effect
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (charIndex < totalLength) {
            // Typing characters
            timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
            }, Math.random() * 30 + 30); // 30-60ms per char
        } else {
            // Finished typing, wait before resetting (Loop)
            timeout = setTimeout(() => {
                setCharIndex(0);
            }, 3000); // Wait 3 seconds
        }

        return () => clearTimeout(timeout);
    }, [charIndex, totalLength]);

    // Helper to render tokens up to charIndex
    const renderCode = () => {
        let currentCount = 0;
        const rendered = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const tokenLen = token.text.length;

            if (currentCount + tokenLen <= charIndex) {
                // Full token shown
                rendered.push(
                    <span key={i} className={token.color}>
                        {token.text}
                    </span>
                );
                currentCount += tokenLen;
            } else if (currentCount < charIndex) {
                // Partial token shown
                const sliceLen = charIndex - currentCount;
                rendered.push(
                    <span key={i} className={token.color}>
                        {token.text.slice(0, sliceLen)}
                    </span>
                );
                currentCount += sliceLen;
                break; // Stop after partial
            } else {
                // Not shown yet
                break;
            }
        }
        return rendered;
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Decorative "Solutions" Tag */}
            <div className="absolute z-10 px-3 py-1 text-xs font-medium text-amber-300 transform -translate-y-1/2 bg-gray-900 border rounded-md shadow-lg border-amber-500/30 left-6 -top-2">
                <span className="flex items-center gap-1">
                    <Terminal size={12} /> Solutions
                </span>
            </div>

            {/* Main Window */}
            <div className="relative overflow-hidden bg-(--bg-card) border border-(--border-color) rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-80 transition-colors duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-(--bg-card) border-b border-(--border-color)">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">
                        portfolio.js
                    </div>
                    <div className="w-8"></div> {/* Spacer for alignment */}
                </div>

                {/* Code Content */}
                <div className="p-6 pb-12 font-mono text-sm leading-relaxed overflow-x-auto min-h-[340px]">
                    <div className="text-gray-300 whitespace-pre">
                        {renderCode()}
                        <span className="border-r-2 border-purple-500 animate-pulse ml-0.5 h-4 inline-block align-middle">
                            &nbsp;
                        </span>
                    </div>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/90 border border-gray-700/50 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex flex-col items-center leading-none">
                        <span>Built with</span>
                        <span className="text-white">Modern Tech</span>
                    </span>
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4">
                    <button className="p-3 bg-purple-600 rounded-lg hover:bg-purple-700 text-white shadow-lg transition-colors">
                        <Code size={20} />
                    </button>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-[80px] opacity-10 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
};

export default CodeWindow;
