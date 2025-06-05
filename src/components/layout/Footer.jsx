import {Facebook, GraduationCap, Instagram, Linkedin, Twitter} from "lucide-react";
import React from "react";

const Header = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    <div className="col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-2 mr-3">
                                <GraduationCap size={24} className="text-white"/>
                            </div>
                            <span
                                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                                    NovaLearn</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering learners and educators worldwide through innovative technology and accessible
                            education.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#"
                               className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                <Facebook size={20}/>
                            </a>
                            <a href="#"
                               className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                <Twitter size={20}/>
                            </a>
                            <a href="#"
                               className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                <Linkedin size={20}/>
                            </a>
                            <a href="#"
                               className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                <Instagram size={20}/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">For Learners</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse
                                Courses</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                            </li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors">Certifications</a>
                            </li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career
                                Services</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors">Scholarships</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">For Educators</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teach on
                                NovaLearn</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructor
                                Resources</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Curriculum
                                Standards</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About
                                Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                            </li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
                            </li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2023 NovaLearn, Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy
                            Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of
                            Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie
                            Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
