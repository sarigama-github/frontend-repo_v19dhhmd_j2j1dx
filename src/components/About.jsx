import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Building with clarity, scaling with confidence.
            </h2>
            <p className="mt-4 text-white/70">
              Soluease is a software house focused on delivering business impact. We combine strategy, design, and engineering to build products that are secure, performant, and maintainable.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1D97C1]" />
                Strategic discovery and technical architecture
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1D97C1]" />
                UI/UX that elevates your brand and boosts conversions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#1D97C1]" />
                Agile delivery with measurable outcomes
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-[#1D97C1]">50+</p>
                <p className="mt-1 text-xs text-white/70">Projects Delivered</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-[#1D97C1]">20+</p>
                <p className="mt-1 text-xs text-white/70">Happy Clients</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-[#1D97C1]">8 yrs</p>
                <p className="mt-1 text-xs text-white/70">Team Experience</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-4xl font-extrabold text-[#1D97C1]">24/7</p>
                <p className="mt-1 text-xs text-white/70">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
