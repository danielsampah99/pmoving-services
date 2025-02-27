import { FC } from "react";

export type MoverLink = {
	href: string;
	linkText: string;
	city: string;
	state: string;
	subLinks?: MoverLink[];
};

export const moverLinks: MoverLink[] = [
	{
		href: "/albert-lea--mn",
		linkText: "Albert Lea Movers, MN",
		city: "Albert Lea",
		state: "MN",
	},
	{
		href: "/movers-eagan--mn",
		linkText: "Eagan Movers, MN",
		city: "Eagan",
		state: "MN",
	},
	{
		href: "/elk-river--mn",
		linkText: "Elk River Movers, MN",
		city: "Elk River",
		state: "MN",
	},
	{
		href: "/movers-forest-lake--mn",
		linkText: "Forest Lake Movers, MN",
		city: "Forest Lake",
		state: "MN",
	},
	{
		href: "/movers-faribault--mn",
		linkText: "Faribault Movers, MN",
		city: "Faribault",
		state: "MN",
	},
	{
		href: "/movers-west-saint-paul-mn",
		linkText: "West Saint Paul Movers, MN",
		city: "West Saint Paul",
		state: "MN",
	},
	{
		href: "/movers-st-paul-mn",
		linkText: "St. Paul Movers, MN",
		city: "St. Paul",
		state: "MN",
	},
	{
		href: "/movers-south-saint-paul-mn",
		linkText: "South Saint Paul Movers, MN",
		city: "South Saint Paul",
		state: "MN",
	},
	{
		href: "/movers-shoreview-mn",
		linkText: "Shoreview Movers, MN",
		city: "Shoreview",
		state: "MN",
	},
	{
		href: "/movers-st-cloud--mn",
		linkText: "St. Cloud Movers, MN",
		city: "St. Cloud",
		state: "MN",
	},
	{
		href: "/movers-stewartville--mn",
		linkText: "Stewartville Movers, MN",
		city: "Stewartville",
		state: "MN",
	},
	{
		href: "/movers-mendota-heights-mn",
		linkText: "Mendota Heights Movers, MN",
		city: "Mendota Heights",
		state: "MN",
	},
	{
		href: "/movers-maplewood-mn",
		linkText: "Maplewood Movers, MN",
		city: "Maplewood",
		state: "MN",
	},
	{
		href: "/movers-little-canada-mn",
		linkText: "Little Canada Movers, MN",
		city: "Little Canada",
		state: "MN",
	},
	{
		href: "/movers-oakdale-mn",
		linkText: "Oakdale Movers, MN",
		city: "Oakdale",
		state: "MN",
	},
	{
		href: "/movers-woodbury-mn",
		linkText: "Woodbury Movers, MN",
		city: "Woodbury",
		state: "MN",
	},
	{
		href: "/movers-north-saint-paul-mn",
		linkText: "North Saint Paul Movers, MN",
		city: "North Saint Paul",
		state: "MN",
	},
	{
		href: "/movers-inver-grove-heights",
		linkText: "Inver Grove Heights Movers, MN",
		city: "Inver Grove Heights",
		state: "MN",
	},
	{
		href: "/movers-northfield--mn",
		linkText: "Northfield Movers, MN",
		city: "Northfield",
		state: "MN",
	},
	{
		href: "/movers-new-brighton-mn",
		linkText: "New Brighton Movers, MN",
		city: "New Brighton",
		state: "MN",
	},
	{
		href: "/movers-new-prague--mn",
		linkText: "New Prague Movers, MN",
		city: "New Prague",
		state: "MN",
	},
	{
		href: "/movers-vadnais-heights-mn",
		linkText: "Vadnais Heights Movers, MN",
		city: "Vadnais Heights",
		state: "MN",
	},
	{
		href: "/movers-ramsey-county",
		linkText: "Ramsey County Movers, MN",
		city: "Ramsey County",
		state: "MN",
	},
	{
		href: "/movers-twin-cities",
		linkText: "Twin Cities Movers",
		city: "Twin Cities",
		state: "MN",
	},
	{
		href: "/movers-hennepin-county",
		linkText: "Hennepin County Movers",
		city: "Hennepin County",
		state: "MN",
	},
	{
		href: "/movers-minneapolis-mn",
		linkText: "Minneapolis Movers, MN",
		city: "Minneapolis",
		state: "MN",
	},
	{
		href: "/movers-mankota--mn",
		linkText: "Mankota Movers, MN",
		city: "Mankota",
		state: "MN",
	},
	{
		href: "/movers-north-oaks--mn668c5293",
		linkText: "North Oaks Movers, MN",
		city: "North Oaks",
		state: "MN",
	},
	{
		href: "/white-bear-lake",
		linkText: "White Bear Lake Movers, MN",
		city: "White Bear Lake",
		state: "MN",
	},
	{
		href: "/movers-richfield-mn",
		linkText: "Richfield Movers, MN",
		city: "Richfield",
		state: "MN",
	},
	{
		href: "/movers-roseville-mn",
		linkText: "Roseville Movers, MN",
		city: "Roseville",
		state: "MN",
	},
	{
		href: "/lakeville-movers-mn",
		linkText: "Lakeville Movers, MN",
		city: "Lakeville",
		state: "MN",
	},
	{
		href: "/movers-burnsville-mn",
		linkText: "Burnsville Movers, MN",
		city: "Burnsville",
		state: "MN",
	},
	{
		href: "/movers-austin-mn",
		linkText: "Austin Movers, MN",
		city: "Austin",
		state: "MN",
	},
	{
		href: "/movers-otsego--mn",
		linkText: "Otsego Movers, MN",
		city: "Otsego",
		state: "MN",
	},
	{
		href: "/movers-owatonna--mn",
		linkText: "Owatonna Movers, MN",
		city: "Owatonna",
		state: "MN",
	},
	{
		href: "/movers-wayzata--mn",
		linkText: "Wayzata Movers, MN",
		city: "Wayzata",
		state: "MN",
	},
	{
		href: "/movers-winona--mn",
		linkText: "Winona Movers, MN",
		city: "Winona",
		state: "MN",
	},
	{
		href: "/movers-rochester--mn",
		linkText: "Rochester Movers, MN",
		city: "Rochester",
		state: "MN",
	},
	{
		href: "/movers-rogers--mn",
		linkText: "Rogers Movers, MN",
		city: "Rogers",
		state: "MN",
	},
	{
		href: "/movers-river-falls--wi",
		linkText: "River Falls Movers, WI",
		city: "River Falls",
		state: "WI",
	},
	{
		href: "/movers-prescott--wi",
		linkText: "Prescott Movers, WI",
		city: "Prescott",
		state: "WI",
	},
];

// TODO: This is what i'm currently working on.
// Could not complete but still have to push
export const ServiceArea: FC<{ links: MoverLink[] }> = ({ links }) => {
	return <section> Service Area Popover </section>;
};
