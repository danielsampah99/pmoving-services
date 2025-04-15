import { jobRequirements } from "@/data/job-requirements";


export const Info = () => {
	return (
		<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div className="relative isolate overflow-hidden bg-moving-gray sm:bg-inherit px-6 py-10 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-12 xl:px-12">
				<div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
					<div className="lg:row-start-2 lg:max-w-md">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-gray-950 sm:text-4xl">
							Moving Jobs, Minnesota
							<br />
							<span className="text-lg sm:text-2xl font-semibold tracking-normal text-gray-300 sm:text-gray-700">
								Start your career as part of the Premium Moving Services Company
								today!!
							</span>
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300 sm:text-gray-500">
							Our moving company is hiring candidates like you! If you are
							interested in joining the{" "}
							<a
								href="/"
								className="hover:text-white hover:underline text-moving-yellow"
							>
								Premium Moving Services{" "}
							</a>{" "}
							moving{" "}
							<a
								href="/team"
								className="hover:text-white hover:underline text-moving-yellow"
							>
								team{" "}
							</a>
							, please let us know by filling out the application form on this
							page!
						</p>
					</div>
					<img
						alt="Moving Jobs Minnesota - Dashun & Drake"
						src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+and+Drake+c-1920w.jpg"
						width={2432}
						height={1442}
						className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
					/>
					<div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-gray-300 lg:pt-10">
						<dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
							{jobRequirements.map((job) => (
								<div key={job.name} className="relative">
									<dt className="ml-9 inline-block font-semibold text-white sm:text-gray-900">
										<job.icon
											aria-hidden="true"
											className="absolute fill-moving-yellow left-1 top-1 size-5"
										/>
										{job.name}
									</dt>{" "}
									<dd className="inline sm:text-gray-500">{job.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[var(--color-moving-yellow)] sm:from-[var(--color-moving-gray)] to-[var(--color-white)/70] sm:to-[var(--color-moving-yellow)] opacity-25"
					/>
				</div>
			</div>
		</div>
	);
};
