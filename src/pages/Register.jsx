import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Eye,
    EyeOff,
    User,
    Mail,
    Lock,
    BookOpen,
    GraduationCap,
    Users,
    ChevronDown,
    Facebook,
    Twitter, Linkedin, Instagram
} from 'lucide-react';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student'
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
            console.log('Registration data:', formData);
            alert('Registration successful! Welcome to the LMS platform.');
            navigate('/login');

        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const roleOptions = [
        { value: 'student', label: 'Student', icon: BookOpen },
        { value: 'instructor', label: 'Instructor', icon: GraduationCap },
        { value: 'admin', label: 'Administrator', icon: Users }
    ];

    const styles = {
        container: {
            minHeight: '100vh',
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
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative'
        },
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
            padding: '16px 0',
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        },
        headerContent: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px'
        },
        // logo: {
        //     display: 'flex',
        //     alignItems: 'center',
        //     gap: '12px'
        // },
        // logoIcon: {
        //     width: '40px',
        //     height: '40px',
        //     background: 'rgba(255, 255, 255, 0.2)',
        //     borderRadius: '8px',
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center'
        // },
        logoText: {
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: 0
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
        },
        navItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
        },
        navItemHover: {
            opacity: 0.8
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
            color: '#4F46E5',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        },
        mainContent: {
            paddingTop: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '100px 16px 16px'
        },
        wrapper: {
            width: '100%',
            maxWidth: '600px',
            position: 'relative',
            zIndex: 2
        },
        formCard: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            padding: '32px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
        },
        formTitle: {
            fontSize: '28px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '8px',
            textAlign: 'center'
        },
        formSubtitle: {
            color: '#6b7280',
            fontSize: '16px',
            marginBottom: '32px',
            textAlign: 'center'
        },
        formGroup: {
            marginBottom: '24px'
        },
        nameGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
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
        inputFocus: {
            borderColor: '#3B82F6',
            boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
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
        roleGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginTop: '12px'
        },
        roleOption: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px 12px',
            border: '2px solid #E5E7EB',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            background: 'white'
        },
        roleOptionSelected: {
            borderColor: '#3B82F6',
            backgroundColor: '#EBF4FF',
            color: '#1D4ED8'
        },
        roleIcon: {
            marginBottom: '8px'
        },
        roleLabel: {
            fontSize: '12px',
            fontWeight: '500',
            textAlign: 'center'
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
        submitButtonHover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)'
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
        headerSection: {
            textAlign: 'center',
            marginBottom: '32px'
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
        termsText: {
            color: '#6b7280',
            fontSize: '14px'
        }
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>

            {/* Header */}
            <header style={styles.header}>
                <div style={styles.headerContent}>
                    <a href="/" style={styles.logo}>
                        <GraduationCap size={28} style={styles.logoIcon}/>
                        NovaLearn
                    </a>

                    {/*<nav style={styles.nav}>*/}
                    {/*    <a href="#" style={styles.navItem}>*/}
                    {/*        Why NovaLearn <ChevronDown size={16}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" style={styles.navItem}>*/}
                    {/*        Products <ChevronDown size={16}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" style={styles.navItem}>*/}
                    {/*        Use Cases <ChevronDown size={16}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" style={styles.navItem}>*/}
                    {/*        Pricing <ChevronDown size={16}/>*/}
                    {/*    </a>*/}
                    {/*    <a href="#" style={styles.navItem}>*/}
                    {/*        Resources <ChevronDown size={16}/>*/}
                    {/*    </a>*/}
                    {/*</nav>*/}

                    <div style={styles.authButtons}>
                        <a href="/login" style={styles.signInBtn}>Sign In</a>
                        <a href="/register" style={styles.joinUsBtn}>Register</a>
                    </div>
                </div>
            </header>

            <div style={styles.mainContent}>
                <div style={styles.wrapper}>
                    <div style={styles.headerSection}>
                        <div style={styles.iconContainer}>
                            <GraduationCap size={32} color="white"/>
                        </div>
                        <h1 style={styles.title}>Get Started</h1>
                        <p style={styles.subtitle}>Create an account to begin your learning journey</p>
                    </div>

                    <div style={styles.formCard}>
                        <h2 style={styles.formTitle}>Create Your Account</h2>
                        <p style={styles.formSubtitle}>Join NovaLearn and start your learning journey</p>

                        <div>
                            <div style={styles.nameGrid}>
                                <div>
                                    <label style={styles.label}>First Name</label>
                                    <div style={styles.inputWrapper}>
                                        <User size={20} style={styles.inputIcon}/>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            style={{
                                                ...styles.input,
                                                ...(errors.firstName ? styles.inputError : {})
                                            }}
                                            placeholder="John"
                                            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                            onBlur={(e) => e.target.style.borderColor = errors.firstName ? '#EF4444' : '#D1D5DB'}
                                        />
                                    </div>
                                    {errors.firstName && (
                                        <div style={styles.errorText}>{errors.firstName}</div>
                                    )}
                                </div>

                                <div>
                                    <label style={styles.label}>Last Name</label>
                                    <div style={styles.inputWrapper}>
                                        <User size={20} style={styles.inputIcon}/>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            style={{
                                                ...styles.input,
                                                ...(errors.lastName ? styles.inputError : {})
                                            }}
                                            placeholder="Doe"
                                            onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                            onBlur={(e) => e.target.style.borderColor = errors.lastName ? '#EF4444' : '#D1D5DB'}
                                        />
                                    </div>
                                    {errors.lastName && (
                                        <div style={styles.errorText}>{errors.lastName}</div>
                                    )}
                                </div>
                            </div>

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
                                        placeholder="john.doe@example.com"
                                        onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                        onBlur={(e) => e.target.style.borderColor = errors.email ? '#EF4444' : '#D1D5DB'}
                                    />
                                </div>
                                {errors.email && (
                                    <div style={styles.errorText}>{errors.email}</div>
                                )}
                            </div>

                            <div style={styles.formGroup}>
                                <label style={styles.label}>I am a...</label>
                                <div style={styles.roleGrid}>
                                    {roleOptions.map((role) => {
                                        const IconComponent = role.icon;
                                        const isSelected = formData.role === role.value;
                                        return (
                                            <div
                                                key={role.value}
                                                style={{
                                                    ...styles.roleOption,
                                                    ...(isSelected ? styles.roleOptionSelected : {})
                                                }}
                                                onClick={() => setFormData(prev => ({...prev, role: role.value}))}
                                            >
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value={role.value}
                                                    checked={isSelected}
                                                    onChange={handleChange}
                                                    style={{display: 'none'}}
                                                />
                                                <IconComponent size={24} style={styles.roleIcon}/>
                                                <span style={styles.roleLabel}>{role.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
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

                            <div style={styles.formGroup}>
                                <label style={styles.label}>Confirm Password</label>
                                <div style={styles.inputWrapper}>
                                    <Lock size={20} style={styles.inputIcon}/>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        style={{
                                            ...styles.input,
                                            paddingRight: '48px',
                                            ...(errors.confirmPassword ? styles.inputError : {})
                                        }}
                                        placeholder="Confirm your password"
                                        onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                                        onBlur={(e) => e.target.style.borderColor = errors.confirmPassword ? '#EF4444' : '#D1D5DB'}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        style={styles.passwordToggle}
                                    >
                                        {showConfirmPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <div style={styles.errorText}>{errors.confirmPassword}</div>
                                )}
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
                                        Creating Account...
                                    </>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </div>

                        <div style={styles.footer}>
                            <p style={styles.footerText}>
                                Already have an account?{' '}
                                <a href="/login" style={styles.link}>
                                    Sign in
                                </a>
                            </p>
                        </div>
                    </div>

                    <div style={styles.terms}>
                        <p style={styles.termsText}>
                            By creating an account, you agree to our{' '}
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
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                                    NovaLearn</span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Empowering learners and educators worldwide through innovative technology and accessible
                                education.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Facebook size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Twitter size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                                    <Linkedin size={20}/>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors">
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

export default Register;
