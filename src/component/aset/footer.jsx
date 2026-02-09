import React from "react";

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-[#F9FBF8]">
            <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                {/* Brand Col */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-[#6EC207] p-2 rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight text-[#2D5A27]">Rumah Sakit</span>
                            <span className="font-extrabold text-lg leading-tight text-[#0054A6]">UMS A.R. Fachrudin</span>
                        </div>
                    </div>

                    <div className="text-gray-500 text-sm space-y-4">
                        <p>Motto : Iman - Taqwa - Unggul</p>
                        <p>Telepon : (0271) 714930</p>
                        <p>Emergency : (0271) 732435</p>
                        <p>Alamat : Jl. Adi Sucipto No.167, Karangasem, Kec. Laweyan, Kota Surakarta, Jawa Tengah 57145</p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-gray-800 mb-6 underline decoration-[#6EC207] decoration-2 underline-offset-8">Quick Links</h4>
                    <ul className="text-gray-500 text-sm space-y-3">
                        <li className="hover:text-[#6EC207] cursor-pointer">Profil</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Layanan</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Fasilitas</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">FAQ</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Hubungi Kami</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="font-bold text-gray-800 mb-6 underline decoration-[#6EC207] decoration-2 underline-offset-8">Social</h4>
                    <ul className="text-gray-500 text-sm space-y-3">
                        <li className="hover:text-[#6EC207] cursor-pointer">Facebook</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Instagram</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">LinkedIn</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Youtube</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Twitter</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-bold text-gray-800 mb-6 underline decoration-[#6EC207] decoration-2 underline-offset-8">Legal</h4>
                    <ul className="text-gray-500 text-sm space-y-3">
                        <li className="hover:text-[#6EC207] cursor-pointer">Terms of Service</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-[#6EC207] cursor-pointer">Cookie Policy</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-10 text-center">
                <p className="text-gray-400 text-sm font-semibold">© 2024 RS PKU Muhammadiyah Surakarta. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;