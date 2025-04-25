import { ServiceLayout } from "@/components/ServiceLayout";
import { WarehouseServiceDetails } from "@/components/WarehouseServiceDetails";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";

const WarehouseIndustrialPage = () => {
	return (
		<div>
			<ServiceLayout
				image="/residential.jpg"
				title="Warehouse & Industrial Moving"
				desc="Professional warehouse relocation and industrial equipment moving services"
			>
				<WarehouseServiceDetails />
			</ServiceLayout>
			<RelatedServices services={commercialMovingServices} />
			<RequestQuote />
			<FAQs faqs={frequentQuestions} />
			<OurLocations />
		</div>
	);
};

export default WarehouseIndustrialPage;
