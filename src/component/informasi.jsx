import React, { useState } from 'react';

const Informasi = () => {
    const [activeTab, setActiveTab] = useState('Latest');

    return (
        <div className="w-full bg-[#f9f9f9] font-sans pb-20 pt-8">
            <div className="max-w-7xl mx-auto px-4 md:px-16">

                {/* Header */}
                <h1 className="text-4xl font-bold mb-6 text-[#1A1A1A]">Informasi</h1>

                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('Latest')}
                        className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === 'Latest' ? 'bg-[#6EC207] text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                    >
                        Latest
                    </button>
                    <button
                        onClick={() => setActiveTab('Most Popular')}
                        className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeTab === 'Most Popular' ? 'bg-[#6EC207] text-white shadow-md' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                    >
                        Most Popular
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content (2/3) */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Top Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Featured Article */}
                            <div className="space-y-4 group cursor-pointer">
                                <div className="bg-gray-200 rounded-lg overflow-hidden h-64 relative">
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                                    {/* Placeholder for real image */}
                                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" alt="Featured" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div>
                                    <span className="text-[#FF5722] font-bold text-sm uppercase tracking-wider mb-2 block">Exclusive</span>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#6EC207] transition-colors">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellusto.
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellus. Nulla vel odio augue. Cras tincidunt, ligula vel auctor lobortis, sapien sem euismod magna, pulvinar dictum lacus neque et turpis.
                                    </p>
                                    <div className="flex items-center text-xs font-bold text-gray-800">
                                        <span>By Muhammad Raafky</span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span className="text-gray-500 font-medium">Jan 25, 2024</span>
                                    </div>
                                </div>
                            </div>

                            {/* Side Articles (Vertical Stack) */}
                            <div className="space-y-8">
                                <div className="space-y-3 cursor-pointer group">
                                    <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
                                        <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2032&auto=format&fit=crop" alt="Article 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <span className="text-[#6EC207] font-bold text-xs uppercase tracking-wider">Sunday Insights</span>
                                    <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight group-hover:text-[#6EC207] transition-colors">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellus.
                                    </h3>
                                    <div className="flex items-center text-xs font-bold text-gray-800">
                                        <span>By Muhammad Raafky</span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span className="text-gray-500 font-medium">Jan 20, 2024</span>
                                    </div>
                                </div>

                                <div className="space-y-3 cursor-pointer group">
                                    <div className="bg-gray-200 rounded-lg overflow-hidden h-32">
                                        <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop" alt="Article 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <span className="text-[#6EC207] font-bold text-xs uppercase tracking-wider">Sunday Insights</span>
                                    <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight group-hover:text-[#6EC207] transition-colors">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellus.
                                    </h3>
                                    <div className="flex items-center text-xs font-bold text-gray-800">
                                        <span>By Muhammad Raafky</span>
                                        <span className="mx-2 text-gray-400">•</span>
                                        <span className="text-gray-500 font-medium">Jan 18, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200"></div>

                        {/* Bottom List Articles */}
                        <div className="space-y-8">
                            {[1, 2].map((item) => (
                                <div key={item} className="flex flex-col md:flex-row gap-6 group cursor-pointer">
                                    <div className="md:w-1/3 bg-gray-200 rounded-lg overflow-hidden h-48 md:h-auto">
                                        <img src={`https://images.unsplash.com/photo-${item === 1 ? '1631217868264-e5b9099e583f' : '1584036561566-b45238b2e120'}?q=80&w=2070&auto=format&fit=crop`} alt="List Article" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="md:w-2/3 flex flex-col justify-center">
                                        <span className="text-[#FF5722] font-bold text-xs uppercase tracking-wider mb-2">Sunday Insights</span>
                                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#6EC207] transition-colors">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellus.
                                        </h3>
                                        <div className="flex items-center text-xs font-bold text-gray-800">
                                            <span>By Muhammad Raafky</span>
                                            <span className="mx-2 text-gray-400">•</span>
                                            <span className="text-gray-500 font-medium">Jan 25, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Sidebar (1/3) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Recommended</h3>
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <div key={item} className="group cursor-pointer border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                        <h4 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#6EC207] transition-colors leading-snug">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tellus tellus.
                                        </h4>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span className="font-bold text-gray-800">By Muhammad Raafky</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informasi;
