import React from 'react';

const Hero2 = () => {
    return (
        <div className="w-full bg-white text-black font-sans min-h-screen py-8">
            {/* Navigation */}
        
            {/* Hero Content */}
            <section className="max-w-4xl mx-auto text-center px-6 mb-32">
                <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 italic leading-tight">
                    We design digital products.
                </h1>

                {/* Zigzag Divider */}
                <div className="flex justify-center mb-10">
                    <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 6L5 2L10 6L15 2L20 6L25 2L30 6L35 2L40 6" stroke="#999" strokeWidth="1.5" />
                    </svg>
                </div>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                    Your brand, your product, your big idea... it is worth pursuing. We believe in
                    creating opportunities for elite brands, intrepid startups, and passionate
                    innovators to change the world.
                </p>
            </section>

            {/* Services Section */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {/* Idea */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700">Idea</span>
                    </div>

                    {/* Design */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700">Design</span>
                    </div>

                    {/* Development */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 2.46-2.06H12" />
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0-2.46-2.06H12" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700">Development</span>
                    </div>

                    {/* Success */}
                    <div className="flex flex-col items-center">
                        <div className="mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M3 3v18h18" />
                                <path d="m19 9-5 5-4-4-3 3" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-700">Success</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero2;
