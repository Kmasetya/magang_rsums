import React, { useState, useRef } from 'react';
import { Star, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({ title, subtitle, bgImage }) => (
    <div className="relative overflow-hidden rounded-xl shadow-lg h-46 group cursor-pointer">
        <div
            className="absolute inset-0 bg-contain bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${bgImage || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'})` }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute top-4 left-4 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
                <div className="bg-[#6EC207] rounded-full p-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="11" y1="2" x2="12" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                    </svg>
                </div>
                <h3 className="text-[#71CF00] font-bold text-[22px] tracking-wide" style={{ fontFamily: "'Inria Sans', sans-serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>{title}</h3>
            </div>
            <p className="pt-6 text-white/80 text-[16px] leading-tight max-w-full text-center" style={{ fontFamily: "'Inria Sans', sans-serif" }}>{subtitle}</p>
        </div>
    </div>
);

const DoctorCard = ({ name, specialty, image }) => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 min-w-[500px] max-w-[600px] shrink-0">

        <div className="flex items-center gap-6">
            {/* FOTO */}
            <div className="w-45 h-45 rounded-2xl overflow-hidden bg-purple-100">
                <img
                    src={image || "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?q=80&w=2070&auto=format&fit=crop"}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* TEXT */}
            <div className='w'>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                <p className="text-black text-m font-semibold mb-4">
                    Spesialis {specialty}
                </p>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-[#6EC207] rounded-full"></div>
                    <p className="text-black text-xs">Lebih dari 12 tahun pengalaman</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-[#6EC207] rounded-full"></div>
                    <p className="text-black text-xs">Anggota Asosiasi Implantologi Indonesia</p>
                </div>
                <div className="mt-6 flex gap-4 justify-between">
                    <button className="flex-1 bg-[#6EC207] text-white py-2 px-4 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-[#5dad06] transition-colors">
                        Lihat Profil
                    </button>
                    <button className="flex-1 bg-[#6EC207] text-white py-2 px-4 rounded-lg font-bold text-sm whitespace-nowrap hover:bg-[#5dad06] transition-colors">
                        Buat Janji
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        <div className='flex justify-between'>
            <p className='text-xs font-semibold'>Ulasan pasien : Elham Ghaderi</p>
            <div className='flex'>
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
            </div>
        </div>
        <p className="text-xs mt-2 leading-relaxed">
            "Ketika saya masuk ke klinik, saya merasa tenang. Mulai dari sikap staf hingga ruang yang modern dan bersih, semuanya sangat meyakinkan. Dr. Karimi dengan sabar dan penuh ketelitian menjelaskan semua tahapan dan melakukan implan tanpa rasa sakit sama sekali. Sekarang setelah satu tahun, kondisinya masih sangat baik seperti hari pertama."
        </p>

    </div >

);

const ArticleCard = ({ title, date, image, subtitle }) => (
    <div className="bg-white rounded-[32px] p-5 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">

        {/* IMAGE */}
        <div className="h-60 shrink-0 overflow-hidden rounded-[28px]">
            <img
                src={
                    image ||
                    "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=1932&auto=format&fit=crop"
                }
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>

        {/* CONTENT */}
        <div className="mt-5 flex flex-col flex-1">

            {/* DATE */}
            <div className="mb-3">
                <span className="bg-[#E8F5D9] text-[#6EC207] text-[11px] font-semibold px-4 py-1.5 rounded-full">
                    {date}
                </span>
            </div>

            {/* TITLE */}
            <h3 className="text-[16px] font-bold text-[#0B132A] leading-snug mb-2 line-clamp-2">
                {title}
            </h3>

            <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                {subtitle}
            </p>
        </div>
    </div>
);


const Home = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeArticleIndex, setActiveArticleIndex] = useState(0);
    const articleScrollRef = useRef(null);
    const articles = [
        {
            title: "Kenali Gejala Stunting Pada Balita",
            subtitle: "Stunting adalah kondisi gagal tumbuh pada anak akibat kekurangan gizi kronis, terutama pada 1000 hari pertama kehidupan. Kenali gejalanya sejak dini agar tumbuh kembang anak optimal.",
            date: "12 Mei 2024",
            image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435"
        },
        {
            title: "Cegah Demam Berdarah Secara Mandiri",
            subtitle: "Demam berdarah dengue (DBD) masih menjadi masalah kesehatan serius. Lakukan langkah 3M Plus untuk mencegah perkembangbiakan nyamuk Aedes aegypti di lingkungan sekitar rumah anda.",
            date: "10 Mei 2024",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Begadang Dapat Mempengaruhi Kesehatan Tubuh",
            subtitle: "Tidur yang cukup sangat penting untuk regenerasi sel tubuh dan menjaga sistem imun. Kebiasaan begadang dapat meningkatkan risiko berbagai penyakit kronis dan menurunkan produktivitas.",
            date: "08 Mei 2024",
            image: "https://images.unsplash.com/photo-1541781777621-af1394378813?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Pentingnya Imunisasi Dasar Lengkap",
            subtitle: "Imunisasi adalah cara paling efektif untuk melindungi anak dari penyakit berbahaya. Pastikan buah hati anda mendapatkan imunisasi dasar lengkap sesuai jadwal yang direkomendasikan.",
            date: "05 Mei 2024",
            image: "https://images.unsplash.com/photo-1632053001815-5e60803eecc2?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const handleArticleScroll = () => {
        if (articleScrollRef.current) {
            const { scrollLeft, clientWidth } = articleScrollRef.current;
            const itemWidth = 320 + 24; // Width + gap
            const newIndex = Math.round(scrollLeft / itemWidth);
            setActiveArticleIndex(Math.min(newIndex, articles.length - 1));
        }
    };

    const scrollToArticle = (index) => {
        if (articleScrollRef.current) {
            const itemWidth = 320 + 24; // Width + gap
            articleScrollRef.current.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
            setActiveArticleIndex(index);
        }
    }

    const doctors = [
        { name: "Dr. Carmen", specialty: "Anak" },
        { name: "Dr. Nader H.", specialty: "Bedah Mulut", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" },
        { name: "Dr. Sarah K.", specialty: "Jantung", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" },
        { name: "Dr. John D.", specialty: "Saraf", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop" },
    ];

    const scrollToIndex = (index) => {
        if (index < 0 || index >= doctors.length) return;

        setActiveIndex(index);

        const container = scrollRef.current;
        const card = container.children[index];

        card.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        });
    };

    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[610px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                    alt="Hospital Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
            </section>

            {/* Facilities Section */}
            <section className="py-16 px-4 md:px-0 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 gap-4">
                    <div>
                        <h2 className="text-[#6EC207] text-[45px] font-extrabold mb-1 tracking-tight" style={{ fontFamily: "'Inria Sans', sans-serif" }}>Fasilitas</h2>
                        <h3 className="text-[#1A1A1A] text-2xl font-bold" style={{ fontFamily: "'Inria Sans', sans-serif" }}>RS UMS A.R. Fachrudin</h3>
                    </div>
                    <p className="text-gray max-w-md text-md leading-relaxed" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                        Fasilitas 24 Jam yang menunjang kesehatan serta tenaga medis di ungguan buat kami yang profesional dan berpengalaman di RS UMS A.R. Fachrudin.
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
            <section className="py-16 bg-[#F3FFE4] overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: "'Inria Sans', sans-serif" }}>
                        Dokter Spesialis
                    </h2>
                </div>

                <div className="relative">
                    {/* LEFT */}
                    <button
                        onClick={() => scrollToIndex(activeIndex - 1)}
                        className="absolute left-48 top-1/2 -translate-y-1/2 z-20 
          bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center 
          text-[#6EC207] hover:bg-[#6EC207] hover:text-white transition"
                    >
                        <ChevronLeft size={26} />
                    </button>

                    {/* RIGHT */}
                    <button
                        onClick={() => scrollToIndex(activeIndex + 1)}
                        className="absolute right-48 top-1/2 -translate-y-1/2 z-20 
          bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center 
          text-[#6EC207] hover:bg-[#6EC207] hover:text-white transition"
                    >
                        <ChevronRight size={26} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory px-[30%] scrollbar-hide py-10"
                    >
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className={`snap-center shrink-0 transition-all duration-500 transform
              ${activeIndex === index
                                        ? "scale-100 opacity-100"
                                        : "scale-90 opacity-40"
                                    }`}
                            >
                                <DoctorCard
                                    name={doctor.name}
                                    specialty={doctor.specialty}
                                    image={doctor.image}
                                    active={activeIndex === index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Events Section */}
            <section className="py-16 px-4 md:px-0 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Inria Sans', sans-serif" }}>Kegiatan & Event Rumah Sakit</h2>
                <p className="text-gray text-md mb-4" style={{ fontFamily: "'Inria Sans', sans-serif" }}>Berbagai kegiatan rutin rumah sakit yang bertujuan edukasi, pelayanan dan kesehatan bagi masyarakat.</p>

                <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                </div>
            </section>
            {/* Articles Section */}
            <section className="py-16 px-4 md:px-0 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Inria Sans', sans-serif" }}>Berita & Artikel Kesehatan</h2>
                <p className="text-gray text-md mb-5" style={{ fontFamily: "'Inria Sans', sans-serif" }}>Dapatkan informasi kesehatan terbaru dari tim medis kami untuk gaya hidup sehat Anda.</p>

                <div
                    ref={articleScrollRef}
                    onScroll={handleArticleScroll}
                    className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide py-4"
                >
                    {articles.map((article, index) => (
                        <div key={index} className="min-w-[320px] max-w-[320px] snap-center h-[480px]">
                            <ArticleCard
                                title={article.title}
                                subtitle={article.subtitle}
                                date={article.date}
                                image={article.image}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {articles.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToArticle(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${activeArticleIndex === index ? 'bg-[#6EC207]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
