import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Premium Moving Services | Corporate Relocation in Minnesota",
	description:
		"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
	keywords: [
		"corporate relocation Minnesota",
		"business moving services",
		"office movers",
		"employee relocation",
		"commercial movers Woodbury",
		"packing and unpacking services",
		"office equipment transportation",
		"Minnesota corporate movers",
		"corporate moving company",
	],
	openGraph: {
		title: "Premium Moving Services | Corporate Relocation in Minnesota",
		description:
			"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
		type: "website",
		url: `${BASE_URL}/services/corporate-moving`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/corporate-moving.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers handling corporate relocation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Moving Services | Corporate Relocation in Minnesota",
		description:
			"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
		images: [`${BASE_URL}/api/media/file/corporate-moving.webp`],
	},
};

const CorporateMoving = () => {
	return (
		<ServiceLayout
			image="/api/media/file/corporate-moving.webp"
			title="Corporate Moving Services"
			desc="Professional relocation solutions for businesses and employees"
		>
			{/* Trusted Brands Section */}
			<div className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4">
					<h3 className="text-center text-xl font-semibold text-gray-600 mb-8">
						Trusted by Leading Organizations
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
						<div className="flex justify-center">
							<img
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/business-1920w.png"
								alt="Business Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/AngiesList_SSA_2019-1920w.png"
								alt="Angie's List Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src="https://irp-cdn.multiscreensite.com/b0f4adc5/dms3rep/multi/inline.svg"
								alt="Inline Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content Sections */}
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto px-4 space-y-20">
					{/* What is Corporate Relocation */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-last lg:order-first">
							<div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
								<div className="aspect-w-16 aspect-h-9">
									<img
										src="/moving-process.webp"
										alt="Moving Guide"
										className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-center gap-4">
								<Info className="w-8 h-8 text-background" />
								<h2 className="text-3xl font-bold text-gray-900">
									Corporate Relocation Solutions
								</h2>
							</div>
							<p className="text-background">
								Our Woodbury corporate relocation movers will help you with job
								transitions through our complete packing, shipping, and
								unpacking services.
							</p>
							<p className="text-gray-700">
								We ensure safe transportation of office equipment and personal
								belongings between locations, supporting seamless transitions
								for new job assignments.
							</p>
						</div>
					</div>

					{/* Why Corporate Movers */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-3xl font-bold text-gray-900">
								Why Choose Professional Movers?
							</h2>
							<p className="text-gray-700">
								For employees relocating with moving allowances or lump sum
								payments, our corporate movers streamline the relocation process
								so you can focus on your new role.
							</p>

							<p className="text-gray-700">
								We handle the complex logistics of employee relocation
								including:
							</p>

							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Office equipment transportation</li>
								<li>Department-wide relocations</li>
								<li>Military-style group moves</li>
								<li>Custom corporate relocation plans</li>
							</ul>

							<p className="text-gray-700 mt-4">
								Premium Movers specializes in creating tailored relocation
								strategies that maintain service quality while accommodating
								companies of any size.
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className="rounded-lg overflow-hidden h-full">
						<img
							className="w-full h-auto max-h-[800px] rounded-lg object-contain"
							src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/L+shape+tower+desk-1920w.JPG"
							alt="Movers"
						/>
					</div>
				</div>
			</div>
			<RequestQuote />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default CorporateMoving;
