import { LongServiceDetails } from "@/components/LongServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { RelatedServicesLong } from "@/components/RelatedServicesLong";

const LongDistanceMovingPage = () => {
	return (
		<div>
			<PackingHerolong
				description="Top-rated long distance movers servicing nationwide relocations. We handle all aspects of your cross-country or state-to-state move with expert packing, secure transportation, and stress-free delivery. Our professional team ensures your belongings arrive safely whether you're moving 100 or 3,000 miles away."
				image="/long-distance-moving.webp"
				title="Long Distance Moving"
			/>
			<LongServiceDetails />
			<RelatedServicesLong />
			<OurLocations />
		</div>
	);
};

export default LongDistanceMovingPage;
