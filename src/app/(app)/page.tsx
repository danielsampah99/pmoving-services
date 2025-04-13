import { AboutUs } from "@/app/my-route/components/AboutUs";
import { FAQs } from "@/app/my-route/components/FAQs";
import { FloatingBanner } from "@/app/my-route/components/FloatingBanner";
import HeroSection from "@/app/my-route/components/Hero";
import { MapSection } from "@/app/my-route/components/MapSection";
import { OurLocations } from "@/app/my-route/components/OurLocations";
import { Reviews } from "@/app/my-route/components/Reviews";
import ServicesSection from "@/app/my-route/components/ServicesSection";
import { Testimonial } from "@/app/my-route/components/TestimonialSection";
import { TheMovingProcess } from "@/app/my-route/components/TheMovingProcess";

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
