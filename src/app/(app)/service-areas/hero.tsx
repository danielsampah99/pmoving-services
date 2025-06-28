export const Hero = () => {
	return (
		<div className="bg-white">
			<div className="relative isolate">
				<div
					aria-hidden="true"
					className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				>
					<div
						style={{
							clipPath:
								"polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
						}}
						className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[var(--color-moving-gray)/80] to-[var(--color-moving-gray)] opacity-30"
					/>
				</div>
				<div className="overflow-hidden">
					<div className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:pt-20 lg:px-8 lg:pt-16">
						<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
							<div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Moving Service Areas
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
									Discover our professional moving services across multiple
									locations. We provide reliable, efficient, and affordable
									moving solutions for residential and commercial clients. Our
									experienced team ensures safe, timely relocations with
									personalized care for all your belongings. Check our service
									areas to find out if we cover your location.
								</p>
							</div>
							<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
								<div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
									<div className="relative">
										<img
											alt="City of Somerset"
											src="/api/media/file/welcome-to-somerset.webp"
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
									<div className="relative">
										<img
											alt="Rochester Welcomes You"
											src="/api/media/file/rochester-minnesota-highway-entrance-welcome-sign-1.webp"
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											alt="City of Minneapolis"
											src="/api/media/file/Night%20Life-1.jpg"
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
								<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
									<div className="relative">
										<img
											alt="Saint Paul Movers"
											src="/api/media/file/saint%20paul%20sign.webp"
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div className="relative">
										<img
											alt="City of Faribault"
											src="/api/media/file/faribault.webp"
											className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										/>
										<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
