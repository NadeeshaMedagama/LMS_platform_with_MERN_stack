import React, { useState, useEffect } from 'react';
import {
    Calendar,
    Clock,
    User,
    Mail,
    Phone,
    Building,
    Users,
    CheckCircle,
    ArrowRight,
    Star,
    Play,
    Award,
    Target,
    Zap,
    Shield,
    Globe,
    MessageCircle,
    Video,
    BookOpen,
    TrendingUp,
    ArrowLeft,
    ChevronDown,
    ChevronRight
} from 'lucide-react';
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const BookDemo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        teamSize: '',
        interests: [],
        message: ''
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Generate available dates (next 14 days, excluding weekends)
    const generateAvailableDates = () => {
        const dates = [];
        const today = new Date();
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

        while (dates.length < 10) {
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // Exclude weekends
                dates.push(new Date(currentDate));
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const availableDates = generateAvailableDates();

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    const teamSizes = [
        '1-10 employees',
        '11-50 employees',
        '51-200 employees',
        '201-1000 employees',
        '1000+ employees'
    ];

    const interestAreas = [
        'Full-Stack Development',
        'Data Science & Analytics',
        'UX/UI Design',
        'Digital Marketing',
        'Project Management',
        'Cloud Computing',
        'AI & Machine Learning',
        'Cybersecurity',
        'Corporate Training',
        'Custom Solutions'
    ];

    const demoFeatures = [
        {
            icon: <Video size={24} />,
            title: "Live Platform Walkthrough",
            description: "See our learning platform in action with real courses and features"
        },
        {
            icon: <Target size={24} />,
            title: "Personalized Recommendations",
            description: "Get course suggestions tailored to your specific goals and needs"
        },
        {
            icon: <Users size={24} />,
            title: "Team Management Demo",
            description: "Explore our enterprise features for managing large learning teams"
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Progress Analytics",
            description: "Discover how to track learning progress and measure ROI"
        }
    ];

    const benefits = [
        "30-minute personalized demo",
        "Custom learning path recommendations",
        "Pricing options for your team size",
        "Implementation timeline discussion",
        "Q&A with learning experts"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleInterestToggle = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-2xl mx-auto transform transition-all duration-500 scale-100">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                        <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Demo Scheduled Successfully!</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Thank you for booking a demo with NovaLearn. We've sent a confirmation email with all the details.
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                        <h3 className="font-bold text-gray-900 mb-4">Your Demo Details:</h3>
                        <div className="space-y-2 text-left">
                            <div className="flex items-center">
                                <Calendar size={16} className="text-blue-600 mr-3" />
                                <span>{formatDate(new Date(selectedDate))}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock size={16} className="text-blue-600 mr-3" />
                                <span>{selectedTime}</span>
                            </div>
                            <div className="flex items-center">
                                <User size={16} className="text-blue-600 mr-3" />
                                <span>{formData.firstName} {formData.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 mr-4">
                                <Video size={40} className="text-white" />
                            </div>
                            <div className="text-left">
                                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                                    Book Your
                                    <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                        Personal Demo
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                            See how NovaLearn can transform your team's learning experience.
                            Get a personalized demo tailored to your specific needs.
                        </p>

                        <div className="grid md:grid-cols-5 gap-4 text-center">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center justify-center text-blue-200">
                                    <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Sidebar - What to Expect */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>

                                <div className="space-y-6 mb-8">
                                    {demoFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 flex-shrink-0">
                                                <div className="text-white">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                                    <h3 className="font-bold mb-4 flex items-center">
                                        <Star size={20} className="mr-2 text-yellow-400" />
                                        Trusted by 500K+ Learners
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center">
                                            <Award size={16} className="mr-2 text-yellow-400" />
                                            <span>98% course completion rate</span>
                                        </div>
                                        <div className="flex items-center">
                                            <TrendingUp size={16} className="mr-2 text-green-400" />
                                            <span>85% career advancement within 6 months</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Globe size={16} className="mr-2 text-blue-300" />
                                            <span>Available in 180+ countries</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Booking Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                                {/* Progress Bar */}
                                <div className="bg-gray-50 px-8 py-4">
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                                        <span>Select Date & Time</span>
                                        <span>Your Information</span>
                                        <span>Confirmation</span>
                                    </div>
                                    <div className="flex space-x-2">
                                        {[1, 2, 3].map((step) => (
                                            <div
                                                key={step}
                                                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                                                    step <= currentStep
                                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                                                        : 'bg-gray-200'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8">
                                    {/* Step 1: Date & Time Selection */}
                                    {currentStep === 1 && (
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Preferred Date & Time</h3>

                                                {/* Date Selection */}
                                                <div className="mb-8">
                                                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                                                        Choose Date
                                                    </label>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                        {availableDates.map((date, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                                                                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                                                                    selectedDate === date.toISOString().split('T')[0]
                                                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                                                }`}
                                                            >
                                                                <div className="font-semibold text-sm">
                                                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                                                </div>
                                                                <div className="text-lg font-bold">
                                                                    {date.getDate()}
                                                                </div>
                                                                <div className="text-xs text-gray-500">
                                                                    {date.toLocaleDateString('en-US', { month: 'short' })}
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Time Selection */}
                                                {selectedDate && (
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-4">
                                                            Choose Time (EST)
                                                        </label>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                            {timeSlots.map((time, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => setSelectedTime(time)}
                                                                    className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-center ${
                                                                        selectedTime === time
                                                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                                                    }`}
                                                                >
                                                                    <Clock size={16} className="mr-2" />
                                                                    <span className="font-semibold">{time}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {selectedDate && selectedTime && (
                                                <button
                                                    onClick={nextStep}
                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                                                >
                                                    <span>Continue to Information</span>
                                                    <ChevronRight size={20} className="ml-2" />
                                                </button>
                                            )}
                                        </div>
                                    )}

                                    {/* Step 2: Information Form */}
                                    {currentStep === 2 && (
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Yourself</h3>

                                            <form className="space-y-6">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            First Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            value={formData.firstName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Last Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Company Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                            Job Title
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="jobTitle"
                                                            value={formData.jobTitle}
                                                            onChange={handleInputChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Team Size
                                                    </label>
                                                    <select
                                                        name="teamSize"
                                                        value={formData.teamSize}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                    >
                                                        <option value="">Select team size</option>
                                                        {teamSizes.map((size, index) => (
                                                            <option key={index} value={size}>{size}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Areas of Interest (Select all that apply)
                                                    </label>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                        {interestAreas.map((interest, index) => (
                                                            <button
                                                                key={index}
                                                                type="button"
                                                                onClick={() => handleInterestToggle(interest)}
                                                                className={`p-3 rounded-lg border-2 text-sm transition-all duration-200 ${
                                                                    formData.interests.includes(interest)
                                                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                                                }`}
                                                            >
                                                                {interest}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Additional Message
                                                    </label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                        placeholder="Tell us about your specific learning goals or any questions you have..."
                                                    />
                                                </div>
                                            </form>

                                            <div className="flex gap-4">
                                                <button
                                                    onClick={prevStep}
                                                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                                                >
                                                    <ArrowLeft size={20} className="mr-2" />
                                                    Back
                                                </button>
                                                <button
                                                    onClick={nextStep}
                                                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
                                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                                >
                                                    <span>Review & Confirm</span>
                                                    <ChevronRight size={20} className="ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Step 3: Confirmation */}
                                    {currentStep === 3 && (
                                        <div className="space-y-8">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Confirm Your Demo</h3>

                                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                                                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                                    <Calendar size={20} className="text-blue-600 mr-2" />
                                                    Demo Details
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-600">Date:</span>
                                                        <div className="font-semibold">{formatDate(new Date(selectedDate))}</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Time:</span>
                                                        <div className="font-semibold">{selectedTime} EST</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Duration:</span>
                                                        <div className="font-semibold">30 minutes</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Format:</span>
                                                        <div className="font-semibold">Video Conference</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 rounded-2xl p-6">
                                                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                                    <User size={20} className="text-blue-600 mr-2" />
                                                    Your Information
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-600">Name:</span>
                                                        <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Email:</span>
                                                        <div className="font-semibold">{formData.email}</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Company:</span>
                                                        <div className="font-semibold">{formData.company}</div>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-600">Team Size:</span>
                                                        <div className="font-semibold">{formData.teamSize || 'Not specified'}</div>
                                                    </div>
                                                    {formData.jobTitle && (
                                                        <div>
                                                            <span className="text-gray-600">Job Title:</span>
                                                            <div className="font-semibold">{formData.jobTitle}</div>
                                                        </div>
                                                    )}
                                                    {formData.phone && (
                                                        <div>
                                                            <span className="text-gray-600">Phone:</span>
                                                            <div className="font-semibold">{formData.phone}</div>
                                                        </div>
                                                    )}
                                                </div>

                                                {formData.interests.length > 0 && (
                                                    <div className="mt-4">
                                                        <span className="text-gray-600">Areas of Interest:</span>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {formData.interests.map((interest, index) => (
                                                                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                                                    {interest}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {formData.message && (
                                                    <div className="mt-4">
                                                        <span className="text-gray-600">Additional Message:</span>
                                                        <div className="font-semibold mt-2 p-3 bg-white rounded-lg">
                                                            {formData.message}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                                                    <Shield size={20} className="text-yellow-600 mr-2" />
                                                    Important Information
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-2">
                                                    <li className="flex items-start">
                                                        <Zap size={16} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>You'll receive a confirmation email with the meeting link shortly</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <Clock size={16} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>Please join 5 minutes before your scheduled time</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MessageCircle size={16} className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>Have any questions ready for our learning specialists</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="flex gap-4">
                                                <button
                                                    onClick={prevStep}
                                                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                                                >
                                                    <ArrowLeft size={20} className="mr-2" />
                                                    Back
                                                </button>
                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={isSubmitting}
                                                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-70"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Confirm & Schedule Demo</span>
                                                            <CheckCircle size={20} className="ml-2" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default BookDemo;
