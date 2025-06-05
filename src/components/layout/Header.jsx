import React, {useState, useEffect} from 'react';
import {Bell, ChevronDown, GraduationCap, LogOut, Menu, Search, Settings, User, X} from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const navigate = useNavigate();
    // const [user, setUser] = useState(null);

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

    const handleLogout = () => {
        setUser(null);
        console.log('User logged out');
    };

    const getUserInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
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
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => navigate('/')}>
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
                                                    href="/myprofile"
                                                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                                >
                                                    <User size={18} className="mr-3"/>
                                                    <span>My Profile</span>
                                                </a>
                                                <a
                                                    href="/settings-page"
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
                                {/*<button*/}
                                {/*    onClick={navigateToRegister}*/}
                                {/*    className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"*/}
                                {/*>*/}
                                {/*    Join Us*/}
                                {/*</button>*/}
                            </>
                        )}
                        <button
                            onClick={navigateToRegister}
                            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            Join Us
                        </button>
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
    );
};

export default Header;
