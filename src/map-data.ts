import type { ActiveState } from "./components/InteractiveMap";
import type { MoverLink } from "./components/ServiceAreas";

export type State = { label: string; value: ActiveState };

export type MapCity = Pick<
	MoverLink,
	"href" | "city" | "linkText" | "state"
> & {
	longitude: number;
	latitude: number;
};

export type MapTile = {
	name: string;
	url: string;
	attribution: string;
	maxZoom: number;
};

export const mapTiles: MapTile[] = [
	{
		name: "OpenStreetMap",
		url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 19,
	},
	{
		name: "CartoDB Voyager",
		url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		maxZoom: 19,
	},
	{
		name: "CartoDB Positron",
		url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		maxZoom: 19,
	},
	{
		name: "CartoDB Dark Matter",
		url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		maxZoom: 19,
	},
];

export const states: State[] = [
	{ label: "World", value: "all" },
	{ label: "Minnesota", value: "MN" },
	{ label: "Wisconsin", value: "WI" },
];

export const minnesotaMapCities: MapCity[] = [
	{
		href: "/albert-lea--mn",
		linkText: "Albert Lea Movers, MN",
		city: "Albert Lea",
		state: "MN",
		latitude: 43.667,
		longitude: -93.356,
	},
	{
		href: "/movers-eagan--mn",
		linkText: "Eagan Movers, MN",
		city: "Eagan",
		state: "MN",
		latitude: 44.847,
		longitude: -93.157,
	},
	{
		href: "/elk-river--mn",
		linkText: "Elk River Movers, MN",
		city: "Elk River",
		state: "MN",
		latitude: 45.32,
		longitude: -93.622,
	},
	{
		href: "/movers-forest-lake--mn",
		linkText: "Forest Lake Movers, MN",
		city: "Forest Lake",
		state: "MN",
		latitude: 45.293,
		longitude: -92.983,
	},
	{
		href: "/movers-faribault--mn",
		linkText: "Faribault Movers, MN",
		city: "Faribault",
		state: "MN",
		latitude: 44.28,
		longitude: -93.27,
	},
	{
		href: "/movers-west-saint-paul-mn",
		linkText: "West Saint Paul Movers, MN",
		city: "West Saint Paul",
		state: "MN",
		latitude: 44.91,
		longitude: -93.105,
	},
	{
		href: "/movers-st-paul-mn",
		linkText: "St. Paul Movers, MN",
		city: "St. Paul",
		state: "MN",
		latitude: 44.953,
		longitude: -93.094,
	},
	{
		href: "/movers-south-saint-paul-mn",
		linkText: "South Saint Paul Movers, MN",
		city: "South Saint Paul",
		state: "MN",
		latitude: 44.93,
		longitude: -93.046,
	},
	{
		href: "https://maps.app.goo.gl/zLxSoiVUKsYDpExC7",
		linkText: "Shoreview Movers, MN",
		city: "Shoreview",
		state: "MN",
		latitude: 45.098,
		longitude: -93.235,
	},
	{
		href: "/movers-st-cloud--mn",
		linkText: "St. Cloud Movers, MN",
		city: "St. Cloud",
		state: "MN",
		latitude: 45.56,
		longitude: -94.163,
	},
	{
		href: "/movers-stewartville--mn",
		linkText: "Stewartville Movers, MN",
		city: "Stewartville",
		state: "MN",
		latitude: 44.504,
		longitude: -92.919,
	},
	{
		href: "/movers-mendota-heights-mn",
		linkText: "Mendota Heights Movers, MN",
		city: "Mendota Heights",
		state: "MN",
		latitude: 44.939,
		longitude: -93.109,
	},
	{
		href: "/movers-maplewood-mn",
		linkText: "Maplewood Movers, MN",
		city: "Maplewood",
		state: "MN",
		latitude: 44.946,
		longitude: -93.14,
	},
	{
		href: "/movers-little-canada-mn",
		linkText: "Little Canada Movers, MN",
		city: "Little Canada",
		state: "MN",
		latitude: 44.91,
		longitude: -93.146,
	},
	{
		href: "/movers-oakdale-mn",
		linkText: "Oakdale Movers, MN",
		city: "Oakdale",
		state: "MN",
		latitude: 44.866,
		longitude: -93.126,
	},
	{
		href: "/movers-woodbury-mn",
		linkText: "Woodbury Movers, MN",
		city: "Woodbury",
		state: "MN",
		latitude: 44.903,
		longitude: -93.118,
	},
	{
		href: "/movers-north-saint-paul-mn",
		linkText: "North Saint Paul Movers, MN",
		city: "North Saint Paul",
		state: "MN",
		latitude: 45.02,
		longitude: -93.067,
	},
	{
		href: "/movers-inver-grove-heights",
		linkText: "Inver Grove Heights Movers, MN",
		city: "Inver Grove Heights",
		state: "MN",
		latitude: 44.832,
		longitude: -93.015,
	},
	{
		href: "/movers-northfield--mn",
		linkText: "Northfield Movers, MN",
		city: "Northfield",
		state: "MN",
		latitude: 44.463,
		longitude: -93.174,
	},
	{
		href: "/movers-new-brighton-mn",
		linkText: "New Brighton Movers, MN",
		city: "New Brighton",
		state: "MN",
		latitude: 45.054,
		longitude: -93.336,
	},
	{
		href: "/movers-new-prague--mn",
		linkText: "New Prague Movers, MN",
		city: "New Prague",
		state: "MN",
		latitude: 44.562,
		longitude: -93.562,
	},
	{
		href: "/movers-vadnais-heights-mn",
		linkText: "Vadnais Heights Movers, MN",
		city: "Vadnais Heights",
		state: "MN",
		latitude: 45.065,
		longitude: -93.11,
	},
	{
		href: "/movers-ramsey-county",
		linkText: "Ramsey County Movers, MN",
		city: "Ramsey County",
		state: "MN",
		latitude: 45.0,
		longitude: -93.1,
	},
	{
		href: "/movers-twin-cities",
		linkText: "Twin Cities Movers",
		city: "Twin Cities",
		state: "MN",
		latitude: 44.978,
		longitude: -93.263,
	},
	{
		href: "/movers-hennepin-county",
		linkText: "Hennepin County Movers",
		city: "Hennepin County",
		state: "MN",
		latitude: 44.977,
		longitude: -93.265,
	},
	{
		href: "/movers-minneapolis-mn",
		linkText: "Minneapolis Movers, MN",
		city: "Minneapolis",
		state: "MN",
		latitude: 44.978,
		longitude: -93.265,
	},
	{
		href: "/movers-mankota--mn",
		linkText: "Mankota Movers, MN",
		city: "Mankota",
		state: "MN",
		latitude: 43.962,
		longitude: -95.066,
	},
	{
		href: "/movers-north-oaks--mn668c5293",
		linkText: "North Oaks Movers, MN",
		city: "North Oaks",
		state: "MN",
		latitude: 45.18,
		longitude: -93.216,
	},
	{
		href: "/white-bear-lake",
		linkText: "White Bear Lake Movers, MN",
		city: "White Bear Lake",
		state: "MN",
		latitude: 45.137,
		longitude: -92.933,
	},
	{
		href: "/movers-richfield-mn",
		linkText: "Richfield Movers, MN",
		city: "Richfield",
		state: "MN",
		latitude: 44.884,
		longitude: -93.248,
	},
	{
		href: "/movers-roseville-mn",
		linkText: "Roseville Movers, MN",
		city: "Roseville",
		state: "MN",
		latitude: 45.017,
		longitude: -93.152,
	},
	{
		href: "/lakeville-movers-mn",
		linkText: "Lakeville Movers, MN",
		city: "Lakeville",
		state: "MN",
		latitude: 44.649,
		longitude: -93.291,
	},
	{
		href: "/movers-burnsville-mn",
		linkText: "Burnsville Movers, MN",
		city: "Burnsville",
		state: "MN",
		latitude: 44.75,
		longitude: -93.281,
	},
	{
		href: "/movers-austin-mn",
		linkText: "Austin Movers, MN",
		city: "Austin",
		state: "MN",
		latitude: 43.667,
		longitude: -93.359,
	},
	{
		href: "/movers-otsego--mn",
		linkText: "Otsego Movers, MN",
		city: "Otsego",
		state: "MN",
		latitude: 43.957,
		longitude: -92.989,
	},
	{
		href: "/movers-owatonna--mn",
		linkText: "Owatonna Movers, MN",
		city: "Owatonna",
		state: "MN",
		latitude: 44.065,
		longitude: -93.199,
	},
	{
		href: "/movers-wayzata--mn",
		linkText: "Wayzata Movers, MN",
		city: "Wayzata",
		state: "MN",
		latitude: 44.883,
		longitude: -93.52,
	},
	{
		href: "/movers-winona--mn",
		linkText: "Winona Movers, MN",
		city: "Winona",
		state: "MN",
		latitude: 44.049,
		longitude: -91.636,
	},
	{
		href: "/movers-rochester--mn",
		linkText: "Rochester Movers, MN",
		city: "Rochester",
		state: "MN",
		latitude: 44.012,
		longitude: -92.48,
	},
	{
		href: "/movers-rogers--mn",
		linkText: "Rogers Movers, MN",
		city: "Rogers",
		state: "MN",
		latitude: 45.003,
		longitude: -93.545,
	},
];

export const wisconsinMapCities: MapCity[] = [
	{
		href: "/movers-river-falls--wi",
		linkText: "River Falls Movers, WI",
		city: "River Falls",
		state: "WI",
		latitude: 44.867,
		longitude: -92.638,
	},
	{
		href: "/movers-prescott--wi",
		linkText: "Prescott Movers, WI",
		city: "Prescott",
		state: "WI",
		latitude: 44.41,
		longitude: -92.57,
	},
];
