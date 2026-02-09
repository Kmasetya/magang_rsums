import React from 'react';

const Card = ({ title, subtitle, bgImage }) => (
    <div className="relative overflow-hidden rounded-xl shadow-lg h-48 group cursor-pointer">
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${bgImage || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute top-4 left-4 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
                <div className="bg-[#6EC207] rounded-full p-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-white font-bold text-sm tracking-wide">{title}</h3>
            </div>
            <p className="text-white/80 text-[10px] leading-tight max-w-[140px]">{subtitle}</p>
        </div>
    </div>
);

const DoctorCard = ({ name, specialty, image }) => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center min-w-[280px]">
        <div className="w-48 h-48 rounded-2xl overflow-hidden mb-4 bg-purple-100">
            <img src={image || "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=2070&auto=format&fit=crop"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="text-center w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
            <p className="text-gray-500 text-sm mb-4">Spesialis {specialty}</p>

            <div className="flex flex-col gap-2 w-full">
                <button className="w-full bg-[#6EC207] text-white py-2 rounded-lg font-bold text-sm hover:bg-[#5dad06] transition-colors">
                    Lihat Profil
                </button>
                <button className="w-full bg-[#6EC207] text-white py-2 rounded-lg font-bold text-sm hover:bg-[#5dad06] transition-colors">
                    Buat Janji
                </button>
            </div>
        </div>
    </div>
);

const ArticleCard = ({ title, date, image }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="h-48 overflow-hidden">
            <img src={image || "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1932&auto=format&fit=crop"} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
            <p className="text-[#6EC207] text-xs font-bold mb-2 uppercase">{date}</p>
            <h3 className="font-bold text-gray-800 text-sm line-clamp-2 leading-tight">{title}</h3>
        </div>
    </div>
);

const Home = () => {
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                    alt="Hospital Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
            </section>

            {/* Facilities Section */}
            <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-[#6EC207] text-4xl font-extrabold mb-1 tracking-tight">Fasilitas</h2>
                        <h3 className="text-[#1A1A1A] text-xl font-bold">RS UMS A.R. Fachrudin</h3>
                    </div>
                    <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                        Fasilitas 24 Jam yang menunjang kesehatan serta tenaga medis di unggulan buat kami yang profesional dan berpengalaman di RS UMS A.R. Fachrudin.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="IGD"
                        subtitle="Unit pelayanan gawat darurat yang siap melayani 24 jam penuh."
                        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                    />
                    <Card
                        title="Paviliun Ibu dan Anak"
                        subtitle="Pelayanan terpadu bagi kesehatan ibu serta tumbuh kembang anak."
                        bgImage="https://images.unsplash.com/photo-1519443913077-d6706e9d6d45?q=80&w=1974&auto=format&fit=crop"
                    />
                    <Card
                        title="Instalasi Bedah Sentral & Rehab"
                        subtitle="Ruang operasi yang modern medis dengan perlengkapan yang lengkap."
                        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                    />
                    <Card
                        title="Instalasi Radiologi & Diagnostik"
                        subtitle="Layanan pemeriksaan penunjang diagnostik dengan teknologi modern."
                        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                    />
                    <Card
                        title="Instalasi Gawat Darurat"
                        subtitle="Unit gawat darurat yang cepat dan tanggap dalam menangani pasien."
                        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                    />
                    <Card
                        title="Apotek / Farmasi"
                        subtitle="Layanan penyediaan obat-obatan yang lengkap dan terpercaya."
                        bgImage="https://images.unsplash.com/photo-1516549655169-df83a0774514"
                    />
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-16 bg-[#F9FBF8]">
                <div className="max-w-7xl mx-auto px-4 md:px-16 text-center mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Dokter Spesialis</h2>
                </div>

                <div className="flex flex-row overflow-x-auto gap-8 px-4 md:px-16 pb-8 scrollbar-hide snap-x">
                    <DoctorCard name="Dr. Carmen" specialty="Anak" />
                    <DoctorCard name="Dr. Carmen" specialty="Anak" />
                    <DoctorCard name="Dr. Carmen" specialty="Anak" />
                    <DoctorCard name="Dr. Nadai" specialty="Anak" />
                </div>
            </section>

            {/* Events Section */}
            <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Kegiatan & Event Rumah Sakit</h2>
                <p className="text-gray-500 text-sm mb-8">Berbagai kegiatan rutin rumah sakit yang bertujuan edukasi, pelayanan dan kesehatan bagi masyarakat.</p>

                <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                </div>
            </section>
            {/* Articles Section */}
            <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Berita & Artikel Kesehatan</h2>
                <p className="text-gray-500 text-sm mb-10">Dapatkan informasi kesehatan terbaru dari tim medis kami untuk gaya hidup sehat Anda.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ArticleCard
                        title="Kenali Gejala Stunting Pada Balita"
                        date="12 Mei 2024"
                        image="https://images.unsplash.com/photo-1628595351029-c2bf17511435"
                    />
                    <ArticleCard
                        title="Cegah Demam Berdarah Secara Mandiri"
                        date="10 Mei 2024"
                        image="https://images.unsplash.com/photo-1628595351029-c2bf17511435"
                    />
                    <ArticleCard
                        title="Begadang Dapat Mempengaruhi Kesehatan Tubuh"
                        date="08 Mei 2024"
                        image="https://images.unsplash.com/photo-1628595351029-c2bf17511435"
                    />
                    <ArticleCard
                        title="Kenali Gejala Stunting Pada Balita"
                        date="05 Mei 2024"
                        image="https://images.unsplash.com/photo-1628595351029-c2bf17511435"
                    />
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    <div className="w-2.5 h-2.5 bg-[#6EC207] rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
