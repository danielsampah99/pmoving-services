"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../../local-moving/residential-movers/related-services";
import { gunSafetyMovingFAQs } from "@/data/moving-tips";
import { specialtyMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";

const GunAndSafeMovingPage = () => {
	return (
		<ServiceLayout
			image="/api/media/file/gun-safe.webp"
			title="Gun & Safe Moving Services"
			desc="Professional and secure transportation for your firearms and safes with specialized equipment and trained experts."
		>
			<div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
				{/* New Gun Safe Section */}
				<section className="grid md:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl font-bold text-gray-900">
							We Handle Your Gun Safe Move With Care
						</h2>
						<div className=" p-4 rounded-lg">
							<h3 className="text-xl font-semibold text-background mb-3">
								Gun Safe Movers Near You
							</h3>
							{/* <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
								READ REVIEWS
							</button> */}
						</div>
						<p className="text-gray-600">
							Moving specialty equipment like a gun safe requires proper
							equipment and expertise. Even with lifting straps, moving a
							half-ton safe requires professional handling.
						</p>
						<ul className="list-disc pl-6 space-y-3 text-gray-600">
							<li>Specialized lifting equipment and straps</li>
							<li>Two-person trained moving teams</li>
							<li>Commercial-grade vehicles for safe transport</li>
							<li>Doorway and floor protection</li>
						</ul>
					</div>
					<img
						src="/moving-process.webp"
						alt="Professional gun safe moving"
						className="rounded-lg shadow-xl"
					/>
				</section>

				{/* Existing Specialized Services Section */}
				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-gray-900">
						Specialized Gun & Safe Moving Services
					</h2>
					<p className="text-lg text-gray-600">
						We understand the unique challenges and requirements involved in
						moving firearms and safes. Our team is specially trained and
						equipped to handle these valuable items with the utmost care and
						security.
					</p>

					<div className="grid md:grid-cols-2 gap-8 mt-8">
						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">
								Gun Moving Services
							</h3>
							<ul className="space-y-3 text-gray-600">
								<li>• Licensed and insured firearms transportation</li>
								<li>• Secure packaging and handling</li>
								<li>• Compliance with all federal and state regulations</li>
								<li>• Discrete and professional service</li>
							</ul>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">
								Safe Moving Services
							</h3>
							<ul className="space-y-3 text-gray-600">
								<li>• Specialized equipment for heavy safe moving</li>
								<li>• Professional installation at new location</li>
								<li>• Protection of floors and doorways</li>
								<li>• Experienced safe moving specialists</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="p-6 bg-gray-50 rounded-lg">
							<h3 className="text-xl font-semibold mb-3">1. Assessment</h3>
							<p className="text-gray-600">
								We evaluate the size, weight, and location of your items to
								determine the best moving approach.
							</p>
						</div>
						<div className="p-6 bg-gray-50 rounded-lg">
							<h3 className="text-xl font-semibold mb-3">2. Planning</h3>
							<p className="text-gray-600">
								Our team develops a detailed plan considering access points,
								equipment needed, and safety measures.
							</p>
						</div>
						<div className="p-6 bg-gray-50 rounded-lg">
							<h3 className="text-xl font-semibold mb-3">3. Execution</h3>
							<p className="text-gray-600">
								We carefully execute the move using specialized equipment and
								following all safety protocols.
							</p>
						</div>
					</div>
				</section>

				<section className="space-y-6">
					<h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">
								Experience & Expertise
							</h3>
							<p className="text-gray-600">
								Our team has extensive experience in moving guns and safes of
								all sizes. We understand the importance of security and proper
								handling during transportation.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-2xl font-semibold text-gray-800">
								Safety & Security
							</h3>
							<p className="text-gray-600">
								We prioritize the safety of your valuable items and maintain
								strict security protocols throughout the entire moving process.
							</p>
						</div>
					</div>
				</section>
			</div>
			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={gunSafetyMovingFAQs} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default GunAndSafeMovingPage;
