import { LongServiceDetails } from "@/components/LongServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { RelatedServicesLong } from "@/components/RelatedServicesLong";

const LongDistanceMovingPage = () => {
	return (
		<div>
			<PackingHerolong />
			<LongServiceDetails />
			<RelatedServicesLong />
			<OurLocations />
		</div>
	);
};

export default LongDistanceMovingPage;
