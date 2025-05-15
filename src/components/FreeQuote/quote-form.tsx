"use client";

import {
	Field,
	Label,
	Input,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Textarea,
	Button,
	Description,
} from "@headlessui/react";
import {
	EnvelopeIcon,
	PhoneIcon,
	UserIcon,
	CheckIcon,
	ChevronUpDownIcon,
	CalendarIcon,
	MapPinIcon,
} from "@heroicons/react/20/solid";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
	moveQouteFormSchema,
	type MoveQuoteFormSchema,
} from "./steps/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BRANCHID, COMPANYID, USEROPTIN, PARENT_URL } from "@/utils";
import { moveSizes, referralSources, stairs } from "@/data/qoute";
import { useRouter, useSearchParams } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { redirect } from "next/dist/server/api-utils";

export const phoneTypes = [
	{ id: 1, name: "Home", value: "home" },
	{ id: 2, name: "Office", value: "office" },
	{ id: 3, name: "Mobile", value: "mobile" },
];

export const FreeQuoteForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [movingFrom, movingTo] = [
		searchParams.get("from"),
		searchParams.get("to"),
	];

	const form = useForm<MoveQuoteFormSchema>({
		resolver: zodResolver(moveQouteFormSchema),
		defaultValues: {
			companyId: COMPANYID,
			name: "",
			email: "",
			phone: "",
			phoneType: undefined,
			branchId: BRANCHID,
			formMode: "full",
			userOptIn: USEROPTIN,
			specialtyItemIds: [],
			destination: { fullAddress: movingTo ?? "", numberOfFloors: 0 },
			origin: { fullAddress: movingFrom ?? "", numberOfFloors: 0 },
			moveSizeId: "",
			notes: "",
			parentUrl: PARENT_URL,
			proposedMoveDate: "",
			referralSourceId: "",
			referralUrl: "",
		},
	});

	const sendQuote = async (
		url: string,
		{ arg }: { arg: MoveQuoteFormSchema },
	) => {
		const response = await fetch(url, {
			method: "POST",
			body: JSON.stringify(arg),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			router.push("thank-you");
		}
	};

	const { trigger, isMutating } = useSWRMutation(
		"https://api.smartmoving.com/api/public/quotes",
		sendQuote,
	);

	const onSubmit = async (formValues: MoveQuoteFormSchema) => {
		const consentCheckbox = document.getElementById(
			"consent",
		) as HTMLInputElement | null;

		if (!consentCheckbox || !consentCheckbox.checked) {
			// add a form level error
			form.setError("notes", {
				type: "required",
				message: "Kindly, click the consent checbox to process",
			});
			return;
		}

		const updatedFormValues = {
			...formValues,
			proposedMoveDate: formValues.proposedMoveDate.replaceAll("-", ""),
		};

		try {
			await trigger(updatedFormValues);
		} catch (e: any) {
			form.setError(
				"notes",
				e?.message ?? "Something went wrong. Please try again",
			);
		}
	};

	return (
		<form
			id="form"
			className="space-y-6 aria-disabled:bg-gray-50 aria-disabled:opacity-50"
			onSubmit={form.handleSubmit(onSubmit)}
			aria-disabled={isMutating ? "true" : "false"}
		>
			<div
				id="moving-information"
				className="border-b border-gray-900/10 pb-6 flex flex-col gap-y-4 items-center jusitfy-between"
			>
				{/* moving date */}
				<Controller
					control={form.control}
					name="proposedMoveDate"
					render={({ field }) => (
						<Field className="w-full">
							<Label className="block text-sm font-medium text-gray-700">
								Move Date
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<CalendarIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="date"
									id="move-date"
									aria-describedby="move-date-error"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="proposedMoveDate"
								render={({ message }) => (
									<Description
										id="move-date-error"
										className="mt-2 text-sm text-red-600"
									>
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				<Controller
					control={form.control}
					name="moveSizeId"
					render={({ field }) => {
						const selected = moveSizes.find((item) => item.id === field.value);

						return (
							<Field className="w-full">
								<Listbox value={field.value} onChange={field.onChange}>
									<Label className="block text-sm font-medium text-gray-700">
										Move Sizes
									</Label>
									<div className="relative mt-2">
										<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-moving-yellow sm:text-sm sm:leading-6">
											<span className="block text-gray-900 truncate">
												{selected?.name ?? "Select"}
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
												<ChevronUpDownIcon
													aria-hidden="true"
													className="size-5 text-gray-400"
												/>
											</span>
										</ListboxButton>

										<ListboxOptions
											transition
											className="absolute z-50 mt-1 max-h-60 w-full p-1 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
										>
											{moveSizes.map((item) => (
												<ListboxOption
													key={item.id}
													value={item.id}
													className="group relative cursor-default select-none py-2 pl-3 rounded-md pr-9 text-gray-900 data-[focus]:bg-moving-yellow/80 data-[focus]:text-white"
												>
													<span className="block capitalize truncate font-normal group-data-[selected]:font-semibold">
														{item.name}
													</span>

													<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-moving-yellow group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
														<CheckIcon aria-hidden="true" className="size-5" />
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>

								<ErrorMessage
									errors={form.formState.errors}
									name="moveSizeId"
									render={({ message }) => (
										<Description className="mt-2 text-sm text-red-600">
											{message}
										</Description>
									)}
								/>
							</Field>
						);
					}}
				/>
			</div>

			<div
				id="personal-information"
				className="grid grid-cols-1 space-y-4 md:grid-cols-2 gap-x-4 justify-between border-b border-gray-900/10 pb-6"
			>
				<Controller
					control={form.control}
					name="name"
					render={({ field }) => (
						<Field className="sm:col-span-2">
							<Label
								htmlFor="fullName"
								className="block text-sm font-medium text-gray-700"
							>
								Full Name
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<UserIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="text"
									id="fullName"
									autoComplete="name"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
									placeholder="Full Name"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="name"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				{/* Email */}
				<Controller
					control={form.control}
					name="email"
					render={({ field }) => (
						<Field className="sm:col-span-2">
							<Label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<EnvelopeIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
									placeholder="Email"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="email"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				{/* Phone Number */}
				<Controller
					control={form.control}
					name="phone"
					render={({ field }) => (
						<Field className="sm:col-span-1">
							<Label
								htmlFor="phone-number"
								className="block text-sm font-medium text-gray-700"
							>
								Phone Number
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<PhoneIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="tel"
									id="phone-number"
									autoComplete="tel-national"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
									placeholder="Phone Number"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="phone"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				{/* Phone Type */}
				<Controller
					control={form.control}
					name="phoneType"
					render={({ field }) => {
						const selected = phoneTypes.find(
							(item) => item.value === field.value,
						);

						return (
							<Field className="sm:col-span-1">
								<div className="">
									<Listbox value={field.value} onChange={field.onChange}>
										<Label className="block text-sm font-medium text-gray-700">
											Phone Type
										</Label>
										<div className="relative mt-2">
											<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-moving-yellow sm:text-sm sm:leading-6">
												<span className="block text-gray-900 truncate">
													{selected?.name ?? "Select"}
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														aria-hidden="true"
														className="size-5 text-gray-400"
													/>
												</span>
											</ListboxButton>

											<ListboxOptions
												transition
												className="absolute z-50 mt-1 max-h-60 w-full p-1 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
											>
												{phoneTypes.map((item) => (
													<ListboxOption
														key={item.id}
														value={item.value}
														className="group relative cursor-default select-none py-2 pl-3 rounded-md pr-9 text-gray-900 data-[focus]:bg-moving-yellow data-[focus]:text-white"
													>
														<span className="block truncate font-normal group-data-[selected]:font-semibold">
															{item.name}
														</span>

														<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-moving-yellow group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
															<CheckIcon
																aria-hidden="true"
																className="size-5"
															/>
														</span>
													</ListboxOption>
												))}
											</ListboxOptions>
										</div>
									</Listbox>
								</div>
								<ErrorMessage
									errors={form.formState.errors}
									name="phoneType"
									render={({ message }) => (
										<Description className="mt-2 text-sm text-red-600">
											{message}
										</Description>
									)}
								/>
							</Field>
						);
					}}
				/>
			</div>

			<div
				id="location-info"
				className="border-b border-gray-900/10 pb-6 flex flex-col items-center gap-y-4 justify-between"
			>
				{/* address origin */}
				<Controller
					control={form.control}
					name="origin.fullAddress"
					render={({ field }) => (
						<Field className="w-full">
							<Label className="block text-sm font-medium text-gray-700">
								Origin Address / Postal Code
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<MapPinIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="text"
									autoComplete="address-line1"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
									placeholder="Origin"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="origin.fullAddress"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				{/* address destination */}
				<Controller
					control={form.control}
					name="destination.fullAddress"
					render={({ field }) => (
						<Field className="w-full">
							<Label className="block text-sm font-medium text-gray-700">
								Destination Address / Postal Code
							</Label>

							<div className="relative mt-2 rounded-md shadow-sm">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<MapPinIcon
										aria-hidden="true"
										className="size-5 fill-gray-400"
									/>
								</div>
								<Input
									{...field}
									type="text"
									autoComplete="address-line1"
									className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none sm:text-sm sm:leading-6"
									placeholder="Destination"
								/>
							</div>
							<ErrorMessage
								errors={form.formState.errors}
								name="destination.fullAddress"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				{/* Origin Stairs */}
				<Controller
					control={form.control}
					name="origin.numberOfFloors"
					render={({ field }) => {
						const selected = stairs.find((item) => item.value === field.value);

						return (
							<Field className="w-full">
								<div className="">
									<Listbox value={field.value} onChange={field.onChange}>
										<Label className="block text-sm font-medium text-gray-700">
											Stairs (Origin)
										</Label>
										<div className="relative mt-2">
											<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-moving-yellow sm:text-sm sm:leading-6">
												<span className="block text-gray-900 truncate">
													{selected?.value ?? "0"}
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														aria-hidden="true"
														className="size-5 text-gray-400"
													/>
												</span>
											</ListboxButton>

											<ListboxOptions
												transition
												className="absolute z-50 mt-1 max-h-60 w-full p-1 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
											>
												{stairs.map((item) => (
													<ListboxOption
														key={item.id}
														value={item.value}
														className="group relative cursor-default select-none py-2 pl-3 rounded-md pr-9 text-gray-900 data-[focus]:bg-moving-yellow data-[focus]:text-white"
													>
														<span className="block truncate font-normal group-data-[selected]:font-semibold">
															{item.value}
														</span>

														<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-moving-yellow group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
															<CheckIcon
																aria-hidden="true"
																className="size-5"
															/>
														</span>
													</ListboxOption>
												))}
											</ListboxOptions>
										</div>
									</Listbox>
								</div>
								<ErrorMessage
									errors={form.formState.errors}
									name="origin.numberOfFloors"
									render={({ message }) => (
										<Description className="mt-2 text-sm text-red-600">
											{message}
										</Description>
									)}
								/>
							</Field>
						);
					}}
				/>

				{/* Destination stairs */}
				<Controller
					control={form.control}
					name="destination.numberOfFloors"
					render={({ field }) => {
						const selected = stairs.find((item) => item.value === field.value);

						return (
							<Field className="w-full">
								<div className="">
									<Listbox value={field.value} onChange={field.onChange}>
										<Label className="block text-sm font-medium text-gray-700">
											Stairs (Destination)
										</Label>
										<div className="relative mt-2">
											<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-moving-yellow sm:text-sm sm:leading-6">
												<span className="block text-gray-900 truncate">
													{selected?.value ?? "0"}
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														aria-hidden="true"
														className="size-5 text-gray-400"
													/>
												</span>
											</ListboxButton>

											<ListboxOptions
												transition
												className="absolute z-50 mt-1 max-h-60 w-full p-1 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
											>
												{stairs.map((item) => (
													<ListboxOption
														key={item.id}
														value={item.value}
														className="group relative cursor-default select-none py-2 pl-3 rounded-md pr-9 text-gray-900 data-[focus]:bg-moving-yellow data-[focus]:text-white"
													>
														<span className="block truncate font-normal group-data-[selected]:font-semibold">
															{item.value}
														</span>

														<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-moving-yellow group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
															<CheckIcon
																aria-hidden="true"
																className="size-5"
															/>
														</span>
													</ListboxOption>
												))}
											</ListboxOptions>
										</div>
									</Listbox>
								</div>
								<ErrorMessage
									errors={form.formState.errors}
									name="destination.numberOfFloors"
									render={({ message }) => (
										<Description className="mt-2 text-sm text-red-600">
											{message}
										</Description>
									)}
								/>
							</Field>
						);
					}}
				/>

				{/*  Referral source */}
				<Controller
					control={form.control}
					name="referralSourceId"
					render={({ field }) => {
						const selected = referralSources.find(
							(item) => item.id === field.value,
						);

						return (
							<Field className="w-full">
								<div className="">
									<Listbox value={field.value} onChange={field.onChange}>
										<Label className="block text-sm capitalize font-medium text-gray-700">
											How did you hear about us?
										</Label>
										<div className="relative mt-2">
											<ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-moving-yellow sm:text-sm sm:leading-6">
												<span className="block text-gray-900 truncate">
													{selected?.name ?? "Select"}
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<ChevronUpDownIcon
														aria-hidden="true"
														className="size-5 text-gray-400"
													/>
												</span>
											</ListboxButton>

											<ListboxOptions
												transition
												className="absolute z-50 mt-1 max-h-60 w-full p-1 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
											>
												{referralSources.map((item) => (
													<ListboxOption
														key={item.id}
														value={item.id}
														className="group relative cursor-default select-none py-2 pl-3 rounded-md pr-9 text-gray-900 data-[focus]:bg-moving-yellow data-[focus]:text-white"
													>
														<span className="block truncate capitalize font-normal group-data-[selected]:font-semibold">
															{item.name}
														</span>

														<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-moving-yellow group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
															<CheckIcon
																aria-hidden="true"
																className="size-5"
															/>
														</span>
													</ListboxOption>
												))}
											</ListboxOptions>
										</div>
									</Listbox>
								</div>
								<ErrorMessage
									errors={form.formState.errors}
									name="referralSourceId"
									render={({ message }) => (
										<Description className="mt-2 text-sm text-red-600">
											{message}
										</Description>
									)}
								/>
							</Field>
						);
					}}
				/>
			</div>

			<div
				id="moving-notes"
				className="border-b border-gray-900/10 pb-6 flex flex-col items-center justify-between gap-y-4"
			>
				<Controller
					control={form.control}
					name="notes"
					render={({ field }) => (
						<Field className="w-full">
							<Label className="block text-sm font-medium text-gray-700">
								Notes
							</Label>

							<div className="mt-2">
								<Textarea
									{...field}
									rows={4}
									placeholder="Notes"
									className="field-sizing-content block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
								/>
							</div>

							<ErrorMessage
								errors={form.formState.errors}
								name="notes"
								render={({ message }) => (
									<Description className="mt-2 text-sm text-red-600">
										{message}
									</Description>
								)}
							/>
						</Field>
					)}
				/>

				<Field className="w-full mt-3 relative flex items-start">
					<div className="flex h-6 items-center">
						<Input
							id="consent"
							name="consent"
							type="checkbox"
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
							(conversational purposes) at the phone number provided above. You
							may reply <strong>STOP</strong> to opt-out at any time. Reply{" "}
							<strong>HELP</strong> for assistance. Messages and data rates may
							apply. Message frequency will vary. Learn more on our{" "}
							<a href="/privacy-policy"> Privacy Policy Page</a> and{" "}
							<a href="/terms-and-conditions">Terms & conditions</a>
						</Label>
					</div>
				</Field>
			</div>

			<Button
				type="submit"
				id="request-form-button"
				className="w-full rounded-md bg-moving-yellow/70 px-4 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-moving-yellow/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow/90"
			>
				Get Estimate Now
			</Button>
		</form>
	);
};
