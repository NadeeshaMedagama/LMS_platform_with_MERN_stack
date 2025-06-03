import React, { useState } from 'react';
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    GraduationCap,
    AlertCircle,
    ChevronDown,
    Facebook,
    Twitter,
    Linkedin, Instagram
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Clear login error when user modifies form
        if (loginError) {
            setLoginError('');
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setLoginError('');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate login validation
            if (formData.email === 'admin@lms.com' && formData.password === 'password123') {
                console.log('Login successful:', formData);
                alert('Login successful! Welcome back to the LMS platform.');
            } else {
                setLoginError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const styles = {
        // Header styles
        header: {
            background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
            padding: '16px 0',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            width: '100%'
        },
        headerContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: '700'
        },
        logoIcon: {
            marginRight: '8px'
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
        },
        authButtons: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
        },
        signInBtn: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer'
        },
        joinUsBtn: {
            background: 'white',
            color: '#7c3aed',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        },
        container: {
            minHeight: '100vh',
            paddingTop: '72px',
            background: `
        linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 25%, rgba(51, 65, 85, 0.9) 50%, rgba(71, 85, 105, 0.85) 75%, rgba(100, 116, 139, 0.8) 100%),
        radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
        linear-gradient(45deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)
    `,
            backgroundSize: '100% 100%, 800px 800px, 800px 800px, 600px 600px, 100% 100%',
            backgroundPosition: 'center, 0% 100%, 100% 0%, 50% 50%, center',
            backgroundAttachment: 'fixed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative'
        },
        wrapper: {
            width: '100%',
            maxWidth: '550px',
            position: 'relative',
            zIndex: 2
        },
        headerSection: {
            textAlign: 'center',
            marginBottom: '48px',  // Increased from 32px to 48px
            marginTop: '80px'
        },
        iconContainer: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
            borderRadius: '50%',
            marginBottom: '16px',
            boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)'
        },
        title: {
            fontSize: '32px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '8px',
            margin: 0,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        },
        subtitle: {
            color: '#cbd5e1',
            fontSize: '16px',
            margin: 0,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
        },
        formCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        formGroup: {
            marginBottom: '24px'
        },
        label: {
            display: 'block',
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '8px'
        },
        inputWrapper: {
            position: 'relative'
        },
        input: {
            width: '100%',
            paddingLeft: '40px',
            paddingRight: '16px',
            paddingTop: '12px',
            paddingBottom: '12px',
            border: '2px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '16px',
            transition: 'all 0.2s',
            outline: 'none',
            boxSizing: 'border-box'
        },
        inputError: {
            borderColor: '#EF4444',
            backgroundColor: '#FEF2F2'
        },
        inputIcon: {
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9CA3AF',
            pointerEvents: 'none'
        },
        passwordToggle: {
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#9CA3AF',
            cursor: 'pointer',
            padding: '4px'
        },
        errorText: {
            color: '#EF4444',
            fontSize: '14px',
            marginTop: '4px'
        },
        alert: {
            background: '#FEF2F2',
            border: '1px solid #FECACA',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center'
        },
        alertIcon: {
            color: '#EF4444',
            marginRight: '8px'
        },
        alertText: {
            color: '#B91C1C',
            fontSize: '14px',
            fontWeight: '500'
        },
        rememberSection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
        },
        checkboxWrapper: {
            display: 'flex',
            alignItems: 'center'
        },
        checkbox: {
            marginRight: '8px',
            accentColor: '#2563EB'
        },
        checkboxLabel: {
            fontSize: '14px',
            color: '#374151'
        },
        forgotLink: {
            color: '#2563EB',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500'
        },
        submitButton: {
            width: '100%',
            background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
            color: 'white',
            fontWeight: '600',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        submitButtonDisabled: {
            opacity: '0.5',
            cursor: 'not-allowed'
        },
        spinner: {
            width: '20px',
            height: '20px',
            border: '2px solid transparent',
            borderTop: '2px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginRight: '8px'
        },
        divider: {
            display: 'flex',
            alignItems: 'center',
            margin: '24px 0'
        },
        dividerLine: {
            flex: 1,
            height: '1px',
            background: '#E5E7EB'
        },
        dividerText: {
            padding: '0 16px',
            color: '#9CA3AF',
            fontSize: '14px'
        },
        demoSection: {
            background: '#F9FAFB',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px',
            border: '1px solid #E5E7EB'
        },
        demoTitle: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '8px'
        },
        demoText: {
            fontSize: '12px',
            color: '#6B7280',
            marginBottom: '8px'
        },
        demoCredentials: {
            fontSize: '12px',
            fontFamily: 'monospace',
            background: '#F3F4F6',
            padding: '8px',
            borderRadius: '4px',
            color: '#374151'
        },
        footer: {
            textAlign: 'center',
            marginTop: '24px'
        },
        footerText: {
            color: '#6B7280',
            fontSize: '16px'
        },
        link: {
            color: '#2563EB',
            textDecoration: 'none',
            fontWeight: '600'
        },
        terms: {
            textAlign: 'center',
            marginTop: '24px'
        },
        termsText: {
            color: '#e2e8f0',
            fontSize: '14px',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
        }
    };

    return (
        <div>
            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>

            {/* NovaLearn Header */}
            <header style={styles.header}>
                <div style={styles.headerContainer}>
                    <a href="/" style={styles.logo}>
                        <GraduationCap size={28} style={styles.logoIcon}/>
                        NovaLearn
                    </a>

                    {/*<nav style={styles.nav}>*/}
                    {/*    <a style={styles.navItem}>*/}
                    {/*        Why NovaLearn*/}
                    {/*        <ChevronDown size={16} style={{ marginLeft: '4px' }} />*/}
                    {/*    </a>*/}
                    {/*    <a style={styles.navItem}>*/}
                    {/*        Products*/}
                    {/*        <ChevronDown size={16} style={{ marginLeft: '4px' }} />*/}
                    {/*    </a>*/}
                    {/*    <a style={styles.navItem}>*/}
                    {/*        Use Cases*/}
                    {/*        <ChevronDown size={16} style={{ marginLeft: '4px' }} />*/}
                    {/*    </a>*/}
                    {/*    <a style={styles.navItem}>*/}
                    {/*        Pricing*/}
                    {/*        <ChevronDown size={16} style={{ marginLeft: '4px' }} />*/}
                    {/*    </a>*/}
                    {/*    <a style={styles.navItem}>*/}
                    {/*        Resources*/}
                    {/*        <ChevronDown size={16} style={{ marginLeft: '4px' }} />*/}
                    {/*    </a>*/}
                    {/*</nav>*/}

                    <div style={styles.authButtons}>
                        <a style={styles.signInBtn} onClick={() => navigate('/login')}>
                            Sign In</a>
                        <a style={styles.joinUsBtn} onClick={() => navigate('/register')}>
                            Register</a>
                    </div>
                </div>
            </header>

            {/* Login Content */}
            <div style={styles.container}>
                <div style={styles.wrapper}>
                    <div style={styles.headerSection}>
                        <div style={styles.iconContainer}>
                            <GraduationCap size={32} color="white"/>
                        </div>
                        <h1 style={styles.title}>Welcome Back</h1>
                        <p style={styles.subtitle}>Sign in to continue your learning journey</p>
                    </div>

                    <div style={styles.formCard}>
                        {/* Demo Credentials Section */}
                        <div style={styles.demoSection}>
                            <div style={styles.demoTitle}>Demo Credentials</div>
                            <div style={styles.demoText}>Use these credentials to test the login:</div>
                            <div style={styles.demoCredentials}>
                                Email: admin@lms.com<br/>
                                Password: password123
                            </div>
                        </div>

                        {/* Error Alert */}
                        {loginError && (
                            <div style={styles.alert}>
                                <AlertCircle size={20} style={styles.alertIcon}/>
                                <span style={styles.alertText}>{loginError}</span>
                            </div>
                        )}

                        <div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Email Address</label>
                                <div style={styles.inputWrapper}>
                                    <Mail size={20} style={styles.inputIcon}/>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            ...styles.input,
                                            ...(errors.email ? styles.inputError : {})
                                        }}
                                        placeholder="Enter your email"
                                        onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                        onBlur={(e) => e.target.style.borderColor = errors.email ? '#EF4444' : '#D1D5DB'}
                                    />
                                </div>
                                {errors.email && (
                                    <div style={styles.errorText}>{errors.email}</div>
                                )}
                            </div>

                            <div style={styles.formGroup}>
                                <label style={styles.label}>Password</label>
                                <div style={styles.inputWrapper}>
                                    <Lock size={20} style={styles.inputIcon}/>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        style={{
                                            ...styles.input,
                                            paddingRight: '48px',
                                            ...(errors.password ? styles.inputError : {})
                                        }}
                                        placeholder="Enter your password"
                                        onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                        onBlur={(e) => e.target.style.borderColor = errors.password ? '#EF4444' : '#D1D5DB'}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={styles.passwordToggle}
                                    >
                                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </div>
                                {errors.password && (
                                    <div style={styles.errorText}>{errors.password}</div>
                                )}
                            </div>

                            <div style={styles.rememberSection}>
                                <div style={styles.checkboxWrapper}>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        style={styles.checkbox}
                                    />
                                    <label style={styles.checkboxLabel}>Remember me</label>
                                </div>
                                <a href="/forgot-password" style={styles.forgotLink}>
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isLoading}
                                style={{
                                    ...styles.submitButton,
                                    ...(isLoading ? styles.submitButtonDisabled : {})
                                }}
                                onMouseEnter={(e) => {
                                    if (!isLoading) {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isLoading) {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.4)';
                                    }
                                }}
                            >
                                {isLoading ? (
                                    <>
                                        <div style={styles.spinner}></div>
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>

                        <div style={styles.divider}>
                            <div style={styles.dividerLine}></div>
                            <span style={styles.dividerText}>or</span>
                            <div style={styles.dividerLine}></div>
                        </div>

                        <div style={styles.footer}>
                            <p style={styles.footerText}>
                                Don't have an account?{' '}
                                <a href="/register" style={styles.link}>
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>

                    <div style={styles.terms}>
                        <p style={styles.termsText}>
                            By signing in, you agree to our{' '}
                            <a href="/terms" style={styles.link}>Terms of Service</a>
                            {' '}and{' '}
                            <a href="/privacy" style={styles.link}>Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-2 mr-3">
                                    <GraduationCap size={24} className="text-white"/>
                                </div>
                                <span className="text-2xl font-bold">NovaLearn</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Empowering learners and educators worldwide through innovative technology and accessible
                                education.
                            </p>
                            <div className="flex space-x-4">
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

                        <div>
                            <h4 className="text-lg font-semibold mb-6">For Learners</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse
                                    Courses</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Certifications</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career
                                    Services</a></li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Scholarships</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6">For Educators</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teach on
                                    NovaLearn</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instructor
                                    Resources</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Curriculum
                                    Standards</a></li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6">Company</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About
                                    Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2023 NovaLearn, Inc. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy
                                Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of
                                Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie
                                Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;
