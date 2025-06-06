import React, { useState, useEffect } from 'react';
import {
    Search, Filter, Download, Eye, Play, FileText, Video,
    BookOpen, Upload, Star, MessageCircle, Calendar, User,
    ChevronDown, Grid, List, Clock, TrendingUp, Bell,
    GraduationCap, Award, Users, Menu, X, ArrowRight, Heart,
    ExternalLink, Tag, Archive, Bookmark, CheckCircle, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import {Link, useNavigate} from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Resources = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState('all');
    const [viewMode, setViewMode] = useState('grid');
    const [showFilters, setShowFilters] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [userRole, setUserRole] = useState('student'); // Mock user role
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

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Mock data for demonstration
    const resources = [
        {
            id: 1,
            title: "Introduction to Machine Learning - Complete Guide",
            description: "Comprehensive guide covering ML fundamentals, algorithms, and practical applications",
            type: "pdf",
            category: "lecture-notes",
            course: "Computer Science",
            instructor: "Dr. Sarah Johnson",
            uploadDate: "2024-05-15",
            downloads: 1250,
            rating: 4.8,
            views: 2340,
            size: "15.2 MB",
            tags: ["AI", "Machine Learning", "Algorithms"],
            isNew: true,
            thumbnail: "/api/placeholder/300/200"
        },
        {
            id: 2,
            title: "Advanced React Patterns - Video Series",
            description: "Deep dive into advanced React patterns including hooks, context, and performance optimization",
            type: "video",
            category: "tutorials",
            course: "Web Development",
            instructor: "Prof. Michael Chen",
            uploadDate: "2024-05-20",
            downloads: 890,
            rating: 4.9,
            views: 1560,
            duration: "3h 45m",
            tags: ["React", "JavaScript", "Frontend"],
            isNew: true,
            thumbnail: "/api/placeholder/300/200"
        },
        {
            id: 3,
            title: "Data Structures Assignment Solutions",
            description: "Complete solutions for Data Structures assignments with detailed explanations",
            type: "pdf",
            category: "assignments",
            course: "Computer Science",
            instructor: "Dr. Emily Rodriguez",
            uploadDate: "2024-05-10",
            downloads: 2100,
            rating: 4.7,
            views: 3200,
            size: "8.7 MB",
            tags: ["Data Structures", "Algorithms", "Solutions"],
            isNew: false,
            thumbnail: "/api/placeholder/300/200"
        },
        {
            id: 4,
            title: "UX Design Principles Workshop",
            description: "Interactive workshop covering fundamental UX design principles and methodologies",
            type: "link",
            category: "external",
            course: "Design",
            instructor: "Sarah Wilson",
            uploadDate: "2024-05-12",
            downloads: 0,
            rating: 4.6,
            views: 980,
            url: "https://example.com/ux-workshop",
            tags: ["UX", "Design", "Workshop"],
            isNew: false,
            thumbnail: "/api/placeholder/300/200"
        },
        {
            id: 5,
            title: "Python Programming Lab Manual",
            description: "Complete lab manual with practical exercises and coding challenges",
            type: "pdf",
            category: "lab-manuals",
            course: "Programming",
            instructor: "Prof. David Kumar",
            uploadDate: "2024-05-08",
            downloads: 1750,
            rating: 4.8,
            views: 2890,
            size: "22.1 MB",
            tags: ["Python", "Programming", "Lab"],
            isNew: false,
            thumbnail: "/api/placeholder/300/200"
        },
        {
            id: 6,
            title: "Database Design Past Papers",
            description: "Collection of past examination papers with model answers",
            type: "pdf",
            category: "exam-papers",
            course: "Database Systems",
            instructor: "Dr. Lisa Park",
            uploadDate: "2024-05-18",
            downloads: 650,
            rating: 4.5,
            views: 1200,
            size: "12.3 MB",
            tags: ["Database", "Exam", "SQL"],
            isNew: true,
            thumbnail: "/api/placeholder/300/200"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Resources', icon: Archive, count: resources.length },
        { id: 'lecture-notes', name: 'Lecture Notes', icon: FileText, count: 12 },
        { id: 'tutorials', name: 'Video Tutorials', icon: Video, count: 8 },
        { id: 'assignments', name: 'Assignments', icon: BookOpen, count: 15 },
        { id: 'exam-papers', name: 'Past Papers', icon: Award, count: 6 },
        { id: 'lab-manuals', name: 'Lab Manuals', icon: Users, count: 4 },
        { id: 'external', name: 'External Links', icon: Link, count: 10 }
    ];

    const courses = ['All Courses', 'Computer Science', 'Web Development', 'Design', 'Programming', 'Database Systems'];
    const types = ['All Types', 'PDF', 'Video', 'Link', 'Document'];

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
        const matchesType = selectedType === 'all' || resource.type === selectedType.toLowerCase();
        const matchesCourse = selectedCourse === 'all' || selectedCourse === 'All Courses' || resource.course === selectedCourse;

        return matchesSearch && matchesCategory && matchesType && matchesCourse;
    });

    const getTypeIcon = (type) => {
        switch (type) {
            case 'pdf': return <FileText size={20} className="text-red-500" />;
            case 'video': return <Video size={20} className="text-blue-500" />;
            case 'link': return <Link size={20} className="text-green-500" />;
            default: return <FileText size={20} className="text-gray-500" />;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'pdf': return 'bg-red-100 text-red-800';
            case 'video': return 'bg-blue-100 text-blue-800';
            case 'link': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <Header />
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="absolute top-12 left-10 w-40 h-40 bg-white rounded-full opacity-10 animate-pulse"></div>
                    <div
                        className="absolute top-18 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                                <Archive size={48} className="text-white"/>
                            </div>
                        </div>
                        <h1 className="text-6xl lg:text-6xl font-bold mb-6 block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent pb-3">
                            Learning Resources
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Access a comprehensive collection of study materials, tutorials, assignments, and reference
                            materials
                            to enhance your learning experience and academic success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Search and Filters Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search size={20}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                            <input
                                type="text"
                                placeholder="Search resources, topics, or tags..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Filter Controls */}
                        <div className="flex items-center gap-4">
                            <select
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                {courses.map(course => (
                                    <option key={course} value={course}>{course}</option>
                                ))}
                            </select>

                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                                {types.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>

                            {/* View Mode Toggle */}
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                                >
                                    <Grid size={20}/>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                                >
                                    <List size={20}/>
                                </button>
                            </div>

                            {/* Upload Button (for instructors/admins) */}
                            {(userRole === 'instructor' || userRole === 'admin') && (
                                <button
                                    onClick={() => setShowUploadModal(true)}
                                    className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                                >
                                    <Upload size={20} className="mr-2"/>
                                    Upload Resource
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar - Categories */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map(category => {
                                    const Icon = category.icon;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                                                selectedCategory === category.id
                                                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                                                    : 'hover:bg-gray-50 text-gray-600'
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                <Icon size={20} className="mr-3"/>
                                                <span className="font-medium">{category.name}</span>
                                            </div>
                                            <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                                                {category.count}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Recent Updates */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <Bell size={20} className="mr-2 text-blue-500"/>
                                    Recent Updates
                                </h3>
                                <div className="space-y-3">
                                    {resources.filter(r => r.isNew).slice(0, 3).map(resource => (
                                        <div key={resource.id} className="p-3 bg-blue-50 rounded-lg">
                                            <div className="flex items-center mb-1">
                                                {getTypeIcon(resource.type)}
                                                <span className="ml-2 text-sm font-medium text-gray-900 truncate">
                                                    {resource.title}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {new Date(resource.uploadDate).toLocaleDateString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3">
                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold text-gray-900 mr-4">
                                    {filteredResources.length} Resources Found
                                </h2>
                                {searchTerm && (
                                    <span className="text-gray-500">for "{searchTerm}"</span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <TrendingUp size={16}/>
                                <span>Sorted by popularity</span>
                            </div>
                        </div>

                        {/* Resources Grid/List */}
                        {viewMode === 'grid' ? (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredResources.map(resource => (
                                    <div key={resource.id}
                                         className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                        {/* Resource Thumbnail */}
                                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {getTypeIcon(resource.type)}
                                            </div>
                                            {resource.isNew && (
                                                <div
                                                    className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                    NEW
                                                </div>
                                            )}
                                            <div className="absolute bottom-3 left-3">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(resource.type)}`}>
                                                    {resource.type.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {resource.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {resource.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {resource.tags.slice(0, 3).map(tag => (
                                                    <span key={tag}
                                                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Metadata */}
                                            <div
                                                className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                <div className="flex items-center">
                                                    <User size={14} className="mr-1"/>
                                                    <span>{resource.instructor}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar size={14} className="mr-1"/>
                                                    <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>

                                            {/* Stats */}
                                            <div
                                                className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                                <div className="flex items-center gap-4">
                                                    <span className="flex items-center">
                                                        <Eye size={14} className="mr-1"/>
                                                        {resource.views}
                                                    </span>
                                                    <span className="flex items-center">
                                                        <Download size={14} className="mr-1"/>
                                                        {resource.downloads}
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Star size={14} className="text-yellow-400 mr-1 fill-current"/>
                                                    <span>{resource.rating}</span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-2">
                                                <button
                                                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                                                    {resource.type === 'link' ?
                                                        <ExternalLink size={16} className="mr-2"/> :
                                                        <Eye size={16} className="mr-2"/>}
                                                    {resource.type === 'link' ? 'Visit' : 'View'}
                                                </button>
                                                {resource.type !== 'link' && (
                                                    <button
                                                        className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                                        <Download size={16}/>
                                                    </button>
                                                )}
                                                <button
                                                    className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center">
                                                    <Bookmark size={16}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* List View */
                            <div className="space-y-4">
                                {filteredResources.map(resource => (
                                    <div key={resource.id}
                                         className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                        <div className="flex items-start gap-6">
                                            {/* Icon */}
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                                {getTypeIcon(resource.type)}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer">
                                                            {resource.title}
                                                            {resource.isNew && (
                                                                <span
                                                                    className="ml-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                                                                    NEW
                                                                </span>
                                                            )}
                                                        </h3>
                                                        <p className="text-gray-600 mb-3 line-clamp-2">
                                                            {resource.description}
                                                        </p>

                                                        {/* Tags */}
                                                        <div className="flex flex-wrap gap-1 mb-3">
                                                            {resource.tags.map(tag => (
                                                                <span key={tag}
                                                                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Metadata */}
                                                        <div className="flex items-center gap-6 text-sm text-gray-500">
                                                            <span className="flex items-center">
                                                                <User size={14} className="mr-1"/>
                                                                {resource.instructor}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Calendar size={14} className="mr-1"/>
                                                                {new Date(resource.uploadDate).toLocaleDateString()}
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Eye size={14} className="mr-1"/>
                                                                {resource.views} views
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Download size={14} className="mr-1"/>
                                                                {resource.downloads} downloads
                                                            </span>
                                                            <span className="flex items-center">
                                                                <Star size={14}
                                                                      className="text-yellow-400 mr-1 fill-current"/>
                                                                {resource.rating}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex items-center gap-2 ml-4">
                                                        <button
                                                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                                                            {resource.type === 'link' ?
                                                                <ExternalLink size={16} className="mr-2"/> :
                                                                <Eye size={16} className="mr-2"/>}
                                                            {resource.type === 'link' ? 'Visit' : 'View'}
                                                        </button>
                                                        {resource.type !== 'link' && (
                                                            <button
                                                                className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                                                                <Download size={16}/>
                                                            </button>
                                                        )}
                                                        <button
                                                            className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                                                            <Bookmark size={16}/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* No Results */}
                        {filteredResources.length === 0 && (
                            <div className="text-center py-16">
                                <div
                                    className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={32} className="text-gray-400"/>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                                <p className="text-gray-600 mb-6">Try adjusting your search terms or filters</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedCategory('all');
                                        setSelectedType('all');
                                        setSelectedCourse('all');
                                    }}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Upload Modal (for instructors/admins) */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900">Upload New Resource</h2>
                                <button
                                    onClick={() => setShowUploadModal(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X size={20}/>
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <form>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter resource title..."
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Describe the resource content..."
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                                            <option>Select Category</option>
                                            {categories.slice(1).map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500">
                                            <option>Select Course</option>
                                            {courses.slice(1).map(course => (
                                                <option key={course} value={course}>{course}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter tags separated by commas..."
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
                                    <div
                                        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                                        <Upload size={32} className="mx-auto text-gray-400 mb-4"/>
                                        <p className="text-gray-600 mb-2">Drag and drop your file here, or click to
                                            browse</p>
                                        <input type="file" className="hidden"/>
                                        <button type="button"
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                            Choose File
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowUploadModal(false)}
                                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Upload Resource
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
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

            <Footer />
        </div>
    );
};

export default Resources;
