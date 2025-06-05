import React, { useState, useEffect } from 'react';
import {
    GraduationCap,
    Check,
    X,
    Star,
    Shield,
    CreditCard,
    Users,
    BookOpen,
    Award,
    Headphones,
    Zap,
    Clock,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Play,
    Lock, Menu, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [openFaq, setOpenFaq] = useState(null);
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

    const pricingPlans = [
        {
            name: "Starter",
            price: { monthly: 0, yearly: 0 },
            popular: false,
            description: "Perfect for individual learners getting started",
            features: [
                { text: "Access to 50+ free courses", included: true },
                { text: "Basic progress tracking", included: true },
                { text: "Community forum access", included: true },
                { text: "Mobile app access", included: true },
                { text: "Certificate of completion", included: false },
                { text: "Live sessions", included: false },
                { text: "Priority support", included: false },
                { text: "Custom learning paths", included: false },
                { text: "Advanced analytics", included: false }
            ],
            cta: "Start Free",
            trialDays: null
        },
        {
            name: "Pro",
            price: { monthly: 29, yearly: 290 },
            popular: true,
            description: "Ideal for serious learners and professionals",
            features: [
                { text: "Access to 1,200+ premium courses", included: true },
                { text: "Unlimited progress tracking", included: true },
                { text: "Priority community support", included: true },
                { text: "Mobile & desktop apps", included: true },
                { text: "Verified certificates", included: true },
                { text: "Monthly live sessions", included: true },
                { text: "Email & chat support", included: true },
                { text: "Custom learning paths", included: true },
                { text: "Advanced analytics", included: false }
            ],
            cta: "Start Pro Trial",
            trialDays: 14
        },
        {
            name: "Premium",
            price: { monthly: 59, yearly: 590 },
            popular: false,
            description: "For teams and advanced professionals",
            features: [
                { text: "Everything in Pro", included: true },
                { text: "Team management (up to 10 users)", included: true },
                { text: "Advanced analytics dashboard", included: true },
                { text: "Weekly live sessions", included: true },
                { text: "Phone support", included: true },
                { text: "Custom branding", included: true },
                { text: "API access", included: true },
                { text: "Integration with Zoom, Teams", included: true },
                { text: "Dedicated account manager", included: false }
            ],
            cta: "Start Premium Trial",
            trialDays: 14
        },
        {
            name: "Enterprise",
            price: { monthly: "Custom", yearly: "Custom" },
            popular: false,
            description: "Tailored solutions for large organizations",
            features: [
                { text: "Everything in Premium", included: true },
                { text: "Unlimited users", included: true },
                { text: "White-label solution", included: true },
                { text: "Custom integrations", included: true },
                { text: "Dedicated account manager", included: true },
                { text: "SLA guarantee", included: true },
                { text: "On-site training", included: true },
                { text: "24/7 priority support", included: true },
                { text: "Custom reporting", included: true }
            ],
            cta: "Contact Sales",
            trialDays: 30
        }
    ];

    const comparisonFeatures = [
        "Total Courses Available",
        "Monthly Downloads",
        "Users Included",
        "Storage Space",
        "Certificate Types",
        "Live Sessions per Month",
        "Support Channels",
        "Custom Branding",
        "API Access",
        "Mobile Apps",
        "Analytics Dashboard",
        "Learning Paths"
    ];

    const comparisonData = {
        "Total Courses Available": ["50+", "1,200+", "1,200+", "Unlimited"],
        "Monthly Downloads": ["10", "Unlimited", "Unlimited", "Unlimited"],
        "Users Included": ["1", "1", "10", "Unlimited"],
        "Storage Space": ["1GB", "10GB", "100GB", "Unlimited"],
        "Certificate Types": ["Basic", "Verified", "Verified + Custom", "White-label"],
        "Live Sessions per Month": ["0", "4", "8", "Unlimited"],
        "Support Channels": ["Community", "Email + Chat", "Email + Chat + Phone", "24/7 Dedicated"],
        "Custom Branding": [false, false, true, true],
        "API Access": [false, false, true, true],
        "Mobile Apps": [true, true, true, true],
        "Analytics Dashboard": ["Basic", "Standard", "Advanced", "Custom"],
        "Learning Paths": [false, true, true, true]
    };

    const testimonials = [
        {
            name: "Jennifer Walsh",
            role: "Learning & Development Manager",
            company: "TechCorp Inc.",
            content: "NovaLearn's Premium plan transformed our team training. The analytics help us track progress effectively.",
            rating: 5,
            plan: "Premium"
        },
        {
            name: "David Kim",
            role: "Software Engineer",
            company: "StartupXYZ",
            content: "The Pro plan is perfect for my professional development. Great value for money!",
            rating: 5,
            plan: "Pro"
        },
        {
            name: "Sarah Johnson",
            role: "HR Director",
            company: "Global Solutions Ltd.",
            content: "Enterprise plan's custom features and dedicated support exceeded our expectations.",
            rating: 5,
            plan: "Enterprise"
        }
    ];

    const faqs = [
        {
            question: "What happens after the trial ends?",
            answer: "After your trial ends, you'll automatically be enrolled in the free Starter plan unless you choose to upgrade. You won't lose access to your progress or certificates earned during the trial."
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel your subscription at any time. If you cancel a paid plan, you'll continue to have access until the end of your billing period, then automatically switch to the free Starter plan."
        },
        {
            question: "Are there student discounts available?",
            answer: "Yes! We offer 50% off on Pro and Premium plans for verified students. Contact our support team with your student ID to apply for the discount."
        },
        {
            question: "Do I need a credit card to start the trial?",
            answer: "No credit card is required for the Starter plan. For Pro and Premium trials, we require a credit card but won't charge until the trial period ends."
        },
        {
            question: "Can I switch plans during my subscription?",
            answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we use enterprise-grade security with 256-bit SSL encryption. We're SOC 2 Type II compliant and regularly undergo security audits."
        }
    ];

    const paymentMethods = [
        { name: "Visa", logo: "💳" },
        { name: "Mastercard", logo: "💳" },
        { name: "PayPal", logo: "🅿️" },
        { name: "Apple Pay", logo: "🍎" },
        { name: "Google Pay", logo: "🔵" }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const getSavings = (monthlyPrice, yearlyPrice) => {
        if (typeof monthlyPrice !== 'number' || typeof yearlyPrice !== 'number') return 0;
        const monthlyCost = monthlyPrice * 12;
        const savings = monthlyCost - yearlyPrice;
        return Math.round((savings / monthlyCost) * 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">

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
                <div className="absolute top-16 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
                <div
                    className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>


                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div
                    className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <div className={`text-center pt-12 hero-animate ${isLoaded ? 'loaded' : ''}`}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mb-6">
                                <BookOpen size={40} className="text-white"/> {/* Changed icon to BookOpen */}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight">
                                Choose Your
                                <span
                                    className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-4 pb-3">
                        Learning Plan
                    </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Unlock your potential with our flexible pricing plans. From free courses to enterprise
                                solutions,
                                we have the perfect plan to accelerate your learning journey.
                            </p>

                            {/* Billing Toggle */}
                            <div className="flex items-center justify-center mb-12">
                                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-1 shadow-lg">
                                    <div className="flex items-center">
                                        <button
                                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                                                billingCycle === 'monthly'
                                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md'
                                                    : 'text-white hover:text-blue-100'
                                            }`}
                                            onClick={() => setBillingCycle('monthly')}
                                        >
                                            Monthly
                                        </button>
                                        <button
                                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 relative ${
                                                billingCycle === 'yearly'
                                                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md'
                                                    : 'text-white hover:text-blue-100'
                                            }`}
                                            onClick={() => setBillingCycle('yearly')}
                                        >
                                            Yearly
                                            <span
                                                className="absolute -top-2 -right-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full">
                                    Save 17%
                                </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                                    plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div
                                            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Plan Header */}
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-600 mb-6">{plan.description}</p>

                                        <div className="mb-6">
                                            {typeof plan.price[billingCycle] === 'number' ? (
                                                <div>
                          <span className="text-5xl font-bold text-gray-900">
                            ${plan.price[billingCycle]}
                          </span>
                                                    <span className="text-gray-600 ml-2">
                            /{billingCycle === 'monthly' ? 'month' : 'year'}
                          </span>
                                                    {billingCycle === 'yearly' && plan.price.monthly > 0 && (
                                                        <div className="text-sm text-green-600 font-semibold mt-1">
                                                            Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                                                            annually
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-3xl font-bold text-gray-900">
                                                    {plan.price[billingCycle]}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                                                plan.popular
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:shadow-xl'
                                                    : plan.name === 'Enterprise'
                                                        ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl'
                                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                            }`}
                                        >
                                            {plan.cta}
                                            {plan.trialDays && (
                                                <span className="block text-sm opacity-90 mt-1">
                          {plan.trialDays}-day free trial
                        </span>
                                            )}
                                        </button>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center">
                                                {feature.included ? (
                                                    <Check size={20} className="text-green-500 mr-3 flex-shrink-0"/>
                                                ) : (
                                                    <X size={20} className="text-gray-300 mr-3 flex-shrink-0"/>
                                                )}
                                                <span
                                                    className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Compare All Features
                        </h2>
                        <p className="text-xl text-gray-600">
                            See exactly what's included in each plan
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="text-left py-6 px-4 font-semibold text-gray-900">Features</th>
                                {pricingPlans.map((plan, index) => (
                                    <th key={index} className="text-center py-6 px-4">
                                        <div className="font-bold text-gray-900 text-lg">{plan.name}</div>
                                        <div className="text-sm text-gray-600 mt-1">
                                            {typeof plan.price[billingCycle] === 'number'
                                                ? `$${plan.price[billingCycle]}/${billingCycle === 'monthly' ? 'mo' : 'yr'}`
                                                : plan.price[billingCycle]
                                            }
                                        </div>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {comparisonFeatures.map((feature, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                                    {comparisonData[feature].map((value, planIndex) => (
                                        <td key={planIndex} className="py-4 px-4 text-center">
                                            {typeof value === 'boolean' ? (
                                                value ? (
                                                    <Check size={20} className="text-green-500 mx-auto"/>
                                                ) : (
                                                    <X size={20} className="text-gray-300 mx-auto"/>
                                                )
                                            ) : (
                                                <span className="text-gray-700 font-medium">{value}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Special Offers */}
            <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Special Offers</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-3xl mb-4">🎓</div>
                            <h3 className="font-bold text-lg mb-2">Student Discount</h3>
                            <p className="text-gray-600 mb-4">50% off Pro & Premium plans with valid student ID</p>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold">
                                Apply Now →
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-3xl mb-4">🏢</div>
                            <h3 className="font-bold text-lg mb-2">Non-Profit Pricing</h3>
                            <p className="text-gray-600 mb-4">Special rates for educational institutions &
                                non-profits</p>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold">
                                Contact Us →
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="text-3xl mb-4">👥</div>
                            <h3 className="font-bold text-lg mb-2">Referral Program</h3>
                            <p className="text-gray-600 mb-4">Get 1 month free for every friend you refer</p>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold">
                                Learn More →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied learners and organizations
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}
                                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex mb-4">
                                    {Array.from({length: testimonial.rating}).map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                        {testimonial.plan} User
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about our pricing and plans
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp size={24} className="text-gray-500"/>
                                    ) : (
                                        <ChevronDown size={24} className="text-gray-500"/>
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Security & Payment Info */}
            <div className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center mb-8">
                        <Shield size={32} className="text-green-500 mr-3"/>
                        <h3 className="text-2xl font-bold text-gray-900">Secure & Trusted</h3>
                    </div>

                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your payment information is protected with bank-level security. We're SOC 2 Type II compliant
                        and use 256-bit SSL encryption for all transactions.
                    </p>

                    <div className="flex items-center justify-center space-x-8 mb-8">
                        {paymentMethods.map((method, index) => (
                            <div key={index} className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                                <span className="text-2xl mr-2">{method.logo}</span>
                                <span className="text-sm font-medium text-gray-700">{method.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Lock size={16} className="mr-2"/>
                            <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center">
                            <Shield size={16} className="mr-2"/>
                            <span>PCI Compliant</span>
                        </div>
                        <div className="flex items-center">
                            <CreditCard size={16} className="mr-2"/>
                            <span>Secure Payments</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Money-Back Guarantee & CTA */}
            <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            30-Day Money-Back Guarantee
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Not satisfied? Get a full refund within 30 days. No questions asked.
                            Start your learning journey risk-free today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                                <Play size={24} className="mr-3"/>
                                <span>Start Free Trial</span>
                                <ArrowRight size={20}
                                            className="ml-2 transform group-hover:translate-x-1 transition-transform"/>
                            </button>
                            <button
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                                <Users size={20} className="mr-2"/>
                                <span>Request Demo</span>
                            </button>
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

export default Pricing;
