import React from 'react';
import carmen from '../../assets/carmen.png';

const ProfilDokter = ({ doctor, onBack }) => {
    // Default doctor data if none provided
    const defaultDoctor = {
        name: "dr. Chaewon",
        specialty: "Specialis Bedah Mulut",
        status: "Dokter Spesialis Full-Timer",
        image: carmen,
        review: {
            name: "Elham Ghaderi",
            rating: 5,
            text: '"Ketika saya masuk ke klinik, saya merasa tenang. Mulai dari sikap staf hingga ruang yang modern dan bersih, semuanya sangat meyakinkan. Dr. Karimi dengan sabar dan penuh ketelitian menjelaskan semua tahapan dan melakukan implan tanpa rasa sakit sama sekali. Sekarang setelah satu tahun, kondisinya masih sangat baik seperti hari pertama."'
        },
        schedule: []
    };

    const doc = doctor || defaultDoctor;

    // Star rating component
    const StarRating = ({ rating }) => (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-[#F9FBF8] min-h-screen">
            <div className="max-w-7xl mx-auto pt-10 md:pt-16 px-4 md:px-8">
                {/* Page Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8 md:mb-12">
                    Profil Dokter
                </h1>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-10 mb-10">
                    {/* Doctor Image - Left Side */}
                    <div className="w-full lg:w-[350px] shrink-0">
                        <div className="relative w-full max-w-[350px] mx-auto lg:mx-0">
                            {/* Green background accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-[75%] bg-[#C2F07D] rounded-2xl"></div>
                            {/* Doctor image */}
                            <img
                                src={doc.image || carmen}
                                alt={doc.name}
                                className="relative z-10 w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Doctor Info - Right Side */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-5 pt-15">
                        {/* Name */}
                        <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 shadow-sm">
                            <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                                {doc.name}
                            </h2>
                        </div>

                        {/* Specialty & Status */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                            <div>
                                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                                    Speciality
                                </p>
                                <div className="bg-[#D4F5A5] rounded-lg px-5 py-2 text-center">
                                    <span className="text-sm font-semibold text-[#1A1A1A]">
                                        {doc.specialty}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                                    Status
                                </p>
                                <div className="bg-[#D4F5A5] rounded-lg px-5 py-2 text-center">
                                    <span className="text-sm font-semibold text-[#1A1A1A]">
                                        {doc.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Patient Review */}
                        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm min-h-[250px]">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <span className="text-sm font-bold text-[#1A1A1A]">
                                        Ulasan pasien:{' '}
                                    </span>
                                    <span className="text-sm font-semibold text-[#1A1A1A]">
                                        {doc.review?.name || 'Anonim'}
                                    </span>
                                </div>
                                <StarRating rating={doc.review?.rating || 5} />
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed italic">
                                {doc.review?.text}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Jadwal Praktek Section */}
                <div className="mb-16">
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4">
                        Jadwal Praktek
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-2xl min-h-[200px] md:min-h-[250px] p-6 shadow-sm">
                        {doc.schedule && doc.schedule.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {doc.schedule.map((item, index) => (
                                    <div key={index} className="border border-gray-100 rounded-lg p-4">
                                        <p className="font-semibold text-[#1A1A1A]">{item.day}</p>
                                        <p className="text-sm text-gray-500">{item.time}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full min-h-[180px]">
                                <p className="text-gray-400 text-sm">Jadwal praktek belum tersedia</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilDokter;
