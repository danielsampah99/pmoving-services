import {
	ArchiveBoxIcon,
	ArrowRightIcon,
	CubeIcon,
	LockClosedIcon,
	MusicalNoteIcon,
	ShieldCheckIcon,
	SparklesIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import type { ServicePricing } from "@/payload-types";
import Link from "next/link";
import type { ComponentType, FC, SVGProps } from "react";
import { serviceLabel } from "@/data/service-slugs";

const usd = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

const UNIT_SUFFIX: Record<string, string> = {
	"per-move": "",
	"per-hour": "/hr",
	"per-month": "/mo",
	"per-item": "/item",
	"per-pound": "/lb",
};

/**
 * "from $800" when there is no ceiling, "$800 – $1,800" when there is.
 * A non per-move unit is suffixed so a per-item price is not read as a total.
 */
export const priceLabel = (
	row: Pick<ServicePricing, "minPrice" | "maxPrice" | "unit">,
) => {
	const suffix = UNIT_SUFFIX[row.unit ?? "per-move"] ?? "";
	const min = usd.format(row.minPrice ?? 0);
	if (!row.maxPrice) return `from ${min}${suffix}`;
	return `${min} – ${usd.format(row.maxPrice)}${suffix}`;
};

const includesLabel = (row: ServicePricing) =>
	Array.isArray(row.includes)
		? row.includes
				.map((item) => item?.text)
				.filter((text): text is string => Boolean(text))
				.join(" · ")
		: "";

const CATEGORY_ORDER = [
	{ key: "residential", label: "Residential Moves" },
	{ key: "commercial", label: "Commercial Moves" },
	{ key: "specialty", label: "Specialty & Add-Ons" },
] as const;

const SPECIALTY_ICONS: Record<
	string,
	ComponentType<SVGProps<SVGSVGElement>>
> = {
	"piano-moving": MusicalNoteIcon,
	"specialty-moving/gun-and-safe-moving": LockClosedIcon,
	"specialty-moving/antique-furniture": SparklesIcon,
	"specialty-moving/furniture-moving": ArchiveBoxIcon,
	"storage-services": ArchiveBoxIcon,
	"junk-removal": TrashIcon,
	"packing-supplies": CubeIcon,
};

const Cta: FC<{ href: string }> = ({ href }) => (
	<div className="mt-12 rounded-2xl border border-moving-yellow/30 bg-moving-yellow/10 p-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
		<div className="flex-1">
			<h3 className="font-bold text-white text-lg mb-1">
				Not sure what your move costs?
			</h3>
			<p className="text-gray-300 text-sm leading-relaxed max-w-xl">
				These are published starting rates. Send us the details and we&apos;ll
				write you an exact, itemized quote at no cost and with no obligation.
			</p>
		</div>
		<Link
			href={href}
			className="shrink-0 inline-flex items-center gap-2 bg-moving-yellow text-moving-dark hover:bg-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
		>
			Get an Exact Quote
			<ArrowRightIcon aria-hidden="true" className="size-4" />
		</Link>
	</div>
);

const StackedRow: FC<{ row: ServicePricing }> = ({ row }) => (
	<div className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-moving-yellow/40">
		<div className="flex items-start justify-between gap-6">
			<div className="min-w-0">
				<p className="font-semibold text-white text-sm">{row.label}</p>
				{includesLabel(row) ? (
					<p className="text-gray-400 text-xs mt-1 leading-relaxed">
						{includesLabel(row)}
					</p>
				) : null}
			</div>
			<span className="text-xl font-bold text-moving-yellow font-sans tabular-nums shrink-0 whitespace-nowrap">
				{priceLabel(row)}
			</span>
		</div>
		<Link
			href={`/services/${row.service}`}
			className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gray-300 hover:text-moving-yellow transition-colors"
		>
			{serviceLabel(row.service)}
			<ArrowRightIcon aria-hidden="true" className="size-3.5" />
		</Link>
	</div>
);

const SpecialtyCard: FC<{ row: ServicePricing }> = ({ row }) => {
	const Icon = SPECIALTY_ICONS[row.service] ?? ShieldCheckIcon;
	return (
		<Link
			href={`/services/${row.service}`}
			className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-moving-yellow/40"
		>
			<Icon
				aria-hidden="true"
				className="size-5 text-moving-yellow fill-white stroke-moving-yellow"
			/>
			<p className="mt-4 font-semibold text-white text-sm">{row.label}</p>
			<span className="mt-1 text-lg font-bold text-moving-yellow font-sans tabular-nums">
				{priceLabel(row)}
			</span>
			{includesLabel(row) ? (
				<p className="mt-2 text-gray-400 text-xs leading-relaxed">
					{includesLabel(row)}
				</p>
			) : null}
		</Link>
	);
};

export type MovingCostTableProps = {
	city: string;
	rows: ServicePricing[];
	/** Prefills the quote handoff, e.g. the origin ZIP for this service area. */
	quoteHref?: string;
};

export const MovingCostTable: FC<MovingCostTableProps> = ({
	city,
	rows,
	quoteHref = "/free-quote",
}) => {
	if (!Array.isArray(rows) || rows.length === 0) return null;

	const groups = CATEGORY_ORDER.map((group) => ({
		...group,
		rows: rows.filter((row) => row.category === group.key),
	})).filter((group) => group.rows.length > 0);

	return (
		<section
			id="moving-costs"
			aria-labelledby="moving-costs-heading"
			className="relative isolate -mx-6 mt-16 bg-moving-dark py-20 lg:-mx-8"
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<header className="mb-14 max-w-2xl">
					<span className="inline-block text-xs font-semibold tracking-widest uppercase text-moving-yellow mb-4">
						Transparent Pricing
					</span>
					<h2
						id="moving-costs-heading"
						className="text-4xl font-bold text-white tracking-tight"
					>
						Moving Costs In {city}
					</h2>
					<p className="text-lg text-gray-300 mt-4 leading-relaxed">
						Published starting rates for moves starting in {city}. No hidden
						fees, no callbacks required.
					</p>
				</header>

				{groups.map((group) => (
					<div key={group.key} className="mb-12 last:mb-0">
						<h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-6">
							{group.label}
						</h3>
						{group.key === "specialty" ? (
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
								{group.rows.map((row) => (
									<SpecialtyCard key={row.id} row={row} />
								))}
							</div>
						) : (
							<div className="space-y-3 max-w-4xl">
								{group.rows.map((row) => (
									<StackedRow key={row.id} row={row} />
								))}
							</div>
						)}
					</div>
				))}

				<Cta href={quoteHref} />
			</div>
		</section>
	);
};

export default MovingCostTable;
