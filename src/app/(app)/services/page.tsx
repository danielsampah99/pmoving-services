import { Metadata } from "next";
import { AllServices } from "./all-services";
import { HeroSection } from "./hero";

export const metadata: Metadata = {
	title: {
		default: "Premium Moving Services | Reliable Moving Companies",
		template: "Premium Moving Services | %s",
	},
	description:
		"Amongst the budget-friendly moving companies, Premium Moving Services delivers professional moving services from locall moving to storage services",
	keywords: [
		"moving services",
		"local moving",
		"storage moving",
		"hoa moving",
		"apartment movers",
		"minnesota moving",
	],
};

const ServicesPage = () => {
	return (
		<section className="py-8 px-6 lg:px-8">
			<HeroSection />
			<AllServices />
		</section>
	);
};

export default ServicesPage;
