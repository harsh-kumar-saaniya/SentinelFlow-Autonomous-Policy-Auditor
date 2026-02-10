import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans text-black overflow-hidden flex flex-col">
      {/* 1. Navigation Bar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-16 lg:px-24">
        <div className="flex items-center gap-2">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 bg-[#444] rounded-full flex items-center justify-center">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-500 fill-current">
                  <path d="M5 16L3 5L8.5 10L12 3L15.5 10L21 5L19 16H5Z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-[6px] border-black flex items-center justify-center mr-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight">Company Logo</span>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[15px] font-semibold">
          <a href="#" className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Portfolio</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a>
          <button className="ml-4 px-6 py-2 bg-black text-white rounded-md text-xs font-bold hover:bg-gray-800 transition-all">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger - simplified for now) */}
        <div className="md:hidden">
          <button className="p-2">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </nav>

      {/* 2. Main Hero Content */}
      <main className="relative flex-grow flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0">

        {/* Left Side Text Content */}
        <div className="z-20 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] mb-4 tracking-tighter">
            Landing Page
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-black">
            Abstract Background Website
          </h2>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg max-w-lg mb-12 font-medium leading-relaxed">
            Lorem ipsum dolor sit amet, ex duo vide nusquam ullamcorper eam id alienum consetetur.
            Pri facer timeam cu. Vix summo ad, eum no labores efficiendi.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button className="px-6 py-2 md:px-8 md:py-3 bg-black text-white text-base md:text-lg font-bold rounded-sm hover:scale-105 transition-transform">
              See More
            </button>
            <button className="px-6 py-2 md:px-8 md:py-3 bg-transparent border-[2px] border-black text-black text-base md:text-lg font-bold rounded-sm hover:bg-gray-50 transition-colors">
              Try now
            </button>
          </div>
        </div>

        {/* 3. Abstract ribbon flow - adjusted to match image curve more closely */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-10 overflow-hidden">
          <svg
            className="absolute top-0 right-0 h-full w-[120%] -translate-x-[-10%]"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              {/* Ribbon lines with a complex S-curve */}
              {[...Array(60)].map((_, i) => (
                <path
                  key={i}
                  d={`M 250 -20 
                      C ${350 + i * 2} ${100 + i}, 
                        ${850 - i * 3} ${300 + i * 2}, 
                        ${550 + i * 1.5} 600
                      S ${950 - i * 0.5} ${850 + i}, 
                        ${750 + i * 2} 1020`}
                  stroke="black"
                  strokeWidth="0.5"
                  strokeOpacity={0.05 + (i * 0.008)}
                />
              ))}

              {/* Distinct outer bold line */}
              <path
                d="M 250 -20 C 350 100, 850 300, 550 600 S 950 850, 750 1020"
                stroke="black"
                strokeWidth="2"
                strokeOpacity="0.8"
              />
              <path
                d="M 255 -20 C 355 102, 855 302, 555 602 S 955 852, 755 1022"
                stroke="black"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
            </g>
          </svg>
        </div>

        {/* 4. Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer hover:translate-y-1 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
