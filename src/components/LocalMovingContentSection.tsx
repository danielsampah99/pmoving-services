import {
	ArrowRightIcon,
	BuildingOffice2Icon,
	BuildingOfficeIcon,
	CheckIcon,
	ClockIcon,
	MapPinIcon,
	PhoneIcon,
	QuestionMarkCircleIcon,
	TruckIcon,
} from "@heroicons/react/20/solid";
import { LocalServiceDetails } from "./LocalServiceDetails";
import Link from "next/link";
import { IconType } from "./HeroIcon";
import { HammerIcon, PackageIcon, ShieldIcon } from "lucide-react";
import { cn } from "@/utils";

export const LocalMovingContentSection = () => {
	return (
		<div className="container py-12 max-w-7xl mx-auto">
			<div className="px-4">
				<p className="text-base/7 font-semibold text-yellow-400">Overview</p>
				<h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
					Local Moving Services in Minneapolis &amp; St. Paul | Premium Movers
				</h1>
				<p className="mt-6 text-lg/8 text-balance text-gray-700">
					Professional Local moving in Minneapolis & St. Paul. Fast, reliable
					movers for homes, apartments & seniors. With expertise in handling
					moves to or within any location in Minneapolis &amp; St. Paul, contact
					us for a free quote on Local moving today
				</p>
			</div>

			<LocalServiceDetails />

			<CTA />

			<Introduction />

			<WhatSetsUsApart />

			<LocalIncluded />
			
			<NeighbourhoodExpertise />
			
				<FullServiceOptions />
				<SpecializedServices />
				<CostSection />
				<Preparation />
				<LocalFAQ />
				<Trust />
		</div>
	);
};

const CTA = () => {
	return (
		<div className="bg-moving-gray xl:rounded-2xl">
			<div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-8">
				<div>
					<h4 className="text-lg md:text-2xl font-semibold text-white">
						Contact us for a free quote on Local Moving Services
					</h4>
					<p className="mt-2 text-sm sm:text-base text-gray-100">
						Experience the difference of our local movers that puts your
						comfort, schedule and belongings first.
					</p>
				</div>
				<div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
					<Link
						href="/free-quote"
						className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
					>
						Get started
					</Link>
				</div>
			</div>
		</div>
	);
};

const Introduction = () => {
	return (
		<section className="container my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-lg md:text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl mb-6">
				Why Choose Premium Moving Services for Your Local Move?
			</h2>
			<p className="text-base sm:text-lg font-medium mb-2 leading-relaxed">
				Local movers that are affordable and reliable
			</p>
			<p className="text-sm md:text-lg text-gray-600 text-justify sm:text-pretty">
				We know the Twin Cities like home—because it is our home. Our local
				movers understand the unique challenges of tight Minneapolis alleys,
				historic St. Paul staircases, winter weather, and high-rise loading
				docks. Every move is handled with a seasoned care moving process,
				detailed planning, and a customer-first approach by our guys.
			</p>
		</section>
	);
};

const uniquePoints = [
	"Highly trained local movers with years of local experience",
	"Licensed, insured, and trusted by thousands of Minnesota residents",
	"Transparent pricing with no surprises",
	"Careful handling of your home, floors, and furniture",
	"Fast communication and reliable scheduling",
	"Helpful staff who go above and beyond to ensure a smooth, hassle-free move for every customer",
];

const WhatSetsUsApart = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h3 className="text-2xl font-bold text-gray-900 mb-6">
						What Sets Us Apart
					</h3>
					<ul className="space-y-4">
						{uniquePoints.map((point, pointIndex) => (
							<UniquePoint key={pointIndex} point={point} />
						))}
					</ul>
				</div>
				<div className="bg-gray-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 to-indigo-900/10" />
					<TruckIcon className="size-32 text-gray-300" strokeWidth={1} />
					{/* This would be a great place for an actual image if available */}
				</div>
			</div>
		</section>
	);
};

const UniquePoint = ({ point }: { point: string }) => {
	return (
		<li className="flex items-start gap-3">
			<div className="mt-1 bg-gray-100 p-1 rounded-full shrink-0">
				<CheckIcon className="size-4 sm:size-5 fill-gray-700" />
			</div>
			<span className="text-gray-700">{point}</span>
		</li>
	);
};

