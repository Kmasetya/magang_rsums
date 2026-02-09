import React, { useState, useEffect } from 'react';

const Navbar = ({ onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
            {/* Top Tier: Contact Info (Compresses on scroll) */}
            <div className={`bg-[#F1FAE5] px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-[#1A1A1A] gap-2 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-20 py-3 opacity-100'
                }`}>
                <div className="flex items-center gap-2 self-start md:self-auto">
                    <div className="bg-[#6EC207] p-1.5 rounded-full shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-base leading-tight text-[#2D5A27]">Rumah Sakit</span>
                        <span className="font-extrabold text-base leading-tight text-[#0054A6]">UMS A.R. Fachrudin</span>
                    </div>
                </div>

                <div className="flex flex-row gap-4 md:gap-6 items-center text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="text-[#6EC207]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <span className="font-medium whitespace-nowrap">( 62 - 0888 088 880 )</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 max-w-sm">
                        <div className="text-[#6EC207] shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <span className="text-[10px] md:text-xs leading-tight line-clamp-1">Jl. Adi Sucipto No.167, Surakarta</span>
                    </div>
                </div>
            </div>

            {/* Bottom Tier: Navigation */}
            <nav className={`bg-white/95 backdrop-blur-md py-3 px-4 md:px-16 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'shadow-lg border-b border-gray-100' : 'shadow-sm'
                }`}>


                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 text-sm font-bold text-[#333]">
                    <li onClick={() => onNavigate('home')} className="hover:text-[#6EC207] cursor-pointer transition-colors relative group">
                        Beranda
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EC207] group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li onClick={() => onNavigate('profil')} className="flex items-center gap-1 hover:text-[#6EC207] cursor-pointer transition-colors group">
                        Profil
                        <svg className="group-hover:translate-y-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </li>
                    <li onClick={() => onNavigate('informasi')} className="flex items-center gap-1 hover:text-[#6EC207] cursor-pointer transition-colors group">
                        Informasi
                        <svg className="group-hover:translate-y-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </li>
                    <li onClick={() => onNavigate('fasilitas')} className="flex items-center gap-1 hover:text-[#6EC207] cursor-pointer transition-colors group">
                        Fasilitas
                        <svg className="group-hover:translate-y-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </li>
                    <li onClick={() => onNavigate('dokter')} className="flex items-center gap-1 hover:text-[#6EC207] cursor-pointer transition-colors group">
                        Dokter
                        <svg className="group-hover:translate-y-0.5 transition-transform" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </li>
                    <li onClick={() => onNavigate('pengaduan')} className="hover:text-[#6EC207] cursor-pointer transition-colors relative group">
                        Pengaduan
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EC207] group-hover:w-full transition-all duration-300"></span>
                    </li>
                    <li onClick={() => onNavigate('hubungi')} className="hover:text-[#6EC207] cursor-pointer transition-colors relative group">
                        Hubungi Kami
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6EC207] group-hover:w-full transition-all duration-300"></span>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    {/* Right Side Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="bg-[#6EC207] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#5dad06] transition-all hover:scale-105 active:scale-95 shadow-md">
                            Buat Janji Temu
                        </button>
                        <button className="bg-white text-[#6EC207] border-2 border-[#6EC207] px-5 py-2 rounded-full font-bold text-xs hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm">
                            Login dan Daftar
                        </button>
                    </div>

                    {/* Hamburger Button for Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-[#2D5A27] hover:bg-[#F1FAE5] rounded-lg transition-colors focus:outline-none z-[110]"
                        aria-label="Toggle navigation menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between items-center">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleMenu}
            />

            <div
                className={`lg:hidden fixed top-[100%] left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="px-6 py-10 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col gap-6 text-lg font-bold text-[#333] mb-10">
                        <li onClick={() => { onNavigate('home'); toggleMenu(); }} className="flex items-center justify-between group active:text-[#6EC207]">
                            Beranda
                            <div className="w-2 h-2 rounded-full bg-[#6EC207] opacity-0 group-active:opacity-100"></div>
                        </li>
                        <li onClick={() => { onNavigate('profil'); toggleMenu(); }} className="flex items-center justify-between border-b border-gray-100 pb-2">
                            Profil
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </li>
                        <li onClick={() => { onNavigate('informasi'); toggleMenu(); }} className="flex items-center justify-between border-b border-gray-100 pb-2">
                            Informasi
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </li>
                        <li onClick={() => { onNavigate('fasilitas'); toggleMenu(); }} className="flex items-center justify-between border-b border-gray-100 pb-2">
                            Fasilitas
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </li>
                        <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                            Dokter
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </li>
                        <li onClick={() => { onNavigate('pengaduan'); toggleMenu(); }} className="pb-2 border-b border-gray-100 cursor-pointer hover:text-[#6EC207]">Pengaduan</li>
                        <li onClick={() => { onNavigate('hubungi'); toggleMenu(); }} className="pb-2 border-b border-gray-100 cursor-pointer hover:text-[#6EC207]">Hubungi Kami</li>
                    </ul>

                    <div className="flex flex-col gap-4">
                        <button className="w-full bg-[#6EC207] text-white py-4 rounded-2xl font-bold text-base shadow-[#6EC207]/20 shadow-xl hover:bg-[#5dad06] transition-all active:scale-[0.98]">
                            Buat Janji Temu
                        </button>
                        <button className="w-full bg-white text-[#6EC207] border-2 border-[#6EC207] py-4 rounded-2xl font-bold text-base hover:bg-gray-50 transition-all active:scale-[0.98]">
                            Login dan Daftar
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
