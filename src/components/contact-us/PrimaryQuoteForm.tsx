"use client";

import { useState, type FC } from "react";
import { FormField } from "./FormField";
import { QuoteButton } from "./QuoteButton";
import { Field, Input, Label } from "@headlessui/react";
import Link from "next/link";

interface FormData {
	moveDate: string;
	moveTime: string;
	fullName: string;
	phoneNumber: string;
	email: string;
	originAddress: string;
	destinationAddress: string;
	dwellingType: string;
	heardAbout: string;
	notes: string;
	termsAgreed: string;
}

const PrimaryQuoteForm: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		moveDate: "",
		moveTime: "",
		fullName: "",
		phoneNumber: "",
		email: "",
		originAddress: "",
		destinationAddress: "",
		dwellingType: "",
		heardAbout: "",
		notes: "",
		termsAgreed: "",
	});

	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
		{},
	);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value, type } = e.target as HTMLInputElement;

		setFormData({
			...formData,
			[name]:
				type === "checkbox"
					? (e.target as HTMLInputElement).checked
						? "true"
						: "false"
					: value,
		});

		// Clear error once user starts typing
		if (errors[name as keyof FormData]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<Record<keyof FormData, string>> = {};
		let isValid = true;

		if (!formData.moveDate) {
			newErrors.moveDate = "Move date is required";
			isValid = false;
		}

		if (!formData.moveTime) {
			newErrors.moveTime = "Move time is required";
			isValid = false;
		}

		if (!formData.fullName) {
			newErrors.fullName = "Full name is required";
			isValid = false;
		}

		if (!formData.phoneNumber) {
			newErrors.phoneNumber = "Phone number is required";
			isValid = false;
		} else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ""))) {
			newErrors.phoneNumber = "Please enter a valid phone number";
			isValid = false;
		}

		if (!formData.email) {
			newErrors.email = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
			isValid = false;
		}

		if (!formData.originAddress) {
			newErrors.originAddress = "Origin address is required";
			isValid = false;
		}

		if (!formData.destinationAddress) {
			newErrors.destinationAddress = "Destination address is required";
			isValid = false;
		}

		if (!formData.dwellingType) {
			newErrors.dwellingType = "Dwelling type is required";
			isValid = false;
		}

		if (formData.termsAgreed !== "true") {
			newErrors.termsAgreed = "You must agree to the terms";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// Normally would submit the form to a server here
			console.log("Form data submitted:", formData);
			// Show success toast
			//   toast.success("Your quote request has been submitted! We'll contact you shortly.");

			// Reset form
			setFormData({
				moveDate: "",
				moveTime: "",
				fullName: "",
				phoneNumber: "",
				email: "",
				originAddress: "",
				destinationAddress: "",
				dwellingType: "",
				heardAbout: "",
				notes: "",
				termsAgreed: "",
			});
		} else {
			//   toast.error("Please fix the errors in the form.");
		}
	};

	const timeOptions = [
		{ value: "morning", label: "Morning (8am - 12pm)" },
		{ value: "afternoon", label: "Afternoon (12pm - 4pm)" },
		{ value: "evening", label: "Evening (4pm - 8pm)" },
	];

	const dwellingOptions = [
		{ value: "apartment", label: "Apartment" },
		{ value: "condo", label: "Condominium" },
		{ value: "house", label: "House" },
		{ value: "townhouse", label: "Townhouse" },
		{ value: "office", label: "Office" },
		{ value: "storage", label: "Storage Unit" },
	];

	const heardAboutOptions = [
		{ value: "google", label: "Google Search" },
		{ value: "friend", label: "Friend Referral" },
		{ value: "social", label: "Social Media" },
		{ value: "ad", label: "Advertisement" },
		{ value: "other", label: "Other" },
	];

	return (
		<div className="bg-white rounded-lg shadow-form p-6 animate-fade-in">
			<h2 className="text-xl font-bold text-moving-dark-gray mb-6">
				Get a Free Moving Estimate
			</h2>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormField
						id="moveDate"
						label="Move Date"
						type="date"
						required
						value={formData.moveDate}
						onChange={handleChange}
						error={errors.moveDate}
					/>

					<FormField
						id="moveTime"
						label="Move Time"
						type="select"
						required
						value={formData.moveTime}
						onChange={handleChange}
						options={timeOptions}
						error={errors.moveTime}
					/>

					<FormField
						id="fullName"
						label="Full Name"
						required
						value={formData.fullName}
						onChange={handleChange}
						error={errors.fullName}
					/>

					<FormField
						id="phoneNumber"
						label="Phone Number"
						type="tel"
						required
						value={formData.phoneNumber}
						onChange={handleChange}
						error={errors.phoneNumber}
					/>

					<FormField
						id="email"
						label="Email"
						type="email"
						required
						value={formData.email}
						onChange={handleChange}
						error={errors.email}
						className="md:col-span-2"
					/>

					<FormField
						id="originAddress"
						label="Origin Address"
						required
						placeholder="City, State, Postal Code"
						value={formData.originAddress}
						onChange={handleChange}
						error={errors.originAddress}
					/>

					<FormField
						id="destinationAddress"
						label="Destination Address"
						required
						placeholder="City, State, Postal Code"
						value={formData.destinationAddress}
						onChange={handleChange}
						error={errors.destinationAddress}
					/>

					<FormField
						id="dwellingType"
						label="Type of Dwelling"
						type="select"
						required
						value={formData.dwellingType}
						onChange={handleChange}
						options={dwellingOptions}
						error={errors.dwellingType}
					/>

					<FormField
						id="heardAbout"
						label="How Did You Hear About Us?"
						type="select"
						value={formData.heardAbout}
						onChange={handleChange}
						options={heardAboutOptions}
					/>

					<FormField
						id="notes"
						label="Additional Notes"
						type="textarea"
						value={formData.notes}
						onChange={handleChange}
						className="md:col-span-2"
					/>

					<FormField
						id="termsAgreed"
						label="By submitting this form, you agree to be contacted about our moving services."
						type="checkbox"
						required
						value={formData.termsAgreed}
						onChange={handleChange}
						error={errors.termsAgreed}
						className="md:col-span-2"
					/>

					<Field className="flex my-4 items-center">
						<Input
							id="consent"
							name="consent"
							type="checkbox"
							className="size-4 rounded border-gray-300 text-moving-yellow focus:ring-moving-yellow"
						/>
						<Label
							htmlFor="consent"
							className="ml-3 block text-sm leading-6 text-gray-700"
						>
							By checking this box, you agree to receive text messages from{" "}
							<Link
								target="_blank"
								href="/"
								className="underline text-gray-800 inline"
							>
								Premium Moving Services
							</Link>{" "}
							related to (conversational purposes) at the phone number provided
							above. You may reply <strong>STOP</strong> to opt-out at any time.
							Reply <strong>HELP</strong> for assistance. Messages and data
							rates may apply. Message frequency will vary. Learn more on our{" "}
							<Link
								target="_parent"
								href="/privacy-policy"
								className="underline text-gray-800 inline"
							>
								Privacy Policy Page
							</Link>{" "}
							and{" "}
							<Link
								target="_parent"
								className="underline text-gray-800 inline"
								href="/terms-and-conditions"
							>
								Terms and Conditions
							</Link>
						</Label>
					</Field>
				</div>

				<div className="mt-6">
					<QuoteButton
						type="submit"
						text="Get Free Estimate"
						className="w-full text-white"
					/>
				</div>
			</form>
		</div>
	);
};

export default PrimaryQuoteForm;
