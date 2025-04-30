import StorageContent from "@/components/StorageContent";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "../local-moving/residential-movers/faq";
import { storageFaqs } from "@/data/moving-tips";

export default function StorageServices() {
	return (
		<>
			{/* Hero Section remains unchanged */}
			<section className="relative min-h-screen">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<picture>
						<source srcSet="/images/hero-bg.jpg" media="(min-width: 2048px)" />
						<img
							src="/storage-services.webp"

							className="w-full h-full object-cover object-center"
							loading="lazy"
							alt=""
							aria-hidden="true"
						/>
					</picture>
				</div>

				{/* Content */}
				<div className="relative z-10 min-h-screen flex items-center">
					<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex flex-col md:flex-row gap-8 items-center">
							{/* Text Content */}
							<div className="text-white max-w-2xl">
								<h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
									Professional Storage Solutions
								</h1>
								<p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
									Secure, climate-controlled storage facilities with 24/7
									monitoring and flexible rental options. Perfect for personal
									or business storage needs.
								</p>

							</div>
						</div>
					</div>
				</div>
			</section>

			<StorageContent />
			<RequestQuote />
			<FAQs faqs={storageFaqs} />
			<OurLocations />
		</>
	);
}
