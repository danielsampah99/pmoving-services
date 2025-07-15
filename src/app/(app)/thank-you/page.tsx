import { OurLocations } from "@/components/OurLocations";

export default async function ThankYouPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
	const fromMailing = (await searchParams).from as "mailing-list";

	return (
		<main className="p-6 isolate lg:px-8 mx-auto relative bg-moving-gray">
			{/* min-h-[calc(100dvh-92px+var(--spacing)*6)] */}
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
					<img
						alt="our moving trucks"
						src="/api/media/file/logistics-services.webp"
						className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
					/>
					<div className="w-full flex-auto">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl capitalize">
							{fromMailing === "mailing-list"
								? "Thank you for joining our mailing list"
								: "Thank you for contacting us"}
						</h2>
						{fromMailing === "mailing-list" ? (
							<p className="mt-6 text-lg leading-8 text-gray-300">
								You're all set! Get ready for exclusive moving tips, special
								discounts, and the latest news delivered right to you. We're
								happy to have you with us.
							</p>
						) : (
							<p className="mt-6 text-lg leading-8 text-gray-300">
								One of our moving consultants will contact you regarding your
								move quote. If you would like to get a hold of us sooner, please
								call us directly on{" "}
								<a
									href="tel:6517575135"
									className="text-moving-yellow/70 hover:text-moving-yellow hover:underline underline-offset-2"
								>
									(651) 757-5135
								</a>
							</p>
						)}

						<div className="mt-10 flex">
							<a
								href={fromMailing === "mailing-list" ? "/blogs" : "/#reviews"}
								className="group text-base font-semibold leading-6 text-moving-yellow/75"
							>
								{fromMailing === "mailing-list"
									? "Check out our blog posts"
									: "Check our our reviews "}
								<span
									className="group-hover:translate-x-4 group-hover:ease-linear group-hover:scale-150 group-hover:text-moving-yellow transition-all delay-100 duration-300"
									aria-hidden="true"
								>
									&rarr;
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
					}}
					className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[var(--color-moving-yellow)/50] to-[var(--color-moving-yellow)] opacity-25"
				/>
			</div>

			<OurLocations />
		</main>
	);
}
