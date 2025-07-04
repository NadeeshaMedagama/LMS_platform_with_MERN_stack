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
    GraduationCap, Menu, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const CoursesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState([]);

    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);
    const [isSubscribing, setIsSubscribing] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setSubscriptionStatus({ type: 'error', message: 'Please enter a valid email address' });
            return;
        }

        setIsSubscribing(true);
        setSubscriptionStatus(null);

        try {
            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Subscription failed');
            }

            setSubscriptionStatus({ type: 'success', message: data.message });
            setEmail('');
        } catch (error) {
            setSubscriptionStatus({ type: 'error', message: error.message });
        } finally {
            setIsSubscribing(false);
        }
    };

    // Mock courses data
    const courses = [
        {
            id: 1,
            title: "Complete React Development Bootcamp",
            description: "Master React from basics to advanced concepts with hands-on projects and real-world applications.",
            instructor: "Sarah Johnson",
            instructorAvatar: "SJ",
            rating: 4.9,
            reviews: 2847,
            students: 15420,
            duration: "42 hours",
            lessons: 156,
            price: 89.99,
            originalPrice: 199.99,
            level: "Intermediate",
            category: "Programming",
            tags: ["React", "JavaScript", "Frontend", "Web Development"],
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
            bestseller: true,
            updated: "2024-01-15",
            certificate: true,
            featured: true
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            description: "Learn professional UI/UX design principles, tools, and create stunning user interfaces.",
            instructor: "Michael Chen",
            instructorAvatar: "MC",
            rating: 4.8,
            reviews: 1923,
            students: 8765,
            duration: "38 hours",
            lessons: 124,
            price: 0,
            originalPrice: 0,
            level: "Beginner",
            category: "Design",
            tags: ["UI/UX", "Figma", "Design Thinking", "Prototyping"],
            thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
            bestseller: false,
            updated: "2024-01-20",
            certificate: true,
            featured: false
        },
        {
            id: 3,
            title: "Digital Marketing Strategy",
            description: "Comprehensive digital marketing course covering SEO, social media, PPC, and analytics.",
            instructor: "Emily Rodriguez",
            instructorAvatar: "ER",
            rating: 4.7,
            reviews: 3456,
            students: 12340,
            duration: "32 hours",
            lessons: 98,
            price: 79.99,
            originalPrice: 149.99,
            level: "Intermediate",
            category: "Business",
            tags: ["SEO", "Social Media", "PPC", "Analytics"],
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
            bestseller: true,
            updated: "2024-01-10",
            certificate: true,
            featured: true
        },
        {
            id: 4,
            title: "Python for Data Science",
            description: "Learn Python programming for data analysis, visualization, and machine learning applications.",
            instructor: "David Wilson",
            instructorAvatar: "DW",
            rating: 4.9,
            reviews: 4521,
            students: 18930,
            duration: "45 hours",
            lessons: 187,
            price: 99.99,
            originalPrice: 249.99,
            level: "Beginner",
            category: "Programming",
            tags: ["Python", "Data Science", "Machine Learning", "Analytics"],
            thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
            bestseller: true,
            updated: "2024-01-25",
            certificate: true,
            featured: false
        },
        {
            id: 5,
            title: "Advanced JavaScript & Node.js",
            description: "Deep dive into advanced JavaScript concepts and build scalable applications with Node.js.",
            instructor: "Alex Thompson",
            instructorAvatar: "AT",
            rating: 4.8,
            reviews: 2134,
            students: 9876,
            duration: "55 hours",
            lessons: 203,
            price: 119.99,
            originalPrice: 299.99,
            level: "Advanced",
            category: "Programming",
            tags: ["JavaScript", "Node.js", "Backend", "API Development"],
            thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
            bestseller: false,
            updated: "2024-01-12",
            certificate: true,
            featured: true
        },
        {
            id: 6,
            title: "Graphic Design Fundamentals",
            description: "Master the fundamentals of graphic design using Adobe Creative Suite and design principles.",
            instructor: "Lisa Park",
            instructorAvatar: "LP",
            rating: 4.6,
            reviews: 1567,
            students: 6543,
            duration: "28 hours",
            lessons: 89,
            price: 0,
            originalPrice: 0,
            level: "Beginner",
            category: "Design",
            tags: ["Graphic Design", "Adobe", "Typography", "Branding"],
            thumbnail: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=400&h=250&fit=crop",
            bestseller: false,
            updated: "2024-01-18",
            certificate: false,
            featured: false
        }
    ];

    const categories = ['All', 'Programming', 'Design', 'Business', 'Data Science', 'Marketing', 'Photography'];
    const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const priceFilters = ['All', 'Free', 'Paid'];
    const sortOptions = [
        { value: 'newest', label: 'Newest First' },
        { value: 'oldest', label: 'Oldest First' },
        { value: 'popular', label: 'Most Popular' },
        { value: 'rating', label: 'Highest Rated' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' }
    ];

    useEffect(() => {
        let filtered = courses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
            const matchesPrice = selectedPrice === 'All' ||
                (selectedPrice === 'Free' && course.price === 0) ||
                (selectedPrice === 'Paid' && course.price > 0);

            return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
        });

        // Sort filtered courses
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.updated) - new Date(a.updated);
                case 'oldest':
                    return new Date(a.updated) - new Date(b.updated);
                case 'popular':
                    return b.students - a.students;
                case 'rating':
                    return b.rating - a.rating;
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        setFilteredCourses(filtered);
    }, [searchTerm, selectedCategory, selectedLevel, selectedPrice, sortBy]);

    const CourseCard = ({ course, isGridView }) => (
        <div className={`group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden ${isGridView ? '' : 'flex'}`}>
            {/* Course Image */}
            <div className={`relative overflow-hidden ${isGridView ? 'h-48' : 'w-64 h-full'}`}>
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {course.bestseller && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Bestseller
                    </div>
                )}
                {course.price === 0 && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Free
                    </div>
                )}
                <div className="absolute bottom-3 right-3 flex space-x-2">
                    <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity">
                        <Heart size={16} className="text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-opacity">
                        <Share2 size={16} className="text-gray-600 hover:text-blue-500" />
                    </button>
                </div>
            </div>

            {/* Course Content */}
            <div className={`p-6 ${isGridView ? '' : 'flex-1'}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
            }`}>
              {course.level}
            </span>
                        {course.certificate && (
                            <Award size={16} className="text-yellow-500" />
                        )}
                    </div>
                    <span className="text-sm text-gray-500">{course.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {course.instructorAvatar}
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{course.instructor}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-gray-900">{course.rating}</span>
                        <span className="ml-1">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{course.duration}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
              {tag}
            </span>
                    ))}
                    {course.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
              +{course.tags.length - 3} more
            </span>
                    )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {course.price === 0 ? (
                            <span className="text-2xl font-bold text-green-600">Free</span>
                        ) : (
                            <>
                                <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                                {course.originalPrice > course.price && (
                                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                                )}
                            </>
                        )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Header */}
            <Header />

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4 pb-2">
                            Discover Amazing Courses
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Explore our vast collection of expert-led courses and transform your skills today
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <Search size={20}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                <input
                                    type="text"
                                    placeholder="Search courses, instructors, topics..."
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 shadow-lg focus:ring-4 focus:ring-blue-200 focus:outline-none text-lg"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Controls */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        {/* Left side - Filters */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <SlidersHorizontal size={20} className="mr-2"/>
                                Filters
                            </button>

                            {/* Desktop Filters */}
                            <div className="hidden lg:flex items-center space-x-4">
                                {/* Category Filter */}
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>

                                {/* Level Filter */}
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {levels.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>

                                {/* Price Filter */}
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {priceFilters.map(price => (
                                        <option key={price} value={price}>{price}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Right side - Sort and View */}
                        <div className="flex items-center justify-between lg:justify-end space-x-4">
                            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {filteredCourses.length} courses found
                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                {/* Sort Dropdown */}
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>

                                {/* View Mode Toggle */}
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                                    >
                                        <Grid3X3 size={20}/>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                                    >
                                        <List size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filters */}
                    {showFilters && (
                        <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {levels.map(level => (
                                        <option key={level} value={level}>{level}</option>
                                    ))}
                                </select>
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    {priceFilters.map(price => (
                                        <option key={price} value={price}>{price}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Featured Courses Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">🔥 Featured Courses</h2>
                            <p className="text-purple-100">Hand-picked courses from our expert instructors</p>
                        </div>
                        <TrendingUp size={48} className="text-purple-200"/>
                    </div>
                </div>
            </div>

            {/* Courses Grid/List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                {filteredCourses.length === 0 ? (
                    <div className="text-center py-16">
                        <BookOpen size={64} className="mx-auto text-gray-400 mb-4"/>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No courses found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                ) : (
                    <div className={viewMode === 'grid'
                        ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        : "space-y-6"
                    }>
                        {filteredCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                isGridView={viewMode === 'grid'}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Load More Button */}
            {filteredCourses.length > 0 && (
                <div className="text-center pb-16">
                    <Link
                        to="/courses-details"
                        className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Load More Courses
                    </Link>
                </div>
            )}

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <GraduationCap size={48} className="mx-auto text-white mb-6"/>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Updated with New Courses
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get notified when we launch new courses and exclusive offers
                    </p>
                    {/* Subscription Status Messages */}
                    {subscriptionStatus && (
                        <div className={`mb-4 p-3 rounded-lg ${
                            subscriptionStatus.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}>
                            {subscriptionStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-full focus:ring-4 focus:ring-blue-200 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            disabled={isSubscribing}
                            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CoursesPage;
