import { AboutUs } from "@/components/AboutUs";
import { FAQs } from "@/components/FAQs";
import { FloatingBanner } from "@/components/FloatingBanner";
import HeroSection from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { OurLocations } from "@/components/OurLocations";
import { Reviews } from "@/components/Reviews";
import ServicesSection from "@/components/ServicesSection";
import { Testimonial } from "@/components/TestimonialSection";
import { TheMovingProcess } from "@/components/TheMovingProcess";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<HeroSection />
			<ServicesSection />
			<Testimonial />
			<TheMovingProcess />
			<AboutUs />
			<MapSection />
			<Reviews />
			<OurLocations />
			<FAQs />
			<FloatingBanner />
		</div>
	);
}
