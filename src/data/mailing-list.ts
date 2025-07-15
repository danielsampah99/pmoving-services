"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

const EmailSchema = z.object({
	email: z.string().email({ message: "Invalid email address." }),
});

export async function subscribe(formData: FormData) {
	const validatedFields = EmailSchema.safeParse({
		email: formData.get("email"),
	});

	if (!validatedFields.success) {
		return;
	}

	const payload = await getPayload({ config });

	const sendEmailPromsie = payload.sendEmail({
		to: process.env.SMTP_USER,
		subject: "Premium Moving Services: Mailing List Subscription",
		text: `You have a new subscriber to the mailing list: ${validatedFields.data.email}.`,
	});

	const subscriptionPromise = payload.create({
		collection: "mailing-list",
		data: {
			emailAddress: validatedFields.data.email,
		},
	});

	await Promise.all([sendEmailPromsie, subscriptionPromise]);

	redirect("/thank-you?from=mailing-list");
}
