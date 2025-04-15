export type Affiliate = {
	title: string;
	check: { id: number; text: string }[];
};

export const nextHomeAffiliate: Affiliate = {
	title: "Next Homes",
	check: [
		{
			id: 1,
			text: "Get A Positive, Helpful Partner For Buying Or Selling A Home",
		},
		{
			id: 2,
			text: "Trusted resource for answers about the process",
		},
		{
			id: 3,
			text: "Innovative marketing strategies",
		},
		{
			id: 4,
			text: "Expertise about neighborhood features",
		},
		{
			id: 5,
			text: "Ability to target home searches",
		},
		{
			id: 6,
			text: "Strong negotiation skills",
		},
		{
			id: 7,
			text: "Support through the closing and beyond",
		},
	],
};
