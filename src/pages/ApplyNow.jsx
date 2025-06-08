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
    ArrowRight,
    Star,
    Shield,
    Globe,
    Heart,
    ChevronDown,
    X,
    Menu,
    FileText,
    Target,
    Calendar,
    Briefcase,
    School,
    UserCheck,
    Zap,
    TrendingUp,
    Camera,
    Eye,
    EyeOff
} from 'lucide-react';

const ApplyNow = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Personal Information
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        city: '',
        country: '',
        profilePhoto: null,

        // Professional Information
        userRole: '',
        currentOccupation: '',
        workExperience: '',
        education: '',
        skills: '',
        linkedinProfile: '',
        portfolioWebsite: '',
        cv: null,

        // Learning Goals
        learningGoals: '',
        coursesInterested: [],
        timeCommitment: '',
        previousExperience: '',
        motivation: '',

        // Additional Information
        hearAboutUs: '',
        specialRequirements: '',
        agreeToTerms: false,
        newsletter: false,
        marketingEmails: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const totalSteps = 4;

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const userRoles = [
        { value: '', label: 'Select your primary goal' },
        { value: 'student-beginner', label: '🎓 Student - Complete Beginner' },
        { value: 'student-intermediate', label: '📚 Student - Some Experience' },
        { value: 'professional-upskill', label: '💼 Professional - Upskilling' },
        { value: 'career-changer', label: '🔄 Career Changer' },
        { value: 'teacher-individual', label: '👨‍🏫 Individual Instructor' },
        { value: 'teacher-institution', label: '🏫 Institution Representative' },
        { value: 'corporate-training', label: '🏢 Corporate Training Manager' },
        { value: 'entrepreneur', label: '🚀 Entrepreneur/Business Owner' }
    ];

    const coursesOptions = [
        'Web Development',
        'Data Science',
        'Machine Learning',
        'Digital Marketing',
        'UI/UX Design',
        'Mobile App Development',
        'Cloud Computing',
        'Cybersecurity',
        'Business Analytics',
        'Project Management',
        'Artificial Intelligence',
        'Blockchain Technology'
    ];

    const timeCommitmentOptions = [
        { value: '', label: 'Select your availability' },
        { value: '1-2-hours', label: '1-2 hours per week' },
        { value: '3-5-hours', label: '3-5 hours per week' },
        { value: '6-10-hours', label: '6-10 hours per week' },
        { value: '10-plus-hours', label: '10+ hours per week' },
        { value: 'full-time', label: 'Full-time commitment' }
    ];

    const hearAboutUsOptions = [
        { value: '', label: 'How did you hear about us?' },
        { value: 'google-search', label: 'Google Search' },
        { value: 'social-media', label: 'Social Media' },
        { value: 'friend-referral', label: 'Friend/Colleague Referral' },
        { value: 'online-ad', label: 'Online Advertisement' },
        { value: 'blog-article', label: 'Blog/Article' },
        { value: 'conference-event', label: 'Conference/Event' },
        { value: 'university', label: 'University/School' },
        { value: 'other', label: 'Other' }
    ];

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            // Personal Information validation
            if (!formData.fullName.trim()) {
                newErrors.fullName = 'Full name is required';
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
            const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
            if (!formData.phone.trim()) {
                newErrors.phone = 'Phone number is required';
            } else if (!phoneRegex.test(formData.phone)) {
                newErrors.phone = 'Please enter a valid phone number';
            }
            if (!formData.dateOfBirth) {
                newErrors.dateOfBirth = 'Date of birth is required';
            }
            if (!formData.country.trim()) {
                newErrors.country = 'Country is required';
            }
        }

        if (step === 2) {
            // Professional Information validation
            if (!formData.userRole) {
                newErrors.userRole = 'Please select your primary goal';
            }
            if (!formData.currentOccupation.trim()) {
                newErrors.currentOccupation = 'Current occupation is required';
            }
            if (!formData.education.trim()) {
                newErrors.education = 'Education background is required';
            }
        }

        if (step === 3) {
            // Learning Goals validation
            if (!formData.learningGoals.trim()) {
                newErrors.learningGoals = 'Please describe your learning goals';
            }
            if (formData.coursesInterested.length === 0) {
                newErrors.coursesInterested = 'Please select at least one course area';
            }
            if (!formData.timeCommitment) {
                newErrors.timeCommitment = 'Please select your time commitment';
            }
        }

        if (step === 4) {
            // Final validation
            if (!formData.agreeToTerms) {
                newErrors.agreeToTerms = 'You must agree to the terms and conditions';
            }
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
            if (name === 'coursesInterested') {
                setFormData(prev => ({
                    ...prev,
                    coursesInterested: checked
                        ? [...prev.coursesInterested, value]
                        : prev.coursesInterested.filter(course => course !== value)
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    [name]: checked
                }));
            }
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

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep(currentStep)) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                dateOfBirth: '',
                address: '',
                city: '',
                country: '',
                profilePhoto: null,
                userRole: '',
                currentOccupation: '',
                workExperience: '',
                education: '',
                skills: '',
                linkedinProfile: '',
                portfolioWebsite: '',
                cv: null,
                learningGoals: '',
                coursesInterested: [],
                timeCommitment: '',
                previousExperience: '',
                motivation: '',
                hearAboutUs: '',
                specialRequirements: '',
                agreeToTerms: false,
                newsletter: false,
                marketingEmails: false
            });
            setCurrentStep(1);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
                        <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle size={48} className="text-white" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">Application Submitted!</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Congratulations! Your application has been successfully submitted. Our admissions team will review it carefully and get back to you within 2-3 business days.
                        </p>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-green-800 mb-4">What happens next?</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div className="flex items-start">
                                    <div className="bg-green-500 rounded-full p-2 mr-3 mt-1">
                                        <Mail size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Email Confirmation</h4>
                                        <p className="text-green-700 text-sm">Check your inbox for confirmation</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-500 rounded-full p-2 mr-3 mt-1">
                                        <Eye size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Application Review</h4>
                                        <p className="text-green-700 text-sm">Our team evaluates your profile</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-500 rounded-full p-2 mr-3 mt-1">
                                        <UserCheck size={16} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-green-800">Admission Decision</h4>
                                        <p className="text-green-700 text-sm">Receive your acceptance letter</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setSubmitStatus(null)}
                                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                            >
                                Submit Another Application
                            </button>
                            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200">
                                Return to Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-2 mr-3">
                                <GraduationCap size={24} className="text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900">NovaLearn Application</h1>
                        </div>
                        <div className="text-sm text-gray-600">
                            Step {currentStep} of {totalSteps}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Application Progress</span>
                        <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-gradient-to-r from-blue-600 to-purple-700 h-3 rounded-full transition-all duration-500"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 py-16">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Start Your Learning Journey
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Complete your application to join thousands of learners transforming their careers with NovaLearn
                        </p>

                        {/* Step Indicators */}
                        <div className="flex justify-center space-x-8 text-center">
                            {[
                                { num: 1, title: "Personal Info", icon: <User size={20} /> },
                                { num: 2, title: "Professional", icon: <Briefcase size={20} /> },
                                { num: 3, title: "Learning Goals", icon: <Target size={20} /> },
                                { num: 4, title: "Finalize", icon: <CheckCircle size={20} /> }
                            ].map((step, index) => (
                                <div key={index} className={`flex flex-col items-center ${currentStep >= step.num ? 'text-white' : 'text-blue-300'}`}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                                        currentStep >= step.num
                                            ? 'bg-white bg-opacity-20 backdrop-blur-sm'
                                            : 'bg-white bg-opacity-10'
                                    }`}>
                                        {step.icon}
                                    </div>
                                    <span className="text-sm font-medium">{step.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Form */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Personal Information */}
                            {currentStep === 1 && (
                                <div className="p-8 lg:p-12">
                                    <div className="text-center mb-8">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-fit mx-auto mb-4">
                                            <User size={32} className="text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
                                        <p className="text-gray-600">Let's start with some basic information about you</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Full Name */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                                                    <AlertCircle size={16} className="mr-1" />
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
                                                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
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
                                                <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        {/* Date of Birth */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Date of Birth <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="date"
                                                    name="dateOfBirth"
                                                    value={formData.dateOfBirth}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                />
                                            </div>
                                            {errors.dateOfBirth && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.dateOfBirth}
                                                </p>
                                            )}
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Country <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Globe size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.country ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="United States"
                                                />
                                            </div>
                                            {errors.country && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.country}
                                                </p>
                                            )}
                                        </div>

                                        {/* City */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                City
                                            </label>
                                            <div className="relative">
                                                <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="New York"
                                                />
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Address
                                            </label>
                                            <div className="relative">
                                                <MapPin size={20} className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                                    placeholder="Enter your full address"
                                                />
                                            </div>
                                        </div>

                                        {/* Profile Photo */}
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Profile Photo (Optional)
                                            </label>
                                            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                                <input
                                                    type="file"
                                                    name="profilePhoto"
                                                    onChange={handleInputChange}
                                                    accept="image/*"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <div className="text-center">
                                                    <Camera size={32} className="mx-auto text-gray-400 mb-2" />
                                                    <p className="text-gray-600">
                                                        {formData.profilePhoto ? formData.profilePhoto.name : 'Click to upload your photo'}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Professional Information */}
                            {currentStep === 2 && (
                                <div className="p-8 lg:p-12">
                                    <div className="text-center mb-8">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-fit mx-auto mb-4">
                                            <Briefcase size={32} className="text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Background</h2>
                                        <p className="text-gray-600">Tell us about your professional experience and goals</p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* User Role */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Primary Goal <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="userRole"
                                                    value={formData.userRole}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-4 pr-12 py-4 border-2 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.userRole ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                >
                                                    {userRoles.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                            {errors.userRole && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.userRole}
                                                </p>
                                            )}
                                        </div>

                                        {/* Current Occupation */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Current Occupation <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Briefcase size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="currentOccupation"
                                                    value={formData.currentOccupation}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.currentOccupation ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="e.g. Software Developer, Student, etc."
                                                />
                                            </div>
                                            {errors.currentOccupation && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.currentOccupation}
                                                </p>
                                            )}
                                        </div>

                                        {/* Work Experience */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Work Experience (Years)
                                            </label>
                                            <div className="relative">
                                                <TrendingUp size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="workExperience"
                                                    value={formData.workExperience}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="e.g. 3 years in web development"
                                                />
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Education Background <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <School size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="education"
                                                    value={formData.education}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.education ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="e.g. Bachelor's in Computer Science"
                                                />
                                            </div>
                                            {errors.education && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.education}
                                                </p>
                                            )}
                                        </div>

                                        {/* Skills */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Key Skills
                                            </label>
                                            <div className="relative">
                                                <Zap size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="skills"
                                                    value={formData.skills}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="e.g. JavaScript, Python, UI/UX Design"
                                                />
                                            </div>
                                        </div>

                                        {/* LinkedIn Profile */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                LinkedIn Profile
                                            </label>
                                            <div className="relative">
                                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="url"
                                                    name="linkedinProfile"
                                                    value={formData.linkedinProfile}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="https://linkedin.com/in/yourprofile"
                                                />
                                            </div>
                                        </div>

                                        {/* Portfolio Website */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Portfolio Website
                                            </label>
                                            <div className="relative">
                                                <Globe size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="url"
                                                    name="portfolioWebsite"
                                                    value={formData.portfolioWebsite}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="https://yourportfolio.com"
                                                />
                                            </div>
                                        </div>

                                        {/* CV Upload */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Upload CV (Optional)
                                            </label>
                                            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition-colors">
                                                <input
                                                    type="file"
                                                    name="cv"
                                                    onChange={handleInputChange}
                                                    accept=".pdf,.doc,.docx"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <div className="text-center">
                                                    <FileText size={32} className="mx-auto text-gray-400 mb-2" />
                                                    <p className="text-gray-600">
                                                        {formData.cv ? formData.cv.name : 'Click to upload your CV'}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">PDF, DOC up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Learning Goals */}
                            {currentStep === 3 && (
                                <div className="p-8 lg:p-12">
                                    <div className="text-center mb-8">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-fit mx-auto mb-4">
                                            <Target size={32} className="text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning Goals</h2>
                                        <p className="text-gray-600">Tell us about your educational objectives and preferences</p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Learning Goals */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                What are your learning goals? <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    name="learningGoals"
                                                    value={formData.learningGoals}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.learningGoals ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="Describe what you hope to achieve through this program..."
                                                />
                                            </div>
                                            {errors.learningGoals && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.learningGoals}
                                                </p>
                                            )}
                                        </div>

                                        {/* Courses Interested */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Course Areas of Interest <span className="text-red-500">*</span>
                                            </label>
                                            <div className={`p-4 border-2 rounded-xl ${
                                                errors.coursesInterested ? 'border-red-500' : 'border-gray-300'
                                            }`}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {coursesOptions.map((course, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                id={`course-${index}`}
                                                                name="coursesInterested"
                                                                value={course}
                                                                checked={formData.coursesInterested.includes(course)}
                                                                onChange={handleInputChange}
                                                                className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="ml-2 text-gray-700">
                                                                {course}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {errors.coursesInterested && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.coursesInterested}
                                                </p>
                                            )}
                                        </div>

                                        {/* Time Commitment */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Weekly Time Commitment <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="timeCommitment"
                                                    value={formData.timeCommitment}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-4 pr-12 py-4 border-2 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.timeCommitment ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                >
                                                    {timeCommitmentOptions.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <Clock size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                            {errors.timeCommitment && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1" />
                                                    {errors.timeCommitment}
                                                </p>
                                            )}
                                        </div>

                                        {/* Previous Experience */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Previous Online Learning Experience
                                            </label>
                                            <div className="relative">
                                                <BookOpen size={20} className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    name="previousExperience"
                                                    value={formData.previousExperience}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Describe any previous online learning experiences you've had..."
                                                />
                                            </div>
                                        </div>

                                        {/* Motivation */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                What motivates you to learn?
                                            </label>
                                            <div className="relative">
                                                <Heart size={20} className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    name="motivation"
                                                    value={formData.motivation}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Tell us what drives your learning journey..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Additional Information */}
                            {currentStep === 4 && (
                                <div className="p-8 lg:p-12">
                                    <div className="text-center mb-8">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-fit mx-auto mb-4">
                                            <CheckCircle size={32} className="text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Final Details</h2>
                                        <p className="text-gray-600">Almost done! Just a few more details to complete your application</p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* How did you hear about us? */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                How did you hear about us?
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="hearAboutUs"
                                                    value={formData.hearAboutUs}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-4 pr-12 py-4 border-2 border-gray-300 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    {hearAboutUsOptions.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <MessageSquare size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Special Requirements */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Special Requirements
                                            </label>
                                            <div className="relative">
                                                <Shield size={20} className="absolute left-3 top-4 text-gray-400" />
                                                <textarea
                                                    name="specialRequirements"
                                                    value={formData.specialRequirements}
                                                    onChange={handleInputChange}
                                                    rows={3}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Any accessibility needs or special requirements we should know about?"
                                                />
                                            </div>
                                        </div>

                                        {/* Terms and Conditions */}
                                        <div className="pt-4">
                                            <div className={`p-4 border-2 rounded-xl ${
                                                errors.agreeToTerms ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                            }`}>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            type="checkbox"
                                                            id="agreeToTerms"
                                                            name="agreeToTerms"
                                                            checked={formData.agreeToTerms}
                                                            onChange={handleInputChange}
                                                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <label htmlFor="agreeToTerms" className="text-sm font-medium text-gray-700">
                                                            I agree to the NovaLearn <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> <span className="text-red-500">*</span>
                                                        </label>
                                                        {errors.agreeToTerms && (
                                                            <p className="mt-2 text-sm text-red-600 flex items-center">
                                                                <AlertCircle size={16} className="mr-1" />
                                                                {errors.agreeToTerms}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Newsletter Subscription */}
                                        <div className="border-2 border-gray-300 rounded-xl p-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        type="checkbox"
                                                        id="newsletter"
                                                        name="newsletter"
                                                        checked={formData.newsletter}
                                                        onChange={handleInputChange}
                                                        className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <label htmlFor="newsletter" className="text-sm font-medium text-gray-700">
                                                        Subscribe to our monthly newsletter
                                                    </label>
                                                    <p className="text-sm text-gray-500 mt-1">Get updates on new courses, events, and learning resources</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Marketing Emails */}
                                        <div className="border-2 border-gray-300 rounded-xl p-4">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        type="checkbox"
                                                        id="marketingEmails"
                                                        name="marketingEmails"
                                                        checked={formData.marketingEmails}
                                                        onChange={handleInputChange}
                                                        className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <label htmlFor="marketingEmails" className="text-sm font-medium text-gray-700">
                                                        Receive occasional marketing emails
                                                    </label>
                                                    <p className="text-sm text-gray-500 mt-1">We'll send you information about special offers and promotions</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Final Review */}
                                        <div className="bg-blue-50 rounded-xl p-6 mt-8">
                                            <h3 className="text-lg font-semibold text-blue-800 mb-4">Review Your Information</h3>
                                            <p className="text-blue-700 mb-4">
                                                Please take a moment to review all the information you've provided before submitting your application.
                                            </p>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="confirmAccuracy"
                                                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                    required
                                                />
                                                <label htmlFor="confirmAccuracy" className="ml-2 text-sm text-blue-800">
                                                    I confirm that all information provided is accurate to the best of my knowledge
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="px-8 pb-8 lg:px-12 lg:pb-12">
                                <div className="flex flex-col-reverse sm:flex-row justify-between gap-4">
                                    {currentStep > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center"
                                        >
                                            <ArrowRight size={20} className="transform rotate-180 mr-2" />
                                            Back
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}

                                    {currentStep < totalSteps ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                                        >
                                            Continue
                                            <ArrowRight size={20} className="ml-2" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center disabled:opacity-70"
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
                                                    Submit Application
                                                    <CheckCircle size={20} className="ml-2" />
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Help Section */}
                    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-fit mx-auto">
                                    <MessageSquare size={32} className="text-white" />
                                </div>
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need help with your application?</h3>
                                <p className="text-gray-600 mb-4">
                                    Our admissions team is here to assist you with any questions you might have about the application process.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                                        <Mail size={18} className="mr-2" />
                                        Email Admissions
                                    </button>
                                    <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                                        <Phone size={18} className="mr-2" />
                                        Schedule a Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-2 mr-3">
                                    <GraduationCap size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold">NovaLearn</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Empowering the next generation of learners with cutting-edge education.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Programs</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Courses</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Professional Certificates</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Degree Programs</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Organizations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Scholarships</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2023 NovaLearn. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ApplyNow;
