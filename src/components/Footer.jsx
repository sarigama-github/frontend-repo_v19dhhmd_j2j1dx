import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">Soluease</p>
            <p className="text-sm text-white/60">Crafting dependable software, from strategy to scale.</p>
          </div>
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Soluease. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
