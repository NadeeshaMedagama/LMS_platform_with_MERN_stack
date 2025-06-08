import React, { useState, useEffect } from 'react';
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    Mail,
    Phone,
    MapPin,
    Clock,
    Calendar,
    MessageSquare,
    User,
    Building,
    Globe,
    Shield,
    Star,
    CheckCircle,
    ArrowRight,
    Send,
    AlertCircle,
    FileText,
    Video,
    Coffee,
    Headphones,
    ChevronRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Download,
    ExternalLink
} from 'lucide-react';

const ContactAdmissions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeContactMethod, setActiveContactMethod] = useState('form');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: '',
        program: '',
        message: '',
        preferredContactTime: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const inquiryTypes = [
        { value: '', label: 'Select inquiry type' },
        { value: 'admissions', label: 'General Admissions' },
        { value: 'programs', label: 'Program Information' },
        { value: 'scholarships', label: 'Scholarships & Financial Aid' },
        { value: 'corporate', label: 'Corporate Training' },
        { value: 'partnerships', label: 'Partnership Opportunities' },
        { value: 'technical', label: 'Technical Support' },
        { value: 'other', label: 'Other' }
    ];

    const programs = [
        { value: '', label: 'Select program of interest' },
        { value: 'web-development', label: 'Web Development' },
        { value: 'data-science', label: 'Data Science & Analytics' },
        { value: 'digital-marketing', label: 'Digital Marketing' },
        { value: 'ux-design', label: 'UX/UI Design' },
        { value: 'business-management', label: 'Business Management' },
        { value: 'cybersecurity', label: 'Cybersecurity' },
        { value: 'ai-ml', label: 'AI & Machine Learning' },
        { value: 'project-management', label: 'Project Management' }
    ];

    const contactMethods = [
        {
            id: 'form',
            title: 'Contact Form',
            description: 'Send us a detailed message',
            icon: <MessageSquare size={24} />,
            available: '24/7'
        },
        {
            id: 'phone',
            title: 'Phone Call',
            description: 'Speak directly with our team',
            icon: <Phone size={24} />,
            available: 'Mon-Fri, 9am-6pm PST'
        },
        {
            id: 'video',
            title: 'Video Consultation',
            description: 'Schedule a face-to-face meeting',
            icon: <Video size={24} />,
            available: 'By appointment'
        },
        {
            id: 'chat',
            title: 'Live Chat',
            description: 'Get instant responses',
            icon: <Headphones size={24} />,
            available: 'Mon-Fri, 8am-8pm PST'
        }
    ];

    const admissionsTeam = [
        {
            name: 'Dr. Sarah Martinez',
            role: 'Director of Admissions',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b69a4c44?w=400&h=400&fit=crop&crop=face',
            email: 'sarah.martinez@novalearn.com',
            phone: '+1 (800) 555-0101',
            specialties: ['Graduate Programs', 'International Students', 'Scholarships']
        },
        {
            name: 'Michael Chen',
            role: 'Senior Admissions Counselor',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            email: 'michael.chen@novalearn.com',
            phone: '+1 (800) 555-0102',
            specialties: ['Tech Programs', 'Career Changers', 'Corporate Training']
        },
        {
            name: 'Emily Rodriguez',
            role: 'Student Success Coordinator',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            email: 'emily.rodriguez@novalearn.com',
            phone: '+1 (800) 555-0103',
            specialties: ['Student Support', 'Academic Planning', 'Transfer Credits']
        }
    ];

    const faqs = [
        {
            question: 'What are the admission requirements?',
            answer: 'Requirements vary by program. Generally, we require a high school diploma or equivalent, basic computer skills, and a passion for learning. Some advanced programs may have specific prerequisites.'
        },
        {
            question: 'How long does the admission process take?',
            answer: 'Most applications are processed within 2-3 business days. Complete applications with all required documents are reviewed faster. You\'ll receive confirmation and next steps via email.'
        },
        {
            question: 'Do you offer financial aid or scholarships?',
            answer: 'Yes! We offer various scholarships based on merit, need, and diversity. We also have payment plans and partner with several loan providers to make education accessible.'
        },
        {
            question: 'Can I transfer credits from other institutions?',
            answer: 'We accept transfer credits from accredited institutions. Our academic team reviews transcripts case-by-case to determine credit eligibility and course equivalencies.'
        },
        {
            question: 'What support is available for international students?',
            answer: 'We provide comprehensive support including visa guidance, English language support, cultural orientation, and dedicated international student advisors.'
        }
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.inquiryType) {
            newErrors.inquiryType = 'Please select an inquiry type';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

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

            // Reset form on success
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                inquiryType: '',
                program: '',
                message: '',
                preferredContactTime: '',
                agreeToTerms: false
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-green-100">
                        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle size={40} className="text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">Message Sent Successfully!</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Thank you for contacting our admissions team. We've received your inquiry and will respond within 24 hours during business days.
                        </p>
                        <div className="bg-green-50 rounded-2xl p-6 mb-8">
                            <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
                            <ul className="text-green-700 space-y-2 text-left">
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    You'll receive an email confirmation shortly
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    An admissions counselor will review your inquiry
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={16} className="mr-2 text-green-600" />
                                    We'll contact you with personalized guidance
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => setSubmitStatus(null)}
                            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <header className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-2 mr-3">
                                <GraduationCap size={32} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">NovaLearn</h1>
                                <p className="text-sm text-gray-600">Contact Admissions</p>
                            </div>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Programs</a>
                            <a href="#" className="text-blue-600 font-medium">Admissions</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 py-20">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex justify-center mb-6">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                                <MessageSquare size={48} className="text-white"/>
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Contact Our
                            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2 pb-3">
                                Admissions Team
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Get personalized guidance from our expert admissions counselors.
                            We're here to help you find the perfect program and navigate your educational journey.
                        </p>
                        <div className="flex justify-center space-x-8 text-center">
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">24hrs</div>
                                <div className="text-blue-200">Average Response</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">98%</div>
                                <div className="text-blue-200">Satisfaction Rate</div>
                            </div>
                            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="text-3xl font-bold text-white">15+</div>
                                <div className="text-blue-200">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Methods Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Preferred Contact Method</h2>
                        <p className="text-xl text-gray-600">We offer multiple ways to connect with our admissions team</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {contactMethods.map((method) => (
                            <div
                                key={method.id}
                                onClick={() => setActiveContactMethod(method.id)}
                                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                                    activeContactMethod === method.id
                                        ? 'border-blue-500 bg-blue-50 shadow-lg'
                                        : 'border-gray-200 bg-white hover:border-blue-300'
                                }`}
                            >
                                <div className={`rounded-xl p-3 w-fit mb-4 ${
                                    activeContactMethod === method.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {method.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                                <p className="text-xs text-blue-600 font-medium">{method.available}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Fill out the form below with your inquiry, and our admissions team will get back to you within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
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

                                    {/* Email and Phone */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1"/>
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inquiry Type and Program */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Inquiry Type <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                                <select
                                                    name="inquiryType"
                                                    value={formData.inquiryType}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none ${
                                                        errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                >
                                                    {inquiryTypes.map((type) => (
                                                        <option key={type.value} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {errors.inquiryType && (
                                                <p className="mt-2 text-sm text-red-600 flex items-center">
                                                    <AlertCircle size={16} className="mr-1"/>
                                                    {errors.inquiryType}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Program of Interest
                                            </label>
                                            <div className="relative">
                                                <BookOpen size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                                <select
                                                    name="program"
                                                    value={formData.program}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                                                >
                                                    {programs.map((program) => (
                                                        <option key={program.value} value={program.value}>
                                                            {program.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preferred Contact Time */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Preferred Contact Time
                                        </label>
                                        <div className="relative">
                                            <Clock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                            <input
                                                type="text"
                                                name="preferredContactTime"
                                                value={formData.preferredContactTime}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="e.g., Weekdays 2-5 PM PST"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <MessageSquare size={20} className="absolute left-3 top-4 text-gray-400"/>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={5}
                                                className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                                                    errors.message ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                                placeholder="Please tell us about your educational goals, questions about specific programs, or any other information that would help us assist you better..."
                                            />
                                        </div>
                                        {errors.message && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center">
                                                <AlertCircle size={16} className="mr-1"/>
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Terms Checkbox */}
                                    <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label className="ml-3 text-sm text-gray-700">
                                            I agree to be contacted by NovaLearn admissions team and acknowledge that I have read the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> <span className="text-red-500">*</span>
                                        </label>
                                    </div>
                                    {errors.agreeToTerms && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <AlertCircle size={16} className="mr-1"/>
                                            {errors.agreeToTerms}
                                        </p>
                                    )}

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
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={20} className="ml-2"/>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Quick Contact Info */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Phone size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Call Us</h4>
                                            <p className="text-gray-600">+1 (800) 555-NOVA</p>
                                            <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm PST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <Mail size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Email Us</h4>
                                            <p className="text-gray-600">admissions@novalearn.com</p>
                                            <p className="text-sm text-gray-500">Response within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-3 mr-4">
                                            <MapPin size={20} className="text-white"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Visit Us</h4>
                                            <p className="text-gray-600">123 Education Blvd</p>
                                            <p className="text-gray-600">San Francisco, CA 94107</p>
                                            <p className="text-sm text-gray-500">By appointment only</p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="font-semibold text-gray-900 mb-3">Connect With Us</h4>
                                        <div className="flex space-x-4">
                                            <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-600 transition-colors">
                                                <Facebook size={18}/>
                                            </a>
                                            <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-400 transition-colors">
                                                <Twitter size={18}/>
                                            </a>
                                            <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-700 transition-colors">
                                                <Linkedin size={18}/>
                                            </a>
                                            <a href="#" className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full text-pink-600 transition-colors">
                                                <Instagram size={18}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Admissions Team */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Admissions Team</h3>
                                <p className="text-gray-600 mb-6">
                                    Our dedicated counselors are ready to guide you through the application process and answer all your questions.
                                </p>

                                <div className="space-y-6">
                                    {admissionsTeam.map((member, index) => (
                                        <div key={index} className="flex items-start">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-16 h-16 rounded-xl object-cover mr-4"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                                                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {member.specialties.map((specialty, i) => (
                                                        <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Mail size={14} className="mr-1"/>
                                                    <span className="mr-3">{member.email}</span>
                                                    <Phone size={14} className="mr-1"/>
                                                    <span>{member.phone}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Resources */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Helpful Resources</h3>

                                <div className="space-y-4">
                                    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                                <FileText size={18} className="text-blue-600"/>
                                            </div>
                                            <span className="font-medium text-gray-900">Application Checklist</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400"/>
                                    </a>

                                    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                                        <div className="flex items-center">
                                            <div className="bg-purple-100 p-2 rounded-lg mr-4">
                                                <Video size={18} className="text-purple-600"/>
                                            </div>
                                            <span className="font-medium text-gray-900">Virtual Campus Tour</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400"/>
                                    </a>

                                    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                                        <div className="flex items-center">
                                            <div className="bg-green-100 p-2 rounded-lg mr-4">
                                                <Download size={18} className="text-green-600"/>
                                            </div>
                                            <span className="font-medium text-gray-900">Program Brochures</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400"/>
                                    </a>

                                    <a href="#" className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                                        <div className="flex items-center">
                                            <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                                                <Coffee size={18} className="text-yellow-600"/>
                                            </div>
                                            <span className="font-medium text-gray-900">Student Life Guide</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">Find quick answers to common admissions questions</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                                    <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                        <ChevronRight size={20} className="text-gray-400 transform transition-transform"/>
                                    </button>
                                    <div className="px-6 pb-6 pt-2 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Take the first step toward your educational goals. Our admissions team is here to help you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="#" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                            Apply Now <ArrowRight size={20} className="ml-2"/>
                        </a>
                        <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center">
                            Schedule a Call <Phone size={20} className="ml-2"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">NovaLearn</h3>
                            <p className="text-gray-400 text-sm">
                                Empowering students through innovative education since 2010.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tuition</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2023 NovaLearn. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
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
                </div>
            </footer>
        </div>
    );
};

export default ContactAdmissions;
