import { CollectionConfig } from "payload";

export const MailingList: CollectionConfig = {
	slug: "mailing-list",
	fields: [
		{
			name: "emailAddress",
			type: "text",
			required: true,
			label: "Email Address",
			admin: {
				description: "Email address of the subscriber",
			},
		},
	],
};
