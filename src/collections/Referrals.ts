import { CollectionConfig } from "payload";

export const Referrals: CollectionConfig = {
	slug: "referrals",
	fields: [
		{
			name: "referrerName",
			type: "text",
			required: false,
			label: "Full name of the referrer",
			admin: {
				description:
					"The full name of the  referrer, i.e. the person filling out the form or recommeding us to a prospective client",
			},
		},
		{
			name: "referrerEmail",
			type: "text",
			required: true,
			label: "Email address of the referrer",
			admin: {
				description: "The email address of the referrer",
			},
		},
		{
			name: "referrerPhoneNumber",
			type: "text",
			required: true,
			label: "Referrer's Phone Number",
			admin: {
				description: "phone number of the referrer",
			},
		},
		{
			name: "newBusinessPartner",
			type: "text",
			required: false,
			label: "New Business Partner",
		},
		{
			name: "prospectName",
			type: "text",
			required: true,
			label: "Name of the referred party",
			admin: {
				description:
					"Name of the company or party being referred / potential client",
			},
		},
		{
			name: "prospectContact",
			type: "text",
			required: true,
			label: "Contact person related to referred party",
			admin: {
				description:
					"The name of a person of the referred party who can be contacted",
			},
		},
		{
			name: "prospectPhoneNumber",
			type: "text",
			required: true,
			label: "Phone Number of the referred party",
			admin: {
				description:
					"Phone Number of the company or party being referred / potential client",
			},
		},
		{
			name: "prospectEmail",
			type: "text",
			required: true,
			label: "Email address of the referred party",
			admin: {
				description:
					"Name of the company or party being referred / potential client",
			},
		},
		{
			name: "contactPhone",
			type: "checkbox",
			required: true,
			label: "Contact via Phone Call",
			admin: {
				description:
					"Can the referred / potential client be contacted via a phone call?",
			},
		},
		{
			name: "contactEmail",
			type: "checkbox",
			required: true,
			label: "Contact via Email",
			admin: {
				description:
					"Can the referred / potential client be contacted via email?",
			},
		},
		{
			name: "contactReferrer",
			type: "checkbox",
			required: true,
			label: "Inform Referrer after contact",
			admin: {
				description:
					"Send the referrer / recommender feedback, letting them know their referred party has been contacted",
			},
		},
		{
			name: "comment",
			type: "textarea",
			required: false,
			label: "Comments / Notes",
		},
		{
			name: "serviceHome",
			type: "checkbox",
			required: true,
			label: "Interested in Home Moving Services?",
		},
		{
			name: "serviceAssemblyDelivery",
			type: "checkbox",
			required: true,
			label: "Interested in Assembly and Delivery Services?",
		},
		{
			name: "serviceBusiness",
			type: "checkbox",
			required: true,
			label: "Interested in Business Moving Services?",
		},
		{
			name: "serviceOther",
			type: "checkbox",
			required: true,
			label: "Interested in Other Moving Services?",
		},
	],
};
