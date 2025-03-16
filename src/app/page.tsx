import { AboutUs } from "@/components/AboutUs";
import { FAQs } from "@/components/FAQs";
import { FloatingBanner } from "@/components/FloatingBanner";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { Reviews } from "@/components/Reviews";
import ServicesSection from "@/components/ServicesSection";
import { TheMovingProcess } from "@/components/TheMovingProcess";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<HeroSection />
			<ServicesSection />
			<TheMovingProcess />
			<AboutUs />
			<MapSection />
			<Reviews />
			<FAQs />
			<FloatingBanner />
			<Footer />
		</div>
	);
}
