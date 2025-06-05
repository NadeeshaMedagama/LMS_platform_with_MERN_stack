import React, { useState, useEffect } from 'react';
import {
    GraduationCap, BookOpen, Users, Award, TrendingUp, Star, Play, ArrowRight,
    CheckCircle, Menu, X, ChevronDown, User, Settings, LogOut, Bell, Search,
    Calendar, Clock, Trophy, MessageSquare, BarChart3, PlusCircle, FileText,
    Target, Zap, BookmarkPlus, AlertCircle, ChevronRight, TrendingDown,
    DollarSign, UserCheck, Activity, Edit, Trash2, Eye, Download
} from 'lucide-react';

const Dashboard = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: null,
        role: 'Student', // Student, Instructor, Admin
        notifications: 5,
        joinDate: '2023-09-15'
    });

    const [activeTab, setActiveTab] = useState('overview');
    const [timeRange, setTimeRange] = useState('week');

    // Mock data - in real app, this would come from API
    const mockData = {
        student: {
            enrolledCourses: [
                {
                    id: 1,
                    title: 'React Fundamentals',
                    instructor: 'Sarah Johnson',
                    progress: 75,
                    totalLessons: 24,
                    completedLessons: 18,
                    nextLesson: 'State Management',
                    dueDate: '2024-06-10'
                },
                {
                    id: 2,
                    title: 'JavaScript Advanced',
                    instructor: 'Mike Chen',
                    progress: 45,
                    totalLessons: 32,
                    completedLessons: 14,
                    nextLesson: 'Async/Await',
                    dueDate: '2024-06-15'
                },
                {
                    id: 3,
                    title: 'UI/UX Design',
                    instructor: 'Emily Rodriguez',
                    progress: 90,
                    totalLessons: 18,
                    completedLessons: 16,
                    nextLesson: 'Final Project',
                    dueDate: '2024-06-08'
                }
            ],
            upcomingActivities: [
                { type: 'assignment', title: 'React Project Submission', course: 'React Fundamentals', due: '2024-06-10', priority: 'high' },
                { type: 'quiz', title: 'JavaScript Quiz #5', course: 'JavaScript Advanced', due: '2024-06-12', priority: 'medium' },
                { type: 'exam', title: 'Final Design Exam', course: 'UI/UX Design', due: '2024-06-15', priority: 'high' }
            ],
            recentActivity: [
                { action: 'Completed lesson', item: 'Component Lifecycle', course: 'React Fundamentals', time: '2 hours ago' },
                { action: 'Posted in forum', item: 'Best practices discussion', course: 'JavaScript Advanced', time: '5 hours ago' },
                { action: 'Downloaded resource', item: 'Design Templates', course: 'UI/UX Design', time: '1 day ago' }
            ],
            performance: {
                averageGrade: 87,
                certificatesEarned: 3,
                timeSpentThisWeek: 12,
                totalTimeSpent: 156,
                streakDays: 7
            }
        },
        instructor: {
            courses: [
                { id: 1, title: 'React Fundamentals', students: 245, completion: 78, rating: 4.8 },
                { id: 2, title: 'Node.js Backend', students: 189, completion: 65, rating: 4.6 },
                { id: 3, title: 'Full Stack Development', students: 156, completion: 82, rating: 4.9 }
            ],
            submissions: [
                { student: 'Alice Cooper', assignment: 'React Project', course: 'React Fundamentals', submitted: '2 hours ago', status: 'pending' },
                { student: 'Bob Wilson', assignment: 'API Integration', course: 'Node.js Backend', submitted: '5 hours ago', status: 'graded' },
                { student: 'Carol Davis', assignment: 'Final Project', course: 'Full Stack Development', submitted: '1 day ago', status: 'pending' }
            ],
            analytics: {
                totalStudents: 590,
                courseCompletionRate: 75,
                avgRating: 4.77,
                monthlyRevenue: 2850
            }
        },
        admin: {
            systemStats: {
                totalUsers: 12450,
                activeUsers: 8930,
                newRegistrations: 156,
                totalCourses: 1247,
                activeCourses: 892,
                revenue: 125000
            },
            recentAlerts: [
                { type: 'warning', message: 'Server response time increased', time: '30 min ago' },
                { type: 'info', message: 'New instructor application', time: '2 hours ago' },
                { type: 'success', message: 'Database backup completed', time: '6 hours ago' }
            ],
            supportTickets: [
                { id: 1, user: 'John Smith', issue: 'Login problems', priority: 'high', status: 'open' },
                { id: 2, user: 'Jane Doe', issue: 'Payment issue', priority: 'medium', status: 'in-progress' },
                { id: 3, user: 'Mike Johnson', issue: 'Course access', priority: 'low', status: 'resolved' }
            ]
        }
    };

    const motivationalQuotes = [
        "Every expert was once a beginner. Keep going!",
        "Learning is a treasure that will follow its owner everywhere.",
        "The beautiful thing about learning is that no one can take it away from you.",
        "Success is the sum of small efforts repeated day in and day out."
    ];

    const [currentQuote] = useState(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

    const getUserInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const getProgressColor = (progress) => {
        if (progress >= 80) return 'bg-green-500';
        if (progress >= 60) return 'bg-blue-500';
        if (progress >= 40) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'text-red-600 bg-red-100';
            case 'medium': return 'text-yellow-600 bg-yellow-100';
            case 'low': return 'text-green-600 bg-green-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const renderStudentDashboard = () => (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 🎉</h1>
                        <p className="text-blue-100 text-lg italic">"{currentQuote}"</p>
                        <div className="mt-4 flex items-center space-x-4">
                            <div className="flex items-center">
                                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                                <span className="text-sm">{mockData.student.performance.streakDays} day streak!</span>
                            </div>
                            <div className="flex items-center">
                                <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                                <span className="text-sm">{mockData.student.performance.certificatesEarned} certificates earned</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold">{mockData.student.performance.averageGrade}%</div>
                        <div className="text-blue-100">Average Grade</div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Enrolled Courses</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.student.enrolledCourses.length}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Hours This Week</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.student.performance.timeSpentThisWeek}</p>
                        </div>
                        <Clock className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Certificates</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.student.performance.certificatesEarned}</p>
                        </div>
                        <Award className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Streak Days</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.student.performance.streakDays}</p>
                        </div>
                        <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Enrolled Courses */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {mockData.student.enrolledCourses.map((course) => (
                                <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                                        <span className="text-sm text-gray-600">by {course.instructor}</span>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">Next: {course.nextLesson}</span>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                            Continue Learning
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Upcoming Activities */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Upcoming</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {mockData.student.upcomingActivities.map((activity, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-shrink-0">
                                        {activity.type === 'assignment' && <FileText className="w-5 h-5 text-blue-500" />}
                                        {activity.type === 'quiz' && <CheckCircle className="w-5 h-5 text-green-500" />}
                                        {activity.type === 'exam' && <AlertCircle className="w-5 h-5 text-red-500" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                                        <p className="text-xs text-gray-600">{activity.course}</p>
                                        <p className="text-xs text-gray-500">Due: {activity.due}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(activity.priority)}`}>
                                        {activity.priority}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {mockData.student.recentActivity.map((activity, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900">
                                            <span className="font-medium">{activity.action}</span> {activity.item}
                                        </p>
                                        <p className="text-xs text-gray-600">{activity.course}</p>
                                        <p className="text-xs text-gray-500">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="flex items-center space-x-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                        <User className="w-5 h-5" />
                        <span>My Profile</span>
                    </button>
                    <button className="flex items-center space-x-2 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                        <Award className="w-5 h-5" />
                        <span>Certificates</span>
                    </button>
                    <button className="flex items-center space-x-2 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                        <BookOpen className="w-5 h-5" />
                        <span>Course Library</span>
                    </button>
                    <button className="flex items-center space-x-2 p-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        <span>Get Help</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderInstructorDashboard = () => (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Instructor Dashboard</h1>
                        <p className="text-green-100 text-lg">Manage your courses and track student progress</p>
                    </div>
                    <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center">
                        <PlusCircle className="w-5 h-5 mr-2" />
                        Create Course
                    </button>
                </div>
            </div>

            {/* Instructor Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Total Students</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.instructor.analytics.totalStudents}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Avg. Rating</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.instructor.analytics.avgRating}</p>
                        </div>
                        <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Completion Rate</p>
                            <p className="text-2xl font-bold text-gray-900">{mockData.instructor.analytics.courseCompletionRate}%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm">Monthly Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">${mockData.instructor.analytics.monthlyRevenue}</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* My Courses */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {mockData.instructor.courses.map((course) => (
                                <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600">Students</p>
                                            <p className="font-semibold">{course.students}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Completion</p>
                                            <p className="font-semibold">{course.completion}%</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Rating</p>
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                <span className="font-semibold">{course.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Assignment Submissions */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Recent Submissions</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            {mockData.instructor.submissions.map((submission, index) => (
                                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900">{submission.student}</p>
                                        <p className="text-xs text-gray-600">{submission.assignment}</p>
                                        <p className="text-xs text-gray-500">{submission.submitted}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        submission.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                    }`}>
                                        {submission.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAdminDashboard = () => (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-red-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                        <p className="text-red-100 text-lg">System overview and management</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold">${mockData.admin.systemStats.revenue.toLocaleString()}</div>
                        <div className="text-red-100">Total Revenue</div>
                    </div>
                </div>
            </div>

            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Total Users</p>
                        <p className="text-2xl font-bold text-gray-900">{mockData.admin.systemStats.totalUsers.toLocaleString()}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Active Users</p>
                        <p className="text-2xl font-bold text-green-600">{mockData.admin.systemStats.activeUsers.toLocaleString()}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">New Registrations</p>
                        <p className="text-2xl font-bold text-blue-600">{mockData.admin.systemStats.newRegistrations}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Total Courses</p>
                        <p className="text-2xl font-bold text-purple-600">{mockData.admin.systemStats.totalCourses.toLocaleString()}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Active Courses</p>
                        <p className="text-2xl font-bold text-yellow-600">{mockData.admin.systemStats.activeCourses}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">Revenue</p>
                        <p className="text-2xl font-bold text-green-600">${mockData.admin.systemStats.revenue.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* System Alerts */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">System Alerts</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {mockData.admin.recentAlerts.map((alert, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0">
                                    {alert.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                                    {alert.type === 'info' && <Bell className="w-5 h-5 text-blue-500" />}
                                    {alert.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-900">{alert.message}</p>
                                    <p className="text-xs text-gray-500">{alert.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Support Tickets */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">Support Tickets</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {mockData.admin.supportTickets.map((ticket) => (
                            <div key={ticket.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">{ticket.user}</h3>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        ticket.status === 'open' ? 'bg-red-100 text-red-800' :
                                            ticket.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-green-100 text-green-800'
                                    }`}>
                                        {ticket.status}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{ticket.issue}</p>
                                <div className="flex items-center justify-between">
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                                            ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                    }`}>
                                        {ticket.priority} priority
                                    </span>
                                    <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center">
                                        View <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <button className="flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                            <UserCheck className="w-5 h-5" />
                            <span>Manage Users</span>
                        </button>
                        <button className="flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                            <BookOpen className="w-5 h-5" />
                            <span>Course Approvals</span>
                        </button>
                        <button className="flex items-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
                            <Settings className="w-5 h-5" />
                            <span>System Settings</span>
                        </button>
                        <button className="flex items-center space-x-3 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                            <Activity className="w-5 h-5" />
                            <span>View Analytics</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDashboardContent = () => {
        switch (user.role.toLowerCase()) {
            case 'student':
                return renderStudentDashboard();
            case 'instructor':
                return renderInstructorDashboard();
            case 'admin':
                return renderAdminDashboard();
            default:
                return renderStudentDashboard();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <GraduationCap className="w-8 h-8 text-blue-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">EduPlatform</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-500 hover:text-gray-700">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 relative">
                                <Bell className="w-5 h-5" />
                                {user.notifications > 0 && (
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                                )}
                            </button>
                            <div className="relative">
                                <button className="flex items-center space-x-2">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt="User" className="w-8 h-8 rounded-full" />
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                                            {getUserInitials(user.name)}
                                        </div>
                                    )}
                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Dashboard Tabs */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-4 py-2 font-medium rounded-lg ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab('courses')}
                            className={`px-4 py-2 font-medium rounded-lg ${activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            Courses
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`px-4 py-2 font-medium rounded-lg ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                            Analytics
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Time Range:</span>
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm"
                        >
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="year">This Year</option>
                        </select>
                    </div>
                </div>

                {/* Dashboard Content */}
                {renderDashboardContent()}
            </main>
        </div>
    );
};

export default Dashboard;
