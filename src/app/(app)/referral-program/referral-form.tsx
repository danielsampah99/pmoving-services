"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Controller,
	ControllerRenderProps,
	FieldPath,
	FieldErrors,
	useForm,
	SubmitHandler,
} from "react-hook-form";
import {
	Field,
	Label,
	Input,
	Fieldset,
	Textarea,
	Button,
	Description,
	Legend,
	Switch,
} from "@headlessui/react";
import { HeroIconType } from "@/components/HeroIcon";
import { ErrorMessage } from "@hookform/error-message";
import { LucideIcon } from "lucide-react";
import { FC, HTMLInputTypeAttribute, useState } from "react";
import {
	EnvelopeIcon,
	PhoneIcon,
	UserIcon,
	CheckIcon,
	ChevronUpDownIcon,
	CalendarIcon,
	MapPinIcon,
	IdentificationIcon,
} from "@heroicons/react/20/solid";
import { submitReferral } from "@/data/referrals";
import { useRouter } from "next/navigation";

const textFormFields: Omit<TextInputFieldProps, "field" | "errors">[] = [
	{
		label: "Your Email Address",
		icon: EnvelopeIcon,
		name: "referrerEmail",
		type: "email",
		placeholder: "Email Address",
	},
	{
		label: "New Business Partner",
		icon: IdentificationIcon,
		name: "newBusinessPartner",
		type: "text",
		placeholder: "New Business Partner",
	},
	{
		label: "Your Name",
		icon: UserIcon,
		name: "referrerName",
		type: "text",
		placeholder: "Full Name",
	},
	{
		label: "Your Phone Number",
		icon: PhoneIcon,
		name: "referrerPhoneNumber",
		type: "tel",
		placeholder: "Phone Number",
	},
	{
		label: "Company Name(Your Referral)",
		icon: IdentificationIcon,
		name: "prospectName",
		type: "text",
		placeholder: "Company Name",
	},
	{
		label: "Who Should We Contact?",
		icon: UserIcon,
		name: "prospectContact",
		type: "text",
		placeholder: "Who should we contact",
	},
	{
		label: "Phone Number",
		icon: PhoneIcon,
		name: "prospectPhoneNumber",
		type: "tel",
		placeholder: "Phone Number",
	},
	{
		label: "Email",
		icon: EnvelopeIcon,
		name: "prospectEmail",
		type: "text",
		placeholder: "Email",
	},
];

const methodOfContactFields: Omit<SwitchFieldProps, "field" | "errors">[] = [
	{
		name: "contactPhone",
		label: "Would they prefer a call?",
	},
	{
		name: "contactEmail",
		label: "They use email quite often",
	},
	{
		name: "contactReferrer",
		label: "Also, contact me when referral is made",
	},
];

const interestedServices: Omit<SwitchFieldProps, "field" | "errors">[] = [
	{
		name: "serviceHome",
		label: "Home Moving Services",
	},
	{
		name: "serviceAssemblyDelivery",
		label: "Assemlby and Delivery Services",
	},
	{
		name: "serviceBusiness",
		label: "Business Moving Services",
	},
	{
		name: "serviceOther",
		label: "Other Services",
	},
];

