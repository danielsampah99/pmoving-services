import { AboutUs } from "@/components/AboutUs";
import ExpertSection from "@/components/Expert";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import MovingSection from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
	return (
		<div className="min-h-screen ">
			<HeroSection />
			<ServicesSection />
			<AboutUs />
			<MovingSection />
			<ExpertSection />
			<Testimonial />
			<Footer />
		</div>
	);
}
