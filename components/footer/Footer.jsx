"use client"

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const productLinks = [
        { name: 'Analytics', href: '/analytics' },
        { name: 'Optimization', href: '/optimization' },
        { name: 'Automation', href: '/automation' },
        { name: 'Pricing', href: '/pricing' },
    ];

    const resourceLinks = [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Guides', href: '/guides' },
        { name: 'FAQ', href: '/faq' },
    ];

    const companyLinks = [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Careers', href: '/careers' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: '#' },
        { name: 'Twitter', icon: Twitter, href: '#' },
        { name: 'Instagram', icon: Instagram, href: '#' },
        { name: 'LinkedIn', icon: Linkedin, href: '#' },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                                <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">AdBoost</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 max-w-sm">
                            AI-powered Meta Ads optimization platform that helps marketers boost ROAS, save time, and grow their business.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                                        aria-label={social.name}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {resourceLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="mailto:info@adboost.net"
                                    className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-200 flex items-center"
                                >
                                    <Mail className="h-4 w-4 mr-1" />
                                    info@adboost.net
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            © 2025 Adboost. All rights reserved.
                        </p>
                        <div className="mt-4 sm:mt-0 flex space-x-6">
                            <a
                                href="/privacy"
                                className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;