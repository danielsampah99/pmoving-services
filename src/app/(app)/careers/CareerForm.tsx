'use client'

import { useState } from 'react'
import { Field, Label, Switch, Input, Button, Textarea } from '@headlessui/react'

export const CareerForm = () => {

	const [isUsCitizen, setIsUsCitizen] = useState(false)
	const [isAgeOk, setIsAgeOk] = useState(false)
	const [hasLicense, setHasLicense] = useState(false)
	const [hasTransport, setHasTransport] = useState(false)
	const [canCommunicate, setCanCommunicate] = useState(false)



	return (
		<div id='career-form' className="relative isolate bg-white px-6 py-24 lg:px-8">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-moving-yellow)] sm:from-[var(--color-moving-gray)] to-[var(--color-white)/70] sm:to-[var(--color-moving-yellow) opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Submit Your Application</h2>
				<p className="mt-2 text-lg leading-8 text-gray-600">
					Fill the form below, with completely legitimate and valid information only
				</p>
			</div>
			<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
				<div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 gap-y-6">
					<Field className='col-span-2'>
						<Label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">
							Full Name
						</Label>
						<div className="mt-2.5">
							<Input
								id="full-name"
								name="full-name"
								type="text"
								autoComplete="given-name"
								placeholder='John Doe'
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-moving-yellow ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
							/>
						</div>
					</Field>

					<Field className='col-span-2'>
						<Label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
							Email
						</Label>
						<div className="mt-2.5">
							<Input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								placeholder='johndoe@email.com'
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
							/>
						</div>
					</Field>

					<Field className="col-span-2">
						<Label htmlFor="tel-number" className="block text-sm font-semibold leading-6 text-gray-900">
							Phone Number
						</Label>
						<div className="mt-2.5">
							<Input
								id="tel-number"
								name="tel-number"
								type="tel"
								autoComplete="home tel-local"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
							/>
						</div>
					</Field>

					<Field className="flex gap-x-4 col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={isUsCitizen}
								onChange={setIsUsCitizen}
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
					</Field>

					<Field className="flex gap-x-4 col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={isAgeOk}
								onChange={setIsAgeOk}
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
					</Field>

					<Field className="flex gap-x-4 col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={hasLicense}
								onChange={setHasLicense}
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
					</Field>

					<Field className="flex gap-x-4 col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={hasTransport}
								onChange={setHasTransport}
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
					</Field>

					<Field className="flex gap-x-4 col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={canCommunicate}
								onChange={setCanCommunicate}
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
					</Field>


					<Field className="col-span-2">
						<Label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
							List your most recent employment positions with a list of tasks performed
						</Label>
						<div className="mt-2.5">
							<Textarea
								id="message"
								name="message"
								rows={2}
								className="block field-sizing w-full rounded-md border-0 px-3.5 py-2 focus-visible:outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:text-sm sm:leading-6"
								defaultValue={''}
							/>
						</div>
					</Field>



				</div>
				<div className="mt-10">
					<Button
						type="submit"
						className="block w-full rounded-md bg-moving-yellow/80 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-moving-yellow/100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-moving-yellow/80"
					>
						Talk to us
					</Button>
				</div>
			</form>
		</div>
	)
}
