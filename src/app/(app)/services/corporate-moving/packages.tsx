import type { ReactNode } from "react";

export const CorporateMovingPackages = () => (
	<div className="overflow-hidden bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				<div className="lg:pt-4 lg:pr-8">
					<div className="lg:max-w-lg">
						<h2 className="text-base/7 font-semibold text-moving-yellow">
							Packages
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Corporate Moving Packages
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							Commercial moving services are designed to cater to businesses of
							all sizes, from small offices to large corporations, and are
							tailored to the specific needs of each client and industry.
							Whether you operate in the scientific, educational, or industrial
							sector, experienced crew understand the unique requirements of
							your industry and provide customized solutions for your business
							needs.
							<br />
							Our white-glove packages include:{" "}
							<strong>Office relocations</strong>,{" "}
							<strong>warehouse moves</strong> &{" "}
							<strong>Retail space transitions</strong> .
							<br />
							Every aspect of the workplace moving process is addressed, from
							planning to execution, ensuring an efficient transition with
							minimal disruption to your operations.
						</p>
					</div>
				</div>
				<img
					alt="Product screenshot"
					src="/api/media/file/int.webp"
					width={2432}
					height={1442}
					className="w-3xl lg:h-125 lg:mt-12 max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0"
				/>
			</div>
		</div>
	</div>
);

export type HandlingData = { name: string; description: string };

export const handlingData: HandlingData[] = [
	{
		name: "Business relocations (startups to enterprise-level)",
		description:
			"We scale our services to fit any operation, from a single-room startup to a multi-floor enterprise move.",
	},
	{
		name: "Warehouse and industrial moves",
		description:
			"Heavy machinery, shelving systems, and bulk inventory moved efficiently with the right equipment for the job.",
	},
	{
		name: "Retail and storefront transitions",
		description:
			"Minimal downtime relocations that get your storefront operational in the new location as fast as possible.",
	},
	{
		name: "FF&E (Furniture, Fixtures & Equipment)",
		description:
			"Full-service handling of furniture, fixtures, and equipment from teardown to reinstallation at the destination.",
	},
	{
		name: "Internal office reconfigurations",
		description:
			"Reorganize your existing space without the chaos — we handle the heavy lifting so your team stays productive.",
	},
	{
		name: "Workspace content (desks, cubicles, conference tables, and furnishings)",
		description:
			"Careful disassembly, transport, and reassembly of all workspace furnishings with no missing hardware.",
	},
	{
		name: "Computers, servers, and sensitive electronics",
		description:
			"Specialized packing and handling protocols protect your critical hardware and data infrastructure throughout the move.",
	},
	{
		name: "Lab equipment and specialized medical devices",
		description:
			"Precision handling for high-value, fragile, or calibration-sensitive equipment that cannot afford rough treatment.",
	},
	{
		name: "Local and long-distance commercial moves",
		description:
			"Whether you're moving across the street or across the country, we bring the same standard of care to every job.",
	},
];

export const executionData: HandlingData[] = [
	{
		name: "Pre-move transportation planning",
		description:
			"We map out every route and logistics detail in advance so move day runs on schedule without surprises.",
	},
	{
		name: "Department-by-department sequencing",
		description:
			"Structured relocation order that keeps your business functional and minimizes disruption across teams.",
	},
	{
		name: "Asset tagging and inventory tracking",
		description:
			"Every item is labeled and logged so nothing gets lost, misplaced, or delivered to the wrong room.",
	},
	{
		name: "Asset management",
		description:
			"End-to-end oversight of all company assets, from initial planning and careful storage to final transfer at the destination.",
	},
	{
		name: "Disassembly and reassembly",
		description:
			"We break down and rebuild workspace furnishings, supplies, and large-scale machinery for safe transport and a clean setup on arrival.",
	},
	{
		name: "Expert installation",
		description:
			"Professional installation of commercial furnishings and specialized tools so your new space is ready to work in immediately.",
	},
	{
		name: "Custom crating and climate-controlled storage",
		description:
			"Fragile materials get purpose-built crating, and secure climate-controlled warehousing is available for items in transit between locations.",
	},
	{
		name: "After-hours and weekend execution",
		description:
			"We work around your schedule, nights and weekends available so your business never skips a beat.",
	},
];

export const CorporateMovingContent = ({
	data,
	...props
}: { data: HandlingData[]; title: string; description: ReactNode }) => (
	<div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					{props.title}
				</h2>
				{props.description}
			</div>
			<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
				{data.map((item) => (
					<div key={item.name}>
						<dt className="font-semibold text-gray-900">{item.name}</dt>
						<dd className="mt-1 text-gray-600">{item.description}</dd>
					</div>
				))}
			</dl>
		</div>
	</div>
);
