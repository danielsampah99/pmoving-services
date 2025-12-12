import { HeroSection } from "@/components/HeroSection";
import { LocalMovingContentSection } from "@/components/LocalMovingContentSection";
import { LocalServiceDetails } from "@/components/LocalServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { RelatedServices } from "@/components/RelatedServices";
import { ServicesSection } from "@/components/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Same-day Local Moving Services from Premium Moving Services",
	description: "Looking for local moving companies? Premium Moving Services provides complete protection, zero hidden fees same day quotes and on-time guarantee"
}

const LocalMovingPage = () => {
	return (
		<div>
			<HeroSection />
			<LocalMovingContentSection />
			<RelatedServices />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default LocalMovingPage;
