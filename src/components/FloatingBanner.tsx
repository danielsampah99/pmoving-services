import { XMarkIcon } from '@heroicons/react/20/solid'

export const FloatingBanner = () => {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
			<div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
				<div className="text-sm leading-6 text-white">
					<a href="#">
						<strong className="font-semibold capitalize text-white hover:underline underline-offset-4">Request Free Quote</strong>

					</a>
					<svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
						<circle r={1} cx={1} cy={1} />
					</svg>
					<span>
						Call us on<a className='mx-2' href='tel: 651-757-5135'><strong>651-757-5135 </strong> &rarr;</a>
					</span>
				</div>
				<button type="button" className="-m-1.5 flex-none p-1.5">
					<span className="sr-only">Dismiss</span>
					<XMarkIcon aria-hidden="true" className="size-5 fill-gray-200 hover:text-white" />
				</button>
			</div>
		</div>
	)
}
