import { ServiceLayout } from "@/components/ServiceLayout";
import { WarehouseServiceDetails } from "@/components/WarehouseServiceDetails";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";

const WarehouseIndustrialPage = () => {
    return (
        <div>
            <ServiceLayout
                image="/residential-moving.webp"
                title="Warehouse & Industrial Moving"
                desc="Professional warehouse relocation and industrial equipment moving services"
            >
                {/* New Content Added */}
                <div className="py-12 px-4">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    What is Industrial Relocation?
                                </h2>
                                <p className="text-gray-700">
                                    If you are planning a warehouse move, you will know that there is a great deal of planning involved to make sure that everything runs smoothly. With the help of our Premium movers, you can be rest assured that most of the hard work is done for you.
                                </p>
                                <p className="text-gray-700">
                                    Our expert warehouse relocation team will help to plan every detail of your business move. If you are interested to see how we can help to make sure your move goes as smooth as possible, get in touch with us today for a quote on your removal.
                                </p>
                            </div>
                            <img
                                src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/warehouse-moving-1920w.jpg"
                                alt="Industrial relocation"
                                className="rounded-lg shadow-xl"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <h2 className="text-2xl md:text-3xl font-bold">
                                    Why Choose Our Industrial Moves?
                                </h2>
                                <p className="text-gray-700">
                                    Our Premium movers are trained and certified in light industrial relocation and we are able to complete even complex tasks. With over a decade of quality and value driven industrial moving experience, we can fit your timeline and your budget.
                                </p>
                                <div className="gap-4 mt-6">
                                    {/* <img
                                        src="/moving-guide-cover.webp"
                                        alt="Moving guide"
                                        className="rounded-lg"
                                    /> */}
                                    <RequestQuote />
                                </div>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-lg">
                                <p className="text-gray-700">
                                    We can provide all the labor required to complete your warehouse relocation. We are licensed, bonded, and insured.
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Certified industrial movers</li>
                                    <li>10+ years experience</li>
                                    <li>Fully insured services</li>
                                    <li>Customized timelines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Existing Component Remains */}
                <WarehouseServiceDetails />
            </ServiceLayout>

            {/* Rest of existing components preserved */}
            <RelatedServices services={commercialMovingServices} />
            <FAQs faqs={frequentQuestions} />
            <OurLocations />
        </div>
    );
};

export default WarehouseIndustrialPage;
