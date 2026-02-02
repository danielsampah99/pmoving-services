"use client";

import { motion } from "motion/react";

import {
	ClockIcon,
	TagIcon,
	ShieldCheckIcon,
	ArchiveBoxIcon,
	PaintBrushIcon,
	BriefcaseIcon,
	CameraIcon,
	WrenchIcon,
} from "@heroicons/react/24/outline";
import { fadeIn } from "@/utils";
import { type FC, useRef, type ComponentType } from "react";

const tips = [
	{
		id: 1,
		icon: ClockIcon,
		title: "Start early",
		desc: "Give yourself plenty of time to pack, so you can stay organized and avoid last-minute stress.",
	},
	{
		id: 2,
		icon: ArchiveBoxIcon,
		title: "Use quality packing supplies",
		desc: "Invest in sturdy boxes, strong packing tape, and protective materials to keep your items safe during transport.",
	},
	{
		id: 3,
		icon: TagIcon,
		title: "Label everything",
		desc: "Clearly label each box with its contents and destination room. Mark boxes containing fragile or valuable items for extra care.",
	},
	{
		id: 4,
		icon: PaintBrushIcon,
		title: "Color-code by room",
		desc: "Use colored tape or labels to make unpacking and organizing at your new home more efficient.",
	},
	{
		id: 5,
		icon: BriefcaseIcon,
		title: "Pack an essentials box",
		desc: "Set aside a box with items you'll need right away—like toiletries, a change of clothes, and important documents.",
	},
	{
		id: 6,
		icon: CameraIcon,
		title: "Take photos of electronics",
		desc: "Snap a quick photo of cable setups before disconnecting, so you can easily reconnect everything at your new place.",
	},
	{
		id: 7,
		icon: WrenchIcon,
		title: "Prepare a tool kit",
		desc: "Keep basic tools handy for assembling furniture or making quick fixes on moving day.",
	},
	{
		id: 8,
		icon: ShieldCheckIcon,
		title: "Protect fragile items",
		desc: "Wrap dishes, glassware, and artwork with extra care, using specialty boxes and plenty of padding.",
	},
];

type Tip = (typeof tips)[0];

export const PackingTips = () => {
	return (
		<section className="py-16 max-w-7xl mx-auto px-4">
			<motion.h2
				{...fadeIn}
				className="text-4xl font-bold text-moving-gray mb-8 text-center"
			>
				Packing Tips and Advice for a Smooth Move
			</motion.h2>

			<motion.p
				{...fadeIn}
				className="text-lg text-moving-gray mb-12 text-center max-w-4xl mx-auto"
			>
				A smooth move starts with smart packing. Here are some expert
				tips to help you prepare and protect your belongings:
			</motion.p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
				{tips.map((tip, tipIdx) => (
					<TipCard tip={tip} tipIdx={tipIdx} key={tip.id} />
				))}
			</div>

			<motion.p
				{...fadeIn}
				className="text-lg text-moving-gray text-center max-w-4xl mx-auto"
			>
				Remember, the right materials and a little planning go a long
				way toward a successful, stress-free move. And if you need extra
				help, our professional packing services are always here to
				assist!
			</motion.p>
		</section>
	);
};

const TipCard: FC<{ tip: Tip; tipIdx: number }> = ({ tip, tipIdx }) => {
	return (
		<motion.div
			key={tip.id}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: tipIdx * 0.15 }}
			className="group text-center rounded-lg ring ring-inset ring-gray-300 shadow-sm hover:ring-1 p-4 hover:bg-gray-50"
		>
			<div className="inline-flex items-center justify-center size bg-white rounded-full mb-4">
				<tip.icon className="size-7 text-moving-gray group-hover:fill-moving-dark group-hover:stroke-white transition-all duration-150 ease-in-out" />
			</div>
			<h3 className="text-xl font-bold text-moving-gray mb-2">
				{tip.title}
			</h3>
			<p className="text-[--color-moving-gray]">{tip.desc}</p>
		</motion.div>
	);
};
