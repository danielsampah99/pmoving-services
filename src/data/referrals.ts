"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import { Referral } from "@/payload-types";
import { ReferralFormSchema } from "@/app/(app)/referral-program/referral-form";

export type ReferralData = Omit<
	Referral,
	"id" | "updatedAt" | "createdAt" | "sizes"
>;

export async function submitReferral(values: ReferralFormSchema) {
	const payload = await getPayload({ config });

	const sendEmailPromise = payload.sendEmail({
		to: process.env.SMTP_USER,
		subject: "Premium Moving Services: New Referral",
		text: `New Referral from ${values.contactEmail}. Check out the full details in the admin console. (${process.env.APP_URL}/admin/collections/referrals)`,
	});

	const createReferralPromise = payload.create({
		collection: "referrals",
		data: {
			contactEmail: values.contactEmail,
			contactPhone: values.contactPhone,
			contactReferrer: values.contactReferrer,
			comment: values.comment,
			prospectContact: values.prospectContact,
			prospectEmail: values.prospectEmail,
			prospectName: values.prospectName,
			prospectPhoneNumber: values.prospectPhoneNumber,
			referrerEmail: values.referrerEmail,
			referrerPhoneNumber: values.referrerPhoneNumber ?? "",
			serviceAssemblyDelivery: values.serviceAssemblyDelivery,
			serviceBusiness: values.serviceBusiness,
			serviceHome: values.serviceHome,
			serviceOther: values.serviceOther,
			newBusinessPartner: values.newBusinessPartner,
			referrerName: values.referrerName,
		},
	});

	await Promise.all([sendEmailPromise, createReferralPromise]);
}
