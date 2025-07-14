"use client";

import { useState } from "react";
import {
	Field,
	Label,
	Switch,
	Input,
	Button,
	Textarea,
	Description,
} from "@headlessui/react";
import {
	Controller,
	FieldErrors,
	FieldPath,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { careerFormSchema, CareerFormSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { LoaderIcon } from "lucide-react";
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import { cn } from "@/utils";

export const CareerForm = () => {
	const router = useRouter();

	const { control, handleSubmit, formState, register } =
		useForm<CareerFormSchema>({
			mode: "all",
			resolver: zodResolver(careerFormSchema),
			defaultValues: {
				fullName: "",
				emailAddress: "",
				employmentPositions: "",
				phone: "",
				hasTransport: false,
				isUsCitizen: false,
				isAgeOk: false,
				hasLicense: false,
				canCommunicate: false,
			},
		});

	const sendApplication = async (url: string, { arg }: { arg: FormData }) => {
		const response = await fetch(url, {
			method: "POST",
			body: arg,
			// headers: { "Content-Type": "multipart/form-data" },
		});

		if (response.ok) {
			router.push("/thank-you");
		}
	};

	const { trigger, isMutating } = useSWRMutation(
		"/api/careers",
		sendApplication,
	);

	const onSubmit: SubmitHandler<CareerFormSchema> = async (formValues) => {
		const formData = new FormData();

		formData.append("fullName", formValues.fullName);
		formData.append("emailAddress", formValues.emailAddress);
		formData.append(
			"employmentPositions",
			formValues.employmentPositions ?? "",
		);
		formData.append("phone", formValues.phone);
		formData.append("hasTransport", String(formValues.hasTransport));
		formData.append("isUsCitizen", String(formValues.isUsCitizen));
		formData.append("isAgeOk", String(formValues.isAgeOk));
		formData.append("hasLicense", String(formValues.hasLicense));
		formData.append("canCommunicate", String(formValues.canCommunicate));
		if (formValues.resume && formValues.resume.length > 0) {
			formData.append("resume", formValues.resume[0]);
		}

		console.dir(formData);

		try {
			await trigger(formData);
		} catch (e: any) {
			console.error(e);
		}
	};

	return (
		<div
			id="career-form"
			className="relative isolate bg-white px-6 py-24 lg:px-8"
		>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-moving-yellow)] sm:from-[var(--color-moving-gray)] to-[var(--color-white)/70] sm:to-[var(--color-moving-yellow) opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Submit Your Application
				</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Fill the form below, with completely legitimate and valid information
					only
				</p>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				aria-busy={isMutating}
				className="mx-auto mt-16 max-w-xl sm:mt-20 aria-busy:opacity-50"
			>
				<div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 gap-y-6">
					{/* <Field className="w-full">
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
					</Field> */}
					<Field className="col-span-2">
						<Label
							htmlFor="full-name"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Full Name
						</Label>
						<div className="mt-2.5 relative rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<UserIcon aria-hidden="true" className="size-5 fill-gray-400" />
							</div>
							<Input
								id="full-name"
								{...register("fullName")}
								type="text"
								autoComplete="name"
								placeholder="Full Name"
								className="block w-full rounded-md shadow-sm sm:text-sm sm:leading-6 border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none"
							/>
						</div>
						<FieldError errors={formState.errors} name="fullName" />
					</Field>

					<Field className="col-span-2">
						<Label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Email
						</Label>
						<div className="mt-2.5 relative rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<EnvelopeIcon
									aria-hidden="true"
									className="size-5 fill-gray-400"
								/>
							</div>
							<Input
								id="email"
								{...register("emailAddress")}
								type="email"
								autoComplete="email"
								placeholder="Email"
								className="block w-full rounded-md shadow-sm sm:text-sm sm:leading-6 border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none"
							/>
						</div>
						<FieldError errors={formState.errors} name="emailAddress" />
					</Field>

					<Field className="col-span-2">
						<Label
							htmlFor="tel-number"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Phone Number
						</Label>
						<div className="mt-2.5 relative rounded-md shadow-sm">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<PhoneIcon
									aria-hidden="true"
									className="size-5 fill-gray-400"
								/>
							</div>
							<Input
								id="tel-number"
								{...register("phone")}
								type="tel"
								autoComplete="tel"
								placeholder="Phone Number"
								className="block w-full rounded-md shadow-sm sm:text-sm sm:leading-6 border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none"
							/>
						</div>
						<FieldError errors={formState.errors} name="phone" />
					</Field>

					<Controller
						control={control}
						name="isUsCitizen"
						render={({ field }) => (
							<Field className="flex gap-x-4 col-span-2">
								<div className="flex h-6 items-center">
									<Switch
										checked={field.value}
										onChange={field.onChange}
										ref={field.ref}
										className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
									>
										<span
											aria-hidden="true"
											className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
										/>
									</Switch>
								</div>
								<Label className="text-sm leading-6 text-gray-600">
									Are you a U.S. citizen?
								</Label>
								<FieldError errors={formState.errors} name="isUsCitizen" />
							</Field>
						)}
					/>

					<Controller
						control={control}
						name="isAgeOk"
						render={({ field }) => (
							<Field className="flex gap-x-4 col-span-2">
								<div className="flex h-6 items-center">
									<Switch
										checked={field.value}
										onChange={field.onChange}
										ref={field.ref}
										className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
									>
										<span
											aria-hidden="true"
											className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
										/>
									</Switch>
								</div>
								<Label className="text-sm leading-6 text-gray-600">
									Are you 18 years of age or older?
								</Label>
								<FieldError errors={formState.errors} name="isAgeOk" />
							</Field>
						)}
					/>

					<Controller
						control={control}
						name="hasLicense"
						render={({ field }) => (
							<Field className="flex gap-x-4 col-span-2">
								<div className="flex h-6 items-center">
									<Switch
										checked={field.value}
										onChange={field.onChange}
										className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
									>
										<span
											aria-hidden="true"
											className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
										/>
									</Switch>
								</div>
								<Label className="text-sm leading-6 text-gray-600">
									Do You Have A Current Valid Driver's License?
								</Label>
								<FieldError errors={formState.errors} name="hasLicense" />
							</Field>
						)}
					/>

					<Controller
						control={control}
						name="hasTransport"
						render={({ field }) => (
							<Field className="flex gap-x-4 col-span-2">
								<div className="flex h-6 items-center">
									<Switch
										checked={field.value}
										onChange={field.onChange}
										ref={field.ref}
										className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
									>
										<span
											aria-hidden="true"
											className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
										/>
									</Switch>
								</div>
								<Label className="text-sm leading-6 text-gray-600">
									Do You Have Dependable Transportation?
								</Label>
								<FieldError errors={formState.errors} name="hasTransport" />
							</Field>
						)}
					/>

					<Controller
						control={control}
						name="canCommunicate"
						render={({ field }) => (
							<Field className="flex gap-x-4 col-span-2">
								<div className="flex h-6 items-center">
									<Switch
										checked={field.value}
										onChange={field.onChange}
										ref={field.ref}
										className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow data-[checked]:bg-moving-yellow"
									>
										<span
											aria-hidden="true"
											className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
										/>
									</Switch>
								</div>
								<Label className="text-sm leading-6 text-gray-600">
									Do you have the ability to communicate effectively in English?
								</Label>
								<FieldError errors={formState.errors} name="canCommunicate" />
							</Field>
						)}
					/>

					<Field className="col-span-2">
						<Label
							htmlFor="message"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							List your most recent employment positions with a list of tasks
							performed
						</Label>
						<div className="mt-2.5">
							<Textarea
								id="message"
								{...register("employmentPositions")}
								rows={2}
								aria-describedby="errors-employmentPositions"
								className="block field-sizing w-full rounded-md border-0 px-3.5 py-2 focus-visible:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
							<FieldError
								errors={formState.errors}
								name="employmentPositions"
							/>
						</div>
					</Field>

					<Field className="col-span-2">
						<Label
							htmlFor="resume"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Attach Resume (Optional)
						</Label>
						<div className="mt-2.5">
							<Input
								id="resume"
								{...register("resume")}
								type="file"
								className={cn(
									"block w-full rounded-md shadow-sm sm:text-sm sm:leading-6 border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow focus-visible:ring-moving-yellow focus-visible:ring-inset focus-visible:ring-2 focus-visible:outline-none",
									"file:mr-4 file:rounded-full file:border-0 file:bg-moving-yellow/80 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-moving-yellow/50",
								)}
							/>
						</div>
						<FieldError errors={formState.errors} name="resume" />
					</Field>
				</div>
				<div className="mt-10">
					<Button
						type="submit"
						disabled={isMutating}
						className="inline-flex items-center justify-center w-full rounded-md bg-moving-yellow/80 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-moving-yellow/100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow/80"
					>
						{isMutating && (
							<LoaderIcon className="animate-spin size-5" aria-hidden="true" />
						)}
						Submit Application
					</Button>
				</div>
			</form>
		</div>
	);
};

type FieldErrorProps = {
	errors: FieldErrors<CareerFormSchema>;
	name: FieldPath<CareerFormSchema>;
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
