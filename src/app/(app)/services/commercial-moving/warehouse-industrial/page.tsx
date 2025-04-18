import { ServiceLayout } from '@/components/ServiceLayout'
import { OurLocations } from '@/components/OurLocations'
import { RelatedServicesLong } from '@/components/RelatedServicesLong'
import { WarehouseServiceDetails } from '@/components/WarehouseServiceDetails'


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
			<RelatedServicesLong />
			<OurLocations />
		</div>
	)
}

export default WarehouseIndustrialPage