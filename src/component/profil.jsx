import React from 'react';

const Profil = () => {
    return (
        <div className="w-full bg-white font-sans">
            {/* Hero Section */}
            <section className="bg-[#F9FBF8] pt-16 pb-16 px-4 md:px-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-5xl md:text-[75px] font-bold mb-6 leading-[1.1]" style={{ fontFamily: "'Inria Sans', sans-serif" }}>

                            {/* Our story */}
                            <span className="text-[#71CF00] drop-shadow-sm">
                                Our Story,
                            </span>{" "}

                            {/* Vision gradient */}
                            <span className="
    bg-gradient-to-r from-[#71CF00] to-white
    bg-clip-text text-transparent
    drop-shadow-sm
  ">
                                Vision
                            </span>

                            <br />

                            {/* and values */}
                            <span className="text-white drop-shadow-sm">
                                and values
                            </span>

                        </h1>

                        <p className="text-gray-400 mb-8 max-w-md">
                            Explore a variety of tailored services aimed at enhancing your overall health and wellness.
                        </p>


                        <div className="flex gap-4 mb-12">
                            <button className="bg-[#6EC207] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#5dad06] transition-transform hover:scale-105">
                                Learn More
                            </button>
                            <button className="border-2 border-[#6EC207] text-[#6EC207] px-8 py-3 rounded-full font-bold hover:bg-[#6EC207] hover:text-white transition-colors">
                                Contact Us
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-[#6EC207]">13+</h3>
                                <p className="text-gray-500 text-sm">Years of experience</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[#6EC207]">3,6M+</h3>
                                <p className="text-gray-500 text-sm">Trusted by patients</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-[#6EC207]">85+</h3>
                                <p className="text-gray-500 text-sm">Professional Doctors</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="rounded-[40px] overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                                alt="Medical Team"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Falsafah Section */}
            <section className="px-4 md:px-0 pb-16 max-w-7xl mx-auto">
                <div className="relative rounded-[40px] overflow-hidden h-[300px] md:h-[400px] group">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                        alt="Hospital Building"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <div className="bg-white/90 px-8 py-2 rounded-full mb-6">
                            <h2 className="text-[#6EC207] text-xl md:text-2xl font-bold uppercase tracking-widest">Falsafah</h2>
                        </div>
                        <p className="text-white text-lg md:text-2xl font-medium max-w-4xl leading-relaxed">
                            Rumah Sakit PKU Muhammadiyah Surakarta adalah suatu amal usaha Muhammadiyah sebagai perwujudan dari iman dan amal sholeh kepada Allah SWT serta menjadikannya sebagai sarana ibadah.
                        </p>
                    </div>
                </div>
            </section>

            {/* Visi Section */}
            <section className="px-4 md:px-0 py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-[40px] overflow-hidden shadow-lg h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
                            alt="Doctor Checking Patient"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <div className="bg-[#E8F5E9] text-[#6EC207] px-6 py-2 rounded-full w-fit mb-6 font-bold uppercase text-sm tracking-widest">
                            Visi
                        </div>
                        <h2 className="text-[50px] font-bold text-[#6EC207] mb-6 leading-tight" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                            Memberikan pelayanan terbaik demi <br />kesehatan Anda.
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Kami berkomitmen untuk memberikan pelayanan terbaik dengan mendampingi setiap langkah perjalanan kesehatan Anda melalui layanan holistik dan dukungan profesional yang berkelanjutan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Misi Section */}
            <section className="bg-[#F9FBF8] px-4 md:px-0 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-[#E8F5E9] text-[#6EC207] px-6 py-2 rounded-full w-fit mb-6 font-bold uppercase text-sm tracking-widest">
                            Misi
                        </div>
                        <h2 className="text-[50px] font-bold text-[#6EC207] mb-6 leading-tight" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                            Menyediakan tenaga medis dan non-medis yang profesional dan kompeten.
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Kami menyediakan tenaga medis dan non-medis yang kompeten, bersertifikat, dan beretika melalui rekrutmen selektif serta pelatihan berkelanjutan, guna menjamin pelayanan yang profesional dan berfokus pada keselamatan pasien.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 rounded-[40px] overflow-hidden shadow-lg h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                            alt="Nurse Smiling"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Motto & Slogan Section */}
            <section className="px-4 md:px-0 py-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Motto Card */}
                    <div className="relative rounded-[30px] overflow-hidden h-64 group shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                            alt="Building"
                            className="absolute inset-0 w-full h-full object-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute top-6 left-6">
                            <div className="flex items-center gap-2 text-[#6EC207]">
                                <div className="bg-[#71CF00] p-2 rounded-full">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="11" y1="2" x2="12" y2="22" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                                    </svg>
                                </div>
                                <span className="font-bold text-lg uppercase">Motto</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-8">
                            <h3 className="text-white text-2xl font-bold mb-2">Sehat-Sejahtera Islami</h3>
                            <p className="text-white/80 font-bold text-xl tracking-widest">( SEHATI )</p>
                        </div>
                    </div>

                    {/* Slogan Card */}
                    <div className="relative rounded-[30px] overflow-hidden h-64 group shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?q=80&w=2071&auto=format&fit=crop"
                            alt="Building 2"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute top-6 left-6">
                            <div className="flex items-center gap-2 text-[#6EC207]">
                                <div className="bg-[#71CF00] p-2 rounded-full">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="11" y1="2" x2="12" y2="22" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                                    </svg>
                                </div>
                                <span className="font-bold text-lg uppercase">SLOGAN LAYANAN</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-center px-10 mt-8">
                            <p className="text-white text-lg font-bold leading-relaxed">
                                IKHLAS - RAMAH - CEKATAN dalam melayani pasien tanpa membedakan golongan, agama, suku, status sosial ekonomi dan kedudukan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profil;
