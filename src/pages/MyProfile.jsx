import React, { useState, useRef } from 'react';
import Header from '../components/layout/Header';

import {
    User, Mail, Phone, Calendar, MapPin, Edit3, Save, X, Upload, Camera,
    GraduationCap, BookOpen, Award, TrendingUp, Star, Clock, CheckCircle,
    MessageSquare, Bell, Settings, Shield, CreditCard, Trophy, Target,
    Eye, EyeOff, Lock, Smartphone, Globe, Users, BarChart3, FileText,
    Plus, Search, Filter, ChevronRight, ChevronDown, AlertCircle,
    Download, Share2, Info, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react';
import Footer from "../components/layout/Footer";

const MyProfile = () => {
    // User data state (this would come from your database)
    const [user, setUser] = useState({
        id: "STU001",
        name: "Sarah Johnson",
        username: "sarah.johnson",
        email: "sarah.johnson@example.com",
        phone: "+1 (555) 123-4567",
        dateOfBirth: "1995-03-15",
        gender: "Female",
        address: "123 Learning Street, Education City, EC 12345",
        role: "Student", // or "Instructor"
        profilePicture: null,
        enrollmentNumber: "EN2024001",
        joinDate: "2024-01-15",
        lastLogin: "2024-06-05T10:30:00Z"
    });

    // Profile editing state
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({...user});
    const [activeTab, setActiveTab] = useState('overview');
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const fileInputRef = useRef(null);

    // Sample data for different sections
    const enrolledCourses = [
        { id: 1, title: "React.js Fundamentals", progress: 85, grade: "A-", status: "In Progress", instructor: "John Doe", enrolled: "2024-01-15" },
        { id: 2, title: "Node.js Backend Development", progress: 100, grade: "A", status: "Completed", instructor: "Jane Smith", enrolled: "2024-02-01" },
        { id: 3, title: "Database Design", progress: 60, grade: "B+", status: "In Progress", instructor: "Mike Wilson", enrolled: "2024-03-01" }
    ];

    const certificates = [
        { id: 1, title: "React Developer Certification", issueDate: "2024-05-15", validUntil: "2025-05-15", status: "Valid" },
        { id: 2, title: "JavaScript Fundamentals", issueDate: "2024-04-20", validUntil: "2025-04-20", status: "Valid" }
    ];

    const recentActivity = [
        { id: 1, type: "course", title: "Completed React.js Module 5", date: "2024-06-04", icon: <CheckCircle className="text-green-500" /> },
        { id: 2, type: "assignment", title: "Submitted Node.js Project", date: "2024-06-03", icon: <FileText className="text-blue-500" /> },
        { id: 3, type: "quiz", title: "Database Quiz - Score: 92%", date: "2024-06-02", icon: <Trophy className="text-yellow-500" /> }
    ];

    const notifications = [
        { id: 1, title: "New assignment due tomorrow", type: "deadline", date: "2024-06-05", read: false },
        { id: 2, title: "Course update: React.js", type: "update", date: "2024-06-04", read: true },
        { id: 3, title: "Certificate ready for download", type: "achievement", date: "2024-06-03", read: false }
    ];

    const gamificationData = {
        badges: [
            { id: 1, name: "Early Bird", description: "Completed 5 courses before deadline", icon: "🏆", earned: true },
            { id: 2, name: "Quiz Master", description: "Scored 90+ on 10 quizzes", icon: "🎯", earned: true },
            { id: 3, name: "Discussion Leader", description: "Made 50+ forum posts", icon: "💬", earned: false }
        ],
        streak: 15,
        totalPoints: 2850,
        leaderboardRank: 23
    };

    // Handlers
    const handleProfilePictureUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditedUser({ ...editedUser, profilePicture: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        setUser(editedUser);
        setIsEditing(false);
        // Here you would typically send the data to your backend
        console.log('Profile updated:', editedUser);
    };

    const handleCancelEdit = () => {
        setEditedUser({...user});
        setIsEditing(false);
    };

    const handlePasswordChange = () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('New passwords do not match');
            return;
        }
        // Handle password change logic here
        console.log('Password change requested');
        setShowPasswordModal(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const getUserInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 60) return 'bg-yellow-500';
        return 'bg-blue-500';
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <User size={20} /> },
        { id: 'courses', label: 'My Courses', icon: <BookOpen size={20} /> },
        { id: 'certificates', label: 'Certificates', icon: <Award size={20} /> },
        { id: 'activity', label: 'Activity', icon: <TrendingUp size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
        { id: 'security', label: 'Security', icon: <Shield size={20} /> },
        { id: 'billing', label: 'Billing', icon: <CreditCard size={20} /> }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-12">
                        <div
                            className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-white p-1 shadow-lg">
                                    {(isEditing ? editedUser.profilePicture : user.profilePicture) ? (
                                        <img
                                            src={isEditing ? editedUser.profilePicture : user.profilePicture}
                                            alt="Profile"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                                            {getUserInitials(user.name)}
                                        </div>
                                    )}
                                </div>
                                {isEditing && (
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                                    >
                                        <Camera size={16}/>
                                    </button>
                                )}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePictureUpload}
                                    className="hidden"
                                />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                                <p className="text-blue-100 text-lg mb-1">@{user.username}</p>
                                <p className="text-blue-200 mb-4">{user.role} • Member
                                    since {new Date(user.joinDate).toLocaleDateString('en-US', {
                                        month: 'long',
                                        year: 'numeric'
                                    })}</p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <div className="text-white font-semibold">{enrolledCourses.length}</div>
                                        <div className="text-blue-100 text-sm">Courses</div>
                                    </div>
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <div className="text-white font-semibold">{certificates.length}</div>
                                        <div className="text-blue-100 text-sm">Certificates</div>
                                    </div>
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <div className="text-white font-semibold">{gamificationData.totalPoints}</div>
                                        <div className="text-blue-100 text-sm">Points</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {!isEditing ? (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
                                    >
                                        <Edit3 size={18}/>
                                        <span>Edit Profile</span>
                                    </button>
                                ) : (
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={handleSaveProfile}
                                            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                                        >
                                            <Save size={18}/>
                                            <span>Save</span>
                                        </button>
                                        <button
                                            onClick={handleCancelEdit}
                                            className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2"
                                        >
                                            <X size={18}/>
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                                        activeTab === tab.id
                                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* Basic Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                        <User className="mr-2 text-blue-600" size={24}/>
                                        Basic Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full
                                                Name</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedUser.name}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        name: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{user.name}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedUser.username}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        username: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">@{user.username}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email
                                                Address</label>
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    value={editedUser.email}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        email: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 flex items-center">
                                                    <Mail size={16} className="mr-2 text-gray-500"/>
                                                    {user.email}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Contact
                                                Number</label>
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    value={editedUser.phone}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        phone: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 flex items-center">
                                                    <Phone size={16} className="mr-2 text-gray-500"/>
                                                    {user.phone}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Date of
                                                Birth</label>
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    value={editedUser.dateOfBirth}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        dateOfBirth: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 flex items-center">
                                                    <Calendar size={16} className="mr-2 text-gray-500"/>
                                                    {new Date(user.dateOfBirth).toLocaleDateString()}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                                            {isEditing ? (
                                                <select
                                                    value={editedUser.gender}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        gender: e.target.value
                                                    })}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                    <option value="Prefer not to say">Prefer not to say</option>
                                                </select>
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{user.gender}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                            {isEditing ? (
                                                <textarea
                                                    value={editedUser.address}
                                                    onChange={(e) => setEditedUser({
                                                        ...editedUser,
                                                        address: e.target.value
                                                    })}
                                                    rows={3}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 flex items-start">
                                                    <MapPin size={16} className="mr-2 text-gray-500 mt-0.5"/>
                                                    {user.address}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Academic Information */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                        <GraduationCap className="mr-2 text-blue-600" size={24}/>
                                        Academic Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                {user.role === 'Student' ? 'Student ID' : 'Instructor ID'}
                                            </label>
                                            <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 font-mono">{user.id}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                                            <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">
                                                <span
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                    {user.role}
                                                </span>
                                            </p>
                                        </div>
                                        {user.role === 'Student' && (
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Enrollment
                                                    Number</label>
                                                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 font-mono">{user.enrollmentNumber}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                        <TrendingUp className="mr-2 text-blue-600" size={24}/>
                                        Quick Stats
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div
                                            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                                            <div
                                                className="text-2xl font-bold text-blue-600 mb-1">{enrolledCourses.length}</div>
                                            <div className="text-sm text-blue-700">Enrolled Courses</div>
                                        </div>
                                        <div
                                            className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 text-center">
                                            <div
                                                className="text-2xl font-bold text-green-600 mb-1">{enrolledCourses.filter(c => c.status === 'Completed').length}</div>
                                            <div className="text-sm text-green-700">Completed</div>
                                        </div>
                                        <div
                                            className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4 text-center">
                                            <div
                                                className="text-2xl font-bold text-yellow-600 mb-1">{certificates.length}</div>
                                            <div className="text-sm text-yellow-700">Certificates</div>
                                        </div>
                                        <div
                                            className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 text-center">
                                            <div
                                                className="text-2xl font-bold text-purple-600 mb-1">{gamificationData.streak}</div>
                                            <div className="text-sm text-purple-700">Day Streak</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'courses' && (
                            <div className="space-y-6">
                                <div
                                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <h3 className="text-xl font-semibold text-gray-900">My Courses</h3>
                                    <div className="flex space-x-3">
                                        <div className="relative">
                                            <Search size={20}
                                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                            <input
                                                type="text"
                                                placeholder="Search courses..."
                                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                        </div>
                                        <button
                                            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                            <Filter size={20}/>
                                            <span>Filter</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    {enrolledCourses.map((course) => (
                                        <div key={course.id}
                                             className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                            <div
                                                className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h4>
                                                    <p className="text-gray-600">Instructor: {course.instructor}</p>
                                                    <p className="text-sm text-gray-500">Enrolled: {new Date(course.enrolled).toLocaleDateString()}</p>
                                                </div>
                                                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        course.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                            course.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                                'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {course.status}
                                                    </span>
                                                    {course.grade && (
                                                        <span
                                                            className="text-lg font-bold text-gray-900">{course.grade}</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium text-gray-700">Progress</span>
                                                    <span
                                                        className="text-sm font-medium text-gray-900">{course.progress}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                                                        style={{width: `${course.progress}%`}}
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <button className="text-blue-600 hover:text-blue-700 font-medium">
                                                    {course.status === 'Completed' ? 'View Certificate' : 'Continue Learning'}
                                                </button>
                                                <ChevronRight size={20} className="text-gray-400"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'certificates' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900">My Certificates</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {certificates.map((cert) => (
                                        <div key={cert.id}
                                             className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                                                    <p className="text-gray-600">Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
                                                    <p className="text-gray-600">Valid
                                                        until: {new Date(cert.validUntil).toLocaleDateString()}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                    cert.status === 'Valid' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {cert.status}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <button
                                                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2">
                                                    <Download size={18}/>
                                                    <span>Download PDF</span>
                                                </button>
                                                <button
                                                    className="text-gray-600 hover:text-gray-700 font-medium flex items-center space-x-2">
                                                    <Share2 size={18}/>
                                                    <span>Share</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'activity' && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id}
                                             className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
                                            <div className="flex items-start">
                                                <div className="mr-4 mt-1">
                                                    {activity.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-gray-900 mb-1">{activity.title}</h4>
                                                    <p className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}</p>
                                                </div>
                                                <ChevronRight size={20} className="text-gray-400"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-gray-900">Notifications</h3>
                                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                                        Mark all as read
                                    </button>
                                </div>
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    {notifications.map((notification) => (
                                        <div
                                            key={notification.id}
                                            className={`p-6 border-b border-gray-200 last:border-b-0 transition-colors ${
                                                !notification.read ? 'bg-blue-50' : 'hover:bg-gray-50'
                                            }`}
                                        >
                                            <div className="flex items-start">
                                                <div className={`mr-4 mt-1 flex-shrink-0 ${
                                                    notification.type === 'deadline' ? 'text-red-500' :
                                                        notification.type === 'update' ? 'text-blue-500' :
                                                            'text-yellow-500'
                                                }`}>
                                                    {notification.type === 'deadline' ? <AlertCircle size={20}/> :
                                                        notification.type === 'update' ? <Info size={20}/> :
                                                            <Award size={20}/>}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className={`font-medium mb-1 ${
                                                        !notification.read ? 'text-gray-900 font-semibold' : 'text-gray-700'
                                                    }`}>
                                                        {notification.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">{new Date(notification.date).toLocaleDateString()}</p>
                                                </div>
                                                {!notification.read && (
                                                    <span className="ml-2 w-2 h-2 rounded-full bg-blue-600"></span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-8">
                                <h3 className="text-xl font-semibold text-gray-900">Account Settings</h3>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-4">Preferences</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Dark Mode</p>
                                                <p className="text-sm text-gray-500">Switch between light and dark
                                                    theme</p>
                                            </div>
                                            <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                <input type="checkbox" id="dark-mode" className="sr-only"/>
                                                <label htmlFor="dark-mode"
                                                       className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                                    <span
                                                        className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Email Notifications</p>
                                                <p className="text-sm text-gray-500">Receive email notifications</p>
                                            </div>
                                            <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                <input type="checkbox" id="email-notifications" className="sr-only"
                                                       checked/>
                                                <label htmlFor="email-notifications"
                                                       className="block overflow-hidden h-6 rounded-full bg-blue-600 cursor-pointer">
                                                    <span
                                                        className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out translate-x-6"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Push Notifications</p>
                                                <p className="text-sm text-gray-500">Receive push notifications</p>
                                            </div>
                                            <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                <input type="checkbox" id="push-notifications" className="sr-only"
                                                       checked/>
                                                <label htmlFor="push-notifications"
                                                       className="block overflow-hidden h-6 rounded-full bg-blue-600 cursor-pointer">
                                                    <span
                                                        className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out translate-x-6"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-4">Language & Region</h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                                            <select
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                                <option>English</option>
                                                <option>Spanish</option>
                                                <option>French</option>
                                                <option>German</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Time
                                                Zone</label>
                                            <select
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                                <option>(GMT-05:00) Eastern Time</option>
                                                <option>(GMT-06:00) Central Time</option>
                                                <option>(GMT-07:00) Mountain Time</option>
                                                <option>(GMT-08:00) Pacific Time</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-8">
                                <h3 className="text-xl font-semibold text-gray-900">Security Settings</h3>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-6">Password</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Password</p>
                                                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                                            </div>
                                            <button
                                                onClick={() => setShowPasswordModal(true)}
                                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-6">Two-Factor
                                        Authentication</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">SMS Authentication</p>
                                                <p className="text-sm text-gray-500">Use your phone number to verify
                                                    your identity</p>
                                            </div>
                                            <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                <input type="checkbox" id="sms-auth" className="sr-only"/>
                                                <label htmlFor="sms-auth"
                                                       className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                                                    <span
                                                        className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">Authenticator App</p>
                                                <p className="text-sm text-gray-500">Use an authenticator app for
                                                    verification</p>
                                            </div>
                                            <div className="relative inline-block w-12 mr-2 align-middle select-none">
                                                <input type="checkbox" id="app-auth" className="sr-only" checked/>
                                                <label htmlFor="app-auth"
                                                       className="block overflow-hidden h-6 rounded-full bg-blue-600 cursor-pointer">
                                                    <span
                                                        className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out translate-x-6"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-6">Active Sessions</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Smartphone size={24} className="text-gray-500 mr-4"/>
                                                <div>
                                                    <p className="font-medium text-gray-900">iPhone 13 Pro</p>
                                                    <p className="text-sm text-gray-500">New York, USA • Last active 2
                                                        hours ago</p>
                                                </div>
                                            </div>
                                            <button className="text-red-600 hover:text-red-700 font-medium">
                                                Revoke
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Globe size={24} className="text-gray-500 mr-4"/>
                                                <div>
                                                    <p className="font-medium text-gray-900">Chrome on Windows</p>
                                                    <p className="text-sm text-gray-500">San Francisco, USA • Last
                                                        active 1 day ago</p>
                                                </div>
                                            </div>
                                            <button className="text-red-600 hover:text-red-700 font-medium">
                                                Revoke
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'billing' && (
                            <div className="space-y-8">
                                <h3 className="text-xl font-semibold text-gray-900">Billing Information</h3>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-6">Payment Methods</h4>
                                    <div className="space-y-4">
                                        <div
                                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div className="flex items-center">
                                                <CreditCard size={24} className="text-gray-500 mr-4"/>
                                                <div>
                                                    <p className="font-medium text-gray-900">Visa ending in 4242</p>
                                                    <p className="text-sm text-gray-500">Expires 04/2025</p>
                                                </div>
                                            </div>
                                            <button className="text-red-600 hover:text-red-700 font-medium">
                                                Remove
                                            </button>
                                        </div>
                                        <button
                                            className="flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4">
                                            <Plus size={18} className="mr-2"/>
                                            Add Payment Method
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h4 className="text-lg font-medium text-gray-900 mb-6">Billing History</h4>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                                                </th>
                                                <th scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">May
                                                    15, 2024
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Premium
                                                    Subscription
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.00</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-700">
                                                    <a href="#">Download</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April
                                                    15, 2024
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Premium
                                                    Subscription
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$99.00</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-700">
                                                    <a href="#">Download</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Password Change Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">Change Password</h3>
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24}/>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.current ? "text" : "password"}
                                        value={passwordData.currentPassword}
                                        onChange={(e) => setPasswordData({
                                            ...passwordData,
                                            currentPassword: e.target.value
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => setShowPassword({
                                            ...showPassword,
                                            current: !showPassword.current
                                        })}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword.current ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.new ? "text" : "password"}
                                        value={passwordData.newPassword}
                                        onChange={(e) => setPasswordData({
                                            ...passwordData,
                                            newPassword: e.target.value
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => setShowPassword({...showPassword, new: !showPassword.new})}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword.new ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New
                                    Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword.confirm ? "text" : "password"}
                                        value={passwordData.confirmPassword}
                                        onChange={(e) => setPasswordData({
                                            ...passwordData,
                                            confirmPassword: e.target.value
                                        })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button
                                        onClick={() => setShowPassword({
                                            ...showPassword,
                                            confirm: !showPassword.confirm
                                        })}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword.confirm ? <EyeOff size={18}/> : <Eye size={18}/>}
                                    </button>
                                </div>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={handlePasswordChange}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default MyProfile;
