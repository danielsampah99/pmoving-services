import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { RelatedServices } from "./related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";

const CommercialMoving = () => {
  return (
    <ServiceLayout
      image="/api/media/file/commercial-moving.webp"
      title="Commercial Moving Services"
      desc="Professional commercial moving solutions for businesses of all sizes. Expert handling of office equipment, furniture, and sensitive materials."
    >
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="/moving-process.webp"
                    alt="Commercial Moving Solutions"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3">
              <div className="flex items-center space-x-2 text-background">
                <Info className="w-6 h-6" />
                <h2 className="text-xl md:text-2xl font-bold">
                  Commercial Moving Experts
                </h2>
              </div>
              <p className="text-background">
                Premium Moving Services specializes in commercial relocations,
                providing comprehensive solutions for businesses of all sizes.
              </p>
              <p className="text-gray-700">
                Our team understands the complexities of commercial moves and
                ensures minimal disruption to your business operations.
              </p>
              <p className="font-semibold text-gray-800 mt-4">
                Our commercial moving services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Office relocations</li>
                <li>Warehouse and industrial moving</li>
                <li>Small business moving</li>
                <li>Corporate relocations</li>
                <li>Equipment and machinery moving</li>
                <li>Storage solutions</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">
                Why Choose Our Commercial Moving Services?
              </h2>
              <p className="text-gray-700">
                Our commercial moving services are designed to minimize downtime
                and ensure a smooth transition to your new location.
              </p>
              <p className="text-gray-700">
                We understand that every business has unique requirements, which
                is why we offer customized moving solutions.
              </p>

              <h2 className="text-xl md:text-2xl font-bold pt-6">
                Our Commercial Moving Process
              </h2>
              <p className="text-gray-700">
                We follow a systematic approach to ensure your commercial move is
                executed perfectly:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Initial consultation and site survey</li>
                <li>Detailed moving plan development</li>
                <li>Professional packing and labeling</li>
                <li>Secure transportation</li>
                <li>Setup at new location</li>
                <li>Post-move support</li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-auto rounded-lg object-cover"
                src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/L+shape+tower+desk-1920w.JPG"
                alt="Commercial Moving Process"
              />
            </div>
          </div>
        </div>
      </div>
      <RelatedServices services={commercialMovingServices} />
      <RequestQuote />
      <FAQs faqs={frequentQuestions} />
      <ServicesSection />
      <OurLocations />
    </ServiceLayout>
  );
};

export default CommercialMoving;
