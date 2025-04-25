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

export const longDistanceQuestions: FAQType[] = [
	{
		question: "Plan Ahead",
		answer:
			"Make your reservations for movers two to four weeks before your move day. Start planning early to ensure a smooth transition. Clean out closets, attic, and basement as soon as you decide it's time to move.",
	},
	{
		question: "Use Proper Packing Materials",
		answer:
			"Never use used boxes or food/supermarket boxes as they may not be strong enough to support your possessions. Use clear packing tape, not duct tape which doesn't adhere well to cardboard. For fragile items like fine china and lampshades, use packing paper instead of newspaper to prevent ink stains.",
	},
	{
		question: "Choose the Right Boxes",
		answer:
			"The heavier the item, the smaller the box. Use small boxes for books as they get very heavy quickly. Use wardrobe boxes for clothing and specialty boxes for dishes, mirrors, and artwork. Clearly label all boxes on top and sides with contents and destination room.",
	},
	{
		question: "Pack Strategically",
		answer:
			"Avoid mixing items from different rooms in the same box. Always stack dishes upward when packing. Pack a separate box of essential items you'll need immediately at your new home and make sure it's loaded last on the truck for easy access.",
	},
	{
		question: "Handle Electronics Carefully",
		answer:
			"Try to pack electronic equipment in their original boxes if possible. If not available, use anti-static bubble wrap (usually pink) for computers and stereos to prevent static electricity damage. Use resealable plastic bags for small parts when disassembling items.",
	},
	{
		question: "Protect Important Documents",
		answer:
			"Pack important and sentimental documents separately to be easily accessible, including children's health records, passports, family records, insurance information, and photo albums.",
	},
	{
		question: "Prepare for Moving Day",
		answer:
			"Defrost the refrigerator the day before your move. Clean your stove before moving out. Make a 'survival closet' of supplies for the final cleanup. Have enough cash to get you through move day. If relying on friends or family to help, have a backup plan.",
	},
	{
		question: "Plan Your Utilities and Services",
		answer:
			"Schedule utility disconnect times about a week before your move day to avoid paying for services when you're not there. Mail change of address forms at least a week before moving. Cancel newspapers, cable, pest control, and other services in advance.",
	},
	{
		question: "Select the Right Moving Company",
		answer:
			"Verify the company is licensed and insured. Ask about their pricing structure, whether they charge by piece or hour, and if they have minimum charges or extra fees for large items or stairs. Confirm they use full-time employees rather than temps, and ask about their cancellation policy.",
	},
	{
		question: "Consider Additional Services",
		answer:
			"Many professional movers offer full or partial packing services, unpacking, and loading/unloading only options. Premium Moving Services provides customizable services including evening and weekend availability, and specialized handling for fragile or valuable items.",
	},
];
