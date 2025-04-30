import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function trimReview(text: string, max = 150) {
	if (text.length <= max) return text;
	return text.substring(0, max);
}

export const BASE_URL = "https://pmoving-services.vercel.app";
export const COMPANY = "Premium Moving Services";
