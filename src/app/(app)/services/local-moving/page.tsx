import { HeroSection } from '@/components/HeroSection'
import { LocalServiceDetails } from '@/components/LocalServiceDetails'
import { OurLocations } from '@/components/OurLocations'
import { RelatedServices } from '@/components/RelatedServices'

const LocalMovingPage = () => {
	return (
		<div>
			<HeroSection />
			<LocalServiceDetails />
			<RelatedServices />
			<OurLocations />
		</div>
	)
}

export default LocalMovingPage
