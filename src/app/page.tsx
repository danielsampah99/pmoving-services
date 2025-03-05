import { AboutUs } from "@/components/AboutUs";


import ExpertSection from "@/components/Expert";
import FAQs from "@/components/FAQs";


import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
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
			<TheMovingProcess />
			<ServicesSection />
			<AboutUs />
			<Reviews />
			{/* <MovingSection /> */}
			{/* <ExpertSection /> */}
			{/* <Testimonial /> */}
			<Footer />
		</div>
	);
}
