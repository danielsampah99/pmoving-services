"use client";

import { useState, type FC, type ChangeEvent, type FormEvent } from "react";
import { FormField } from "@/components/contact-us/FormField";
import { QuoteButton } from "@/components/contact-us/QuoteButton";

interface QuickQuoteData {
	moveSize: string;
	movingFrom: string;
	fullName: string;
	email: string;
	phoneNumber: string;
	movingTo: string;
	moveDate: string;
}

const QuickQuoteForm: FC = () => {
	const [formData, setFormData] = useState<QuickQuoteData>({
		moveSize: "",
		movingFrom: "",
		fullName: "",
		email: "",
		phoneNumber: "",
		movingTo: "",
		moveDate: "",
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof QuickQuoteData, string>>
	>({});

	const handleChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;

		setFormData({
			...formData,
			[name]: value,
		});

		// Clear error once user starts typing
		if (errors[name as keyof QuickQuoteData]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<Record<keyof QuickQuoteData, string>> = {};
		let isValid = true;

		if (!formData.moveSize) {
			newErrors.moveSize = "Move size is required";
			isValid = false;
		}

		if (!formData.movingFrom) {
			newErrors.movingFrom = "Origin location is required";
			isValid = false;
		}

		if (!formData.fullName) {
			newErrors.fullName = "Full name is required";
			isValid = false;
		}

		if (!formData.email) {
			newErrors.email = "Email is required";
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
			isValid = false;
		}

		if (!formData.phoneNumber) {
			newErrors.phoneNumber = "Phone number is required";
			isValid = false;
		} else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ""))) {
			newErrors.phoneNumber = "Please enter a valid phone number";
			isValid = false;
		}

		if (!formData.movingTo) {
			newErrors.movingTo = "Destination location is required";
			isValid = false;
		}

		if (!formData.moveDate) {
			newErrors.moveDate = "Move date is required";
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			// Normally would submit the form to a server here
			console.log("Quick quote submitted:", formData);
			// Show success toast
			//   toast.success("Your quick quote request has been submitted!");

			// Reset form
			setFormData({
				moveSize: "",
				movingFrom: "",
				fullName: "",
				email: "",
				phoneNumber: "",
				movingTo: "",
				moveDate: "",
			});
		} else {
			//   toast.error("Please fix the errors in the form.");
		}
	};

	const moveSizeOptions = [
		{ value: "office_building", label: "Office Building" },
		{ value: "office_1300", label: "Office - 1300 cubic feet" },
		{ value: "office", label: "Office" },
		{ value: "room_or_less", label: "Room or Less" },
		{ value: "studio_apartment", label: "Studio Apartment" },
		{ value: "1_bedroom_apartment", label: "1 Bedroom Apartment" },
		{ value: "2_bedroom_apartment", label: "2 Bedroom Apartment" },
		{ value: "3_bedroom_apartment", label: "3 Bedroom Apartment" },
		{ value: "1_bedroom_house", label: "1 Bedroom House" },
		{ value: "1_bedroom_house_large", label: "1 Bedroom House (Large)" },
		{ value: "2_bedroom_house", label: "2 Bedroom House" },
		{ value: "2_bedroom_house_large", label: "2 Bedroom House (Large)" },
		{ value: "3_bedroom_house", label: "3 Bedroom House" },
		{ value: "3_bedroom_house_large", label: "3 Bedroom House (Large)" },
		{ value: "4_bedroom_house", label: "4 Bedroom House" },
		{ value: "4_bedroom_house_large", label: "4 Bedroom House (Large)" },
		{ value: "5_bedroom_house", label: "5 Bedroom House" },
		{ value: "5_bedroom_house_large", label: "5 Bedroom House (Large)" },
		{ value: "5x10_storage", label: "5 x 10 Storage Unit" },
		{ value: "5x15_storage", label: "5 x 15 Storage Unit" },
		{ value: "10x10_storage", label: "10 x 10 Storage Unit" },
		{ value: "10x15_storage", label: "10 x 15 Storage Unit" },
		{ value: "10x20_storage", label: "10 x 20 Storage Unit" },
	];

	const locationOptions = [
		{ value: "boston", label: "Boston, MA" },
		{ value: "newyork", label: "New York, NY" },
		{ value: "chicago", label: "Chicago, IL" },
		{ value: "losangeles", label: "Los Angeles, CA" },
		{ value: "sanfrancisco", label: "San Francisco, CA" },
		{ value: "other", label: "Other Location" },
	];

	return (
		<div className="bg-white rounded-lg shadow-form p-6 animate-fade-in">
			<h2 className="text-xl font-bold text-moving-dark-gray mb-6">
				Get a Moving Quote
			</h2>
			<form onSubmit={handleSubmit}>
				<FormField
					id="moveSize"
					label="Move Size"
					type="select"
					required
					value={formData.moveSize}
					onChange={handleChange}
					options={moveSizeOptions}
					error={errors.moveSize}
				/>

				<FormField
					id="movingFrom"
					label="Moving From"
					type="select"
					required
					value={formData.movingFrom}
					onChange={handleChange}
					options={locationOptions}
					error={errors.movingFrom}
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
					id="email"
					label="Email"
					type="email"
					required
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
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
					id="movingTo"
					label="Moving To"
					type="select"
					required
					value={formData.movingTo}
					onChange={handleChange}
					options={locationOptions}
					error={errors.movingTo}
				/>

				<FormField
					id="moveDate"
					label="Move Date"
					type="date"
					required
					value={formData.moveDate}
					onChange={handleChange}
					error={errors.moveDate}
				/>

				<div className="mt-6">
					<QuoteButton
						type="submit"
						text="Get Quick Quote"
						className="w-full text-white"
					/>
				</div>
			</form>
		</div>
	);
};

export default QuickQuoteForm;
