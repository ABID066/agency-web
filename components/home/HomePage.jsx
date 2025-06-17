"use client"

import React, { useState } from 'react';
import { Search, TrendingUp, Users, Edit3, Mail, ArrowRight, Play, Star, CheckCircle } from 'lucide-react';

export default function HomePage() {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Handle email submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br mt-10 from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden mt-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center mt-10">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Grow Your Business with <span className="text-blue-600">AdBoost</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                            We are a digital marketing agency that helps businesses grow their online presence and reach their target audience with proven strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
                                <span>Get Started Today</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 flex items-center space-x-2">
                                <Play className="w-5 h-5" />
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Comprehensive Digital Marketing Solutions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer a wide range of digital marketing services to help businesses achieve their goals and maximize their online potential.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                            <Search className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Improve your website's visibility in search engine results and drive organic traffic to your business.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">PPC Advertising</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Drive targeted traffic to your website with strategic paid advertising campaigns that deliver results.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Build a strong social media presence and engage with your audience across all major platforms.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                            <Edit3 className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Content Marketing</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Create valuable, engaging content that attracts your ideal customers and drives conversions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Success Stories</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Take a look at some of our recent projects and the results we've achieved for our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Alpha</h3>
                                <p className="text-gray-600 mb-4">A successful SEO campaign that increased organic traffic by 200% for a local business.</p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    <span>View Case Study</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Beta</h3>
                                <p className="text-gray-600 mb-4">A high-converting PPC campaign that generated 300% ROI for an e-commerce store.</p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    <span>View Case Study</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div
                                className="h-48 bg-cover bg-center"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80")'
                                }}
                            ></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Project Gamma</h3>
                                <p className="text-gray-600 mb-4">An engaging social media strategy that grew followers by 500% for a growing brand.</p>
                                <div className="flex items-center text-blue-600 font-medium">
                                    <span>View Case Study</span>
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our satisfied clients have to say about working with AdBoost.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="flex items-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            "AdBoost helped us increase our website traffic by 50% in just three months! Their SEO expertise is unmatched."
                        </p>
                        <div className="flex items-center">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1494790108755-2616c6a65df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")'
                                }}
                            ></div>
                            <div>
                                <p className="font-semibold text-gray-900">Sarah Chen</p>
                                <p className="text-sm text-gray-600">CEO, Tech Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="flex items-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            "Their PPC campaigns are highly effective and have generated a great ROI for our business. Highly recommended!"
                        </p>
                        <div className="flex items-center">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                                }}
                            ></div>
                            <div>
                                <p className="font-semibold text-gray-900">David Lee</p>
                                <p className="text-sm text-gray-600">Marketing Manager, Retail Co.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <div className="flex items-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            "We've seen a significant improvement in our social media engagement since working with AdBoost. Amazing results!"
                        </p>
                        <div className="flex items-center">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                                }}
                            ></div>
                            <div>
                                <p className="font-semibold text-gray-900">Emily Wong</p>
                                <p className="text-sm text-gray-600">Founder, Creative Studio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Contact us today for a free consultation and discover how we can help you achieve your digital marketing goals.
                        </p>

                        <div className="max-w-md mx-auto">
                            <div className="flex rounded-xl overflow-hidden shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-6 py-4 text-white placeholder-gray-300 focus:outline-none"
                                />
                                <button
                                    onClick={handleEmailSubmit}
                                    className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-6 text-blue-100">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            <span>Free consultation • No commitment required</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're proud to work with amazing companies of all sizes, from startups to enterprise organizations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div
                                className="w-full aspect-square bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
                                }}
                            ></div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div
                                className="w-full aspect-square bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80")'
                                }}
                            ></div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div
                                className="w-full aspect-square bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
                                }}
                            ></div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <div
                                className="w-full aspect-square bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}