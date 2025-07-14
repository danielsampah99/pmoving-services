import { z } from "zod";

export type CareerFormSchema = z.infer<typeof careerFormSchema>;

export const careerFormSchema = z.object({
	isUsCitizen: z.boolean().describe("Is the applicant a citizen on the USA?"),
	isAgeOk: z.coerce
		.boolean()
		.describe("Is the applicant of the verified age?")
		.describe("Is the applicant of the verified age?"),
	hasLicense: z
		.boolean({ message: "Applicant should have a valid driver's license" })
		.describe("Does the applicant have a valid driver's license?"),
	hasTransport: z
		.boolean()
		.describe("Does the applicant have a means of transportation?"),
	canCommunicate: z
		.boolean()
		.describe("Can the applicant communicate effectively in American English?"),
	fullName: z
		.string()
		.min(1, "Your full name is required for this application")
		.describe("The full name of the applicant"),
	emailAddress: z
		.string()
		.email("A valid email address is required")
		.describe("A valid email address of the applicant"),
	employmentPositions: z
		.string()
		.optional()
		.describe(
			"your most recent employment positions with a list of tasks applicant may have performed",
		),
	phone: z
		.string()
		.min(1, { message: "This field is must be valid phone number" })
		.describe("Phone number of the applicant"),
	resume: z.any().optional(),
});
