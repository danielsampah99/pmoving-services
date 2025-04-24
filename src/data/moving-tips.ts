import { FAQType } from "@/app/(app)/services/local-moving/residential-movers/faq";
import { Expectation } from "@/app/(app)/services/local-moving/residential-movers/moving-process";
import { BoxesIcon } from "@/components/icons/boxes-icon";
import { FlatIcon } from "@/components/icons/flaticon";
import { HouseIcon } from "@/components/icons/house-icon";
import { PackagingIcon } from "@/components/icons/packaging-icon";
import { PlanningIcon } from "@/components/icons/planning-icon";

export type MovingTip = {
	id: number;
	name: string;
	description: string;
	icon: FlatIcon;
};

export const movingTips: MovingTip[] = [
	{
		id: 1,
		name: "Planning & Preparation",
		icon: PlanningIcon,
		description:
			"Develop a week-by-week moving timeline. Systematically evaluate each room to identify items to retain or discard. Consider organizing a garage sale or donating gently-used items. Create a secure transportation plan for high-value possessions such as jewelry and important documents.",
	},
	{
		id: 2,
		name: "Get Packing Supplies",
		icon: PackagingIcon,
		description:
			"Acquire appropriate packing containers in various dimensions (small, medium, large, and wardrobe). Invest in specialty boxes designed for fragile items such as dishware, electronics, important files, and artwork. Ensure sufficient quantities of packing tape, protective wrapping materials, and specialized covers for mattresses.",
	},
	{
		id: 3,
		name: "Boxing It All Up",
		icon: BoxesIcon,
		description:
			"Execute packing with meticulous attention to detail. Clearly label all containers with contents and destination room. Strategically distribute weight by placing dense items like books, tools, and canned goods in smaller boxes. Utilize medium boxes for household items of moderate weight. Reserve large boxes for lightweight, voluminous items such as bedding, lampshades, and soft furnishings.",
	},
	{
		id: 4,
		name: "Unloading",
		icon: HouseIcon,
		description:
			"Maintain on-site presence or designate a representative to provide direction to moving personnel. Conduct pre-move and post-move inspections with the moving team. Establish predetermined locations for substantial furniture pieces. Upon completion of unloading, perform a comprehensive final inspection to verify all items have been properly delivered and are damage-free.",
	},
];

export const residentialExpectations: Expectation[] = [
	{
		id: 1,
		description: "Convenience to work around your schedule",
	},
	{
		id: 2,
		description:
			"Safety, efficiency, and respect for those in your current and new community",
	},
	{
		id: 3,
		description:
			"Experienced and trained movers that can adapt to any situation",
	},
	{
		id: 4,
		description: "Packing and unpacking services",
	},
	{
		id: 5,
		description: "Courteous, friendly, and professional service",
	},
];

export const frequentQuestions: FAQType[] = [
	{
		question: "Get Started Early",
		answer:
			"Don't let procrastination win. Get an early start, sometimes planning a month in advance can assure a smooth transition and make your entire moving experience more enjoyable. Don’t wait until the last minute to start planning for moving day.",
	},
	{
		question: "Purge Purge Purge",
		answer:
			"Decluttering before your move can save time and effort. Get rid of unnecessary items and only pack what you truly need.",
	},
	{
		question: "Round Up All Good Boxes",
		answer:
			"Having sturdy and well-sized boxes can make a big difference in organizing your move efficiently. Label them properly for easy unpacking.",
	},
];
