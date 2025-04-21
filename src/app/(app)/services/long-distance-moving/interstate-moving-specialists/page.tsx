import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { RelatedServicesLong } from "@/components/RelatedServicesLong";
import { LongServiceDetails } from "@/components/LongServiceDetails";

const InterstateMovingSpecialistsPage = () => {
	return (
		<div>
			<PackingHerolong />
			<LongServiceDetails />
			<RelatedServicesLong />
			<OurLocations />
		</div>
	);
};

export default InterstateMovingSpecialistsPage;
