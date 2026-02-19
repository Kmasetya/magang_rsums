import React from 'react';

const Hubungi = () => {
    return (
        <div className="w-full bg-[#f8f9fa] py-10 px-0 md:px-0">
            <div className="max-w-3xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Complaint Registration Form
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="text-red-500">*</span>
                        <span>Quick Guide</span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Form Section */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Company Name */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Company I'm Complaining About..."
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        </span>
                    </div>

                    {/* Product/Service */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Product/Service I'm Complaining About..."
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        </span>
                    </div>

                    {/* Information Detail */}
                    <div className="relative">
                        <textarea
                            rows="4"
                            placeholder="Please Provide As Much Information As Possible..."
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm resize-none"
                        ></textarea>
                        <span className="absolute right-4 top-4 text-gray-300 pointer-events-none">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                        </span>
                    </div>

                    {/* Desired Outcome */}
                    <div>
                        <textarea
                            rows="3"
                            placeholder="Desired Outcome (Optional)"
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm resize-none"
                        ></textarea>
                    </div>

                    {/* Country Select */}
                    <div className="relative">
                        <select className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-700 bg-white shadow-sm appearance-none cursor-pointer">
                            <option>United States</option>
                            <option>Indonesia</option>
                            <option>Singapore</option>
                            <option>Malaysia</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
                        </span>
                    </div>

                    {/* Email Address */}
                    <div>
                        <input
                            type="text"
                            placeholder="Address Of The Gmail (Optional)"
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm"
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <input
                            type="text"
                            placeholder="Company's Website (Optional)"
                            className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-600 bg-white shadow-sm"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="w-full p-4 rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center min-h-[100px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center mb-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            </div>
                            <p className="text-gray-500 text-sm">Add Photos/Videos</p>
                            <p className="text-xs text-gray-400">You Can Add Up To 3MB In Total</p>
                            <p className="text-[10px] text-gray-400">Allowed File Formats: .jpg, .png, .gif, .mp4, .avi, .mov, .mpg</p>
                            <span className="absolute right-8 self-center text-gray-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            </span>
                        </div>
                    </div>

                    {/* Disclaimer Checkbox */}
                    <div className="flex items-start gap-3 mt-4">
                        <input
                            type="checkbox"
                            id="terms"
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-[#6EC207] focus:ring-[#6EC207]"
                        />
                        <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
                            By clicking <span className="font-bold text-gray-800">Submit</span> you confirm that you have read and agreed to the <a href="#" className="text-blue-500 hover:underline">FAQ</a>, <a href="#" className="text-blue-500 hover:underline">Terms of Use</a>, and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>, and that your information is accurate, true, complete and not misleading.
                        </label>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
                        {/* ReCAPTCHA Mockup */}
                        <div className="bg-[#f9f9f9] border border-gray-300 p-2 rounded w-[300px] h-[74px] flex items-center shadow-sm">
                            <div className="flex items-center gap-3 ml-2">
                                <div className="w-7 h-7 border-2 border-gray-300 rounded bg-white"></div>
                                <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
                            </div>
                            <div className="ml-auto flex flex-col items-center mr-2">
                                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                                <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                                <div className="text-[8px] text-gray-400 flex gap-1">
                                    <span>Privacy</span>-<span>Terms</span>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full md:w-auto px-12 py-3 bg-[#84cc16] hover:bg-[#65a30d] text-white font-bold rounded shadow-lg transition-colors uppercase tracking-wider"
                            style={{ backgroundColor: '#84cc16' }} // Tailwind lime-500 fallback
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hubungi;
