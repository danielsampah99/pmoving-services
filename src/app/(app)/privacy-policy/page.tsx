import {
	AtSymbolIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	UserIcon,
} from "@heroicons/react/16/solid";
import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/20/solid";

const information = [
	{
		id: 1,
		name: "Name",
		icon: UserIcon,
	},
	{ id: 2, name: "Email Address", icon: AtSymbolIcon },
	{ id: 3, name: "Telephone Number", icon: DevicePhoneMobileIcon },
	{ id: 4, name: "Address", icon: HomeModernIcon },
];

export default function PrivacyPolicyPage() {
	return (
		<section className="mx-auto max-w-7xl bg-white px-6 py-16 lg:px-8 p-4 ">
			<div className="text-base leading-7 text-gray-700">
				<h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Privacy Policy
				</h1>
				<p className="text-base font-semibold leading-7 text-moving-yellow">
					Last Updated: April 1, 2025
				</p>
				<p className="mt-6 text-xl leading-8">
					Premium Moving (“us”, “we”, or “our”) operates the Premium Moving
					website (the “Service”). This page informs you of our policies
					regarding the collection, use and disclosure of Personal Information
					when you use our Service. We will not use or share your information
					with anyone except as described in this Privacy Policy. We use your
					Personal Information for providing and improving the Service. By using
					the Service, you agree to the collection and use of information in
					accordance with this policy. Unless otherwise defined in this Privacy
					Policy, terms used in this Privacy Policy have the same meanings as in{" "}
					<a
						href="/"
						target="_blank"
						className="inline font-semibold hover:underline underline-offset-2 "
					>
						{" "}
						our Terms and Conditions{" "}
					</a>
				</p>
				<div className="mt-10 max-w-7xl">
					<h2 className="mt-16 text-2xl/6 font-bold tracking-tight capitalize text-gray-900">
						Information Collection And Use
					</h2>
					<p>
						While using our Service, we may ask you to provide us with certain
						personally identifiable information that can be used to contact or
						identify you. Personally identifiable information (“Personal
						Information”) may include, but is not limited to
					</p>

					<ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600">
						<li className="flex gap-x-3">
							<UserIcon
								aria-hidden="true"
								className="mt-1 size-5 flex-none text-moving-yellow"
							/>
							<strong className="font-semibold text-gray-900">Name</strong>
						</li>
						<li className="flex gap-x-3">
							<AtSymbolIcon
								aria-hidden="true"
								className="mt-1 size-5 flex-none text-moving-yellow"
							/>
							<strong className="font-semibold text-gray-900">
								Email Address
							</strong>
						</li>
						<li className="flex gap-x-3">
							<DevicePhoneMobileIcon
								aria-hidden="true"
								className="mt-1 size-5 flex-none text-moving-yellow"
							/>
							<strong className="font-semibold text-gray-900">
								Telephone Number
							</strong>
						</li>
						<li className="flex gap-x-3">
							<HomeModernIcon
								aria-hidden="true"
								className="mt-1 size-5 flex-none text-moving-yellow"
							/>
							<strong className="font-semibold text-gray-900">Address</strong>
						</li>
					</ul>

					<h2 className="mt-8 text-2xl/6 font-bold tracking-tight capitalize text-gray-900">
						Log Data
					</h2>
					<p className="mt-4">
						We collect information that your browser sends whenever you visit
						our Service (“Log Data”). This Log Data may include information such
						as your computer’s Internet Protocol (“IP”) address, browser type,
						browser version, the pages of our Service that you visit, the time
						and date of your visit, the time spent on those pages and other
						statistics.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Cookies
					</h2>
					<p className="mt-4">
						Cookies are files with small amount of data, which may include an
						anonymous unique identifier. Cookies are sent to your browser from a
						web site and stored on your computer’s hard drive. We use “cookies”
						to collect information. You can instruct your browser to refuse all
						cookies or to indicate when a cookie is being sent. However, if you
						do not accept cookies, you may not be able to use some portions of
						our Service.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Service Providers
					</h2>
					<p className="mt-4">
						We may employ third party companies and individuals to facilitate
						our Service, to provide the Service on our behalf, to perform
						Service-related services or to assist us in analyzing how our
						Service is used. These third parties have access to your Personal
						Information only to perform these tasks on our behalf and are
						obligated not to disclose or use it for any other purpose.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Security
					</h2>
					<p className="mt-4">
						The security of your Personal Information is important to us, but
						remember that no method of transmission over the Internet, or method
						of electronic storage is 100% secure. While we strive to use
						commercially acceptable means to protect your Personal Information,
						we cannot guarantee its absolute security.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Links To Other Sites
					</h2>
					<p className="mt-4">
						Our Service may contain links to other sites that are not operated
						by us. If you click on a third party link, you will be directed to
						that third party’s site. We strongly advise you to review the
						Privacy Policy of every site you visit. We have no control over, and
						assume no responsibility for the content, privacy policies or
						practices of any third party sites or services.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Children’s Privacy
					</h2>
					<p className="mt-4">
						Our Service does not address anyone under the age of 18
						(“Children”). We do not knowingly collect personally identifiable
						information from children under 18. If you are a parent or guardian
						and you are aware that your child has provided us with Personal
						Information, please contact us. If we discover that a child under 18
						has provided us with Personal Information, we will delete such
						information from our servers immediately.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Compliance With Laws
					</h2>
					<p className="mt-4">
						We will disclose your Personal Information where required to do so
						by law or subpoena.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Changes To This Privacy Policy
					</h2>
					<p className="mt-4">
						We may update our Privacy Policy from time to time. We will notify
						you of any changes by posting the new Privacy Policy on this page.
						You are advised to review this Privacy Policy periodically for any
						changes. Changes to this Privacy Policy are effective when they are
						posted on this page.
					</p>

					<figure className="mt-10 border-l border-moving-yellow pl-9">
						<blockquote className="font-semibold text-gray-700">
							<p>
								The privacy policy's sharing section must explicitly states:{" "}
								<strong>
									SMS opt-in and phone numbers collected for SMS communication
									purposes will not be shared with any third party and
									affiliates for marketing purposes"
								</strong>
							</p>
						</blockquote>
					</figure>
				</div>
			</div>
		</section>
	);
}
