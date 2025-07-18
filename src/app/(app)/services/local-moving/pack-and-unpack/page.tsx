import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { localMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import { OurLocations } from "@/components/OurLocations";

const PackAndUnpack = () => {
	return (
		<ServiceLayout
			image="/api/media/file/packing-supplies.webp"
			title="Professional Packing & Unpacking Services"
			desc="Let our expert team handle the tedious task of packing and unpacking your belongings with care and precision."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">Pack & Unpack</h1>
							<p className="text-background text-lg capitalize sm:text-xl mb-4 sm:mb-6">
								Packing and Unpacking Movers near me
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Moving+boxes+calculator+table+-1920w.jpg"
									alt="Pack & Unpack - Packer and movers near me for Professional Packing Service"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What are pack and unpack services?
								</h2>
							</div>
							<p className="text-background">
								We will come to your location and help pack everything in secure
								boxes. We'll make sure all lose items are secured properly and
								labeled in very nice and easy to identify boxes.
							</p>
							<p className="text-gray-700">
								We'll make sure all of those items from a certain room get
								transported to the next locations room, so you won't have forks
								be unpacked in the bathroom or have all of your clothes be in
								the garage.
							</p>
							<p className="text-gray-700 mt-4">
								We'll make sure that your bedroom gets packed into boxes
								labeled, so it will reach your new bedroom safe and securely. We
								can help with unpacking the boxes for you to secure away exactly
								how you need your items to be.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Why use us to pack and unpack move?
							</h2>
							<p className="text-gray-700">
								We take special care in employing and training our employees. We
								make sure each employee reaches a standard in our training
								before they are trusted to handle anyone's items. This training
								is above and beyond to help deliver a great service every time.
							</p>
							<p className="text-gray-700">
								We follow an internal checklist to make sure your goods are
								packed to be unpacked in the right place so you don't lose your
								mind trying to find your toothbrush and toiletries - it'd be
								right there waiting for you in your new room.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-6">
								<li className="font-bold">Movers & packers Minnesota</li>
								<li className="font-bold">Packing services in Minnesota</li>
								<li className="font-bold">
									Climate - controlled storage for packing service in Minnesota
								</li>
								<li className="font-bold">
									Movers & packers near me Minnesota
								</li>
							</ul>
							<div className="space-y-4">
								<h3 className="text-lg font-semibold">
									Professional Packing and Unpacking Services Includes:
								</h3>
								<ul className="list-disc pl-6 space-y-2 text-gray-700">
									<li>Room-by-room systematic packing</li>
									<li>Special protection for fragile items</li>
									<li>Clear labeling and inventory system</li>
									<li>Efficient unpacking and setup</li>
									<li>Furniture disassembly and reassembly</li>
								</ul>
							</div>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Trailer+loadc-1920w.jpg"
								alt="Professional Unpacking Service"
							/>
						</div>
					</div>
				</div>
			</div>

			<FAQs faqs={frequentQuestions} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default PackAndUnpack;
