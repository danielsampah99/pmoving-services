import {
	AtSymbolIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	UserIcon,
} from "@heroicons/react/16/solid";

export default function TermsAndConditionsPage() {
	return (
		<section className="mx-auto max-w-7xl bg-white px-6 py-16 lg:px-8 p-4 ">
			<div className="text-base leading-7 text-gray-700">
				<h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Terms And Conditions
				</h1>
				<p className="text-base font-semibold leading-7 text-moving-yellow">
					Last Updated: April 1, 2025
				</p>
				<p className="mt-6 text-xl leading-8">
					Please read these Terms of Use (“Terms”, “Terms of Use”) carefully
					before using the{" "}
					<a
						href="/"
						className="inline hover:underline font-medium visited:text-yellow-400"
					>
						website (the “Service”)
					</a>
					website (the “Service”) operated by Premium Moving (“us”, “we”, or
					“our”). Your access to and use of the Service is conditioned on your
					acceptance of and compliance with these Terms. These Terms apply to
					all visitors, users and others who access or use the Service. By
					accessing or using the Service you agree to be bound by these Terms.
					If you disagree with any part of the terms then you may not access the
					Service.
				</p>
				<div className="mt-10 max-w-7xl">
					<h2 className="mt-16 text-2xl/6 font-bold tracking-tight capitalize text-gray-900">
						Intellectual Property
					</h2>
					<p>
						The Service and its original content, features and functionality are
						and will remain the exclusive property of Premium Moving and its
						licensors.
					</p>

					<h2 className="mt-8 text-2xl/6 font-bold tracking-tight capitalize text-gray-900">
						Links To Other Web Sites
					</h2>
					<p className="mt-4">
						Our Service may contain links to third-party web sites or services
						that are not owned or controlled by Premium Moving. Premium Moving
						has no control over, and assumes no responsibility for, the content,
						privacy policies, or practices of any third party web sites or
						services. You further acknowledge and agree that Premium Moving
						shall not be responsible or liable, directly or indirectly, for any
						damage or loss caused or alleged to be caused by or in connection
						with use of or reliance on any such content, goods or services
						available on or through any such web sites or services. We strongly
						advise you to read the terms and conditions and privacy policies of
						any third-party web sites or services that you visit.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Termination
					</h2>
					<p className="mt-4">
						We may terminate or suspend access to our Service immediately,
						without prior notice or liability, for any reason whatsoever,
						including without limitation if you breach the Terms. All provisions
						of the Terms which by their nature should survive termination shall
						survive termination, including, without limitation, ownership
						provisions, warranty disclaimers, indemnity and limitations of
						liability
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Disclaimer
					</h2>
					<p className="mt-4">
						Your use of the Service is at your sole risk. The Service is
						provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
						provided without warranties of any kind, whether express or implied,
						including, but not limited to, implied warranties of
						merchantability, fitness for a particular purpose, non-infringement
						or course of performance.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Governing Law
					</h2>
					<p className="mt-4">
						These Terms shall be governed and construed in accordance with the
						laws of United States without regard to its conflict of law
						provisions. Our failure to enforce any right or provision of these
						Terms will not be considered a waiver of those rights. If any
						provision of these Terms is held to be invalid or unenforceable by a
						court, the remaining provisions of these Terms will remain in
						effect. These Terms constitute the entire agreement between us
						regarding our Service, and supersede and replace any prior
						agreements we might have between us regarding the Service.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Changes
					</h2>
					<p className="mt-4">
						We reserve the right, at our sole discretion, to modify or replace
						these Terms at any time. If a revision is material we will try to
						provide at least 30 days notice prior to any new terms taking
						effect. What constitutes a material change will be determined at our
						sole discretion. By continuing to access or use our Service after
						those revisions become effective, you agree to be bound by the
						revised terms. If you do not agree to the new terms, please stop
						using the Service.
					</p>

					<h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
						Contact Us
					</h2>
					<p className="mt-4">
						If you have any questions about these Terms, please contact us.
					</p>

					<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-800">
						SMS Terms & Conditions
					</h3>
					<p className="mt-3">
						The Terms of Service related to SMS communication must either be
						included in the privacy policy or be a stand-alone document.
						<strong>
							Note: If you have a Terms and Conditions page, this information
							should be included there, and not in the privacy policy. The
							document must include the following SMS Terms & Conditions
						</strong>
					</p>

					<figure className="mt-10 border-l lg:border-l-2 lg:pr-2 border-moving-yellow pl-9">
						<blockquote className="">
							<ol className="space-y-4 list-decimal list-outside">
								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										SMS Consent Communication
									</h4>
									<p className="font-medium text-sm mt-2">
										The information (Phone Numbers) obtained as part of the SMS
										consent process will not be shared with third parties for
										marketing purposes.
									</p>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Types of SMS Communications
									</h4>
									<div className="font-medium text-sm mt-2">
										<div className='space-y-2'>
											If you have consented to receive text messages from
											Premium Moving Services, you may receive messages related
											to the following:
											<span className="underline list-disc ml-2 block my-2">
												Conversational External
											</span>
											<span className="block ml-2 font-semibold mt-4">
												Example{" "}
												<span className="italic font-medium">
													{" "}
													"Hello, this is a response to your request for a move
													quote from Premium Moving Services, one of our moving
													consultants will be in touch. Reply STOP to opt out of
													SMS messaging at any time."
												</span>
											</span>
										</div>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Message Frequency
									</h4>
									<div className="font-medium text-sm mt-2">
										<p>
											Message frequency may vary depending on the type of
											communication. For example, you may receive up to{" "}
											<strong>[2] SMS messages per week</strong> related to your{" "}
											<strong>moving quote/appointment</strong>.
											<span className="block font-semibold mt-2">
												Example{" "}
												<span className="italic font-medium">
													{" "}
													"Message frequency may vary. You may receive up to 2
													SMS messages per week regarding your moving quote or
													appointment."
												</span>
											</span>
										</p>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Potential Fees for SMS Messaging
									</h4>
									<div className="font-medium text-sm mt-2">
										<p>
											Please note that standard message and data rates may apply, depending on your carrier’s pricing plan.
											These fees may vary if the message is sent domestically or internationally.
										</p>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Opt-In Method
									</h4>
									<div className="font-medium text-sm mt-2">
										<p>
											You may opt-in to receive SMS messages from <strong>Premium Moving Services</strong> in the following ways:
										</p>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Opt-Out Method
									</h4>
									<div className="font-medium text-sm mt-2">
										<p>
											You can opt out of receiving SMS messages at any time. To do so, simply reply <strong>"STOP"</strong>  to any SMS message you receive.
											Alternatively, you can contact us directly to request removal from our messaging list
										</p>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Help
									</h4>
									<div className="font-medium text-sm mt-2 space-y-2">
										<p>
											If you are experiencing any issues, you can reply with the keyword HELP.
											Or, you can get help directly from us <a href="/#socials">this website</a>
										</p>

										<p className='font-semibold text-sm underline'>Additional Options</p>
										<ul className="list-disc list-outside ml-3">
											<li>If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms</li>
										</ul>
									</div>
								</li>

								<li className="spacey-y-2">
									<h4 className="font-semibold tracking-normal text-gray-700 text-base mt-2">
										Standard Messaging Disclosures
									</h4>
									<div className="font-medium text-sm mt-2 list-disc list-outside">
										<span>Message and data rates may apply</span>
										<span>You can opt-out at any time by texting <strong>"STOP"</strong>.</span>
										<span>For assistance, text <strong>HELP</strong> or visit our <a href="/privacy-plicy">Privacy Policy</a> and <a href="/terms-and-conditions">Terms and Conditions</a>pages</span>
										<span>Message frequency may vary</span>
									</div>
								</li>
							</ol>
						</blockquote>
					</figure>
				</div>
			</div>
		</section>
	);
}
