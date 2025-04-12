import Image from 'next/image'
import Link from 'next/link'


export default function ThankYouPage() {
	return (
		<main className='p-6 lg:px-8 mx-auto min-h-[calc(100dvh-92px+var(--spacing)*6)] relative border border-solid border-red-500 bg-moving-gray'>
			<section className='max-w-7xl '>
				<div className='absolute top-10 -left-8 sm:-top-30 md:-top-64 sm:left-4'>
					<Image
						src="/thank-you-truck.webp"
						alt='Our Moving Truck'
						width={1000}
						height={1000}
					/>
				</div>

				<div className='absolute bottom-30 sm:bottom-10 lg:bottom-0 transition-all delay-150  lg:gap-y-3 sm:top-1/3 sm:right-10 flex flex-col items-center justify-center sm:gap-y-1.5 lg:max-w-1/3'>
					<h5 className='text-white font-semibold lg:whitespace-nowrap text-3xl lg:text-4xl'>Thank you for <span className='text-moving-yellow capitalize font-semibold'>Contacting Us</span></h5>
					<p className='text-gray-200 font-medium'>One of our moving consultants will contact regarding your move quote.</p>
					<Link href='/' className='bg-moving-yellow/80 hover:bg-moving-yellow font-semibold lg:text-lg shadow-md px-4 py-2 lg:py-3 lg:px-6 text-base text-gray-900 rounded-lg hover:shadow-lg hover:font-bold'>Back to home page</Link>
				</div>
			</section>
		</main>
	)
}


// https://www.pmovingservices.com/photo-gallery#&gid=1975769568&pid=5
