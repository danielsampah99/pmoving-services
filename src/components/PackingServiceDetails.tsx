"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

export const PackingServiceDetails = () => {
	return (
		<section className="py-12 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 [&_a]:underline [&_a]:text-gray-900">
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-moving-navy mb-4 md:mt-3"
						>
							Apartment Moving Done Right in Minnesota
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="text-gray-700 mb-6 text-lg">
								Discover how our{" "}
								<Link href="/services/local-moving/apartment-movers">
									apartment moving service
								</Link>{" "}
								combines efficiency, protection, and local expertise for
								seamless relocations across Minnesota.
								<ul className="mt-3">
									<li className="list-disc ml-4">
										North Loop, Minneapolis – High-rise apartments near Target
										Field require elevator coordination, tight scheduling, and
										damage-free handling.
									</li>
									<li className="list-disc ml-4 mt-1">
										Cathedral Hill, St. Paul – Historic buildings near Cathedral
										of Saint Paul demand careful navigation, narrow staircases,
										and protective materials.
									</li>
								</ul>
							</div>
						</motion.div>
					</div>

					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-moving-navy mb-4 md:mt-3"
						>
							Home Packing & Moving Done Right in Minnesota{" "}
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="text-gray-700 mb-6 text-lg">
								Experience seamless home packing and moving with expert systems,
								durable materials, and local Minnesota knowledge built for every
								type of home.
								<ul className="mt-3">
									<li className="list-disc ml-4">
										<Link
											className=""
											href="https://www.trulia.com/n/mn/edina/morningside/140757/"
										>
											Edina – Morningside Neighborhood
										</Link>{" "}
										–{" "}
										<Link
											className="italic no-underline"
											href="/services/local-moving/residential-movers"
										>
											Homes
										</Link>{" "}
										near 50th & France require strategic packing for tight
										residential streets, premium finishes, and careful furniture
										protection.
									</li>
									<li className="list-disc ml-4 mt-1">
										<Link href="https://www.exploreminnesota.com/profile/stillwater-boutique-district-river/5669">
											Stillwater – Historic District
										</Link>{" "}
										&nbsp; Properties near Stillwater Lift Bridge demand
										precision packing for antiques, multi-level layouts, and
										older home structures.
									</li>
								</ul>
							</div>
						</motion.div>
					</div>

					<div className="md:col-span-2 max-w-4xl self-center">
						<h3>Essential Materials That Make or Break Your Move</h3>
						<img
							src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Moving+boxes+calculator+table+-1920w.jpg"
							alt="Ways to expedite your moving process"
							className="size-auto rounded-lg shadow-lg mx-auto mb-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const packingSupplies = {
	essentials: [
		"Standard boxes vs. specialty boxes",
		"Protective wraps and cushioning",
		"Packing tape",
		"Labeling systems for efficiency",
		"Professional-grade durability vs. retail-grade shortcuts",
	],
	boxTypes: [
		"Small cardboard boxes (books, heavy items)",
		"Medium boxes (kitchenware, décor)",
		"Large moving boxes (linens, lightweight bulk items)",
		"Specialty boxes (wardrobe boxes, TV cartons, dish packs)",
	],
	labeling: [
		"Room, contents, and handling instructions",
		"Color-coded room system",
		"Label multiple sides (including the top)",
		"Priority labels ('Open First')",
		"Fragile vs. standard handling tags",
		"Inventory tracking for accountability",
	],
	furniturePads: [
		"Thick quilted pads vs. thin retail blankets",
		"Wrapping techniques for wood, glass, and upholstery",
		"Securing methods during transport",
	],
	mattressBags: [
		"Waterproof protection",
		"Dust and debris prevention",
		"Proper sealing methods",
	],
	costFactors: [
		"DIY vs. professional packing cost comparison",
		"Material quality impact on pricing",
		"Hidden costs (damage, delays, repacking, re-wrapping)",
	],
	costSavingTips: [
		"Bundle materials through your moving company",
		"Avoid overbuying with accurate estimates",
		"Use professional packing for high-risk items only",
		"Plan early to prevent last-minute premium pricing",
		"Repurpose towels, blankets, and clothes for padding",
		"Use plastic grocery bags and baggies for organizing small items",
		"Utilize garbage bags for transporting clothing and soft contents",
		"Fill empty spaces with paper shreddings or cushioning materials",
		"Ensure every box is properly filled and padded",
	],
	competitorDifferences: [
		"Generic checklists vs. real-world application",
		"Retail supplies vs. commercial-grade materials",
		"No system vs. structured packing workflow",
	],
	movingIntegration: [
		"Packing + moving + unpacking options",
		"Custom supply planning",
		"Time-saving logistics coordination",
	],
};

type SectionProps = {
	title: string;
	description?: string;
	children?: ReactNode;
}

const Section = ({
	title,
	description,
	children,
}: SectionProps ) => (
	<section className="py-16 border-b border-neutral-200">
		<div className="space-y-6">
			<div className="max-w-4xl">
				<h2 className="text-3xl font-bold tracking-tight text-neutral-900">
					{title}
				</h2>

				{description && (
					<p className="mt-4 text-lg leading-8 text-neutral-600">
						{description}
					</p>
				)}
			</div>

			{children}
		</div>
	</section>
);

const BulletGrid = ({ items }: { items: string[] }) => (
	<div className="grid gap-4 md:grid-cols-2">
		{items.map((item) => (
			<div
				key={item}
				className="rounded-2xl border border-neutral-200 bg-white p-5"
			>
				<p className="font-medium text-neutral-800">{item}</p>
			</div>
		))}
	</div>
);

const InsightBox = ({
	children,
}: {
	children: ReactNode;
}) => (
	<div className="rounded-md outline-2 outline-moving-gray -outline-offset-1   bg-moving-yellow p-6">
		<p className="font-semibold text-neutral-900">{children}</p>
	</div>
);

export function PackingSuppliesContent() {
	return (
		<div className="w-full flex flex-col items-center justify-center mx-auto max-w-7xl px-6 py-20 lg:px-8">
			

			<div className="max-w-4xl space-y-8">
				<p className="text-xl leading-9 text-neutral-700">
					Learn which professional-grade materials ensure safe transport, faster
					packing, and fewer moving-day surprises.
				</p>

				<BulletGrid items={packingSupplies.essentials} />

				<p className="text-lg leading-8 text-neutral-600">
					Essential moving supplies include sturdy cardboard boxes of various
					sizes, high-quality packing tape with a dispenser, bubble wrap,
					packing paper, furniture pads, and markers for labeling. For added
					protection and organization, use plastic stretch wrap, moving
					blankets, wardrobe boxes, and TV cartons for fragile or oversized
					items.
				</p>

				<InsightBox>
					This is where most DIY moves fail — they underestimate materials and
					overestimate time.
				</InsightBox>
			</div>

			{/* Types of Boxes */}

			<Section
				title="Types of Boxes"
				description="Explore the right box types for every item, from wardrobe cartons to dish packs, ensuring maximum protection during your move."
			>
				<BulletGrid items={packingSupplies.boxTypes} />

				<div className="space-y-5 text-lg leading-8 text-neutral-600">
					<p>
						Wardrobe boxes are designed to transport hanging clothes while
						keeping garments wrinkle-free. TV cartons and specialty boxes
						provide additional protection for fragile electronics and valuable
						belongings.
					</p>

					<p>
						Using a mix of box sizes, or uniform carton sizes when appropriate,
						improves organization, maximizes truck space, and makes stacking
						significantly easier.
					</p>
				</div>

				<InsightBox>
					Using the wrong box size is the fastest way to create damage or
					injuries. Plastic or garbage bags for clothing often leave garments
					wrinkled and unprotected.
				</InsightBox>
			</Section>

			{/* Labeling */}

			<Section
				title="Box Labeling"
				description="Improve unpacking speed and organization with a strategic labeling system that reduces confusion and saves hours."
			>
				<BulletGrid items={packingSupplies.labeling} />

				<div className="space-y-5 text-lg leading-8 text-neutral-600">
					<p>
						Label boxes as you pack using a system that works for you, whether
						that's writing directly on the box or using colored stickers. A
						color-coded room system allows movers to immediately identify where
						items belong.
					</p>

					<p>
						Mark boxes on multiple sides to ensure visibility from any angle.
						Keeping an inventory list by numbering boxes also helps track
						contents throughout the move.
					</p>
				</div>

				<InsightBox>
					Bad labeling equals wasted hours and lost items. Don't skip this step.
				</InsightBox>
			</Section>

			{/* Furniture Pads */}

			<Section
				title="Furniture Pads"
				description="Protect furniture and surfaces with professional-grade moving blankets designed to prevent scratches, dents, and transit damage."
			>
				<BulletGrid items={packingSupplies.furniturePads} />

				<p className="text-lg leading-8 text-neutral-600">
					Moving blankets can also provide additional shock absorption for
					fragile household items during transport, reducing the likelihood of
					costly damage.
				</p>

				<InsightBox>
					Cheap protection costs more in repairs. Compare the cost of proper
					supplies against replacing damaged furniture.
				</InsightBox>
			</Section>

			{/* Mattress Bags */}

			<Section
				title="Mattress Bags"
				description="Keep mattresses clean and damage-free with high-quality mattress bags designed for apartment moves."
			>
				<BulletGrid items={packingSupplies.mattressBags} />

				<InsightBox>
					Mattresses are among the most commonly damaged moving items. Proper
					protection is non-negotiable.
				</InsightBox>
			</Section>

			{/* Moving Equipment */}

			<Section
				title="Moving Equipment: Hand Trucks & Dollies"
				description="The right moving equipment dramatically improves both safety and efficiency when transporting heavy or bulky items."
			>
				<div className="grid gap-6 lg:grid-cols-2">
					<div className="rounded-2xl border border-neutral-200 p-6">
						<h3 className="text-xl font-semibold">Hand Trucks</h3>

						<p className="mt-4 leading-8 text-neutral-600">
							Hand trucks are ideal for moving bulky boxes, appliances, and
							stacked loads. Their sturdy frame and wheels reduce physical
							strain while improving loading and unloading efficiency.
						</p>
					</div>

					<div className="rounded-2xl border border-neutral-200 p-6">
						<h3 className="text-xl font-semibold">Furniture Dollies</h3>

						<p className="mt-4 leading-8 text-neutral-600">
							Furniture dollies provide a wheeled platform for oversized items
							such as dining tables and large furniture. Many models include
							straps that help prevent shifting during transport.
						</p>
					</div>
				</div>
			</Section>

			{/* Costs */}

			<Section
				title="Moving Packing Costs"
				description="Understand the true cost of packing materials and services and how to optimize your budget without sacrificing protection."
			>
				<BulletGrid items={packingSupplies.costFactors} />

				<div className="space-y-5 text-lg leading-8 text-neutral-600">
					<p>
						Save money by sourcing free boxes from grocery stores, recycling
						centers, and office supply companies whenever possible.
					</p>

					<p>
						Buying moving kits or purchasing materials in bulk can significantly
						reduce costs compared with purchasing supplies individually.
					</p>
				</div>
			</Section>

			{/* Cost Saving */}

			<Section
				title="Packing Cost-Saving Tips"
				description="Reduce moving expenses with smart packing strategies that maintain quality while minimizing waste."
			>
				<BulletGrid items={packingSupplies.costSavingTips} />

				<InsightBox>
					Trying to “save” on moving supplies often creates bigger expenses
					later. Be strategic, not cheap.
				</InsightBox>
			</Section>

			{/* Competitors */}

			<Section
				title="Where Most Competitors Get It Wrong (And We Don't)"
				description="See how Premium Moving Services outperforms generic supply lists with real-world moving expertise."
			>
				<BulletGrid items={packingSupplies.competitorDifferences} />

				<div className="rounded-3xl bg-moving-lightGray p-8 text-moving-gray">
					<h3 className="text-2xl font-bold">
						Competitors give you lists. We give you execution.
					</h3>
				</div>
			</Section>

			{/* Integration */}

			<Section
				title="Full-Service Apartment Moving + Materials Integration"
				description="Combine expert moving services with premium materials for a seamless, all-in-one apartment relocation experience."
			>
				<BulletGrid items={packingSupplies.movingIntegration} />
			</Section>
		</div>
	);
}
