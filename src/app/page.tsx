import { AboutUs } from "@/components/AboutUs";
import ExpertSection from "@/components/Expert";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import MovingSection from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";
import Testimonial from "@/components/Testimonial";


export default function Home() {
	return (
		<div className="min-h-screen ">
			<Header />
			<HeroSection />
			<ServicesSection />
			<AboutUs />
			<MovingSection />
			{/* <ExpertSection /> */}
			<Testimonial />
			<Footer />
		</div>
	);
}
