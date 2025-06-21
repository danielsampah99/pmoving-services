import { AboutUs } from "@/components/AboutUs";
import { FAQs } from "@/components/FAQs";
import { FloatingBanner } from "@/components/FloatingBanner";
import HeroSection from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { OurLocations } from "@/components/OurLocations";
import { Reviews } from "@/components/Reviews";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonial } from "@/components/TestimonialSection";
import { TheMovingProcess } from "@/components/TheMovingProcess";
import { getServiceAreas } from "@/data/service-areas";

export default async function Home() {

	const serviceAreas = await getServiceAreas()

	return (
		<div className="min-h-screen ">
			<HeroSection />
			<ServicesSection />
			<Testimonial />
			<TheMovingProcess />
			<AboutUs />
			<MapSection serviceAreas={serviceAreas.docs ?? []} />
			<Reviews />
			<OurLocations />
			<FAQs />
			<FloatingBanner />
		</div>
	);
}
