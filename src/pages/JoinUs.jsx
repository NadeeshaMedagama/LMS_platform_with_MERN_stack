import React, { useState, useEffect } from 'react';
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    Mail,
    Phone,
    MapPin,
    Upload,
    CheckCircle,
    AlertCircle,
    User,
    MessageSquare,
    Building,
    Clock,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    Star,
    Shield,
    Globe,
    Heart,
    ChevronDown,
    X,
    Menu
} from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";

const JoinUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        userRole: '',
        message: '',
        cv: null,
        agreeToTerms: false,
        newsletter: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [activeTab, setActiveTab] = useState('mission');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigationItems = [
        {
            title: "Why NovaLearn",
            href: "/why-novalearn",
            dropdown: [
                { title: "Our Mission", href: "#mission" },
                { title: "Success Stories", href: "#stories" },
                { title: "Expert Instructors", href: "#instructors" },
                { title: "Learning Methodology", href: "#methodology" }
            ]
        },
        {
            title: "Courses",
            href: "/courses",
            dropdown: [
                { title: "Online Courses", href: "#courses" },
                { title: "Live Sessions", href: "#live-sessions" },
                { title: "Certifications", href: "#certifications" },
                { title: "Corporate Training", href: "#corporate" }
            ]
        },
        {
            title: "Use Cases",
            href: "/usecases",
            dropdown: [
                { title: "Career Advancement", href: "#career" },
                { title: "Skill Development", href: "#skills" },
                { title: "Team Training", href: "#team" },
                { title: "Academic Support", href: "#academic" }
            ]
        },
        {
            title: "Pricing",
            href: "/pricing",
            dropdown: [
                { title: "Individual Plans", href: "#individual" },
                { title: "Team Plans", href: "#team-plans" },
                { title: "Enterprise", href: "#enterprise" },
                { title: "Free Trial", href: "#trial" }
            ]
        },
        {
            title: "Resources",
            href: "/resources",
            dropdown: [
                { title: "Blog", href: "#blog" },
                { title: "Help Center", href: "#help" },
                { title: "Community", href: "#community" },
                { title: "API Documentation", href: "#api" }
            ]
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const userRoles = [
        { value: '', label: 'Select your role' },
        { value: 'student', label: 'Student - Ready to Learn' },
        { value: 'teacher', label: 'Teacher - Share Your Expertise' },
        { value: 'institution', label: 'Institution - Partner with Us' },
        { value: 'corporate', label: 'Corporate - Team Training' },
        { value: 'other', label: 'Other - Tell us more' }
    ];

    const validateForm = () => {
        const newErrors = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        // User role validation
        if (!formData.userRole) {
            newErrors.userRole = 'Please select your role';
        }

        // Terms validation
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                address: '',
                userRole: '',
                message: '',
                cv: null,
                agreeToTerms: false,
                newsletter: false
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const benefits = [
        {
            icon: <BookOpen size={24} />,
            title: "Access to Premium Content",
            description: "Unlock thousands of courses and learning materials"
        },
        {
            icon: <Users size={24} />,
            title: "Join Our Community",
            description: "Connect with learners and experts worldwide"
        },
        {
            icon: <Award size={24} />,
            title: "Earn Certifications",
            description: "Get recognized credentials for your skills"
        },
        {
            icon: <Heart size={24} />,
            title: "Personalized Support",
            description: "Dedicated assistance throughout your journey"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Full-Stack Developer",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
            quote: "NovaLearn transformed my career. The quality of instruction and community support is unmatched."
        },
        {
            name: "Dr. Michael Chen",
            role: "Data Science Instructor",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            quote: "Teaching here has been incredibly rewarding. The platform makes it easy to share knowledge globally."
        },
        {
            name: "Emma Rodriguez",
            role: "UX Design Student",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            quote: "The personalized learning path and mentorship program exceeded all my expectations."
        }
    ];

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle size={40} className="text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to NovaLearn!</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Thank you for joining our learning community! We've received your application and will get back to you within 2 working days.
                        </p>
                        <div className="bg-green-50 rounded-2xl p-6 mb-8">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
                            <ul className="text-green-700 space-y-2 text-left">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    Check your email for confirmation
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    Our team will review your application
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    You'll receive access credentials soon
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => setSubmitStatus(null)}
                            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            Submit Another Application
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
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
                                    {/*<button*/}
                                    {/*    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"*/}
                                    {/*    onMouseEnter={() => setActiveDropdown(index)}*/}
                                    {/*    onMouseLeave={() => setActiveDropdown(null)}*/}
                                    {/*>*/}
                                    <Link
                                        to={item.href}
                                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                                        onMouseEnter={() => setActiveDropdown(index)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setActiveDropdown(null);
                                        }}
                                    >
                                        {item.title}
                                        <ChevronDown size={16}
                                                     className="ml-1 transform group-hover:rotate-180 transition-transform duration-200"/>
                                        {/*</button>*/}</Link>

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
                                                    href={dropdownItem.href}
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

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                onClick={navigateToLogin}
                                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                            >
                                {user ? 'Dashboard' : 'Sign In'}
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
                                {navigationItems.map((item, index) => (
                                    <div key={index}>
                                        <Link
                                            to={item.href}
                                            className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                        <div className="ml-4 space-y-2">
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    href={dropdownItem.href}
                                                    className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors duration-200"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {dropdownItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4 border-t border-gray-200 space-y-3">
                                    <button
                                        onClick={navigateToLogin}
                                        className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                                    >
                                        {user ? 'Dashboard' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 py-24">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
                <div
                    className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>


                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex justify-center mb-6">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                                <Users size={48} className="text-white"/>
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Join Our Learning
                            <span
                                className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2 pb-3">
                                Community
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Become part of a global network of learners, educators, and innovators.
                            Whether you're here to learn, teach, or partner with us, we welcome you to transform
                            education together.
                        </p>
                        <div className="flex justify-center space-x-8 text-center">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-blue-200">Active Learners</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">2K+</div>
                                <div className="text-blue-200">Expert Instructors</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">98%</div>
                                <div className="text-blue-200">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join NovaLearn?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the benefits of being part of our thriving educational ecosystem
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index}
                                 className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from learners, instructors, and partners who've transformed their careers with
                            NovaLearn
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content - Form and Map */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Application Form */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Application</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Fill out the form below and we'll get back to you within 2 working days.
                                    All fields marked with * are required.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User size={20}
                                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                errors.fullName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {errors.fullName && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail size={20}
                                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone size={20}
                                               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                errors.phone ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* User Role */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        I want to join as <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Building size={20}
                                                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                        <select
                                            name="userRole"
                                            value={formData.userRole}
                                            onChange={handleInputChange}
                                            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none ${
                                                errors.userRole ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        >
                                            {userRoles.map((role) => (
                                                <option key={role.value} value={role.value}>
                                                    {role.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.userRole && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.userRole}
                                        </p>
                                    )}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Address (Optional)
                                    </label>
                                    <div className="relative">
                                        <MapPin size={20} className="absolute left-3 top-4 text-gray-400"/>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Why do you want to join us? (Optional)
                                    </label>
                                    <div className="relative">
                                        <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400"/>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                            placeholder="Tell us about your goals and how you'd like to contribute to our community..."
                                        />
                                    </div>
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Upload CV/Resume (Optional - for Instructors/Partners)
                                    </label>
                                    <div
                                        className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                        <input
                                            type="file"
                                            name="cv"
                                            onChange={handleInputChange}
                                            accept=".pdf,.doc,.docx"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="text-center">
                                            <Upload size={32} className="mx-auto text-gray-400 mb-2"/>
                                            <p className="text-gray-600">
                                                {formData.cv ? formData.cv.name : 'Click to upload or drag and drop'}
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label className="ml-3 text-sm text-gray-700">
                                            I agree to the <a href="#terms"
                                                              className="text-blue-600 hover:underline font-medium">Terms
                                            & Conditions</a> and <a href="#privacy"
                                                                    className="text-blue-600 hover:underline font-medium">Privacy
                                            Policy</a> <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    {errors.agreeToTerms && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.agreeToTerms}
                                        </p>
                                    )}

                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleInputChange}
                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label className="ml-3 text-sm text-gray-700">
                                            Subscribe to our newsletter for updates and learning tips
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:shadow-lg transform hover:scale-105'
                                    } text-white`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div
                                                className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <ArrowRight size={20} className="ml-2"/>
                                        </>
                                    )}
                                </button>

                                {/* Response Time Notice */}
                                <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                                    <Clock size={20} className="text-blue-600 mr-3"/>
                                    <p className="text-sm text-blue-800">
                                        <strong>Response Time:</strong> We'll get back to you within 2 working days
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Company Information & Map */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <MapPin size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Our Address</h4>
                                            <p className="text-gray-600">123 Education Boulevard, Suite 400<br/>San
                                                Francisco, CA 94107</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Mail size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Email Us</h4>
                                            <p className="text-gray-600">hello@novalearn.com<br/>support@novalearn.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Phone size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Call Us</h4>
                                            <p className="text-gray-600">+1 (800) 555-0199<br/>Mon-Fri, 9am-5pm PST</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-4">Connect With Us</h4>
                                    <div className="flex space-x-4">
                                        <a href="#"
                                           className="bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition-colors">
                                            <Facebook size={20} className="text-gray-700"/>
                                        </a>
                                        <a href="#"
                                           className="bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition-colors">
                                            <Twitter size={20} className="text-gray-700"/>
                                        </a>
                                        <a href="#"
                                           className="bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition-colors">
                                            <Linkedin size={20} className="text-gray-700"/>
                                        </a>
                                        <a href="#"
                                           className="bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition-colors">
                                            <Instagram size={20} className="text-gray-700"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                <div className="h-96 bg-gray-200 relative">
                                    {/* Map placeholder - in a real app you would embed Google Maps or similar */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.22902587818!2d79.9080448!3d6.9730304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2597c8dde7e47%3A0x341e7e820c46d3ed!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1748986364520!5m2!1sen!2slk"
                                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <div
                                        className="absolute inset-0 flex items-center justify-center">
                                        {/*<div className="text-center">*/}
                                        {/*    <Globe size={48} className="text-gray-600 mx-auto mb-4"/>*/}
                                        {/*    <p className="text-gray-800 font-medium">Interactive Map Location</p>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Visit Our Headquarters</h4>
                                    <p className="text-gray-600 mb-4">Our doors are open for visitors by appointment.
                                        Schedule a tour to see our facilities and meet the team.</p>
                                    <button
                                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl font-medium hover:shadow-lg transition-all">
                                        Schedule a Visit
                                    </button>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trust & Security</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Shield size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">SSL Secured</h4>
                                            <p className="text-gray-600 text-sm">256-bit encryption</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <CheckCircle size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Verified</h4>
                                            <p className="text-gray-600 text-sm">Trusted by 50K+ users</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Star size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">4.9/5 Rating</h4>
                                            <p className="text-gray-600 text-sm">From 2K+ reviews</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Globe size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Global</h4>
                                            <p className="text-gray-600 text-sm">120+ countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about joining NovaLearn
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: "How long does the application process take?",
                                answer: "We typically respond to applications within 2 working days. The full onboarding process varies depending on your role - students can usually get started immediately, while instructors and partners may need 1-2 weeks for verification and setup."
                            },
                            {
                                question: "What are the requirements to become an instructor?",
                                answer: "We look for instructors with proven expertise in their field, teaching experience (formal or informal), and a passion for education. You'll need to provide credentials, samples of your work, and complete a short teaching demonstration."
                            },
                            {
                                question: "Is there a cost to join as a student?",
                                answer: "Basic membership is free with access to many resources. Premium courses and certifications require payment, but we offer scholarships and financial aid for qualified applicants."
                            },
                            {
                                question: "How does NovaLearn protect my personal data?",
                                answer: "We take data security seriously. All personal information is encrypted, stored securely, and never shared with third parties without consent. Our privacy policy details all protections."
                            },
                            {
                                question: "Can I switch roles after joining?",
                                answer: "Absolutely! Many of our members wear multiple hats - students become instructors, corporate partners sponsor learners, etc. You can update your profile settings anytime."
                            }
                        ].map((faq, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                                <button className="w-full text-left p-6 focus:outline-none">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                    <div className="mt-4 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Learning Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Join thousands of learners and educators who are shaping the future of education.
                        Your next chapter starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-lg transition-all">
                            Apply Now
                        </button>
                        <button
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 hover:shadow-lg transition-all">
                            Contact Admissions
                        </button>
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
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                                    NovaLearn</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Empowering learners and educators worldwide through innovative technology and accessible
                                education.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Facebook size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Twitter size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Linkedin size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
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

export default JoinUs;
