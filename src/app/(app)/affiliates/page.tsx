import { nextHomeAffiliate } from "@/data/affiliates";
import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Affiliate Program | Partner with Premium Moving Services",
	description:
		"Join our affiliate program at Premium Moving Services. Partner with us and earn commissions through referrals and collaborations.",
	keywords:
		"moving affiliates, moving company partnership, P Moving Services affiliate program, moving referral program, moving company collaborations",
	openGraph: {
		type: "website",
		title: "Affiliate Program | Partner with Premium Moving Services",
		description:
			"Join our affiliate program at Premium Moving Services. Partner with us and earn commissions through referrals and collaborations.",
		url: BASE_URL,
		images: [
			{
				url: `${BASE_URL}/logo.svg`,
				width: 1200,
				height: 630,
				alt: "Premium Moving Services Career Opportunities",
			},
			{
				url: `${BASE_URL}/next-home-logo.webp`,
				width: 1200,
				height: 630,
				alt: "Premium Moving Services Affiliate | Next Homes",
			},
		],
	},
	robots: {
		follow: true,
		index: true,
	},
	alternates: {
		canonical: `${BASE_URL}/affiliates`,
	},
};

export default function AffiliatesPage() {
	return (
		<section className="isolate overflow-hidden max-sm:bg-moving-gray bg-white px-6 lg:px-8">
			<div className="relative mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-4xl">
				<div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.moving.gray),white)] opacity-20 lg:left-36" />
				<div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl max-sm:shadow-moving-gray/60 shadow-moving-yellow/10 ring-1 ring-moving-yellow/50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
				<h2 className="text-2xl font-black my-4 text-center uppercase leading-10 text-gray-900">
					Affiliates
				</h2>
				<figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
					<div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
						<blockquote className="text-xl font-semibold leading-8 space-y-4 text-gray-900 sm:text-2xl sm:leading-9">
							{nextHomeAffiliate.check.map((check) => (
								<div
									className="text-sm flex text-gray-700 items-center justify-start gap-x-1"
									key={check.id}
								>
									<span className="inline">
										<CheckIcon
											className="size-5 stroke-2 fill-moving-yellow"
											aria-hidden="true"
										/>
									</span>
									{check.text}
								</div>
							))}
						</blockquote>
					</div>
					<div className="max-sm:row-start-1 col-end-1 w-full sm:w-60 lg:row-span-4 lg:w-72">
						<Image
							alt="Next home logo"
							src="/next-home-logo.webp"
							width={2000}
							height={1000}
							className="rounded-xl bg-moving-yellow/50 lg:bg-moving-gray/20 lg:rounded-3xl"
						/>
					</div>
				</figure>
			</div>
		</section>
	);
}
