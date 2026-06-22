import {
	EyeIcon,
	ShieldCheckIcon,
	CheckIcon,
	CheckCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

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

export function ResidentialFullService() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto">
				
				<div className="mb-14">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Comprehensive Coverage
					</span>
					<h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-4">
						What a Full Service Move Includes
					</h2>
					<p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
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
									<span className="text-slate-700 leading-snug">{service}</span>
								</li>
							))}
						</ul>

					
						<div className="mt-10 p-6 rounded-xl bg-moving-yellow/10 border border-moving-yellow/20">
							<div className="flex items-start gap-4">
								<div className="size-9 rounded-lg bg-moving-yellow flex items-center justify-center shrink-0">
									<ShieldCheckIcon className="size-4 text-white" />
								</div>
								<div>
									<p className="font-semibold text-slate-900 text-sm">
										Full Value Protection Available
									</p>
									<p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
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
						<ul className="divide-y divide-slate-100">
							{additionalOptions.map((option, i) => (
								<li
									key={i}
									className="flex items-center gap-3 py-3.5 group [&_a]:text-moving-yellow [&_a]:underline"
								>
									<CheckIcon className="size-3.5 text-gray-500 shrink-0 group-hover:text-moving-yellow transition-colors" />
									<span className="text-slate-600 text-sm">{option}</span>
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
