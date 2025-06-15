"use client"

import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Phone, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Header Section */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Get in <span className="text-blue-600">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about Adgrow? We're here to help. Reach out to us and we'll respond as soon as we can.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                                <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@adgrow.net" className="text-blue-600 hover:text-blue-700 transition-colors">
                                            info@adgrow.net
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Warsaw Office</h3>
                                        <p className="text-gray-600">Plac Konesera, 03-736 Warszawa</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM CET</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl  shadow-xl px-8 py-12 text-white">
                            <h3 className="text-2xl font-bold mb-4">We'd Love to Hear From You</h3>
                            <p className="text-blue-100 mb-4">
                                For any inquiries, feedback, or support requests, please email us at{' '}
                                <a href="mailto:info@adgrow.net" className="text-white underline hover:no-underline">
                                    info@adgrow.net
                                </a>
                            </p>
                            <p className="text-blue-100">
                                Our team is available Monday through Friday, 9:00 AM to 5:00 PM CET.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <Send className="w-6 h-6 text-blue-600 mr-3" />
                            Send us a Message
                        </h2>

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 text-gray-900 placeholder-gray-400 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                    placeholder="Tell us more about your project or inquiry..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Grow Your Business?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Let's discuss how Adgrow can help you achieve your digital marketing goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:info@adgrow.net"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email Us</span>
                            </a>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 inline-flex items-center justify-center space-x-2">
                                <Phone className="w-5 h-5" />
                                <span>Schedule a Call</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;