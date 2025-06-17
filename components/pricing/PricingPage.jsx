import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
    const plans = [
        {
            title: "SEO Package",
            subtitle: "Custom",
            features: [
                "Keyword Research",
                "On-Page Optimization",
                "Link Building",
                "Content Strategy"
            ]
        },
        {
            title: "PPC Package",
            subtitle: "Custom",
            features: [
                "Campaign Setup",
                "Ad Management",
                "Performance Tracking",
                "A/B Testing"
            ]
        },
        {
            title: "Social Media Marketing",
            subtitle: "Custom",
            features: [
                "Content Creation",
                "Community Management",
                "Influencer Marketing",
                "Analytics Reporting"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 mt-10 to-blue-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center pt-10 mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Pricing Plans
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect plan to elevate your brand's digital presence. Our tailored packages cater to businesses of all sizes, ensuring optimal results and growth.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Card Header */}
                            <div className="p-8 pb-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {plan.title}
                                </h3>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    {plan.subtitle}
                                </h2>

                                {/* Contact Button */}
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-colors duration-200 mb-8">
                                    Contact Us
                                </button>
                            </div>

                            {/* Features List */}
                            <div className="px-8 pb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">
                        Need a custom solution? We're here to help you grow your business.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;