export const ReferralForm = () => {
	const [hasConsent, setHasConsent] = useState(false);
	const router = useRouter();
	const form = useForm<ReferralFormSchema>({
		mode: "all",
		resolver: zodResolver(referralFormSchema),
		defaultValues: {
			referrerEmail: "",
			newBusinessPartner: "",
			referrerName: "",
			referrerPhoneNumber: "",
			prospectName: "",
			prospectContact: "",
			prospectPhoneNumber: "",
			prospectEmail: "",
			contactPhone: false,
			contactEmail: false,
			contactReferrer: false,
			comment: "",
			serviceHome: false,
			serviceAssemblyDelivery: false,
			serviceBusiness: false,
			serviceOther: false,
		},
	});

	const onSubmit: SubmitHandler<ReferralFormSchema> = async (values) => {
		try {
			await submitReferral(values);
			form.reset();
			router.push("/thank-you");
		} catch (e) {
			alert("Failed to submit referral. Please try again");
		}
	};

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Refer a Friend, but first, tell us who you are.
					</h2>
					<p className="mt-6 text-base/7 text-gray-600">
						Know someone who could use our moving services? Fill out their
						information below and we'll reach out. When they book with us,
						you'll receive a special reward!
					</p>
				</div>
				<div className="mt-20">
					<form
						id="referral-form"
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-8 lg:gap-x-10"
					>
						{textFormFields.map((item) => (
							<Controller
								key={item.name}
								control={form.control}
								name={item.name}
								render={({ field }) => (
									<TextInputField
										field={field}
										name={item.name}
										label={item.label}
										placeholder={item.placeholder}
										icon={item.icon}
										errors={form.formState.errors}
									/>
								)}
							/>
						))}

						<Fieldset className="w-full col-span-2 space-y-5">
							<Legend className="text-sm font-semibold">
								How would you suggest we contact the referred party?
							</Legend>
							{methodOfContactFields.map((item) => (
								<Controller
									key={item.name}
									control={form.control}
									name={item.name}
									render={({ field }) => (
										<SwitchField
											label={item.label}
											field={field}
											errors={form.formState.errors}
											name={item.name}
										/>
									)}
								/>
							))}
						</Fieldset>

						<Controller
							control={form.control}
							name="comment"
							render={({ field }) => (
								<Field className="w-full sm:col-span-2">
									<Label className="block text-sm font-medium text-gray-700">
										Comments/Notes
									</Label>

									<div className="relative">
										<Textarea
											ref={field.ref}
											value={field.value as string}
											onChange={field.onChange}
											name={field.name}
											aria-describedby="comment-error"
											className="block px-2 w-full accent-moving-yellow hover:accent-moving-yellow/80 rounded-md shadow-sm border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
										/>
									</div>

									<ErrorMessage
										errors={form.formState.errors}
										name={field.name}
										render={({ message }) => (
											<Description
												id="comment-error"
												className="mt-2 text-sm text-red-600"
											>
												{message}
											</Description>
										)}
									/>
								</Field>
							)}
						/>

						<Fieldset className="w-full col-span-2 space-y-5">
							<Legend className="capitalize text-sm font-semibold">
								What Services Will Interest the referred party?
							</Legend>
							{interestedServices.map((item) => (
								<Controller
									key={item.name}
									control={form.control}
									name={item.name}
									render={({ field }) => (
										<SwitchField
											label={item.label}
											field={field}
											errors={form.formState.errors}
											name={item.name}
										/>
									)}
								/>
							))}
						</Fieldset>

						<Field className="col-span-2 w-full flex items-start mt-3">
							<div className="flex h-6 items-center">
								<Input
									id="consent"
									name="consent"
									type="checkbox"
									checked={hasConsent}
									onChange={(event) => setHasConsent(event.target.checked)}
									aria-describedby="consent-description"
									className="size-4 rounded border-gray-300 text-moving-yellow focus:ring-moving-yellow"
								/>
							</div>
							<div className="ml-3 text-sm leading-6">
								<Label
									htmlFor="consent"
									className="font-medium text-justify text-gray-500 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_a]:text-moving-yellow hover:[&_a]:underline transition-colors delay-100 duration-300"
								>
									By checking this box, you agree to receive text messages from{" "}
									<a href="/">(Premium Moving Services)</a> related to
									(conversational purposes) at the phone number provided above.
									You may reply <strong>STOP</strong> to opt-out at any time.
									Reply <strong>HELP</strong> for assistance. Messages and data
									rates may apply. Message frequency will vary. Learn more on
									our <a href="/privacy-policy"> Privacy Policy Page</a> and{" "}
									<a href="/terms-and-conditions">Terms & conditions</a>
								</Label>
							</div>
						</Field>

						<Button
							type="submit"
							id="referral-form-button"
							disabled={!hasConsent}
							className="w-full col-span-2 disabled:cursor-not-allowed disabled:bg-moving-gray transition-colors duration-300 delay-100 rounded-md bg-moving-yellow/70 px-4 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-moving-yellow/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow/90 shadow-moving-yellow/30"
						>
							Submit Referral
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export type ReferralFormSchema = z.infer<typeof referralFormSchema>;

const referralFormSchema = z.object({
	referrerEmail: z.string().email("Please provide a valid email address"),
	newBusinessPartner: z.string(),
	referrerName: z.string(),
	referrerPhoneNumber: z
		.string()
		.max(16, "Phone number cannot be more than 16 characters")
		.optional(),
	prospectName: z.string(),
	prospectContact: z.string().nonempty("This field cannot be empty"),
	prospectPhoneNumber: z.string(),
	prospectEmail: z.string().email(),
	contactPhone: z.boolean(),
	contactEmail: z.boolean(),
	contactReferrer: z.boolean(),
	comment: z.string().optional().nullable(),
	serviceHome: z.boolean(),
	serviceAssemblyDelivery: z.boolean(),
	serviceBusiness: z.boolean(),
	serviceOther: z.boolean(),
});

type ControllerField = ControllerRenderProps<
	ReferralFormSchema,
	FieldPath<ReferralFormSchema>
>;

type TextInputFieldProps = {
	label: string;
	icon: HeroIconType | LucideIcon;
	field: ControllerField;
	name: FieldPath<ReferralFormSchema>;
	errors: FieldErrors<ReferralFormSchema>;
	type?: HTMLInputTypeAttribute | undefined;
	placeholder?: string;
};

const TextInputField: FC<TextInputFieldProps> = ({
	label,
	field,
	errors,
	name,
	type,
	placeholder,
	...props
}) => {
	return (
		<Field className="w-full">
			<Label className="block text-sm font-medium text-gray-700">{label}</Label>

			<div className="relative mt-2 rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<props.icon aria-hidden="true" className="size-5 fill-gray-400" />
				</div>
				<Input
					ref={field.ref}
					value={field.value as string}
					onChange={field.onChange}
					type={type ?? "text"}
					name={name}
					placeholder={placeholder}
					aria-describedby={`${field.name}-error`}
					className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
				/>
			</div>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => (
					<Description
						id={`${field.name}-error`}
						className="mt-2 text-sm text-red-600"
					>
						{message}
					</Description>
				)}
			/>
		</Field>
	);
};

type SwitchFieldProps = {
	field: ControllerField;
	label: string;
	errors: FieldErrors<ReferralFormSchema>;
	name: FieldPath<ReferralFormSchema>;
};

type FieldErrorProps = {
	errors: FieldErrors<ReferralFormSchema>;
	name: FieldPath<ReferralFormSchema>;
};

const FieldError = ({ errors, name }: FieldErrorProps) => {
	return (
		<ErrorMessage
			errors={errors}
			name={name}
			render={({ message }) => (
				<Description
					id={`errors-${name}`}
					className="mt-2 block text-sm text-red-600"
				>
					{message}
				</Description>
			)}
		/>
	);
};

const SwitchField: FC<SwitchFieldProps> = ({ field, label, errors, name }) => {
	return (
		<Field className="flex gap-x-4 col-span-2">
			<div className="flex h-6 items-center">
				<Switch
					checked={Boolean(field.value)}
					onChange={field.onChange}
					ref={field.ref}
					name={name}
					className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
				>
					<span
						aria-hidden="true"
						className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
					/>
				</Switch>
			</div>
			<Label className="text-sm leading-6 text-gray-600">{label}</Label>
			<FieldError errors={errors} name={name} />
		</Field>
	);
};
