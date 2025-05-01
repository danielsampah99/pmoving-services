import { ServiceLayout } from "@/components/ServiceLayout";
import { Info, Truck, BarChart, Clock, Shield, Package, Warehouse, Network } from "lucide-react";

import { frequentQuestions } from "@/data/moving-tips";

import { RelatedServices } from "../commercial-moving/related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "@/components/FAQs";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";

const LogisticsServicePage = () => {
    return (
        <ServiceLayout
            image="/logistics-service.webp"
            title="Logistics Services"
            desc="Professional logistics solutions for efficient supply chain management and distribution"
        >
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden p-4 sm:p-6">
                            <h1 className="text-4xl font-bold mb-2 sm:mb-4">
                                Comprehensive Logistics Solutions
                            </h1>
                            <p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
                                Expert logistics services across Minnesota
                            </p>
                            <div className="relative">
                                <img
                                    src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/warehouse-moving-1920w.jpg"
                                    alt="Logistics Services"
                                    className="w-full rounded-lg max-h-[700px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-3">
                            <div className="flex items-center space-x-2 text-background">
                                <Info className="w-6 h-6" />
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Professional Logistics Management
                                </h2>
                            </div>
                            <p className="text-background">
                                Premium Moving Services offers comprehensive logistics solutions
                                designed to optimize your supply chain and distribution needs.
                            </p>
                            <p className="text-gray-700">
                                Our experienced team handles everything from warehouse
                                management to distribution coordination, ensuring efficient
                                operations and timely delivery.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Supply chain optimization</li>
                                <li>Warehouse management</li>
                                <li>Distribution coordination</li>
                                <li>Inventory tracking systems</li>
                                <li>Transportation management</li>
                                <li>Cross-docking services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-xl md:text-2xl font-bold">
                                Why Choose Our Logistics Services?
                            </h2>
                            <p className="text-gray-700">
                                Our logistics services are designed to streamline your operations
                                and improve efficiency. We combine industry expertise with
                                cutting-edge technology to deliver optimal results.
                            </p>
                            <p className="text-gray-700">
                                With years of experience in logistics management, we've
                                developed robust systems to handle operations of any scale.
                            </p>

                            <h2 className="text-xl md:text-2xl font-bold pt-6">
                                Our Logistics Process
                            </h2>
                            <p className="text-gray-700">
                                We follow a comprehensive approach to ensure your logistics
                                operations run smoothly:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Initial assessment and planning</li>
                                <li>Custom logistics strategy development</li>
                                <li>Implementation and optimization</li>
                                <li>Real-time tracking and monitoring</li>
                                <li>Regular performance analysis</li>
                                <li>Continuous improvement</li>
                            </ul>
                        </div>

                        <div className="rounded-lg overflow-hidden h-full">
                            <img
                                className="w-full h-auto rounded-lg object-cover"
                                src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Trailer+loadc-1920w.jpg"
                                alt="Logistics Operations"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <RelatedServices services={commercialMovingServices} /> */}
            <RequestQuote />
            {/* <FAQs faqs={frequentQuestions} /> */}
            <OurLocations />
            {/* Added Features Grid */}
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Logistics Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Truck className="w-12 h-12 text-background mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Fleet Management</h3>
                            <p className="text-gray-600">Modern fleet with real-time tracking and optimization</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Warehouse className="w-12 h-12 text-background mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
                            <p className="text-gray-600">Strategic storage locations with advanced inventory systems</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Network className="w-12 h-12 text-background mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Network Design</h3>
                            <p className="text-gray-600">Optimized supply chain network for maximum efficiency</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Package className="w-12 h-12 text-background mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Distribution</h3>
                            <p className="text-gray-600">Seamless distribution services across the region</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Added Statistics Section */}
            <div className="py-16 px-4 bg-background text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">98%</div>
                            <div className="text-lg">On-Time Delivery Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1M+</div>
                            <div className="text-lg">Shipments Handled</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-lg">Customer Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Added CTA Section */}
            <div className="py-16 px-4 bg-gradient-to-r from-background to-background">
                <div className="max-w-7xl mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
                    <p className="text-xl mb-8">Let our logistics experts help you streamline your operations</p>
                    <button className="bg-white text-background px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>

            {/* Added Testimonial Section */}
            {/* <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-600 italic mb-4">"Their logistics services have transformed our supply chain efficiency. The team's expertise and dedication are unmatched."</p>
                            <div className="font-semibold">- John Smith, Operations Director</div>
                            <div className="text-gray-500">Global Manufacturing Co.</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <p className="text-gray-600 italic mb-4">"Exceptional service and reliability. They've helped us reduce costs while improving delivery times significantly."</p>
                            <div className="font-semibold">- Sarah Johnson, Supply Chain Manager</div>
                            <div className="text-gray-500">Tech Solutions Inc.</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </ServiceLayout>
    );
};

export default LogisticsServicePage;