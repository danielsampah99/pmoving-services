import { getPayload } from "payload";
import config from "@payload-config";
import { OurLocations } from "@/components/OurLocations";
import { Hero } from "./hero";
import { MovingResources } from "./moving-resources";
import { Faqs } from "./faqs";
import type { Metadata } from "next";
import type { ServiceArea } from "@/payload-types";
import { BASE_URL, COMPANY } from "@/utils";
import { MovingTips } from "./moving-tips";
import { MovingServices } from "./moving-services";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const payload = await getPayload({ config });

	const serviceArea = (
		await payload.find({
			collection: "service-areas",
			where: { slug: { equals: slug } },
			limit: 1,
		})
	).docs[0] as ServiceArea;

	if (!serviceArea) {
		return {
			title: "Sorry! We do not operate here just yet",
			description:
				"The service area requested could not be found at this time but is coming soon",
		};
	}

	const canonicalUrl = `${BASE_URL}/service-areas/${slug}`;

	// og-image / twitter card image
	let imageUrl = "";
	if (
		typeof serviceArea.mapImage === "object" &&
		serviceArea.mapImage !== null
	) {
		imageUrl = serviceArea.mapImage.url || "";
	}

	const title = `Professional Moving Services in ${serviceArea.title}, ${serviceArea["state-name"]}`;

	const description = serviceArea.description
		? `${serviceArea.description.substring(0, 155)}...`
		: `Professional moving services in ${serviceArea.title}, ${serviceArea["state-name"]}. Get reliable and affordable movers for your residential or commercial move.`;

	const keywords = [
		`moving services ${serviceArea.title}`,
		`movers in ${serviceArea.title}`,
		`${serviceArea.title} moving company`,
		`${serviceArea.title} ${serviceArea["state-name"]} movers`,
		`${serviceArea.title} ${serviceArea["state-initials"]} movers`,
		"moving services",
		"professional movers",
		"local movers",
		"residential moving",
		"commercial moving",
	];

	return {
		title,
		description,
		authors: [{ name: COMPANY, url: BASE_URL }],
		applicationName: COMPANY,
		referrer: "origin-when-cross-origin",
		creator: COMPANY,
		publisher: COMPANY,
		keywords,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			type: "website",
			title,
			description,
			locale: "en_US",
			images: [
				{ url: imageUrl, width: 1200, height: 630, alt: `Map of ${title}` },
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			creatorId: "@g1sackie",
			site: "@g1sackie",
			images: [
				{ url: imageUrl, width: 1200, height: 630, alt: `Map of ${title}` },
			],
		},
		robots: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
		other: {
			"geo.region": `US-${serviceArea["state-initials"]}`,
			"geo.placename": serviceArea.title,
			"geo.position": `${serviceArea.latitude};${serviceArea.longitude}`,
			ICBM: `${serviceArea.latitude}, ${serviceArea.longitude}`,
		},
	};
}

export default async function SingleServiceAreaPage({ params }: Props) {
	const { slug } = await params;

	const payload = await getPayload({ config });

	const serviceArea = (
		await payload.find({
			collection: "service-areas",
			where: { slug: { equals: slug } },
			limit: 1,
		})
	).docs[0];

	return (
		<section className="max-w-7xl mx-auto p-6 lg:px-8 pt-0 xl:pt-6">
			<Hero
				title={serviceArea.title}
				description={serviceArea.description}
				mapUrl={serviceArea.mapUrl ?? ""}
				mapImage={serviceArea.mapImage}
			/>
			<MovingTips />
			{serviceArea.movingServices &&
				Array.isArray(serviceArea.movingServices) &&
				serviceArea.movingServices.length > 0 && (
					<MovingServices
						movingServices={serviceArea.movingServices}
						title={serviceArea.title}
					/>
				)}
			<Faqs faqs={serviceArea.faqs ?? []} title={serviceArea.title} />
			<MovingResources
				title={serviceArea.title}
				resources={serviceArea?.resources ?? []}
			/>
			<OurLocations />
		</section>
	);
}
