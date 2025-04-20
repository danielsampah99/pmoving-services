import { getPayload } from "payload"
import config from '@payload-config'
import { OurLocations } from "@/components/OurLocations"
import { Hero } from "./hero"
import { MovingResources } from "./moving-resources"


export default async function SingleServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {

	const { slug } = await params

	const payload = await getPayload({ config })

	const serviceArea = (await payload.find({
		collection: 'service-areas',
		where: { slug: { equals: slug } },
		limit: 1
	})).docs[0]

	return (
		<section className="max-w-7xl mx-auto p-6 lg:px-8 pt-0 xl:pt-6">
			<Hero
				title={serviceArea.title}
				description={serviceArea.description}
				mapUrl={serviceArea.mapUrl ?? ''}
			/>
			<MovingResources
				title={serviceArea.title}
				resources={serviceArea?.resources ?? []}
			/>
			<OurLocations />
		</section>
	)
}
