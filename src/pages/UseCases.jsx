import React, {useState, useEffect} from 'react';
import {
    BookOpen,
    Users,
    Briefcase,
    Laptop,
    Code,
    Database,
    BarChart2,
    Server,
    Globe,
    Shield,
    Smartphone,
    Camera,
    Palette,
    GraduationCap, ChevronDown, X, Menu, ArrowRight, Calendar, CheckCircle, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';

const UseCases = () => {
    const [ setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('mission');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const navigateToLogin = () => {
        navigate('/login');
    };

    const navigateToRegister = () => {
        navigate('/joinus');
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

    const heroContent = {
        title: "Discover How NovaLearn Can Transform Your Journey",
        subtitle: "Explore tailored learning solutions for every career path and professional need",
        description: "Whether you're starting out, upskilling, or leading a team, we have the perfect learning path for you."
    };

    const useCaseCategories = [
        {
            title: "Career Advancement",
            description: "Accelerate your professional growth with industry-relevant skills",
            icon: <Briefcase size={32} className="text-blue-600" />,
            cases: [
                {
                    title: "Career Starters",
                    description: "Build foundational skills to launch your dream career",
                    icon: <BookOpen size={24} className="text-blue-500" />
                },
                {
                    title: "Mid-Career Professionals",
                    description: "Advance to leadership roles with strategic skill development",
                    icon: <BarChart2 size={24} className="text-blue-500" />
                },
                {
                    title: "Career Changers",
                    description: "Smooth transition to new industries with targeted training",
                    icon: <Globe size={24} className="text-blue-500" />
                }
            ]
        },
        {
            title: "Technical Skills",
            description: "Master in-demand technical competencies for the digital age",
            icon: <Code size={32} className="text-purple-600" />,
            cases: [
                {
                    title: "Software Development",
                    description: "Full-stack, mobile, game, and embedded systems development",
                    icon: <Laptop size={24} className="text-purple-500" />
                },
                {
                    title: "Data Science & AI",
                    description: "Machine learning, data analysis, and business intelligence",
                    icon: <Database size={24} className="text-purple-500" />
                },
                {
                    title: "Cloud & DevOps",
                    description: "Cloud architecture, containerization, and CI/CD pipelines",
                    icon: <Server size={24} className="text-purple-500" />
                }
            ]
        },
        {
            title: "Professional Development",
            description: "Enhance workplace effectiveness and leadership capabilities",
            icon: <Users size={32} className="text-indigo-600" />,
            cases: [
                {
                    title: "Leadership & Management",
                    description: "Develop executive presence and team leadership skills",
                    icon: <Briefcase size={24} className="text-indigo-500" />
                },
                {
                    title: "Communication Skills",
                    description: "Master presentations, negotiations, and business writing",
                    icon: <Globe size={24} className="text-indigo-500" />
                },
                {
                    title: "Project Management",
                    description: "Agile, Scrum, and traditional project management methodologies",
                    icon: <BarChart2 size={24} className="text-indigo-500" />
                }
            ]
        },
        {
            title: "Creative Fields",
            description: "Unleash your creativity with professional artistic training",
            icon: <Palette size={32} className="text-pink-600" />,
            cases: [
                {
                    title: "Graphic Design",
                    description: "UI/UX, branding, and digital illustration techniques",
                    icon: <Palette size={24} className="text-pink-500" />
                },
                {
                    title: "Photography & Video",
                    description: "Professional shooting, editing, and post-production",
                    icon: <Camera size={24} className="text-pink-500" />
                },
                {
                    title: "Digital Marketing",
                    description: "Social media, content strategy, and SEO optimization",
                    icon: <Globe size={24} className="text-pink-500" />
                }
            ]
        }
    ];

    const successStories = [
        {
            name: "Alexandra M.",
            role: "Senior Developer → Tech Lead",
            quote: "NovaLearn's leadership courses helped me make the transition from individual contributor to managing a team of 12 engineers.",
            stats: "Promoted within 6 months"
        },
        {
            name: "David K.",
            role: "Marketing Specialist → Director",
            quote: "The digital marketing certification gave me the confidence and skills to overhaul our company's entire marketing strategy.",
            stats: "300% ROI increase"
        },
        {
            name: "Sophia L.",
            role: "Career Transition",
            quote: "After 10 years in finance, I successfully pivoted to data science through NovaLearn's intensive bootcamp program.",
            stats: "Hired within 3 months"
        }
    ];

    const enterpriseUseCases = [
        {
            title: "Team Upskilling",
            description: "Keep your workforce competitive with continuous learning programs",
            benefits: [
                "Custom learning paths for teams",
                "Progress tracking dashboards",
                "Dedicated account manager"
            ]
        },
        {
            title: "New Technology Adoption",
            description: "Smoothly implement new systems and processes with tailored training",
            benefits: [
                "Technology-specific curricula",
                "Hands-on lab environments",
                "Change management support"
            ]
        },
        {
            title: "Leadership Development",
            description: "Build your next generation of executives with strategic training",
            benefits: [
                "Executive coaching",
                "360° assessments",
                "Business simulation exercises"
            ]
        }
    ];

    return (
        <div className="bg-white">
            <style jsx>{`
                @keyframes slideUpFade {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideUpFadeHero {
                    from {
                        opacity: 0;
                        transform: translateY(80px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideUpFadeCard {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-slide-up {
                    animation: slideUpFade 0.8s ease-out forwards;
                }

                .animate-slide-up-hero {
                    animation: slideUpFadeHero 1s ease-out forwards;
                }

                .animate-slide-up-card {
                    animation: slideUpFadeCard 0.6s ease-out forwards;
                }

                .animate-slide-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-slide-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-delay-1 {
                    animation-delay: 0.1s;
                }

                .animate-delay-2 {
                    animation-delay: 0.2s;
                }

                .animate-delay-3 {
                    animation-delay: 0.3s;
                }

                .animate-delay-4 {
                    animation-delay: 0.4s;
                }

                .animate-delay-5 {
                    animation-delay: 0.5s;
                }

                .animate-delay-6 {
                    animation-delay: 0.6s;
                }

                .animate-delay-7 {
                    animation-delay: 0.7s;
                }

                .animate-delay-8 {
                    animation-delay: 0.8s;
                }

                .animate-delay-9 {
                    animation-delay: 0.9s;
                }

                .animate-delay-10 {
                    animation-delay: 1.0s;
                }

                .animate-delay-11 {
                    animation-delay: 1.1s;
                }

                .animate-delay-12 {
                    animation-delay: 1.2s;
                }

                .section-animate {
                    opacity: 0;
                    transform: translateY(60px);
                }

                .section-animate.loaded {
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .card-animate {
                    opacity: 0;
                    transform: translateY(40px);
                }

                .card-animate.loaded {
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .hero-animate {
                    opacity: 0;
                    transform: translateY(80px);
                }

                .hero-animate.loaded {
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
            `}</style>
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
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden mt-12">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
                    <div className={`text-center pt-12 hero-animate ${isLoaded ? 'loaded' : ''}`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight pb-3">
                            {heroContent.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                            {heroContent.subtitle}
                        </p>
                        <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-12">
                            {heroContent.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/courses"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                <GraduationCap size={24} className="mr-3"/>
                                Browse All Courses
                                <ArrowRight size={20}
                                            className="ml-2 transform group-hover:translate-x-1 transition-transform"/>

                            </Link>
                            <Link
                                to="/pricing"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
                            >
                                View Pricing Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Use Case Categories */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tailored Learning Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find the perfect learning path for your specific goals and needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {useCaseCategories.map((category, index) => (
                            <div key={index}
                                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="p-6">
                                    <div
                                        className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {category.description}
                                    </p>
                                    <div className="space-y-4">
                                        {category.cases.map((useCase, caseIndex) => (
                                            <div key={caseIndex} className="flex items-start">
                                                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                    {useCase.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">
                                                        {useCase.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        {useCase.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <Link
                                        to={`/courses?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                                    >
                                        Explore {category.title}
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Stories */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Real Success Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how professionals like you have transformed their careers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {successStories.map((story, index) => (
                            <div key={index}
                                 className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        "{story.quote}"
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {story.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {story.name}
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            {story.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 bg-white rounded-lg p-3 inline-block">
                                    <span className="text-sm font-semibold text-blue-600">
                                        {story.stats}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enterprise Use Cases */}
            <div className="py-24 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Enterprise Learning Solutions
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                            Transform your organization with our corporate training programs
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {enterpriseUseCases.map((useCase, index) => (
                            <div key={index}
                                 className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {useCase.title}
                                </h3>
                                <p className="text-blue-200 mb-6">
                                    {useCase.description}
                                </p>
                                <ul className="space-y-3">
                                    {useCase.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                            <span className="text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6">
                                    <Link
                                        to="/enterprise"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                                    >
                                        Learn about enterprise solutions
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
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

            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-2 mr-3">
                                    <GraduationCap size={24} className="text-white"/>
                                </div>
                                <span className="text-2xl font-bold">NovaLearn</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Empowering learners and educators worldwide through innovative technology and accessible
                                education.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Facebook size={20}/>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter size={20}/>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin size={20}/>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
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

export default UseCases;
