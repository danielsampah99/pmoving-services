"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";

import { specialtyMovingServices } from "@/data/services";

import { RelatedLocalMoving } from "../local-moving/residential-movers/related-services";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { pianoMovingFAQs } from "@/data/moving-tips";
import { FAQs } from "../local-moving/residential-movers/faq";


const PianoMovingPage = () => {
    return (
        <ServiceLayout
            image="/piano-moving.webp"
            title="Professional Piano Moving Services"
            desc="Expert piano moving services with specialized equipment and trained professionals to ensure your valuable instrument's safe relocation."
        >
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="space-y-8">
                    {/* Service Introduction */}
                    <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">
                                Specialized Piano Moving Solutions
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Moving a piano requires specialized knowledge, equipment, and expertise. Our professional piano movers provide:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Expert handling of all piano types</li>
                                <li>Specialized piano moving equipment</li>
                                <li>Climate-controlled transportation</li>
                                <li>Professional piano movers</li>
                                <li>Comprehensive insurance coverage</li>
                                <li>Free, detailed moving quotes</li>
                                <li>Flexible scheduling options</li>
                                <li>Door and floor protection</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                Trust our experienced team to move your valuable instrument with the utmost care and precision.
                            </p>
                        </div>
                        <img
                            src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Spinet+piano-1920w.JPG"
                            alt="Professional piano moving"
                            className="rounded-lg shadow-lg object-cover h-full"
                        />
                    </section>

                    {/* Piano Moving Process */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Piano Moving Process
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">1. Assessment</h3>
                                <p className="text-gray-600">
                                    We evaluate your piano's size, type, and moving path to create a detailed moving plan.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">2. Preparation</h3>
                                <p className="text-gray-600">
                                    We secure your piano using specialized equipment and protect surrounding areas.
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="text-xl font-semibold mb-2">3. Transportation</h3>
                                <p className="text-gray-600">
                                    Your piano is carefully moved using proper techniques and transported in our specialized vehicles.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Our Piano Moving Service</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Specialized Expertise
                                </h3>
                                <p className="text-gray-600">
                                    Our team is specifically trained in piano moving techniques and uses professional-grade equipment designed for safe piano transportation.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Comprehensive Protection
                                </h3>
                                <p className="text-gray-600">
                                    We provide full insurance coverage and take extra precautions to protect both your piano and your property during the move.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <RelatedLocalMoving services={specialtyMovingServices} />
            <RequestQuote />
            <FAQs faqs={pianoMovingFAQs} />
            <OurLocations />
        </ServiceLayout>
    );
};

export default PianoMovingPage;
