import { z } from "zod";

export type MoveQuoteFormSchema = z.infer<typeof moveQouteFormSchema>;

const originSchema = z.object({
	numberOfFloors: z.number(),
	fullAddress: z.string({ message: "This field is required" }),
});

const destinationSchema = z.object({
	numberOfFloors: z.number(),
	fullAddress: z.string({ message: "This field is required" }),
});

export const moveQouteFormSchema = z.object({
	companyId: z.string().uuid(),
	proposedMoveDate: z.string().date("This field is required"),
	moveSizeId: z.string().uuid({ message: "This field is required " }),
	name: z.string().min(1, { message: "This field is required" }),
	email: z
		.string()
		.email({ message: "This field must be a valid email address" }),
	phone: z
		.string()
		.min(1, { message: "This field is must be valid phone number" }),
	phoneType: z.enum(["home", "work", "mobile"], {
		message: "This field is required",
		required_error: "This field is required",
	}),
	userOptIn: z.boolean(),
	origin: originSchema,
	destination: destinationSchema,
	specialtyItemIds: z.array(z.string()),
	referralSourceId: z.string().uuid({ message: "This field is required" }),
	referralUrl: z.string(),
	notes: z.string(),
	branchId: z.string().uuid(),
	parentUrl: z.string().url(),
	formMode: z.enum(["full", "quick"]),
});
