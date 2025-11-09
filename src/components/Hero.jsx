import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 md:px-10 lg:px-12">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur-sm">
          Soluease • Software House
        </span>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          We turn complex ideas into
          <span className="block text-[#1D97C1]">elegant digital products.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Soluease is a technology partner for forward-thinking companies. We design, build, and scale web and mobile solutions with reliability and speed.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#1D97C1] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#1D97C1]/60"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Explore services
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center gap-6 opacity-80">
          <img src="https://dummyimage.com/100x28/ffffff/000000&text=AWS" alt="AWS" className="h-6 w-auto" />
          <img src="https://dummyimage.com/120x28/ffffff/000000&text=GCP" alt="GCP" className="h-6 w-auto" />
          <img src="https://dummyimage.com/110x28/ffffff/000000&text=Azure" alt="Azure" className="h-6 w-auto" />
          <img src="https://dummyimage.com/140x28/ffffff/000000&text=MongoDB" alt="MongoDB" className="h-6 w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
