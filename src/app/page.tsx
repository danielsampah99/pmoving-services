import ExpertSection from "@/components/Expert";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import MovingSection from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <HeroSection/>
      <ServicesSection/>
      <MovingSection/>
      <ExpertSection/>
   
    </div>
  );
}
