import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-(--bg-main) transition-colors duration-300 overflow-hidden text-(--text-primary) selection:bg-purple-500/30">
        {/* Background Gradients/Effects */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-(--bg-main) bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 right-0 z-[-1] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 z-[-1] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] opacity-20 animate-pulse delay-1000"></div>
        
        {/* Particle/Star effect (simplified with CSS for now) */}
        <div className="fixed inset-0 z-[-2] opacity-20" style={{
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0,0,0,0))',
            backgroundSize: '200px 200px'
        }}></div>

      <main className="container mx-auto px-4 z-10 relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
