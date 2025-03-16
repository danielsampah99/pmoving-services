import { AboutUs } from "@/components/AboutUs";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { Reviews } from "@/components/Reviews";
import ServicesSection from "@/components/ServicesSection";
// import ExpertSection from "@/components/Expert";
// import MovingSection from "@/components/Mission";
// import Testimonial from "@/components/Testimonial";
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
			{/* <MovingSection /> */}
			{/* <ExpertSection /> */}
			{/* <Testimonial /> */}
			<FAQs />
			<Footer />
		</div>
	);
}
