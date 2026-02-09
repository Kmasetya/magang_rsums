import React from 'react';
import carmen from '../assets/carmen.png';

const DoctorCard = ({ name, specialty, image }) => (
    <div className="relative w-[280px] max-w-[350px] h-[350px] flex items-end justify-center group bg-white rounded-4xl">
        {/* Background Image Container */}
        <div className="absolute inset-x-0 bottom-20 top-0 flex items-end justify-center z-0">
            <img
                src={image || carmen}
                alt={name}
                className="h-full w-auto object-contain drop-shadow-lg"
            />
        </div>

        {/* Green Bottom Section */}
        <div className="relative z-10 w-full bg-[#8EDE36] rounded-b-4xl rounded-tl-4xl  p-4 shadow-lg mx-auto">
            {/* Profile Button */}
            <button className="absolute -top-6 right-6 bg-[#5A9B05] text-white pl-5 pr-4 py-2 rounded-t-2xl flex items-center gap-2 text-sm font-semibold shadow-md hover:bg-[#4a8004] transition-colors cursor-pointer">
                Lihat Profil
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div className="flex justify-between items-end">
                <div className="text-white">
                    <h3 className="text-[16px] font-bold leading-tight">{name}</h3>
                    <p className="text-white/90 text-[12px] mt-1 font-medium">{specialty}</p>
                </div>

                <div className="flex gap-2 mb-1">
                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border border-white/20 shadow-sm cursor-pointer active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border border-white/20 shadow-sm cursor-pointer active:scale-95">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const Dokter = () => {
    const doctors = [
        { name: "dr. chaewon", specialty: "Spesialis THT", image: carmen },
        { name: "dr. heeseung", specialty: "Spesialis Mata", image: carmen },
        { name: "dr. jake", specialty: "Spesialis Jantung", image: carmen },
        { name: "dr. sunghoon", specialty: "Spesialis Kulit", image: carmen },
    ];

    return (
        <div className="w-full bg-[#F9FBF8] min-h-screen">
            {/* Doctors Grid */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            image={doctor.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Dokter;