const LocalIncluded = () => {
	return (
		<section className="bg-gray-50 py-20">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						What Local Moving Includes
					</h2>
					<p className="text-lg text-indigo-600 font-medium mb-4">
						Local moving company in St. Paul & Minneapolis
					</p>
					<p className="text-gray-600">
						Many customers ask, “What does Local moving include?” At Premium
						Moving Services, our Local moving packages cover everything needed
						to make your relocation easy. Our movers handle every job, big or
						small, with professionalism and care:
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<FeatureCard
						icon={TruckIcon}
						title="Professional Loading & Unloading"
						description="We handle all heavy lifting—from couches and appliances to moving boxes and fragile items—using professional tools to ensure safe and efficient loading and unloading."
					/>
					<FeatureCard
						icon={PackageIcon}
						title="Full-Service Packing Options"
						description="Choose from full-home packing supplies, single-room packing, or fragile-only packing. For added flexibility, you can also opt for a moving container. We bring the packing supplies and handle the details."
					/>
					<FeatureCard
						icon={HammerIcon}
						title="Furniture Disassembly"
						description="Beds, dressers, sectionals, tables—we take them apart and reassemble at your new house/apartment."
					/>
					<FeatureCard
						icon={ShieldIcon}
						title="Floor & Home Protection"
						description="Our moving services include floor protections especially important in older homes around Summit Hill, Como Park, or Northeast Minneapolis."
					/>
					<FeatureCard
						icon={ClockIcon}
						title="Stress-Free Transportation"
						description="Clean trucks with insurance, organized loading, and safe transport of your belongings through the Twin Cities to your new space, all timed perfectly to fit your schedule."
					/>
				</div>
			</div>
		</section>
	);
};

type FeatureCardProps = {
	icon: IconType;
	title: string;
	description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
	<div className="group bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
		<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
			<Icon className="size-6 fill-gray-600 stroke-white group-hover:fill-moving-yellow" />
		</div>
		<h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
		<p className="text-gray-600 leading-relaxed text-sm">{description}</p>
	</div>
);

const NeighbourhoodExpertise = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Neighborhood Expertise Across the Twin Cities
				</h2>
				<p className="text-gray-600 max-w-3xl mx-auto text-lg">
					Your neighborhood affects your move more than you think. Parking,
					loading zones, staircases, and city permits all matter—and Premium
					Moving Services is experienced in all of them.
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
				<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
					<h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
						<MapPinIcon className="text-indigo-600" /> Minneapolis Local Moving
						Expertise
					</h3>
					<p className="text-gray-600 mb-6">
						Every Minneapolis neighborhood has its own moving personality:
					</p>
					<ul className="space-y-4">
						<ExpertiseItem
							area="Uptown & Whittier"
							desc="Tight parking, high-density apartments"
						/>
						<ExpertiseItem
							area="North Loop"
							desc="Freight elevator coordination"
						/>
						<ExpertiseItem
							area="Linden Hills & Fulton"
							desc="Larger homes with multi-room packing needs"
						/>
						<ExpertiseItem
							area="Longfellow, Nokomis & Powderhorn"
							desc="Alley-access logistics"
						/>
						<ExpertiseItem
							area="Downtown Minneapolis"
							desc="High-rise loading docks and reservation windows"
						/>
					</ul>
					<p className="mt-8 text-sm text-gray-500 italic border-t pt-4">
						From condos to classic bungalows, we tailor our plan to your
						address.
					</p>
				</div>

				<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
					<h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
						<MapPinIcon className="text-indigo-600" /> St. Paul Local Moving
						Expertise
					</h3>
					<p className="text-gray-600 mb-6">
						St. Paul’s historic homes and steep streets require extra skill:
					</p>
					<ul className="space-y-4">
						<ExpertiseItem
							area="Highland Park & Mac-Groveland"
							desc="Multi-level homes with delicate stair navigation"
						/>
						<ExpertiseItem
							area="Frogtown & Payne-Phalen"
							desc="Walkups and tight interior layouts"
						/>
						<ExpertiseItem
							area="Cathedral Hill & Summit Hill"
							desc="Protecting antique woodwork and custom flooring"
						/>
						<ExpertiseItem
							area="Como Park"
							desc="Family home transitions, including downsizing or moving to a smaller home"
						/>
						<ExpertiseItem
							area="Midway"
							desc="Mixed residential and commercial moving"
						/>
					</ul>
					<p className="mt-8 text-sm text-gray-500 italic border-t pt-4">
						Our team handles tricky moves with the care your home deserves.
					</p>
				</div>
			</div>
		</section>
	);
};

