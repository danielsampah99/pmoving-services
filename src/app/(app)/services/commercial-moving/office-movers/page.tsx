import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

const OfficeMovers = () => {
	return (
		<ServiceLayout
			image="/office.jpg"
			title="Office Moving Services"
			desc="Professional office relocation services ensuring minimal business disruption and maximum efficiency."
		>
			<div className="py-12">
				<div className="max-w-7xl mx-auto px-4">
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

			<div className="bg-gray-100 py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Professional Office Moving
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Trusted commercial movers in Minnesota
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/office-moving-1920w.jpg"
									alt="Professional Office Moving Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Office Moving Solutions
								</h2>
							</div>
							<p className="text-background">
								We specialize in efficient office relocations that minimize
								downtime and protect your valuable business assets.
							</p>
							<p className="text-gray-700">
								Our experienced team handles everything from workstations to
								sensitive equipment with precision and care.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Systematic office furniture disassembly and reassembly</li>
								<li>Secure IT equipment and electronics handling</li>
								<li>File and document management systems</li>
								<li>After-hours and weekend moving options</li>
								<li>Professional project management</li>
								<li>Specialized packing materials for office items</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Why Choose Our Office Moving Service?
							</h2>
							<p className="text-gray-700">
								Our office moving service is designed to ensure a seamless
								transition with minimal disruption to your business operations.
								We understand that time is money in business, which is why we
								focus on efficiency and organization.
							</p>
							<p className="text-gray-700">
								With years of experience in commercial moving, we've developed
								proven systems to handle everything from small office
								relocations to large corporate moves.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Our Commercial Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your office move is
								executed perfectly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Detailed pre-move planning and assessment</li>
								<li>Custom packing and labeling system</li>
								<li>Coordinated moving schedule</li>
								<li>Professional installation at new location</li>
								<li>Post-move support and cleanup</li>
							</ul>

							<Link href="/free-quote" className="inline-block mt-6">
								<button className="bg-background cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-background-100 transition-colors duration-300">
									GET A FREE QUOTE
								</button>
							</Link>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/commercial-moving-1920w.jpg"
								alt="Office Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>
		</ServiceLayout>
	);
};

export default OfficeMovers;
