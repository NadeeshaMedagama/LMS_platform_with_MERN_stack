import React, { useState, useEffect } from 'react';
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    TrendingUp,
    Star,
    ArrowRight,
    CheckCircle,
    Target,
    Lightbulb,
    Shield,
    Clock,
    Globe,
    Zap,
    Heart,
    Brain,
    Trophy,
    UserCheck,
    Play,
    Quote,
    ArrowLeft,
    Calendar,
    MessageCircle,
    BarChart3,
    Sparkles, ChevronDown, X, Menu
} from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";

const WhyNovaLearn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('mission');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/register');
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

    const coreValues = [
        {
            icon: <Target size={28} />,
            title: "Excellence First",
            description: "We maintain the highest standards in curriculum design, instructor selection, and learning outcomes.",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Heart size={28} />,
            title: "Student-Centric",
            description: "Every decision we make prioritizes our learners' success, growth, and satisfaction.",
            color: "from-red-500 to-pink-600"
        },
        {
            icon: <Lightbulb size={28} />,
            title: "Innovation Driven",
            description: "We continuously evolve our platform with cutting-edge technology and pedagogical methods.",
            color: "from-yellow-500 to-orange-600"
        },
        {
            icon: <Globe size={28} />,
            title: "Globally Accessible",
            description: "Quality education should know no boundaries - we make learning accessible worldwide.",
            color: "from-green-500 to-teal-600"
        }
    ];

    const whyChooseUs = [
        {
            icon: <Brain size={32} />,
            title: "Cutting-Edge Curriculum",
            description: "Our courses are designed by industry experts and updated regularly to reflect current market demands and emerging trends.",
            stats: "Updated every 3 months",
            highlight: true
        },
        {
            icon: <UserCheck size={32} />,
            title: "World-Class Instructors",
            description: "Learn from professionals who have worked at top companies like Google, Microsoft, Amazon, and leading startups.",
            stats: "500+ Expert Instructors",
            highlight: false
        },
        {
            icon: <Zap size={32} />,
            title: "Interactive Learning",
            description: "Hands-on projects, real-world case studies, and interactive coding environments that simulate actual work scenarios.",
            stats: "98% Engagement Rate",
            highlight: true
        },
        {
            icon: <Trophy size={32} />,
            title: "Industry Recognition",
            description: "Our certificates are recognized by 1000+ companies globally and can significantly boost your career prospects.",
            stats: "1000+ Partner Companies",
            highlight: false
        },
        {
            icon: <Clock size={32} />,
            title: "Flexible Learning",
            description: "Learn at your own pace with lifetime access to course materials and the ability to revisit content anytime.",
            stats: "Learn 24/7",
            highlight: true
        },
        {
            icon: <Shield size={32} />,
            title: "Success Guarantee",
            description: "We're so confident in our methodology that we offer a 30-day money-back guarantee on all premium courses.",
            stats: "30-Day Guarantee",
            highlight: false
        }
    ];

    const successStories = [
        {
            name: "Alex Thompson",
            role: "Senior Software Engineer at Google",
            previousRole: "Junior Developer",
            image: "AT",
            story: "NovaLearn's Full-Stack Development program completely transformed my career. Within 8 months of completing the course, I landed my dream job at Google with a 150% salary increase.",
            course: "Full-Stack Development",
            timeframe: "8 months",
            outcome: "150% salary increase"
        },
        {
            name: "Maria Rodriguez",
            role: "Data Science Manager at Microsoft",
            previousRole: "Business Analyst",
            image: "MR",
            story: "The Data Science mastery program gave me both theoretical knowledge and practical skills. The mentorship and project-based learning approach made all the difference.",
            course: "Data Science Mastery",
            timeframe: "6 months",
            outcome: "Career transition + promotion"
        },
        {
            name: "James Chen",
            role: "UX Design Lead at Airbnb",
            previousRole: "Marketing Coordinator",
            image: "JC",
            story: "I had zero design experience when I started. The comprehensive UX/UI program and supportive community helped me build an impressive portfolio that got me hired at Airbnb.",
            course: "UX/UI Design",
            timeframe: "10 months",
            outcome: "Complete career change"
        }
    ];

    const methodology = [
        {
            step: "01",
            title: "Assessment & Planning",
            description: "We start by understanding your current skill level and career goals through comprehensive assessments.",
            icon: <BarChart3 size={24} />
        },
        {
            step: "02",
            title: "Personalized Learning Path",
            description: "Based on your assessment, we create a customized learning journey tailored to your specific needs.",
            icon: <Target size={24} />
        },
        {
            step: "03",
            title: "Interactive Learning",
            description: "Engage with multimedia content, hands-on projects, and real-world case studies for maximum retention.",
            icon: <Play size={24} />
        },
        {
            step: "04",
            title: "Practice & Application",
            description: "Apply your knowledge through practical projects, coding challenges, and industry simulations.",
            icon: <Lightbulb size={24} />
        },
        {
            step: "05",
            title: "Mentorship & Support",
            description: "Get guidance from industry experts and connect with a supportive community of learners.",
            icon: <MessageCircle size={24} />
        },
        {
            step: "06",
            title: "Certification & Career Support",
            description: "Earn recognized certificates and receive career guidance to land your dream job.",
            icon: <Award size={24} />
        }
    ];

    const stats = [
        { number: "500K+", label: "Learners Worldwide", description: "Students from 180+ countries" },
        { number: "98%", label: "Course Completion Rate", description: "Industry-leading retention" },
        { number: "85%", label: "Career Advancement", description: "Students advance within 6 months" },
        { number: "4.9/5", label: "Average Rating", description: "Based on 50K+ reviews" }
    ];

    const tabContent = {
        mission: {
            title: "Our Mission",
            content: "To democratize quality education and empower individuals worldwide to unlock their full potential through accessible, engaging, and transformative learning experiences."
        },
        vision: {
            title: "Our Vision",
            content: "To become the world's leading platform for professional development, where anyone, anywhere can acquire the skills needed to thrive in the digital economy."
        },
        values: {
            title: "Our Values",
            content: "We believe in excellence, accessibility, innovation, and the transformative power of education to change lives and build better futures."
        }
    };

    return (
        <div className="min-h-screen bg-white">
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
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                {user ? 'Dashboard' : 'Sign In'}
                            </button>
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
                                    <button
                                        onClick={navigateToRegister}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                    >
                                        Join Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>

                {/* Animated Background Elements */}
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div
                    className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div
                        className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
                                <GraduationCap size={40} className="text-white"/>
                            </div>
                            <div className="text-left">
                                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight">
                                    Why Choose
                                    <span
                                        className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                        NovaLearn?
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
                            Discover what makes NovaLearn the preferred choice for over 500,000 learners worldwide.
                            We're not just another online learning platform – we're your partner in transformation.
                        </p>

                        <div className="grid md:grid-cols-4 gap-8 mt-16">
                            {stats.map((stat, index) => (
                                <div key={index}
                                     className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300">
                                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-blue-200 font-semibold mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-blue-300 text-sm">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Values Section */}
            <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Foundation
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built on strong principles that guide everything we do
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Tab Navigation */}
                            <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 p-8">
                                <div className="space-y-4">
                                    {Object.entries(tabContent).map(([key, content]) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveTab(key)}
                                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                                                activeTab === key
                                                    ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                                                    : 'text-white hover:bg-white hover:bg-opacity-10'
                                            }`}
                                        >
                                            <div className="font-semibold text-lg">{content.title}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="lg:w-2/3 p-8 lg:p-12">
                                <div className="transform transition-all duration-500">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                        {tabContent[activeTab].title}
                                    </h3>
                                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                        {tabContent[activeTab].content}
                                    </p>

                                    {activeTab === 'values' && (
                                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                                            {coreValues.map((value, index) => (
                                                <div key={index} className="group">
                                                    <div className={`bg-gradient-to-r ${value.color} rounded-xl p-1`}>
                                                        <div
                                                            className="bg-white rounded-lg p-6 h-full group-hover:bg-opacity-95 transition-all duration-300">
                                                            <div
                                                                className={`bg-gradient-to-r ${value.color} rounded-lg p-3 w-fit mb-4`}>
                                                                <div className="text-white">
                                                                    {value.icon}
                                                                </div>
                                                            </div>
                                                            <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                                                            <p className="text-gray-600 text-sm">{value.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            What Sets Us Apart
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Six key differentiators that make NovaLearn the smart choice for your learning journey
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index}
                                 className={`group rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                                     item.highlight
                                         ? 'bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200'
                                         : 'bg-gray-50 hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50'
                                 }`}>
                                <div className="flex items-start space-x-6">
                                    <div className={`rounded-2xl p-4 ${
                                        item.highlight
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                            : 'bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-blue-500 group-hover:to-purple-600'
                                    } transform group-hover:scale-110 transition-all duration-300`}>
                                        <div className="text-white">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {item.title}
                                            </h3>
                                            {item.highlight && (
                                                <div
                                                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    <Sparkles size={14} className="inline mr-1"/>
                                                    Featured
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-blue-600 font-semibold">
                                            <CheckCircle size={16} className="mr-2"/>
                                            {item.stats}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Stories Section */}
            <div className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Real Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet some of our students who transformed their careers through NovaLearn
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index}
                                 className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                                {/* Background decoration */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform translate-x-8 -translate-y-8 opacity-10"></div>

                                <div className="relative">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                            {story.image}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                                            <p className="text-blue-600 font-semibold">{story.role}</p>
                                            <p className="text-gray-500 text-sm">Previously: {story.previousRole}</p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <Quote size={24} className="text-blue-400 mb-3"/>
                                        <p className="text-gray-700 italic leading-relaxed">
                                            {story.story}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                                        <div className="text-center">
                                            <div className="text-blue-600 font-bold">{story.course}</div>
                                            <div className="text-gray-500 text-sm">Course</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-green-600 font-bold">{story.timeframe}</div>
                                            <div className="text-gray-500 text-sm">Duration</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-purple-600 font-bold text-sm">{story.outcome}</div>
                                            <div className="text-gray-500 text-xs">Result</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Learning Methodology Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our Proven Learning Methodology
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A systematic approach designed to maximize learning outcomes and career success
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Lines */}
                        <div
                            className="absolute top-12 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 hidden lg:block"></div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {methodology.map((step, index) => (
                                <div key={index} className="relative">
                                    <div
                                        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative z-10">
                                        <div className="text-center mb-6">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                <div className="text-white">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div
                                                className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent font-bold text-4xl mb-2">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-center">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
                <div
                    className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Future?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join over 500,000 learners who chose NovaLearn to advance their careers.
                        Your transformation journey starts with a single click.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                            <GraduationCap size={24} className="mr-3"/>
                            <span>Start Learning Today</span>
                            <ArrowRight size={20}
                                        className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
                        </button>

                        <button
                            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center">
                            <Calendar size={20} className="mr-2"/>
                            <span>Book a Demo</span>
                        </button>
                    </div>

                    <div className="flex justify-center items-center mt-8 space-x-8 text-blue-200">
                        <div className="flex items-center">
                            <CheckCircle size={20} className="mr-2 text-green-400"/>
                            <span>Free 7-day trial</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle size={20} className="mr-2 text-green-400"/>
                            <span>30-day money-back guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyNovaLearn;
