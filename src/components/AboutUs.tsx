import { FC } from "react"

export const AboutUs: FC = () => {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-4xl">
					<p className="text-base font-semibold leading-7 text-indigo-600">About us</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						On a mission to simplify the moving process
					</h1>
					<p className="mt-6 text-balance text-xl leading-8 text-gray-700">
						Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
						aliquam. Quisque id at vitae feugiat egestas.
					</p>
				</div>
				<section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Our mission</h2>
						<p className="mt-6 text-base/7 text-gray-600">
							Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
							vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
							erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
							sed amet vitae sed turpis id.
						</p>
						<p className="mt-8 text-base/7 text-gray-600">
							Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
							fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
							adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
						</p>
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<img
									alt=""
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshunanddrakec-1152w.jpg"
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<img
									alt=""
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Target+chairs+assemblyc-1920w.JPG"
									className="block size-full object-cover"
								/>
							</div>
							<div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
								<img
									alt=""
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/_MG_3094c-1920w.jpg"
									className="block size-full object-cover"
								/>
							</div>
							<div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
								<img
									alt=""
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Truck+loadc-1920w.jpg"
									className="block size-full object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="max-lg:mt-16 lg:col-span-1">
						<p className="text-base font-semibold leading-7 text-gray-500">The numbers</p>
						<hr className="mt-6 border-t border-gray-200" />
						<dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-gray-600">Years in business</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<span>15</span>+
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-gray-600">Customer Satisfaction</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<span>99</span>%
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
								<dt className="text-sm/6 text-gray-600">Trained Expert Movers</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<span>500</span>+
								</dd>
							</div>
							<div className="flex flex-col gap-y-2">
								<dt className="text-sm/6 text-gray-600">Successful Moves</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<span>10,000</span>+
								</dd>
							</div>
						</dl>
					</div>
				</section>
			</div>
		</div>
	)
}
