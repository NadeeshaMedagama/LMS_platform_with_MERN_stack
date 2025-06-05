import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import {
    GraduationCap,
    User,
    Bell,
    Globe,
    Shield,
    Eye,
    CreditCard,
    HardDrive,
    Settings,
    Camera,
    Edit3,
    Save,
    X,
    Check,
    AlertTriangle,
    Smartphone,
    Mail,
    Monitor,
    Moon,
    Sun,
    LogOut,
    Trash2,
    Download,
    ChevronRight,
    ChevronDown,
    Lock,
    Unlock,
    Key,
    History,
    Plus,
    Minus,
    Info
} from 'lucide-react';
import Header from "../components/layout/Header";

const SettingsPage = () => {
    // User data (would typically come from database/API)
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
        avatar: null,
        phone: '+1 (555) 123-4567',
        bio: 'Passionate learner interested in web development and data science.',
        location: 'San Francisco, CA',
        website: 'https://johndoe.dev',
        joinDate: '2023-01-15'
    });

    // Settings state
    const [settings, setSettings] = useState({
        // Notification Settings
        notifications: {
            email: {
                courseUpdates: true,
                messages: true,
                grades: true,
                promotions: false
            },
            sms: {
                enabled: false,
                courseReminders: false,
                deadlines: false
            },
            push: {
                enabled: true,
                courseUpdates: true,
                messages: true,
                achievements: true
            },
            frequency: 'instant' // instant, daily, weekly
        },
        // Language & Regional
        language: 'en',
        timezone: 'America/New_York',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12',
        // Security
        security: {
            twoFactor: false,
            loginAlerts: true,
            sessionTimeout: 30
        },
        // Learning Preferences
        learning: {
            darkMode: false,
            autoplay: true,
            playbackSpeed: 1.0,
            difficultyLevel: 'intermediate'
        },
        // Privacy
        privacy: {
            profileVisibility: 'public', // public, private, classmates
            dataSharing: false,
            analyticsConsent: true,
            cookieConsent: true
        }
    });

    // UI State
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(userData);
    const [showPassword, setShowPassword] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});

    // Sample data for other sections
    const [linkedAccounts] = useState([
        { provider: 'Google', email: 'john.doe@gmail.com', connected: true },
        { provider: 'Facebook', email: 'john.doe@facebook.com', connected: false },
        { provider: 'GitHub', email: 'john.doe@github.com', connected: true },
        { provider: 'LinkedIn', email: 'john.doe@linkedin.com', connected: false }
    ]);

    const [loginHistory] = useState([
        { device: 'Chrome on Windows', location: 'San Francisco, CA', time: '2 hours ago', current: true },
        { device: 'Safari on iPhone', location: 'San Francisco, CA', time: '1 day ago', current: false },
        { device: 'Firefox on Mac', location: 'San Francisco, CA', time: '3 days ago', current: false }
    ]);

    const [paymentMethods] = useState([
        { type: 'Visa', last4: '4242', expiry: '12/25', default: true },
        { type: 'Mastercard', last4: '8888', expiry: '10/24', default: false }
    ]);

    const tabs = [
        { id: 'profile', label: 'Account Settings', icon: <User size={20} /> },
        { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
        { id: 'language', label: 'Language & Region', icon: <Globe size={20} /> },
        { id: 'security', label: 'Security', icon: <Shield size={20} /> },
        { id: 'learning', label: 'Learning Preferences', icon: <Settings size={20} /> },
        { id: 'privacy', label: 'Privacy', icon: <Eye size={20} /> },
        { id: 'payment', label: 'Payment & Subscription', icon: <CreditCard size={20} /> },
        { id: 'storage', label: 'Storage & Downloads', icon: <HardDrive size={20} /> }
    ];

    const handleSaveProfile = () => {
        setUserData(editedData);
        setIsEditing(false);
        // Here you would typically make an API call to save the data
        console.log('Profile saved:', editedData);
    };

    const handleCancelEdit = () => {
        setEditedData(userData);
        setIsEditing(false);
    };

    const updateSetting = (category, key, value) => {
        setSettings(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [key]: value
            }
        }));
    };

    const updateNestedSetting = (category, subcategory, key, value) => {
        setSettings(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [subcategory]: {
                    ...prev[category][subcategory],
                    [key]: value
                }
            }
        }));
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const renderProfileSettings = () => (
        <div className="pt-16">
            <Header />
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                            {userData.avatar ? (
                                <img src={userData.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                            ) : (
                                userData.name.split(' ').map(n => n[0]).join('')
                            )}
                        </div>
                        <button className="absolute bottom-0 right-0 bg-white text-blue-600 rounded-full p-2 hover:bg-blue-50 transition-colors">
                            <Camera size={16} />
                        </button>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
                        <p className="text-blue-100 mb-2">{userData.email}</p>
                        <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                            {userData.role}
                        </span>
                    </div>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                        <Edit3 size={16} />
                        <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                    </button>
                </div>
            </div>

            {/* Profile Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            value={isEditing ? editedData.name : userData.name}
                            onChange={(e) => setEditedData({...editedData, name: e.target.value})}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={isEditing ? editedData.email : userData.email}
                            onChange={(e) => setEditedData({...editedData, email: e.target.value})}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            value={isEditing ? editedData.phone : userData.phone}
                            onChange={(e) => setEditedData({...editedData, phone: e.target.value})}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                            type="text"
                            value={isEditing ? editedData.location : userData.location}
                            onChange={(e) => setEditedData({...editedData, location: e.target.value})}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                        <textarea
                            rows={3}
                            value={isEditing ? editedData.bio : userData.bio}
                            onChange={(e) => setEditedData({...editedData, bio: e.target.value})}
                            disabled={!isEditing}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        />
                    </div>
                </div>

                {isEditing && (
                    <div className="flex justify-end space-x-4 mt-6 pt-6 border-t">
                        <button
                            onClick={handleCancelEdit}
                            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveProfile}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                            <Save size={16} />
                            <span>Save Changes</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Change Password</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Update Password
                </button>
            </div>

            {/* Linked Accounts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Linked Accounts</h3>
                <div className="space-y-4">
                    {linkedAccounts.map((account, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium">{account.provider[0]}</span>
                                </div>
                                <div>
                                    <p className="font-medium">{account.provider}</p>
                                    <p className="text-sm text-gray-600">{account.email}</p>
                                </div>
                            </div>
                            <button
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    account.connected
                                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                }`}
                            >
                                {account.connected ? 'Disconnect' : 'Connect'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                    <AlertTriangle size={24} className="mr-2" />
                    Danger Zone
                </h3>
                <p className="text-red-700 mb-6">
                    These actions are permanent and cannot be undone. Please proceed with caution.
                </p>
                <div className="space-y-4">
                    <button className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                        <Trash2 size={16} />
                        <span>Delete Account</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderNotificationSettings = () => (
        <div className="space-y-6">
            {/* Email Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Mail size={24} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Email Notifications</h3>
                </div>
                <div className="space-y-4">
                    {Object.entries(settings.notifications.email).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                                <p className="text-sm text-gray-600">
                                    {key === 'courseUpdates' && 'Get notified about course updates and announcements'}
                                    {key === 'messages' && 'Receive notifications for new messages'}
                                    {key === 'grades' && 'Get notified when grades are published'}
                                    {key === 'promotions' && 'Receive promotional emails and special offers'}
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={(e) => updateNestedSetting('notifications', 'email', key, e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* SMS Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Smartphone size={24} className="text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">SMS Notifications</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Enable SMS Notifications</p>
                            <p className="text-sm text-gray-600">Allow SMS notifications to your phone</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.notifications.sms.enabled}
                                onChange={(e) => updateNestedSetting('notifications', 'sms', 'enabled', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    {settings.notifications.sms.enabled && (
                        <>
                            {Object.entries(settings.notifications.sms).filter(([key]) => key !== 'enabled').map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg ml-4">
                                    <div>
                                        <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                                        <p className="text-sm text-gray-600">
                                            {key === 'courseReminders' && 'Reminders about upcoming courses'}
                                            {key === 'deadlines' && 'Important deadline notifications'}
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={value}
                                            onChange={(e) => updateNestedSetting('notifications', 'sms', key, e.target.checked)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Monitor size={24} className="text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Push Notifications</h3>
                </div>
                <div className="space-y-4">
                    {Object.entries(settings.notifications.push).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                                <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                                <p className="text-sm text-gray-600">
                                    {key === 'enabled' && 'Allow browser push notifications'}
                                    {key === 'courseUpdates' && 'Course updates and announcements'}
                                    {key === 'messages' && 'New messages and communications'}
                                    {key === 'achievements' && 'Achievements and milestones'}
                                </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={(e) => updateNestedSetting('notifications', 'push', key, e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notification Frequency */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Notification Frequency</h3>
                <div className="space-y-3">
                    {['instant', 'daily', 'weekly'].map((freq) => (
                        <label key={freq} className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name="frequency"
                                value={freq}
                                checked={settings.notifications.frequency === freq}
                                onChange={(e) => updateSetting('notifications', 'frequency', e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="capitalize font-medium">{freq}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderLanguageSettings = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Language & Regional Settings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                        <select
                            value={settings.language}
                            onChange={(e) => updateSetting('language', null, e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="zh">Chinese</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                        <select
                            value={settings.timezone}
                            onChange={(e) => updateSetting('timezone', null, e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="America/New_York">Eastern Time (ET)</option>
                            <option value="America/Chicago">Central Time (CT)</option>
                            <option value="America/Denver">Mountain Time (MT)</option>
                            <option value="America/Los_Angeles">Pacific Time (PT)</option>
                            <option value="UTC">UTC</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                        <select
                            value={settings.dateFormat}
                            onChange={(e) => updateSetting('dateFormat', null, e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
                        <select
                            value={settings.timeFormat}
                            onChange={(e) => updateSetting('timeFormat', null, e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="12">12-hour (AM/PM)</option>
                            <option value="24">24-hour</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSecuritySettings = () => (
        <div className="space-y-6">
            {/* Two-Factor Authentication */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <Shield size={24} className="text-green-600" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {settings.security.twoFactor ? (
                            <span className="text-green-600 flex items-center space-x-1">
                                <Lock size={16} />
                                <span className="text-sm font-medium">Enabled</span>
                            </span>
                        ) : (
                            <span className="text-red-600 flex items-center space-x-1">
                                <Unlock size={16} />
                                <span className="text-sm font-medium">Disabled</span>
                            </span>
                        )}
                        <button
                            onClick={() => updateNestedSetting('security', 'security', 'twoFactor', !settings.security.twoFactor)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                settings.security.twoFactor
                                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                        >
                            {settings.security.twoFactor ? 'Disable' : 'Enable'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Login History */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <History size={24} className="text-blue-600" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Login History</h3>
                            <p className="text-gray-600">Review recent account activity</p>
                        </div>
                    </div>
                    <button
                        onClick={() => toggleSection('loginHistory')}
                        className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                    >
                        {expandedSections.loginHistory ? (
                            <>
                                <ChevronDown size={16} />
                                <span>Hide</span>
                            </>
                        ) : (
                            <>
                                <ChevronRight size={16} />
                                <span>Show</span>
                            </>
                        )}
                    </button>
                </div>

                {expandedSections.loginHistory && (
                    <div className="space-y-4">
                        {loginHistory.map((session, index) => (
                            <div key={index} className={`p-4 rounded-lg border ${session.current ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{session.device}</p>
                                        <p className="text-sm text-gray-600">{session.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm">{session.time}</p>
                                        {session.current && (
                                            <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                                                Current Session
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Session Settings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Key size={24} className="text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Session Settings</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Login Alerts</p>
                            <p className="text-sm text-gray-600">Get notified when someone logs into your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.security.loginAlerts}
                                onChange={(e) => updateNestedSetting('security', 'security', 'loginAlerts', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">Session Timeout</p>
                            <span className="text-sm font-medium">{settings.security.sessionTimeout} minutes</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Automatically log out after inactivity</p>
                        <input
                            type="range"
                            min="5"
                            max="120"
                            step="5"
                            value={settings.security.sessionTimeout}
                            onChange={(e) => updateNestedSetting('security', 'security', 'sessionTimeout', parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>5 min</span>
                            <span>120 min</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Sessions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Active Sessions</h3>
                <div className="space-y-4">
                    {loginHistory.filter(s => s.current).map((session, index) => (
                        <div key={index} className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">{session.device}</p>
                                    <p className="text-sm text-gray-600">{session.location}</p>
                                </div>
                                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderLearningPreferences = () => (
        <div className="space-y-6">
            {/* Theme Settings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    {settings.learning.darkMode ? (
                        <Moon size={24} className="text-indigo-600" />
                    ) : (
                        <Sun size={24} className="text-yellow-500" />
                    )}
                    <h3 className="text-xl font-bold text-gray-900">Theme Preferences</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Dark Mode</p>
                            <p className="text-sm text-gray-600">Switch between light and dark theme</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.learning.darkMode}
                                onChange={(e) => updateNestedSetting('learning', 'learning', 'darkMode', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Video Preferences */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Monitor size={24} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Video Preferences</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Autoplay Videos</p>
                            <p className="text-sm text-gray-600">Automatically play course videos when opened</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.learning.autoplay}
                                onChange={(e) => updateNestedSetting('learning', 'learning', 'autoplay', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">Playback Speed</p>
                            <span className="text-sm font-medium">{settings.learning.playbackSpeed}x</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">Adjust the speed of video playback</p>
                        <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.25"
                            value={settings.learning.playbackSpeed}
                            onChange={(e) => updateNestedSetting('learning', 'learning', 'playbackSpeed', parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0.5x</span>
                            <span>1x</span>
                            <span>1.5x</span>
                            <span>2x</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Preferences */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Content Preferences</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty Level</label>
                        <select
                            value={settings.learning.difficultyLevel}
                            onChange={(e) => updateNestedSetting('learning', 'learning', 'difficultyLevel', e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPrivacySettings = () => (
        <div className="space-y-6">
            {/* Profile Visibility */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Eye size={24} className="text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Profile Visibility</h3>
                </div>
                <div className="space-y-3">
                    {['public', 'classmates', 'private'].map((option) => (
                        <label key={option} className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name="visibility"
                                value={option}
                                checked={settings.privacy.profileVisibility === option}
                                onChange={(e) => updateNestedSetting('privacy', 'privacy', 'profileVisibility', e.target.value)}
                                className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                                <span className="capitalize font-medium block">{option}</span>
                                <p className="text-sm text-gray-600">
                                    {option === 'public' && 'Your profile is visible to everyone'}
                                    {option === 'classmates' && 'Only your classmates can view your profile'}
                                    {option === 'private' && 'Your profile is only visible to you'}
                                </p>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Globe size={24} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Data Sharing</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Share Analytics Data</p>
                            <p className="text-sm text-gray-600">Help improve our platform by sharing anonymous usage data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.privacy.analyticsConsent}
                                onChange={(e) => updateNestedSetting('privacy', 'privacy', 'analyticsConsent', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Cookie Consent</p>
                            <p className="text-sm text-gray-600">Allow cookies for essential and optional features</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.privacy.cookieConsent}
                                onChange={(e) => updateNestedSetting('privacy', 'privacy', 'cookieConsent', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Data Export */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <Download size={24} className="text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Data Export</h3>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600">Request a copy of all your personal data stored on our platform.</p>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                        <Download size={16} />
                        <span>Request Data Export</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderPaymentSettings = () => (
        <div className="space-y-6">
            {/* Payment Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <CreditCard size={24} className="text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900">Payment Methods</h3>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Plus size={16} />
                        <span>Add Payment Method</span>
                    </button>
                </div>
                <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                        <div key={index} className={`p-4 border rounded-lg ${method.default ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <span className="text-sm font-medium">{method.type[0]}</span>
                                    </div>
                                    <div>
                                        <p className="font-medium">{method.type} ending in {method.last4}</p>
                                        <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    {method.default && (
                                        <span className="text-sm font-medium text-blue-700">Default</span>
                                    )}
                                    <button className="text-red-600 hover:text-red-800">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subscription */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <GraduationCap size={24} className="text-purple-600" />
                        <h3 className="text-xl font-bold text-gray-900">Subscription</h3>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Active
                    </span>
                </div>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Premium Plan</p>
                                <p className="text-sm text-gray-600">$19.99/month</p>
                            </div>
                            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                                Cancel Subscription
                            </button>
                        </div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Next Billing Date</p>
                                <p className="text-sm text-gray-600">June 15, 2023</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                                Update Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                        <History size={24} className="text-blue-600" />
                        <h3 className="text-xl font-bold text-gray-900">Billing History</h3>
                    </div>
                    <button
                        onClick={() => toggleSection('billingHistory')}
                        className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                    >
                        {expandedSections.billingHistory ? (
                            <>
                                <ChevronDown size={16} />
                                <span>Hide</span>
                            </>
                        ) : (
                            <>
                                <ChevronRight size={16} />
                                <span>Show</span>
                            </>
                        )}
                    </button>
                </div>
                {expandedSections.billingHistory && (
                    <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Premium Plan - {item} month</p>
                                        <p className="text-sm text-gray-600">May {15 + item}, 2023</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">$19.99</p>
                                        <p className="text-sm text-green-600">Paid</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    const renderStorageSettings = () => (
        <div className="space-y-6">
            {/* Storage Usage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                    <HardDrive size={24} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Storage Usage</h3>
                </div>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">Total Storage</p>
                            <span className="text-sm font-medium">5 GB</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0 GB</span>
                            <span>2.25 GB used</span>
                            <span>5 GB</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Course Downloads</p>
                            <span className="text-sm text-gray-600">1.5 GB</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Offline Content</p>
                            <span className="text-sm text-gray-600">0.75 GB</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Settings */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Download Settings</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Download Quality</p>
                            <p className="text-sm text-gray-600">Choose the quality for offline downloads</p>
                        </div>
                        <select
                            defaultValue="auto"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="auto">Auto (Recommended)</option>
                            <option value="high">High Quality</option>
                            <option value="medium">Medium Quality</option>
                            <option value="low">Low Quality</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium">Wi-Fi Only Downloads</p>
                            <p className="text-sm text-gray-600">Only download content when connected to Wi-Fi</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Clear Cache */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Cache</h3>
                        <p className="text-gray-600">Free up storage by clearing temporary files</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Clear Now
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-8">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                            activeTab === tab.id
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className={`${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`}>
                                            {tab.icon}
                                        </span>
                                        <span className="font-medium">{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {activeTab === 'profile' && renderProfileSettings()}
                        {activeTab === 'notifications' && renderNotificationSettings()}
                        {activeTab === 'language' && renderLanguageSettings()}
                        {activeTab === 'security' && renderSecuritySettings()}
                        {activeTab === 'learning' && renderLearningPreferences()}
                        {activeTab === 'privacy' && renderPrivacySettings()}
                        {activeTab === 'payment' && renderPaymentSettings()}
                        {activeTab === 'storage' && renderStorageSettings()}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SettingsPage;
