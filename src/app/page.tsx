import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Mission from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <HeroSection/>
      <ServicesSection/>
   
    </div>
  );
}
