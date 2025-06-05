import React, { useState, useEffect } from 'react';
import {
    Search,
    Filter,
    Star,
    Clock,
    Users,
    Play,
    BookOpen,
    Award,
    ChevronDown,
    Grid3X3,
    List,
    SlidersHorizontal,
    X,
    Heart,
    Share2,
    Download,
    Eye,
    TrendingUp,
    Calendar,
    DollarSign,
    User,
    GraduationCap,
    Menu,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowLeft,
    CheckCircle,
    PlayCircle,
    FileText,
    Globe,
    Languages,
    Bookmark,
    MessageCircle,
    ThumbsUp,
    ChevronRight,
    Shield,
    Zap,
    Target,
    Smartphone,
    Monitor,
    Headphones
} from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

const CourseDetail = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedModule, setExpandedModule] = useState(null);
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

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

    // Mock course data
    const course = {
        id: 1,
        title: "Complete React Development Bootcamp",
        subtitle: "Master React from basics to advanced concepts with hands-on projects and real-world applications",
        description: "This comprehensive React bootcamp is designed to take you from a complete beginner to an advanced React developer. You'll learn modern React concepts including hooks, context API, state management, and build multiple real-world projects. By the end of this course, you'll be confident in building scalable React applications and ready to land your first React developer job.",
        fullDescription: "This comprehensive React bootcamp is designed to take you from a complete beginner to an advanced React developer. You'll learn modern React concepts including hooks, context API, state management, and build multiple real-world projects. By the end of this course, you'll be confident in building scalable React applications and ready to land your first React developer job.\n\nWhat makes this course special:\n• Project-based learning with 10+ real-world applications\n• Modern React patterns and best practices\n• Integration with popular libraries and frameworks\n• Career guidance and interview preparation\n• Lifetime access to course materials\n• Active community support\n\nYou'll build projects including:\n• E-commerce website with payment integration\n• Social media dashboard\n• Task management application\n• Real-time chat application\n• Portfolio websites\n• And much more!",
        instructor: {
            name: "Sarah Johnson",
            avatar: "SJ",
            bio: "Senior Full-Stack Developer with 8+ years of experience at leading tech companies including Google and Meta. Sarah has taught over 50,000 students worldwide and is passionate about making complex concepts easy to understand.",
            expertise: ["React", "JavaScript", "Node.js", "AWS"],
            rating: 4.9,
            students: 50000,
            courses: 12
        },
        banner: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        rating: 4.9,
        reviews: 2847,
        students: 15420,
        duration: "42 hours",
        lessons: 156,
        modules: 12,
        price: 89.99,
        originalPrice: 199.99,
        level: "Intermediate",
        category: "Programming",
        language: "English",
        lastUpdated: "January 2024",
        tags: ["React", "JavaScript", "Frontend", "Web Development"],
        bestseller: true,
        certificate: true,
        featured: true,
        whatYouWillLearn: [
            "Build modern React applications from scratch",
            "Master React Hooks and functional components",
            "Implement state management with Context API and Redux",
            "Create responsive user interfaces with modern CSS",
            "Deploy applications to production environments",
            "Debug and optimize React applications",
            "Work with APIs and handle asynchronous operations",
            "Implement authentication and authorization"
        ],
        requirements: [
            "Basic knowledge of HTML, CSS, and JavaScript",
            "A computer with internet connection",
            "Willingness to learn and practice",
            "No prior React experience required"
        ],
        features: [
            { icon: Monitor, text: "42 hours of video content" },
            { icon: FileText, text: "156 downloadable resources" },
            { icon: Smartphone, text: "Access on mobile and desktop" },
            { icon: Shield, text: "Certificate of completion" },
            { icon: Zap, text: "Lifetime access" },
            { icon: Users, text: "Community support" }
        ],
        curriculum: [
            {
                id: 1,
                title: "Getting Started with React",
                duration: "3h 45m",
                lessons: [
                    { id: 1, title: "What is React?", duration: "15:30", type: "video", preview: true },
                    { id: 2, title: "Setting up Development Environment", duration: "22:15", type: "video", preview: false },
                    { id: 3, title: "Your First React Component", duration: "18:45", type: "video", preview: true },
                    { id: 4, title: "Understanding JSX", duration: "25:30", type: "video", preview: false },
                    { id: 5, title: "Exercise: Create Your First App", duration: "30:00", type: "exercise", preview: false }
                ]
            },
            {
                id: 2,
                title: "Components and Props",
                duration: "4h 20m",
                lessons: [
                    { id: 6, title: "Functional vs Class Components", duration: "20:15", type: "video", preview: false },
                    { id: 7, title: "Props and Data Flow", duration: "25:30", type: "video", preview: false },
                    { id: 8, title: "Component Composition", duration: "18:45", type: "video", preview: false },
                    { id: 9, title: "PropTypes and Validation", duration: "15:30", type: "video", preview: false },
                    { id: 10, title: "Project: Building a Card Component", duration: "45:00", type: "project", preview: false }
                ]
            },
            {
                id: 3,
                title: "State and Event Handling",
                duration: "5h 15m",
                lessons: [
                    { id: 11, title: "Understanding State", duration: "22:30", type: "video", preview: false },
                    { id: 12, title: "Event Handling in React", duration: "18:15", type: "video", preview: false },
                    { id: 13, title: "Controlled vs Uncontrolled Components", duration: "25:45", type: "video", preview: false },
                    { id: 14, title: "Forms and User Input", duration: "30:20", type: "video", preview: false },
                    { id: 15, title: "Project: Todo List Application", duration: "60:00", type: "project", preview: false }
                ]
            }
        ]
    };

    const reviews = [
        {
            id: 1,
            name: "Michael Chen",
            avatar: "MC",
            rating: 5,
            date: "2 weeks ago",
            review: "Excellent course! Sarah explains complex concepts in a very understandable way. The projects are practical and helped me land my first React job.",
            helpful: 45
        },
        {
            id: 2,
            name: "Emily Rodriguez",
            avatar: "ER",
            rating: 5,
            date: "1 month ago",
            review: "This course exceeded my expectations. The curriculum is well-structured and the instructor provides great support. Highly recommended!",
            helpful: 32
        },
        {
            id: 3,
            name: "David Wilson",
            avatar: "DW",
            rating: 4,
            date: "3 weeks ago",
            review: "Great content and practical examples. The only minor issue is that some videos could be a bit shorter, but overall fantastic value.",
            helpful: 28
        }
    ];

    const handleEnroll = () => {
        if (course.price === 0) {
            setIsEnrolled(true);
            setProgress(0);
        } else {
            // Handle payment logic here
            console.log("Redirect to payment");
        }
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={16}
                className={`${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <div className="pt-24 pb-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-medium">{course.category}</span>
                    </div>
                </div>
            </div>

            {/* Course Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left Column - Course Info */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'
                                }`}>
                                    {course.level}
                                </span>
                                <span className="text-blue-200">{course.category}</span>
                                {course.bestseller && (
                                    <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        Bestseller
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                {course.title}
                            </h1>

                            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                                {course.subtitle}
                            </p>

                            {/* Course Stats */}
                            <div className="flex flex-wrap items-center gap-6 text-blue-100 mb-8">
                                <div className="flex items-center">
                                    <Star size={20} className="text-yellow-400 fill-current mr-2" />
                                    <span className="font-semibold text-white">{course.rating}</span>
                                    <span className="ml-1">({course.reviews.toLocaleString()} reviews)</span>
                                </div>
                                <div className="flex items-center">
                                    <Users size={20} className="mr-2" />
                                    <span>{course.students.toLocaleString()} students</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock size={20} className="mr-2" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <Globe size={20} className="mr-2" />
                                    <span>{course.language}</span>
                                </div>
                            </div>

                            {/* Instructor Info */}
                            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    {course.instructor.avatar}
                                </div>
                                <div>
                                    <p className="text-blue-100 mb-1">Instructor</p>
                                    <h3 className="text-xl font-semibold text-white">{course.instructor.name}</h3>
                                    <div className="flex items-center mt-2 text-blue-200 text-sm">
                                        <Star size={16} className="text-yellow-400 fill-current mr-1" />
                                        <span>{course.instructor.rating} instructor rating</span>
                                        <span className="mx-2">•</span>
                                        <span>{course.instructor.students.toLocaleString()} students</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Course Preview & Enrollment */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-32">
                                {/* Course Preview */}
                                <div className="relative">
                                    <img
                                        src={course.banner}
                                        alt={course.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-opacity group">
                                            <Play size={32} className="text-blue-600 ml-1 group-hover:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <button
                                            onClick={toggleWishlist}
                                            className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity"
                                        >
                                            <Heart size={20} className={`${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    {/* Price */}
                                    <div className="mb-6">
                                        {course.price === 0 ? (
                                            <div className="text-3xl font-bold text-green-600">Free</div>
                                        ) : (
                                            <div className="flex items-center space-x-3">
                                                <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                                                <span className="text-xl text-gray-500 line-through">${course.originalPrice}</span>
                                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-sm font-semibold">
                                                    {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3 mb-6">
                                        {isEnrolled ? (
                                            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                                                Continue Learning
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleEnroll}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                                            >
                                                {course.price === 0 ? 'Enroll for Free' : 'Buy Now'}
                                            </button>
                                        )}
                                        <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* Course Features */}
                                    <div className="space-y-3 mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">This course includes:</h4>
                                        {course.features.map((feature, index) => (
                                            <div key={index} className="flex items-center text-sm text-gray-600">
                                                <feature.icon size={16} className="mr-3 text-blue-600" />
                                                <span>{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="flex space-x-3">
                                        <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Share2 size={16} className="mr-2" />
                                            Share
                                        </button>
                                        <button className="flex-1 flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                            <Bookmark size={16} className="mr-2" />
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Progress Bar (if enrolled) */}
                        {isEnrolled && (
                            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold text-gray-900">Your Progress</h3>
                                    <span className="text-sm text-gray-600">{progress}% complete</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-blue-600 to-purple-700 h-3 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Tabs */}
                        <div className="flex space-x-8 border-b border-gray-200 mb-8">
                            {[
                                { id: 'overview', label: 'Overview' },
                                { id: 'curriculum', label: 'Curriculum' },
                                { id: 'instructor', label: 'Instructor' },
                                { id: 'reviews', label: 'Reviews' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 font-semibold transition-colors border-b-2 ${
                                        activeTab === tab.id
                                            ? 'text-blue-600 border-blue-600'
                                            : 'text-gray-600 border-transparent hover:text-blue-600'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* Course Description */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About this course</h2>
                                    <div className="prose prose-lg max-w-none">
                                        <p className="text-gray-700 leading-relaxed">
                                            {showFullDescription ? course.fullDescription : course.description}
                                        </p>
                                        <button
                                            onClick={() => setShowFullDescription(!showFullDescription)}
                                            className="text-blue-600 hover:text-blue-700 font-medium mt-4"
                                        >
                                            {showFullDescription ? 'Show less' : 'Show more'}
                                        </button>
                                    </div>
                                </div>

                                {/* What You'll Learn */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What you'll learn</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {course.whatYouWillLearn.map((item, index) => (
                                            <div key={index} className="flex items-start">
                                                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Course Requirements */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                                    <ul className="space-y-3">
                                        {course.requirements.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3"></div>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Who This Course Is For */}
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Who this course is for</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl">
                                            <User size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Beginners</h3>
                                                <p className="text-gray-600 text-sm">Who want to start their journey in web development</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-purple-50 rounded-xl">
                                            <GraduationCap size={20} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Students</h3>
                                                <p className="text-gray-600 text-sm">Looking to enhance their skills for academic projects</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-green-50 rounded-xl">
                                            <TrendingUp size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Professionals</h3>
                                                <p className="text-gray-600 text-sm">Wanting to upskill for career advancement</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-yellow-50 rounded-xl">
                                            <Target size={20} className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Career Changers</h3>
                                                <p className="text-gray-600 text-sm">Transitioning into tech from other industries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'curriculum' && (
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl font-bold text-gray-900">Course Content</h2>
                                        <div className="text-sm text-gray-600">
                                            {course.modules} modules • {course.lessons} lessons • {course.duration}
                                        </div>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {course.curriculum.map((module) => (
                                        <div key={module.id} className="p-6">
                                            <div
                                                className="flex items-center justify-between cursor-pointer"
                                                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                                            >
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                                                    <div className="text-sm text-gray-500 mt-1">
                                                        {module.lessons.length} lessons • {module.duration}
                                                    </div>
                                                </div>
                                                <ChevronDown
                                                    size={20}
                                                    className={`text-gray-500 transition-transform duration-200 ${
                                                        expandedModule === module.id ? 'transform rotate-180' : ''
                                                    }`}
                                                />
                                            </div>
                                            {expandedModule === module.id && (
                                                <div className="mt-4 space-y-3">
                                                    {module.lessons.map((lesson) => (
                                                        <div
                                                            key={lesson.id}
                                                            className={`flex items-center justify-between p-3 rounded-lg ${
                                                                lesson.preview ? 'bg-blue-50' : 'bg-gray-50'
                                                            }`}
                                                        >
                                                            <div className="flex items-center">
                                                                {lesson.type === 'video' ? (
                                                                    <PlayCircle size={20} className="text-gray-500 mr-3" />
                                                                ) : lesson.type === 'exercise' ? (
                                                                    <FileText size={20} className="text-gray-500 mr-3" />
                                                                ) : (
                                                                    <Award size={20} className="text-gray-500 mr-3" />
                                                                )}
                                                                <span className="text-gray-700">{lesson.title}</span>
                                                                {lesson.preview && (
                                                                    <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                                                                        Preview
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {lesson.duration}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'instructor' && (
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                                            {course.instructor.avatar}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{course.instructor.name}</h2>
                                            <p className="text-gray-600 mb-3">{course.instructor.bio}</p>
                                            <div className="flex items-center space-x-6">
                                                <div className="flex items-center">
                                                    <Star size={18} className="text-yellow-400 fill-current mr-1" />
                                                    <span className="font-medium">{course.instructor.rating} Instructor Rating</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users size={18} className="text-gray-500 mr-1" />
                                                    <span>{course.instructor.students.toLocaleString()} Students</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <BookOpen size={18} className="text-gray-500 mr-1" />
                                                    <span>{course.instructor.courses} Courses</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {course.instructor.expertise.map((skill, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">More Courses by {course.instructor.name}</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[1, 2].map((item) => (
                                            <div key={item} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                                                <div className="h-32 bg-gray-100 rounded-lg mb-3"></div>
                                                <h4 className="font-medium text-gray-900 mb-1">Advanced React Patterns</h4>
                                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                                    <span>4.9</span>
                                                    <Star size={14} className="text-yellow-400 fill-current mx-1" />
                                                    <span>(1,245 reviews)</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold">$89.99</span>
                                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                                                        Bestseller
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-8">
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Student feedback</h2>
                                            <div className="flex items-center">
                                                <div className="text-4xl font-bold mr-4">{course.rating}</div>
                                                <div>
                                                    <div className="flex mb-1">
                                                        {renderStars(course.rating)}
                                                    </div>
                                                    <div className="text-gray-600">
                                                        Course Rating • {course.reviews.toLocaleString()} reviews
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0">
                                            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                                Write a Review
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {reviews.map((review) => (
                                            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                                <div className="flex items-start mb-4">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                                        {review.avatar}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                                            <div className="flex mr-2">
                                                                {renderStars(review.rating)}
                                                            </div>
                                                            <span>•</span>
                                                            <span className="ml-2">{review.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 mb-4">{review.review}</p>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <button className="flex items-center mr-4 hover:text-blue-600">
                                                        <ThumbsUp size={16} className="mr-1" />
                                                        <span>Helpful ({review.helpful})</span>
                                                    </button>
                                                    <button className="flex items-center hover:text-blue-600">
                                                        <MessageCircle size={16} className="mr-1" />
                                                        <span>Comment</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-8 w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors">
                                        Load More Reviews
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Course Features */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Course Features</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Clock size={18} className="text-blue-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="font-medium">{course.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <BookOpen size={18} className="text-blue-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Lectures</p>
                                        <p className="font-medium">{course.lessons}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Users size={18} className="text-blue-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Enrolled</p>
                                        <p className="font-medium">{course.students.toLocaleString()}+ students</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Languages size={18} className="text-blue-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Language</p>
                                        <p className="font-medium">{course.language}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Calendar size={18} className="text-blue-600 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Last Updated</p>
                                        <p className="font-medium">{course.lastUpdated}</p>
                                    </div>
                                </div>
                                {course.certificate && (
                                    <div className="flex items-center">
                                        <Award size={18} className="text-blue-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-gray-500">Certificate</p>
                                            <p className="font-medium">Included</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {course.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Share Course */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Share this course</h3>
                            <div className="flex space-x-3">
                                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <Facebook size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                                    <Linkedin size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
                                    <Instagram size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Courses */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Similar Courses</h2>
                        <Link to="/courses" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                            View all courses <ChevronRight size={18} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((course) => (
                            <div key={course} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute top-4 right-4">
                                        <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity">
                                            <Heart size={20} className="text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
                                            Beginner
                                        </span>
                                        <span className="text-gray-500 text-sm">• 32 hours</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">JavaScript Mastery</h3>
                                    <p className="text-gray-600 mb-4">From fundamentals to advanced concepts with hands-on projects</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Star size={16} className="text-yellow-400 fill-current mr-1" />
                                            <span className="font-medium">4.8</span>
                                            <span className="text-gray-500 text-sm ml-1">(1,245)</span>
                                        </div>
                                        <div className="font-bold">$89.99</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-2 mr-3">
                                    <GraduationCap size={24} className="text-white"/>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                                    NovaLearn
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Empowering learners worldwide with high-quality, accessible education.
                            </p>
                            <div className="flex space-x-4">
                                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Facebook size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Linkedin size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Instagram size={18} />
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Webinars</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Docs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Copyright</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Policies</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2024 NovaLearn. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CourseDetail;
