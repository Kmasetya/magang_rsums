import React, { useState } from 'react';

const Fasilitas = () => {
    const [activeTab, setActiveTab] = useState('Fasilitas Umum');

    const categories = [
        "Rawat Jalan",
        "Rawat Inap",
        "Layanan Unggulan",
        "Fasilitas Umum",
        "Fasilitas Penunjang"
    ];

    const facilityData = {
        "Fasilitas Umum": [
            { title: "Masjid", image: "https://images.unsplash.com/photo-1579619525126-5b4324e9333d?q=80&w=2069&auto=format&fit=crop" },
            { title: "Kantin", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop" },
            { title: "Minimarket", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop" },
            { title: "Parkir", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop" },
            { title: "Minimarket", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop" },
            { title: "Parkir", image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2070&auto=format&fit=crop" },
        ],
        "Rawat Jalan": [
            { title: "Poliklinik Umum", image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop" },
            { title: "Poliklinik Gigi", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" },
        ],
        "Rawat Inap": [
            { title: "Ruang VIP", image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop" },
            { title: "Ruang Kelas 1", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" },
        ],
        "Layanan Unggulan": [
            { title: "Hemodialisa", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" },
            { title: "Fisioterapi", image: "https://images.unsplash.com/photo-1583912267550-d63ecd4517af?q=80&w=2089&auto=format&fit=crop" },
        ],
        "Fasilitas Penunjang": [
            { title: "Laboratorium", image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2079&auto=format&fit=crop" },
            { title: "Radiologi", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" },
        ]
    };

    return (
        <div className="w-full bg-[#fcfdfc] font-sans pb-20">
            <div className="max-w-7xl mx-auto px-0 md:px-0 pt-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1A1A]">Fasilitas RS UMS</h1>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 bg-gray-200/50 p-2 rounded-full w-fit">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === category
                                ? 'bg-[#6EC207] text-white shadow-md'
                                : 'bg-transparent text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {facilityData[activeTab]?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 group cursor-pointer">
                            <div className="bg-gray-200 overflow-hidden aspect-video rounded-sm relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#6EC207] transition-colors">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fasilitas;
