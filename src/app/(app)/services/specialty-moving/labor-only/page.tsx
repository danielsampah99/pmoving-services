
import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../../local-moving/residential-movers/related-services";
import { laborOnlyFAQs } from "@/data/moving-tips";
import { specialtyMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import { Metadata } from 'next'
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Premium Moving Services for Moving Labor Help",
	description: "Get the most professional moving labor assisance for loading, unloading and in-house moving needs. Premium Moving Services handles essentials with care. Find us in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
	openGraph: {
		title: "Premium Moving Services for Moving Labor Help",
		description: "Get the most professional moving labor assisance for loading, unloading and in-house moving needs. Premium Moving Services handles essentials with care. Find us in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		type: 'website',
		url: `${BASE_URL}/services/corporate-moving`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/Moving%20labour.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers doing manual labor"
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Moving Services for Moving Labor Help",
		description:"Get the most professional moving labor assistance for loading, unloading,and in-house moving needs. Premium Moving Services handles essentials with care. Find us in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		images: [`${BASE_URL}/api/media/file/Moving%20labour.webp`],
	},
}


const checklist: { id: number; text: string }[] = [
	{ id: 1, text: "Experienced and trained moving professionals" },
	{ id: 2, text: "Flexible scheduling to meet your needs" },
	{ id: 3, text: "Proper equipment and tools for safe moving" },
	{ id: 4, text: "Fully insured and background-checked movers" },
];

const LaborOnlyMovingPage = () => {
	return (
		<div>
			<ServiceLayout
				image="/api/media/file/Unloading%2BABF%2BPods-1920w.webp"
				title="Labor Only Moving Services"
				desc="Professional moving labor assistance for loading, unloading, and in-house moving needs"
			>
				<div className="px-4 py-8 space-y-8">
					{/* New Labor Section */}
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold text-gray-800">
								We Handle Your Move With Care
							</h2>
							<h3 className="text-xl font-semibold text-gray-700">
								Labor Only Movers Near You
							</h3>
							<p className="text-gray-600">
								Need partial help with your move? Our moving labor services
								include in-home assistance, loading/unloading, and heavy lifting
								support. Sometimes a little professional help makes all the
								difference.
							</p>
							<p className="text-gray-600">
								Our trained movers are ready to assist with any size project -
								let us take the load off your mind.
							</p>
							<p className="font-semibold text-gray-800">
								Contact us today for labor-only service pricing.
							</p>
						</div>
						<img
							src="/residential-moving.webp"
							alt="Moving labor team assisting"
							className="rounded-lg shadow-xl"
						/>
					</div>

					{/* Existing Service Description */}
					<div className="space-y-4">
						<h2 className="text-3xl font-bold text-gray-800">
							Expert Moving Labor Assistance
						</h2>
						<p className="text-gray-600">
							Our labor-only moving service provides professional moving help
							without the truck. Perfect for customers who have their own rental
							truck or container and need experienced movers to do the heavy
							lifting, loading, and unloading.
						</p>
					</div>

					{/* Service Features */}
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-gray-800">
								Loading & Unloading
							</h3>
							<p className="text-gray-600">
								Our trained professionals will carefully load or unload your
								rental truck, POD, or storage container with maximum efficiency
								and care for your belongings.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold text-gray-800">
								In-House Moving
							</h3>
							<p className="text-gray-600">
								Need help moving furniture within your home? Our team can assist
								with rearranging furniture, moving heavy items between floors,
								or setting up new rooms.
							</p>
						</div>
					</div>

					{/* Why Choose Us */}
					<div className="bg-gray-50 p-6 rounded-lg">
						<h3 className="text-2xl font-bold text-gray-800 mb-4">
							Why Choose Our Labor Service
						</h3>
						<ul className="space-y-3">
							{checklist.map((item) => (
								<li key={item.id} className="flex items-start gap-x-0.5">
									<span className="mr-2 text-moving-yellow">✓</span>
									<span>{item.text}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<RelatedLocalMoving services={specialtyMovingServices} />
				<RequestQuote />
				<FAQs faqs={laborOnlyFAQs} />
				<ServicesSection />
				<OurLocations />
			</ServiceLayout>
		</div>
	);
};

export default LaborOnlyMovingPage;
