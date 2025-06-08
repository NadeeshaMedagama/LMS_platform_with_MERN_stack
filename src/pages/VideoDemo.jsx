import React, { useState, useEffect, useRef } from 'react';
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    ArrowLeft,
    Clock,
    Users,
    Star,
    CheckCircle,
    BookOpen,
    Award,
    TrendingUp,
    GraduationCap
} from 'lucide-react';
import Footer from "../components/layout/Footer";

const VideoDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    // CHANGE THIS PATH TO YOUR LOCAL VIDEO FILE
    const VIDEO_PATH = "/videos/demo-video.mp4"; // Put your video in public/videos/ folder

    // Demo video details
    const videoData = {
        title: "NovaLearn Platform Overview",
        description: "Discover how our innovative learning platform transforms education through interactive courses, expert instructors, and personalized learning paths.",
        duration: "3:45",
        views: "12.5K",
        rating: 4.9
    };

    const keyFeatures = [
        {
            icon: <BookOpen size={20} />,
            title: "Interactive Learning",
            description: "Hands-on projects and real-world applications"
        },
        {
            icon: <Users size={20} />,
            title: "Expert Instructors",
            description: "Learn from industry professionals"
        },
        {
            icon: <Award size={20} />,
            title: "Certifications",
            description: "Industry-recognized credentials"
        },
        {
            icon: <TrendingUp size={20} />,
            title: "Progress Tracking",
            description: "Monitor your learning journey"
        }
    ];

    const highlights = [
        "Personalized learning paths",
        "24/7 support and community",
        "Mobile-friendly platform",
        "Lifetime access to content"
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleVideoLoad = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            setVideoLoaded(true);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const formatTime = (seconds) => {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleProgressClick = (e) => {
        if (videoRef.current && duration > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newTime = percent * duration;
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                            <ArrowLeft size={20} className="mr-2" />
                            <span className="font-medium">Back to Home</span>
                        </button>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center text-gray-600">
                                <GraduationCap size={24} className="mr-2 text-blue-600" />
                                <span className="font-bold text-xl text-gray-900">NovaLearn</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Video Player Section */}
                    <div className="lg:col-span-2">
                        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Video Container */}
                            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Video Element */}
                                <div className="aspect-video bg-black relative">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        src={VIDEO_PATH}
                                        onLoadedMetadata={handleVideoLoad}
                                        onTimeUpdate={handleTimeUpdate}
                                        onEnded={handleVideoEnd}
                                        onClick={togglePlay}
                                        preload="metadata"
                                    />

                                    {/* Fallback Background Pattern (when video not loaded) */}
                                    {!videoLoaded && (
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                                            <div className="grid grid-cols-12 gap-2 h-full p-8">
                                                {Array.from({length: 48}).map((_, i) => (
                                                    <div key={i} className="bg-white/5 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Play Button Overlay */}
                                    {!isPlaying && (
                                        <button
                                            onClick={togglePlay}
                                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
                                        >
                                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl">
                                                <Play size={48} className="text-blue-600 ml-1" />
                                            </div>
                                        </button>
                                    )}

                                    {/* Loading indicator */}
                                    {!videoLoaded && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <div className="mb-4">
                                                    <div className="inline-block w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                                                        <GraduationCap size={64} className="text-white" />
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">Loading Video...</h3>
                                                <p className="text-blue-200">Please wait while we prepare your demo</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Video Controls */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div
                                            className="w-full h-2 bg-white/20 rounded-full cursor-pointer hover:h-3 transition-all duration-200"
                                            onClick={handleProgressClick}
                                        >
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                                                style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Control Buttons */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <button
                                                onClick={togglePlay}
                                                className="text-white hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-white/10"
                                            >
                                                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                            </button>
                                            <button
                                                onClick={toggleMute}
                                                className="text-white hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-white/10"
                                            >
                                                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                                            </button>
                                            <div className="text-white text-sm font-medium">
                                                {formatTime(currentTime)} / {formatTime(duration)}
                                            </div>
                                        </div>
                                        <button className="text-white hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-white/10">
                                            <Maximize size={24} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="mt-6">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    {videoData.title}
                                </h1>
                                <div className="flex items-center space-x-6 text-gray-600 mb-4">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-1" />
                                        <span>{duration > 0 ? formatTime(duration) : videoData.duration}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users size={16} className="mr-1" />
                                        <span>{videoData.views} views</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Star size={16} className="mr-1 text-yellow-500 fill-current" />
                                        <span>{videoData.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {videoData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Key Features */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">What You'll Discover</h3>
                                <div className="space-y-4">
                                    {keyFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 flex-shrink-0">
                                                <div className="text-white">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                                                <p className="text-gray-600 text-xs mt-1">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Highlights</h3>
                                <div className="space-y-3">
                                    {highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
                                <p className="text-blue-100 text-sm mb-6">Join thousands of learners already transforming their careers</p>
                                <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                    Explore Courses
                                </button>
                                <div className="mt-4 text-blue-200 text-xs">
                                    <CheckCircle size={14} className="inline mr-1" />
                                    Free 7-day trial • No credit card required
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VideoDemo;
