import { Hero } from "./hero";
import { MovingProcess } from "./moving-process";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "./faq";
import { RelatedLocalMoving } from "./related-services";
import { localMovingServices } from "@/data/services";
import { RequestQuote } from "./request-quote";
import { frequentQuestions, residentialExpectations, residentialMovingQuestions } from "@/data/moving-tips";
import { ServicesSection } from "@/components/ServicesSection";
import type { Metadata } from "next";
import { BASE_URL } from "@/utils";
import { ResidentialFullService, ResidentialMovingCost } from "@/components/ResidentialFullService";
import { ResidentialCTA, ResidentialIntro } from "@/components/ResidentialIntro";
import { ResidentialProfessionalMovers } from "@/components/ResidentialProfessionalMovers";

export const metadata: Metadata = {
	title: "Premium Moving Services | Residential movers in Minnesota, MN",
	description:
		"Ensured with quality service, integrated with safety and efficiency on priority, Premium Moving Services is a trusted and friendly residential mover in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
	openGraph: {
		title: "Premium Moving Services | Residential movers in Minnesota, MN",
		description:
			"Ensured with quality service, integrated with safety and efficiency on priority, Premium Moving Services is a trusteed and friendly residential mover in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		type: "website",
		url: `${BASE_URL}/services/local-moving/residential-movers`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/residential-moving.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers handling residential relocation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Moving Services | Residential movers in Minnesota, MN",
		description:
			"Ensured with quality service, integrated with safety and efficiency on priority, Premium Moving Services is a trusteed and friendly residential mover in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		images: [`${BASE_URL}/api/media/file/residential-moving.webp`],
	},
};

const ResidentialMoving = () => {
	return (
		<section className="px-6 lg:px-8">
			<Hero
				description="Professional residential moving services designed for homeowners and renters in Minneapolis and St. Paul seeking a smooth, stress-free relocation."
				image="/residential-moving.webp"
				alt="Residential moving images"
				title="Residential Moving Services"
			/>

			<ResidentialIntro />

			<ResidentialCTA />

			<ResidentialProfessionalMovers />

			<MovingProcess
				description="Premium Moving Services sets ourselves apart with our
				dedication to ensuring quality service coupled with safety and
				efficiency at the fore-front. We offer flexibility for each project and can meet your needs
				whatever they may be."
				expectations={residentialExpectations}
				image={{ src: "/moving-process.webp", alt: "Moving process image" }}
				title="House Movers"
			/>

			<ResidentialFullService />

			<ResidentialMovingCost />

			
			
			<FAQs title="FAQs about Residential Moving" faqs={residentialMovingQuestions} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<ServicesSection />
			<OurLocations />
		</section>
	);
};

export default ResidentialMoving;
