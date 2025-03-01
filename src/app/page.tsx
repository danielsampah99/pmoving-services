import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
// import ExpertSection from "@/components/Expert";
// import MovingSection from "@/components/Mission";
// import Testimonial from "@/components/Testimonial";
import { TheMovingProcess } from "@/components/TheMovingProcess";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<HeroSection />
			<TheMovingProcess />
			<ServicesSection />
			<AboutUs />
			{/* <MovingSection /> */}
			{/* <ExpertSection /> */}
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
}
