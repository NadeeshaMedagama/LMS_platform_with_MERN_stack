import React, { useState, useEffect } from 'react';
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    TrendingUp,
    Star,
    Play,
    ArrowRight,
    CheckCircle,
    Menu,
    X,
    ChevronDown,
    User, Settings, LogOut, Bell, Search,
    Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: null, // URL to user's profile picture
        role: 'Student',
        notifications: 3
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Navigation functions
    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/joinus');
    };

    const handleStartLearning = () => {
        if (!user) {
            navigateToLogin();
        } else {
            switch(user.role) {
                case 'student':
                    console.log('Navigate to dashboard');
                    break;
                case 'instructor':
                    console.log('Navigate to instructor dashboard');
                    break;
                case 'admin':
                    console.log('Navigate to admin dashboard');
                    break;
                default:
                    console.log('Navigate to courses');
            }
        }
    };

    const navigationItems = [
        {
            title: "Why NovaLearn",
            to: "/why-novalearn",
            dropdown: [
                { title: "Our Mission", to: "#mission" },
                { title: "Success Stories", to: "#stories" },
                { title: "Expert Instructors", to: "#instructors" },
                { title: "Learning Methodology", to: "#methodology" }
            ]
        },
        {
            title: "Courses",
            to: "/courses",
            dropdown: [
                { title: "Online Courses", to: "#courses" },
                { title: "Live Sessions", to: "#live-sessions" },
                { title: "Certifications", to: "#certifications" },
                { title: "Corporate Training", to: "#corporate" }
            ]
        },
        {
            title: "Use Cases",
            to: "/usecases",
            dropdown: [
                { title: "Career Advancement", to: "#career" },
                { title: "Skill Development", to: "#skills" },
                { title: "Team Training", to: "#team" },
                { title: "Academic Support", to: "#academic" }
            ]
        },
        {
            title: "Pricing",
            to: "/pricing",
            dropdown: [
                { title: "Individual Plans", to: "#individual" },
                { title: "Team Plans", to: "#team-plans" },
                { title: "Enterprise", to: "#enterprise" },
                { title: "Free Trial", to: "#trial" }
            ]
        },
        {
            title: "Resources",
            to: "/resources",
            dropdown: [
                { title: "Blog", to: "#blog" },
                { title: "Help Center", to: "#help" },
                { title: "Community", to: "#community" },
                { title: "API Documentation", to: "#api" }
            ]
        }
    ];

    const features = [
        {
            icon: <BookOpen size={32} />,
            title: "Expert-Led Courses",
            description: "Learn from industry professionals with real-world experience"
        },
        {
            icon: <Users size={32} />,
            title: "Interactive Learning",
            description: "Engage with peers and instructors in our collaborative environment"
        },
        {
            icon: <Award size={32} />,
            title: "Certified Programs",
            description: "Earn recognized certificates to advance your career"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Track Progress",
            description: "Monitor your learning journey with detailed analytics"
        }
    ];

    const stats = [
        { number: "50K+", label: "Students" },
        { number: "1,200+", label: "Courses" },
        { number: "95%", label: "Success Rate" },
        { number: "24/7", label: "Support" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Software Developer",
            content: "This platform transformed my career. The courses are incredibly well-structured and practical.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Data Scientist",
            content: "The interactive learning experience and expert instructors make all the difference.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "UX Designer",
            content: "I love how I can learn at my own pace while still feeling connected to the community.",
            rating: 5
        }
    ];

    const handleLogout = () => {
        setUser(null);
        console.log('User logged out');
    };

    const getUserInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Fixed Header */}
            <header
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div
                                className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-2 mr-3 cursor-pointer hover:opacity-80 transition-opacity">
                                <GraduationCap size={24} className="text-white"/>
                            </div>
                            <span
                                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              NovaLearn
            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    <Link
                                        to={item.to}
                                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                                        onMouseEnter={() => setActiveDropdown(index)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {item.title}
                                        <ChevronDown size={16}
                                                     className="ml-1 transform group-hover:rotate-180 transition-transform duration-200"/>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {activeDropdown === index && (
                                        <div
                                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.href}
                                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                                >
                                                    {dropdownItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right Side - User Info or Auth Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {user ? (
                                <>
                                    {/* Search Icon */}
                                    <button
                                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                                        <Search size={20}/>
                                    </button>

                                    {/* Notifications */}
                                    <div className="relative">
                                        <button
                                            className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                                            <Bell size={20}/>
                                            {user.notifications > 0 && (
                                                <span
                                                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {user.notifications}
                      </span>
                                            )}
                                        </button>
                                    </div>

                                    {/* User Profile Dropdown */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            {/* Avatar */}
                                            <div
                                                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                {user.avatar ? (
                                                    <img src={user.avatar} alt="Profile"
                                                         className="w-8 h-8 rounded-full object-cover"/>
                                                ) : (
                                                    getUserInitials(user.name)
                                                )}
                                            </div>

                                            {/* User Info */}
                                            <div className="text-left">
                                                <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                                <p className="text-xs text-gray-600">{user.role}</p>
                                            </div>

                                            <ChevronDown size={16}
                                                         className={`text-gray-600 transform transition-transform duration-200 ${userDropdownOpen ? 'rotate-180' : ''}`}/>
                                        </button>

                                        {/* User Dropdown Menu */}
                                        {userDropdownOpen && (
                                            <div
                                                className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                                                {/* User Info Header */}
                                                <div className="px-4 py-3 border-b border-gray-100">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                                                            {user.avatar ? (
                                                                <img src={user.avatar} alt="Profile"
                                                                     className="w-12 h-12 rounded-full object-cover"/>
                                                            ) : (
                                                                getUserInitials(user.name)
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{user.name}</p>
                                                            <p className="text-sm text-gray-600">{user.email}</p>
                                                            <p className="text-xs text-blue-600 font-medium">{user.role}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Menu Items */}
                                                <div className="py-2">
                                                    <a
                                                        href="/dashboard"
                                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                                    >
                                                        <User size={18} className="mr-3"/>
                                                        <span>Dashboard</span>
                                                    </a>
                                                    <a
                                                        href="/profile"
                                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                                    >
                                                        <User size={18} className="mr-3"/>
                                                        <span>My Profile</span>
                                                    </a>
                                                    <a
                                                        href="/settings"
                                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                                    >
                                                        <Settings size={18} className="mr-3"/>
                                                        <span>Settings</span>
                                                    </a>
                                                    <hr className="my-2 border-gray-100"/>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200"
                                                    >
                                                        <LogOut size={18} className="mr-3"/>
                                                        <span>Sign Out</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                /* Authentication Buttons for non-logged-in users */
                                <>
                                    <button
                                        onClick={navigateToLogin}
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={navigateToRegister}
                                        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                    >
                                        Join Us
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div
                            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                            <div className="px-4 py-4 space-y-4">
                                {/* Mobile User Info */}
                                {user && (
                                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-4">
                                        <div
                                            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                                            {user.avatar ? (
                                                <img src={user.avatar} alt="Profile"
                                                     className="w-10 h-10 rounded-full object-cover"/>
                                            ) : (
                                                getUserInitials(user.name)
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{user.name}</p>
                                            <p className="text-sm text-gray-600">{user.email}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Items */}
                                {navigationItems.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            to={item.to}
                                            className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                        <div className="ml-4 space-y-2">
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.href}
                                                    className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {dropdownItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Mobile Auth Section */}
                                <div className="pt-4 border-t border-gray-200 space-y-3">
                                    {user ? (
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                to="/profile"
                                                className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                My Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors duration-200"
                                            >
                                                Sign Out
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={navigateToLogin}
                                                className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                                            >
                                                Sign In
                                            </button>
                                            <button
                                                onClick={navigateToRegister}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                            >
                                                Join Us
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section - Added padding-top to account for fixed header */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 pt-8">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div
                            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="flex items-center mb-6">
                                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 mr-4">
                                    <GraduationCap size={32} className="text-white"/>
                                </div>
                                <span className="text-white text-lg font-medium">Premium Learning Platform</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Transform Your
                                <span
                                    className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent w-full mt-2 pb-3">
                                    Learning Journey
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Join thousands of learners advancing their careers with our expert-led courses,
                                interactive projects, and industry-recognized certifications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleStartLearning}
                                    className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                                    <GraduationCap size={24} className="mr-3"/>
                                    <span>{user ? 'Continue Learning' : 'Start Learning Today'}</span>
                                    <ArrowRight size={20}
                                                className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
                                </button>
                                <button
                                    className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                                    <Play size={20} className="mr-2"/>
                                    <span>Watch Demo</span>
                                </button>
                            </div>
                        </div>
                        <div
                            className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="relative">
                                <div
                                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
                                    <div className="grid grid-cols-2 gap-6">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                                    {stat.number}
                                                </div>
                                                <div className="text-blue-200 font-medium">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80 blur-xl"></div>
                                <div
                                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 blur-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Platform?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide everything you need to succeed in your learning journey,
                            from beginner-friendly courses to advanced certifications.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index}
                                 className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our Students Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied learners who've transformed their careers
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="flex mb-4">
                                    {Array.from({length: testimonial.rating}).map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join our community of learners and unlock your potential with our comprehensive courses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                            <BookOpen size={24} className="mr-3"/>
                            <span>Browse All Courses</span>
                            <ArrowRight size={20}
                                        className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
                        </button>
                        <div className="flex items-center text-white">
                            <CheckCircle size={20} className="mr-2 text-green-400"/>
                            <span className="font-medium">Free 7-day trial</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
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
        </div>
    );
};

export default Home;
