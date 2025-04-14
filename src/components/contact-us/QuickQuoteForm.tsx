"use client";

import React, { useState } from "react";
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

const QuickQuoteForm: React.FC = () => {
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
		e: React.ChangeEvent<
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

	const handleSubmit = (e: React.FormEvent) => {
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
		{ value: "studio", label: "Studio" },
		{ value: "1bedroom", label: "1 Bedroom" },
		{ value: "2bedroom", label: "2 Bedroom" },
		{ value: "3bedroom", label: "3 Bedroom" },
		{ value: "4+bedroom", label: "4+ Bedroom" },
		{ value: "office", label: "Office" },
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
