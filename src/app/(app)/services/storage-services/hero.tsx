export const storageStats: Array<{ id: string; label: string; value: string }> =
	[
		{
			id: "1",
			label: "Storage solutions for moves, renovations, down-sizing, space-recovery & more",
			value: "All use cases",
		},
		{ id: "2", label: "Managed start to finish", value: "100%" },
		{
			id: "3",
			label: "Handled by trained storage experts",
			value: "Every time",
		},
	];

export const StorageServicesHero = () => {
	return (
		<section className="mx-auto mt-12 max-w-7xl px-6 sm:mt-6 lg:px-8 xl:mt-8">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					Storage Solutions
				</h2>
				<div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
					<div className="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p className="text-xl/8 text-gray-600">
							At Premium Moving & Storage, we believe storage
							should be simple, secure, and professionally
							managed, never stressful or uncertain. Our service
							is built for people in transition: homeowners
							renovating, families downsizing, professionals
							relocating, and residents who need space without
							sacrificing convenience.
						</p>
						<p className="mt-10 max-w-xl text-base/7 text-gray-700">
							Organized storage solutions can significantly
							improve your daily life and overall well-being by
							reducing clutter and making your environment more
							functional and enjoyable. Unlike traditional
							self-storage, our approach removes the burden from
							you. We manage pickup, protection, inventory,
							storage, and retrieval with trained crews and
							climate-controlled facilities with organization
							solutions. Your belongings are treated with the same
							care and accountability as a full-service move,
							because that’s exactly what this is.
						</p>
					</div>
					<div className="lg:flex lg:flex-auto lg:justify-center">
						<dl className="w-64 space-y-8 xl:w-80">
							{storageStats.map((stat) => (
								<div
									key={stat.id}
									className="flex flex-col-reverse gap-y-4"
								>
									<dt className="text-base/7 text-gray-600">
										{stat.label}
									</dt>
									<dd className="text-5xl font-semibold tracking-tight text-gray-900">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	);
};
