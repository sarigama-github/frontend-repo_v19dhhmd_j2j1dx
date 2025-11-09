import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-[#1D97C1]" />
            <span className="text-lg font-semibold">Soluease</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-md bg-[#1D97C1] px-4 py-2 text-sm font-medium text-white shadow-md shadow-cyan-900/30 transition hover:brightness-110 sm:inline-block"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
