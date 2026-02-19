import React from 'react';

const Pengaduan = () => {
    return (
        <div className="w-full bg-[#FAFAFA] font-sans pb-20 pt-10">
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="bg-white rounded-[40px] shadow-lg p-2 md:p-4 flex flex-col md:flex-row gap-0 md:gap-8 overflow-hidden">

                    {/* Left Panel - Info */}
                    <div className="
w-full md:w-5/12
bg-gradient-to-b from-[#B2E672] to-white
rounded-[30px] p-8 md:p-12
text-[#1A1A1A]
flex flex-col justify-between
min-h-[500px]
">

                        <div>
                            <h2 className="text-3xl font-bold mb-12">Get in touch</h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                                    <p className="text-sm font-medium opacity-80">Jalan Adi Sucipto No. 167,</p>
                                    <p className="text-sm font-medium opacity-80">Karangasem, Surakarta.</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">Chat to us</h3>
                                    <p className="text-sm font-medium opacity-80">Our friendly team is here to help.</p>
                                    <p className="text-sm font-bold mt-1">info@rspku-solo.com</p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                    <p className="text-sm font-medium opacity-80">Mon-Fri from 8am to 5pm.</p>
                                    <p className="text-sm font-bold mt-1">(0271) 714930</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="font-bold text-lg mb-4">Social media</h3>
                            <div className="flex gap-4">
                                <span className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </span>
                                <span className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </span>
                                <span className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </span>
                                <span className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="w-full md:w-7/12 p-6 md:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows="4" className="w-full bg-gray-100 border-none rounded-md p-3 focus:ring-2 focus:ring-[#6EC207] focus:outline-none resize-none"></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input id="policy" type="checkbox" className="mt-1 w-4 h-4 text-[#6EC207] border-gray-300 rounded focus:ring-[#6EC207]" />
                                <label htmlFor="policy" className="text-sm text-gray-500 leading-snug">
                                    I agree to the <span className="underline decoration-1 underline-offset-2">privacy policy</span> and authorize the processing of my personal data.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-[#E0E0E0] text-gray-700 hover:bg-[#6EC207] hover:text-white font-bold py-3 rounded-md transition-colors duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pengaduan;