const FullServiceOptions = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
				Full-Service Local Moving Options
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				<ServiceOptionCard
					title="Standard Local Moving"
					subtitle="(Truck + Crew)"
					description="Your most popular option: a full crew and a moving truck to complete your relocation from start to finish. Perfect for family homes, multi-room moves, and apartment transitions."
					highlight
				/>
				<ServiceOptionCard
					title="Labor-Only Local Moving"
					description="For customers who already have their own rental truck or PODS container, we offer dependable moving labor-only service. Hire our local movers for packing, loading, or unloading heavy furniture, gun safes, or pianos."
				/>
				<ServiceOptionCard
					title="Packing & Unpacking Services"
					description="Whether you need kitchen packing/unpacking, fragile-only protection, or full-home assistance, our team handles every detail. We serve customers throughout Highland Park, Maplewood, Uptown, and beyond."
				/>
			</div>
		</section>
	);
};

const SpecializedServices = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="bg-gray-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
				<div className="relative z-10">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Specialized Local Moving Services
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="space-y-4">
							<div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
								<span className="text-gray-900 font-bold text-xl">65+</span>
							</div>
							<h3 className="text-xl font-bold text-yellow-400">
								Senior Local Moving
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Transitioning to assisted living or downsizing requires
								patience, respect, and thoughtful planning. We support seniors
								in Roseville, St. Paul, and surrounding cities with
								compassionate moving help.
							</p>
						</div>
						<div className="space-y-4">
							<div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
								<BuildingOffice2Icon className="text-gray-900 w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold text-yellow-400">
								Apartment & Condo Moving
							</h3>
							<p className="text-gray-300 leading-relaxed">
								We manage moves in second-floor walkups in Frogtown, elevator
								buildings downtown, and large complexes. We offer extra time
								options for loading docks and building access requirements.
							</p>
						</div>
						<div className="space-y-4">
							<div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-2">
								<BuildingOfficeIcon className="text-gray-900 w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold text-yellow-400">
								Commercial & Office Moves
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Moving offices in the North Loop, Midway, or Downtown St. Paul?
								We relocate workstations and IT equipment to new spaces or
								storage units safely and efficiently.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const CostSection = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="text-3xl font-bold text-gray-900 mb-6">
						How Much Does Local Moving Cost?
					</h2>
					<p className="text-gray-600 mb-6">
						Local moving costs vary based on time, crew size, distance, stairs,
						and disassembly needs. If you require storage during your move, the
						cost may also include the rent of a storage unit.
					</p>
					<div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
						<h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
							<QuestionMarkCircleIcon className="w-5 h-5 text-yellow-600" />
							Factors That Influence Your Cost
						</h3>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{[
								"Number of bedrooms",
								"Walk distance to truck",
								"Amount of furniture",
								"Packing needs",
								"Disassembly needs",
								"Heavy specialty items",
							].map((item, i) => (
								<li
									key={i}
									className="flex items-center gap-2 text-gray-800 text-sm font-medium"
								>
									<div className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="/contact-us"
							className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
						>
							Get a Free Quote
						</Link>
					</div>
				</div>
				<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col justify-center">
					<p className="text-lg font-semibold text-gray-900 mb-4">
						Want fast clarity?
					</p>
					<p className="text-gray-600 mb-8">
						To get an accurate, honest estimate, contact us for a free quote on
						Local moving and we’ll provide a detailed breakdown tailored to your
						address.
					</p>
					<div className="space-y-4">
						<div className="flex items-center gap-4 text-gray-700">
							<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
								<PhoneIcon className="w-5 h-5 text-indigo-600" />
							</div>
							<div>
								<p className="font-medium text-gray-900">Call Us</p>
								<p className="text-sm">
									Speak directly with a moving coordinator
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4 text-gray-700">
							<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
								<CheckIcon className="w-5 h-5 text-green-600" />
							</div>
							<div>
								<p className="font-medium text-gray-900">No Hidden Fees</p>
								<p className="text-sm">Transparent pricing guaranteed</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Preparation = () => {
	return (
		<section className="bg-indigo-900 py-20 text-white">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-4 text-center">
						How to Prepare for a Local Move
					</h2>
					<p className="text-center text-indigo-200 mb-12 text-lg">
						Look forward to settling into your new place with confidence. Here’s
						what our professionals recommend:
					</p>

					<div className="grid sm:grid-cols-2 gap-8">
						<PrepStep
							number="01"
							title="Start With Decluttering"
							text="Begin reducing unwanted items you don’t want to move—especially closets, garages, and basements."
						/>
						<PrepStep
							number="02"
							title="Label Boxes Clearly"
							text="Mark rooms as “Living Room,” “Uptown Bedroom,” “Basement Storage,” etc."
						/>
						<PrepStep
							number="03"
							title="Reserve Elevators Early"
							text="High-rise buildings in Downtown Minneapolis and Downtown St. Paul require elevator time slots."
						/>
						<PrepStep
							number="04"
							title="Secure Parking"
							text="Side streets in Longfellow, Summit Hill, or Merriam Park can be tight—plan ahead."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

const LocalFAQ = () => {
	return (
		<section className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
				Local Moving FAQs
			</h2>
			<div className="space-y-6">
				<FAQItem
					q="How far is considered a local move?"
					a="Generally under 50 miles or within the same metro area of Twin Cities (St. Paul & Minneapolis)."
				/>
				<FAQItem
					q="Do movers empty dressers?"
					a="We recommend removing fragile or heavy items before your move date. Soft clothing is fine."
				/>
				<FAQItem
					q="Do movers take beds apart?"
					a="Yes—our crew handles disassembly and reassembly of basic beds."
				/>
				<FAQItem
					q="How long does a local move take?"
					a="Most 1–2 bedroom moves take 3–5 hours depending on stairs and packing needs."
				/>
				<FAQItem
					q="What’s the cheapest way to do Local moving?"
					a="Be fully packed, clear pathways, and reserve parking in advance."
				/>
			</div>
		</section>
	);
};

const Trust = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="bg-gray-50 rounded-3xl p-8 md:p-16 text-center border border-gray-100">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
					Why Minnesota Residents Trust Premium Moving Services
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
					Our reputation was built on reliability, communication, and genuine
					care for our customers. From young professionals moving in Uptown to
					families relocating in Highland Park, we consistently deliver a safe,
					smooth, and worry-free experience.
				</p>

				<div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto border border-gray-100">
					<h3 className="text-2xl font-bold text-gray-900 mb-2">
						Ready to Move Locally in Minneapolis or St. Paul?
					</h3>
					<p className="text-gray-600 mb-8">
						Your easiest move starts here. Flexible scheduling, transparent
						pricing, and the most dependable movers in the Twin Cities.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							href="/contact-us"
							className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all hover:-translate-y-0.5"
						>
							Get a Free Quote
						</Link>
						<Link
							href="/contact-us"
							className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-base font-semibold rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-colors"
						>
							Contact Us
						</Link>
					</div>
					<p className="mt-6 text-sm font-bold text-indigo-600 tracking-wide uppercase">
						Let’s make your next move your best move.
					</p>
				</div>
			</div>
		</section>
	);
};

const ExpertiseItem = ({ area, desc }: { area: string; desc: string }) => (
	<li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
		<span className="font-bold text-gray-900 shrink-0">{area} –</span>
		<span className="text-gray-600">{desc}</span>
	</li>
);

type ServiceOptionCardProps = {
	title: string;
	subtitle?: string;
	description: string;
	ctaText?: string;
	highlight?: boolean;
}

const ServiceOptionCard = ({
	title,
	subtitle,
	description,
	ctaText,
	highlight = false,
}: ServiceOptionCardProps) => (
	<div
		className={cn(
			"p-8 rounded-2xl border flex flex-col h-full",
			highlight
				? "border-indigo-600 bg-white shadow-lg relative"
				: "border-gray-200 bg-white shadow-sm",
		)}
	>
		{highlight && (
			<div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
				<span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
					Most Popular
				</span>
			</div>
		)}
		<h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
		{subtitle && (
			<span className="text-sm font-semibold text-indigo-600 mb-4 block">
				{subtitle}
			</span>
		)}
		<p className="text-gray-600 mb-8 flex-grow leading-relaxed mt-2">
			{description}
		</p>
		<Link
			href="/contact-us"
			className={cn(
				"text-center py-2.5 rounded-lg font-semibold transition-colors mt-auto",
				highlight
					? "bg-indigo-600 text-white hover:bg-indigo-700"
					: "bg-gray-50 text-gray-900 hover:bg-gray-100",
			)}
		>
			{ctaText || "Get a Quote"}
		</Link>
	</div>
);

const PrepStep = ({
	number,
	title,
	text,
}: { number: string; title: string; text: string }) => (
	<div className="flex gap-4">
		<span className="text-5xl font-black text-indigo-400/20">{number}</span>
		<div>
			<h3 className="text-xl font-bold text-white mb-2">{title}</h3>
			<p className="text-indigo-100">{text}</p>
		</div>
	</div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => (
	<div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
		<h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
			<QuestionMarkCircleIcon className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
			{q}
		</h3>
		<p className="text-gray-600 ml-7">{a}</p>
	</div>
);
