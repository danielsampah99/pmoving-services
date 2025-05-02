"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { Info, Globe, Shield, Clock, CheckCircle } from "lucide-react";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RelatedMovingServices } from "../long-distance-moving/related-services";
import { longDistanceMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "@/components/FAQs";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";

const InternationalMoving = () => {
    return (
        <ServiceLayout
            image="/international-moving.webp"
            title="International Moving Services"
            desc="Professional international relocation services ensuring secure and efficient overseas moves with comprehensive logistics support."
        >
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src="/moving-process.webp"
                                        alt="International Moving Solutions"
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-3">
                            <div className="flex items-center space-x-2 text-background">
                                <Info className="w-6 h-6" />
                                <h2 className="text-xl md:text-2xl font-bold">
                                    International Moving Specialists
                                </h2>
                            </div>
                            <p className="text-background">
                                Premium Moving Services excels in international relocations,
                                providing comprehensive solutions for both residential and
                                commercial moves worldwide.
                            </p>
                            <p className="text-gray-700">
                                Our team understands the complexities of international moves
                                and ensures a smooth transition to your new country.
                            </p>
                            <p className="font-semibold text-gray-800 mt-4">
                                Our international moving services include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Door-to-door international shipping</li>
                                <li>Custom crating and packing</li>
                                <li>International documentation assistance</li>
                                <li>Customs clearance support</li>
                                <li>Global logistics coordination</li>
                                <li>Storage solutions worldwide</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold">
                                Why Choose Our International Moving Services?
                            </h2>
                            <p className="text-gray-700">
                                Moving internationally requires extensive planning, expertise,
                                and attention to detail. Our experienced team handles all aspects
                                of your international move with precision and care.
                            </p>
                            <p className="text-gray-700">
                                We coordinate with global partners to ensure seamless
                                transitions across borders and continents.
                            </p>
                            
                            <p className="font-semibold text-gray-800 mt-4">
                                Our international moving process includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Detailed pre-move consultation</li>
                                <li>Custom packing for international transport</li>
                                <li>Documentation and customs guidance</li>
                                <li>International shipping coordination</li>
                                <li>Destination services and setup</li>
                                <li>Global tracking and support</li>
                            </ul>
                            
                            <p className="text-gray-700 mt-4">
                                We strive to make your international move as smooth and
                                stress-free as possible, handling all the complex details
                                while you focus on your new adventure.
                            </p>
                        </div>

                        <div className="rounded-lg overflow-hidden h-full">
                            <img
                                className="w-full h-auto max-h-[800px] rounded-lg object-cover"
                                src="/international-shipping.webp"
                                alt="International Moving Process"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Benefits Section */}
            <div className="bg-gray-50 py-12 px-4 mt-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Trust Us With Your International Move?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Globe className="w-12 h-12 mx-auto mb-4 text-background" />
                            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                            <p className="text-gray-600">
                                Established partnerships worldwide ensuring seamless moves across borders
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Shield className="w-12 h-12 mx-auto mb-4 text-background" />
                            <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
                            <p className="text-gray-600">
                                Comprehensive coverage for your belongings during international transit
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <Clock className="w-12 h-12 mx-auto mb-4 text-background" />
                            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">
                                Round-the-clock assistance throughout your moving journey
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-background" />
                            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                            <p className="text-gray-600">
                                Experienced professionals specialized in international logistics
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Process Timeline */}
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Your International Moving Journey
                    </h2>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-background"></div>
                        <div className="space-y-12">
                            {[
                                {
                                    title: "Initial Consultation",
                                    description: "Free assessment of your moving needs and detailed quote"
                                },
                                {
                                    title: "Custom Planning",
                                    description: "Tailored moving strategy and timeline creation"
                                },
                                {
                                    title: "Packing & Documentation",
                                    description: "Professional packing and paperwork preparation"
                                },
                                {
                                    title: "International Transport",
                                    description: "Secure shipping and real-time tracking"
                                },
                                {
                                    title: "Destination Services",
                                    description: "Customs clearance and delivery to your new home"
                                }
                            ].map((step, index) => (
                                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                                    <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                    <div className="hidden md:block w-16 relative">
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background rounded-full"></div>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Call to Action */}
            <div className="bg-background text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your International Journey?</h2>
                    <p className="text-xl mb-8">Get your free consultation and detailed moving quote today!</p>
                    <button className="bg-white text-background px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Get Your Free Quote
                    </button>
                </div>
            </div>

            <RelatedMovingServices services={longDistanceMovingServices} />
            <RequestQuote />
            {/* <FAQs faqs={longDistanceQuestions} /> */}
            <OurLocations />
        </ServiceLayout>
    );
};

export default InternationalMoving;