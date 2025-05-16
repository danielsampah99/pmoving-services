import { HeroSection } from "@/components/HeroSection";
import { LocalServiceDetails } from "@/components/LocalServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { RelatedServices } from "@/components/RelatedServices";
import { ServicesSection } from "@/components/ServicesSection";

const LocalMovingPage = () => {
	return (
		<div>
			<HeroSection />
			<LocalServiceDetails />
			<RelatedServices />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default LocalMovingPage;
