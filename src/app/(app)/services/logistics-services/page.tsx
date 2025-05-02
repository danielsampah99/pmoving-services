import { ServiceLayout } from "@/components/ServiceLayout";

import { logisticsFAQs } from "@/data/moving-tips";

import { RelatedServices } from "../commercial-moving/related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { Info } from "lucide-react";
import { FAQs } from "../local-moving/residential-movers/faq";

const LogisticsServicePage = () => {
    return (
        <ServiceLayout
            image="/logistics-services-hero.webp"
            title="Logistics Services"
            desc="Professional logistics solutions for efficient supply chain management and distribution"
        >
            <div className="py-12 px-4">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <h1 className="text-4xl font-bold mb-2 sm:mb-4">
                                Comprehensive Logistics Solutions
                            </h1>
                            <p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
                                Expert logistics services across Minnesota
                            </p>
                            <div className="relative">
                                <img
                                    src="/moving-process.webp"
                                    alt="Logistics Services"
                                    className="w-full rounded-lg max-h-[700px] object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-3">
                            <div className="flex items-center space-x-2 text-background">
                                <Info className="size-6" />
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
            <RelatedServices services={commercialMovingServices} />
            <RequestQuote />
            <FAQs faqs={logisticsFAQs} />
            <OurLocations />

        </ServiceLayout>
    );
};

export default LogisticsServicePage;
