import { render, pretty } from "@react-email/components";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import JobApplicationEmail from "../emails/job-application";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function trimReview(text: string, max = 150) {
	if (text.length <= max) return text;
	return text.substring(0, max);
}
export type JobApplicationEmailProps = {
	fullName: string;
	jobPositions?: string;
	emailAddress: string;
	phone: string;
	hasTransport: boolean;
	hasLicense: boolean;
	canCommunicate: boolean;
	isAgeOk: boolean;
	isUsCitizen: boolean;
	employmentPositions?: string;
};

export const jobApplicationEmail = async (props: JobApplicationEmailProps) => {
	return await pretty(await render(JobApplicationEmail({ ...props })));
};

export const BASE_URL = "https://pmoving-services.vercel.app";
export const COMPANY = "Premium Moving Services";
export const COMPANYID = "c0a09f4b-3861-4dbb-b8aa-ad0100fc1eb2";
export const USEROPTIN = false;
export const BRANCHID = "8f117766-43a7-4c21-be49-ad0100fc20ed";
export const PARENT_URL = "https://pmoving-services.vercel.app";
