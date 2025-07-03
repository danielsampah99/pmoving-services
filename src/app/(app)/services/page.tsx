import { AllServices } from "./all-services"
import { HeroSection } from "./hero"

const ServicesPage = () => {
	return <section className='py-8 px-6 lg:px-8'>
		<HeroSection />
		<AllServices />
	</section>
}

export default ServicesPage
