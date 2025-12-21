import { HeroSection } from "@/components/HeroSection";
import { LocalExpertise } from "@/components/LocalExpertise";
import { LocalFaq } from "@/components/LocalFaq";
import { LocalIncluded } from "@/components/LocalIncluded";
import { LocalMovingContentSection } from "@/components/LocalMovingContentSection";
import { LocalMovingOptions } from "@/components/LocalMovingOptions";
import { OurLocations } from "@/components/OurLocations";
import { RelatedServices } from "@/components/RelatedServices";
import { ServicesSection } from "@/components/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Same-day Local Moving Services from Premium Moving Services",
	description:
		"Looking for local moving companies? Premium Moving Services provides complete protection, zero hidden fees same day quotes and on-time guarantee",
};

const LocalMovingPage = () => {
	return (
		<div>
			<HeroSection />
			<LocalMovingContentSection />
			<LocalExpertise />
			<LocalIncluded />
			<LocalMovingOptions />
			<LocalFaq />

			<RelatedServices />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default LocalMovingPage;
