import {
	EyeIcon,
	ShieldCheckIcon,
	CheckIcon,
	CheckCircleIcon,
	ExclamationTriangleIcon,
	CalendarDateRangeIcon,
	ClipboardDocumentCheckIcon,
	Square3Stack3DIcon,
	CameraIcon,
	FolderOpenIcon,
	CalendarIcon,
	TagIcon,
	MapPinIcon,
	GlobeAmericasIcon,
	GlobeAltIcon,
	WalletIcon
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { cn } from "@/utils";

const includedServices = [
	"Packing and unpacking services",
	"Customizable unpacking options",
	"Furniture disassembly and reassembly",
	"Protective wrapping for all household goods and delicate items",
	"Loading and unloading",
	"Transportation and route planning",
];

const additionalOptions = [
	"Packing supplies delivered ahead of time",
	<><Link href="/services/storage-services">Storage solutions</Link> (long-term or short-term)</>,
	"Specialty handling for fragile or oversized items",
	"Heavy lifting",
	"High value items moving services",
	"Junk removal",
	"Custom crating",
	"Virtual or in-person home survey for accurate estimates",
];

const pricingFactors = [
	"Number of movers required",
	"Size of your home",
	"Distance between locations & walking distance from truck to front door",
	"Stairs, elevators, or long carry distances",
	"Packing services",
	"Move date & seasonal demand",
	"Add-on services",
];

const priceRanges = [
	{
		tier: "Small Moves",
		range: "$400 – $800",
		detail: "Studio or 1-bedroom apartment",
	},
	{
		tier: "Mid-Size Homes",
		range: "$800 – $1,800",
		detail: "2–3 bedroom home",
	},
	{
		tier: "Larger Homes",
		range: "$2,000+",
		detail: "4+ bedrooms or complex moves",
	},
];

const phases = [
	{
		timeframe: "4 – 6 Weeks Before",
		label: "Book",
		tasks: ["Book your movers early", "Start decluttering room by room"],
		color: "bg-moving-yellow/40 text-black",
		activeBar: "bg-moving-yellow/40",
	},
	{
		timeframe: "2 – 3 Weeks Before",
		label: "Prepare",
		tasks: [
			"Confirm building access and logistics",
			"Begin packing non-essential items",
		],
		color: "bg-moving-yellow/60 text-black",
		activeBar: "bg-moving-yellow/60",
	},
	{
		timeframe: "1 Week Before",
		label: "Finalize",
		tasks: ["Finalize inventory", "Label all boxes clearly by room and priority"],
		color: "bg-moving-yellow/80 text-black",
		activeBar: "bg-moving-yellow/80",
	},
	{
		timeframe: "Moving Day",
		label: "Execute",
		tasks: [
			"Walkthrough with your crew",
			"Protect floors and entryways",
			"Execute the move efficiently",
		],
		color: "bg-moving-yellow text-black",
		activeBar: "bg-white",
		highlight: true,
	},
];

const tips = [
	{
		icon: ClipboardDocumentCheckIcon,
		headline: "Build a moving checklist",
		body: "Your checklist is your roadmap. It keeps every step visible and prevents last-minute scrambles.",
	},
	{
		icon: Square3Stack3DIcon,
		headline: "Keep boxes under 50 lbs",
		body: "Heavy boxes are a liability for your back and your belongings. Pack smart, not heavy.",
	},
	{
		icon: TagIcon,
		headline: "Label by room and priority",
		body: "Mark every box with its destination room and whether it's essential or can wait. Saves hours of searching on move-in day.",
	},
	{
		icon: FolderOpenIcon,
		headline: "Separate your essentials",
		body: "Documents, chargers, medications, and valuables ride with you and not in the truck. Pack a day-one bag.",
	},
	{
		icon: CameraIcon,
		headline: "Photograph before disassembly",
		body: "A quick photo of furniture connections, cable setups, and wall arrangements saves you from reassembly guesswork.",
	},
	{
		icon: CalendarIcon,
		headline: "Book early",
		body: "Peak moving season fills up fast. Securing your crew early gives you choice of date, time, and crew size.",
	},
];

export function ResidentialFullService() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto">

				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Comprehensive Coverage
					</span>
					<h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
						What a Full Service Move Includes
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
						A full-service move means you don&apos;t carry the stress, we do.
						From packing to final placement, every detail is handled with
						precision.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16">
					<div>
						<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-6">
							Always Included
						</h3>
						<ul className="space-y-5">
							{includedServices.map((service, i) => (
								<li key={i} className="flex items-start gap-4">
									<CheckCircleIcon className="size-5 text-moving-dark mt-0.5 shrink-0" />
									<span className="text-gray-700 leading-snug">{service}</span>
								</li>
							))}
						</ul>

						<div className="mt-10 p-6 rounded-xl bg-moving-yellow/10 border border-moving-yellow/20">
							<div className="flex items-start gap-4">
								<div className="size-9 rounded-lg bg-moving-yellow flex items-center justify-center shrink-0">
									<ShieldCheckIcon className="size-4 text-white" />
								</div>
								<div>
									<p className="font-semibold text-gray-900 text-sm">
										Full Value Protection Available
									</p>
									<p className="text-gray-600 text-sm mt-1.5 leading-relaxed">
										Comprehensive insurance coverage for your belongings against
										damage or loss. By law, licensed movers must offer at least
										basic liability coverage during transit.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900 mb-6">
							Additional Options
						</h3>
						<ul className="divide-y divide-gray-100">
							{additionalOptions.map((option, i) => (
								<li
									key={i}
									className="flex items-center gap-3 py-3.5 group [&_a]:text-moving-yellow [&_a]:underline"
								>
									<CheckIcon className="size-3.5 text-gray-500 shrink-0 group-hover:text-moving-yellow transition-colors" />
									<span className="text-gray-600 text-sm">{option}</span>
								</li>
							))}
						</ul>

						<div className="mt-8 flex items-start gap-4 p-5 rounded-xl bg-moving-gray/20 border border-moving-gray-10 shadow-inner">
							<EyeIcon className="size-5 text-black mt-0.5 shrink-0" />
							<p className="text-sm text-gray-700 leading-relaxed">
								<span className="font-semibold text-black">
									Visual surveys preferred.
								</span>{" "}
								We offer in-person and virtual home surveys to provide accurate
								quotes and a personalized moving plan based on your layout,
								inventory, and timeline.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function ResidentialMovingCost() {
	return (
		<section className="py-20 bg-moving-dark">
			<div className="max-w-6xl mx-auto px-6 lg:px-8">
				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Transparent Pricing
					</span>
					<h2 className="text-4xl font-bold text-white tracking-tight mb-4">
						How Much Does a Local Move Cost?
					</h2>
					<p className="text-lg text-gray-200 max-w-xl leading-relaxed">
						Moving costs vary. Bad planning always costs more. Here&apos;s what
						you actually need to know.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					<div>
						<h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-7">
							What Affects Your Price?
						</h3>
						<ol className="space-y-4">
							{pricingFactors.map((factor, factorIdx) => (
								<li key={factorIdx} className="flex items-center gap-px">
									<span className="text-xs font-sans font-semibold text-gray-200 mt-0.5 w-5 shrink-0">
										{factorIdx + 1}.
									</span>
									<span className="text-gray-300 text-sm leading-relaxed">
										{factor}
									</span>
								</li>
							))}
						</ol>
					</div>

					<div>
						<h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-7">
							Typical Price Ranges
						</h3>
						<div className="space-y-3">
							{priceRanges.map((item, itemIdx) => (
								<div
									key={itemIdx}
									className={cn("rounded-xl border p-5 flex items-center justify-between transition-all", itemIdx === 0
										? "bg-moving-dark/90 border-moving-dark/80"
										: itemIdx === 1
											? "bg-moving-dark/90 border-moving-dark/70"
											: "bg-moving-dark/50 border-moving-dark/50"
									)}
								>
									<div>
										<p className="font-semibold text-white text-sm">
											{item.tier}
										</p>
										<p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
									</div>
									<span className="text-xl font-bold text-moving-yellow font-sans tabular-nums">
										{item.range}
									</span>
								</div>
							))}
						</div>

						<div className="mt-6 p-5 rounded-xl bg-moving-yellow/40 border border-moving-yellow/80">
							<div className="flex items-start gap-3">
								<ExclamationTriangleIcon className="size-4 text-white mt-0.5 shrink-0" />
								<div>
									<p className="text-white font-semibold text-sm">
										Pro Tip
									</p>
									<p className="text-gray-100 text-sm mt-1.5 leading-relaxed">
										Cheap rates usually mean slow crews or hidden fees. A job
										that takes twice as long costs more in the end. Efficiency is
										what actually lowers your total bill.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function ResidentialMovingTimeline() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto">

				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Your Roadmap
					</span>
					<h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
						Moving Timeline
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
						Most bad moves come down to poor timing. Control the timeline,
						control the move.
					</p>
				</div>

				{/* Timeline Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{phases.map((phase, phaseIdx) => (
						<div
							key={phaseIdx}
							className={cn('relative rounded-2xl p-6 border', phase.highlight
								? "bg-moving-yellow/50 border-moving-yellow" : "bg-gray-50 border-gray-200"
							)}
						>

							<div className="flex items-center gap-3 mb-5">
								<span className={cn('text-xs font-bold font-sans tabular-nums', phase.highlight ? "text-black" : "text-gray-400"
								)}
								>
									{phaseIdx + 1}.
								</span>
								<div
									className={cn('flex-1 h-0.5 rounded-full', phase.highlight ? "bg-black" : "bg-gray-200"
									)}
								>
									<div
										className={cn('h-full rounded-full', phase.activeBar)}
										style={{ width: `${((phaseIdx + 1) / phases.length) * 100}%` }}
									/>
								</div>
							</div>


							<span
								className={cn('inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3', phase.highlight
									? "bg-black text-moving-yellow"
									: phase.color
								)}
							>
								{phase.label}
							</span>


							<div
								className={cn('flex items-center gap-1.5 mb-5', phase.highlight ? "text-black font-semibold" : "text-gray-500"
								)}
							>
								<CalendarDateRangeIcon className="size-4 shrink-0" />
								<p className="text-xs font-medium">{phase.timeframe}</p>
							</div>

							<ul className="space-y-3">
								{phase.tasks.map((task, taskIdx) => (
									<li key={taskIdx} className="flex items-start gap-2.5">
										<ClipboardDocumentCheckIcon
											className={cn('size-4 mt-0.5 shrink-0', phase.highlight ? "text-moving-black/90" : "text-gray-400")}
										/>
										<span
											className={cn('text-sm leading-snug', phase.highlight ? "text-black/90" : "text-gray-700"
											)}
										>
											{task}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<p className="text-center text-sm text-gray-400 mt-8">
					Waiting too long to plan is where things fall apart.{" "}
					<Link href={"/free-quote"} className="font-medium text-gray-600 hover:underline">
						Book early, especially during peak season.
					</Link>
				</p>
			</div>
		</section>
	);
}

export function ResidentialMovingTips() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-6 lg:px-8">

				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Preparation
					</span>
					<h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
						Moving Tips That Actually Matter
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
						Simple moves aren&apos;t about luck rather
						preparation. These habits separate a smooth move from a stressful
						one.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{tips.map(({ icon: Icon, headline, body }, tipIdx) => (
						<div
							key={tipIdx}
							className="bg-white rounded-xl border border-gray-300 p-6 hover:border-moving-gray hover:shadow-sm transition-all group"
						>
							<div className="size-10 rounded-lg border-gray-300 bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-moving-gray transition-colors">
								<Icon className="size-5 text-moving-yellow/80" />
							</div>
							<h3 className="font-semibold text-gray-900 mb-2">{headline}</h3>
							<p className="text-gray-500 text-sm leading-relaxed">{body}</p>
						</div>
					))}
				</div>


				<div className="mt-12 rounded-2xl bg-moving-dark border border-gray-200 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
					<div className="flex-1">
						<h3 className="font-bold text-white text-lg mb-1">
							Need a Ready-Made Checklist?
						</h3>
						<p className="text-gray-200 text-sm leading-relaxed max-w-xl">
							A full-service moving company can provide you with a comprehensive
							checklist to guide you through packing, utilities setup, address
							changes, and more so nothing gets overlooked.
						</p>
					</div>
					<Link
						href="/free-quote"
						className="shrink-0 inline-flex items-center gap-2 bg-moving-yellow/80 hover:bg-white text-white hover:text-moving-dark text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
					>
						Get a Free Quote
					</Link>
				</div>
			</div>
		</section>
	);
}

const services = [
	{
		icon: MapPinIcon,
		category: "Long Distance",
		headline: "Residential moves over 100 miles",
		description:
			"Long-distance moves expose weak companies fast. Coordination matters more than muscle. Our process includes detailed planning, secure loading for long-haul transport, inventory tracking, and clear communication from pickup to delivery.",
		callouts: [
			"Detailed planning & scheduling",
			"Secure long-haul loading",
			"Inventory tracking",
			"Licensed, insured & bonded",
		],
		note: "Interstate movers must be federally licensed, insured, and bonded.",
	},
	{
		icon: GlobeAltIcon,
		category: "Cross Country",
		headline: "Coast-to-coast relocation",
		description:
			"Premium Moving Services is federally licensed for long-distance and cross-country moves. Expert packing, secure loading, and safe transportation across state lines with climate-controlled storage and custom crating available for fragile or high-value possessions.",
		callouts: [
			"Expert packing & loading",
			"Climate-controlled storage",
			"Custom crating available",
			"Federally licensed like major van lines",
		],
		note: "Focus on settling into your new home. We handle the rest.",
	},
	{
		icon: GlobeAmericasIcon,
		category: "International",
		headline: "Overseas household moves",
		description:
			"International moves are complex. We manage the full process: customs paperwork, freight coordination, secure packing for overseas transit, and delivery through trusted global partners. This isn't something you want to figure out as you go.",
		callouts: [
			"Customs documentation",
			"Freight coordination",
			"Secure overseas packing",
			"Trusted global delivery partners",
		],
		note: "Get this right the first time, international logistics require expertise.",
	},
	{
		icon: WalletIcon,
		category: "Specialty Items",
		headline: "Pianos, pool tables & high-value pieces",
		description:
			"Some belongings require expertise beyond standard moving. Whether it's a piano, outdoor equipment, or a prized collection, we offer custom crating, heavy lifting, and specialized disassembly and reassembly for your most challenging items.",
		callouts: [
			"Piano & pool table moving",
			"Custom crating",
			"Heavy lifting equipment",
			"White-glove handling",
		],
		note: "Every specialty item arrives in the same condition it left.",
	},
];

export function ResidentialSpecialtyServices() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto">

				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow/70 mb-4">
						Beyond Local
					</span>
					<h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
						Specialty Moving Services
					</h2>
					<p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
						Not every move is a standard local haul. We&apos;re equipped for
						long-distance, cross-country, international, and specialty
						situations.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid sm:grid-cols-2 gap-6">
					{services.map(
						({ icon: Icon, category, headline, description, callouts, note }, serviceIdx) => (
							<div
								key={serviceIdx}
								className="rounded-2xl border border-gray-300 p-7 flex flex-col gap-5 hover:border-gray-400 hover:shadow-sm transition-all"
							>
							
								<div className="flex items-center gap-3">
									<div className="size-9 rounded-lg bg-gray-100 flex items-center justify-center">
										<Icon className="size-4.5 text-gray-600" />
									</div>
									<span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
										{category}
									</span>
								</div>

								<div>
									<h3 className="font-bold text-gray-900 text-lg mb-2">
										{headline}
									</h3>
									<p className="text-gray-500 text-sm leading-relaxed">
										{description}
									</p>
								</div>

								{/* Feature Callouts */}
								<ul className="grid grid-cols-2 gap-2">
									{callouts.map((item, itemIdx) => (
										<li
											key={itemIdx}
											className="flex items-center gap-2 text-xs text-gray-600"
										>
											<ShieldCheckIcon className="size-5 stroke-white fill-moving-yellow shrink-0" />
											{item}
										</li>
									))}
								</ul>

							
								<p className="text-xs text-gray-400 italic border-t border-gray-100 pt-4">
									{note}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
