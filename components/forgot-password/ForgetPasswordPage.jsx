"use client";

import React, { useState } from 'react';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgetPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (!email) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsEmailSent(true);
            console.log('Reset link sent to:', email);
        }, 1500);
    };

    const handleBackToSignIn = () => {
        console.log('Navigate back to sign in');
    };

    const handleResendLink = () => {
        setIsEmailSent(false);
        handleSubmit();
    };

    if (isEmailSent) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        {/* Success Header */}
                        <div className="text-center mb-8">
                            <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Check your email</h2>
                            <p className="text-sm text-gray-600">
                                We've sent a password reset link to
                            </p>
                            <p className="text-sm font-medium text-gray-900 mt-1">{email}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="text-center text-sm text-gray-600">
                                <p>Didn't receive the email? Check your spam folder or</p>
                                <button
                                    onClick={handleResendLink}
                                    className="text-blue-600 hover:text-blue-500 font-medium transition-colors mt-1"
                                >
                                    click here to resend
                                </button>
                            </div>

                            <button
                                onClick={handleBackToSignIn}
                                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Sign In
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="text-center text-xs text-gray-500 space-x-4">
                        <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
                        <span>•</span>
                        <a href="#" className="hover:text-gray-700 transition-colors">Help Center</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h2>
                        <p className="text-sm text-gray-600">
                            Remember your password?{' '}
                            <a href="/login" onClick={handleBackToSignIn} className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                                Sign in →
                            </a>
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Email Address Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="block text-gray-900 placeholder-gray-400 w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        {/* Send Reset Link Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isLoading || !email}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                    Sending Reset Link...
                                </div>
                            ) : (
                                'Send Reset Link'
                            )}
                        </button>

                        {/* Back to Sign In Link */}
                        <div className="text-center">
                            <button
                                onClick={handleBackToSignIn}
                                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                Back to Sign In
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="text-center text-xs text-gray-500 space-x-4">
                    <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
                    <span>•</span>
                    <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-gray-700 transition-colors">Help Center</a>
                </div>
            </div>
        </div>
    );
}