import Link from "next/link";
import { Button } from "@headlessui/react";
import { BanknotesIcon, PhoneIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
	return (
		<section className="relative bg-gray-900 text-white ">
			{/* Background Video */}
			<div className="absolute inset-0 z-0">
				<video
					autoPlay={true}
					loop={true}
					muted={true}
					className="w-full h-full object-cover"
				>
					<source src="https://aaamoversinc.com/wp-content/uploads/2024/01/aaa_movers_website_cover-Original-Web-.mp4" />
				</video>
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center py-16 px-6 md:px-12">
				<h1 className="text-2xl md:text-4xl font-bold">
					Relocating is Tough, <br />
					<span className="text-background text-6xl md:text-7xl">
						WE MAKE IT EASY!
					</span>
				</h1>

				{/* Buttons */}
				<div className="mt-6 flex flex-col md:flex-row gap-4">
					<Button
						type="button"
						className="border border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-moving-yellow transition"
					>
						EXPLORE OUR SERVICES
					</Button>

					<Link
						href="/free-quote"
						className="bg-background px-6 py-3 text-lg font-semibold hover:bg-background transition"
					>
						GET AN INSTANT QUOTE
					</Link>
				</div>

				<div className="inline-flex items-baseline whitespace-nowrap justify-start gap-x-1">
					<Link
						href="https://wisetack.us/#/hy6xcov/prequalify"
						target="_blank"
						className="group flex gap-x-1 text-semibold hover:underline items-center mt-4 text-lg"
					>
						<BanknotesIcon className="fill-background group-hover:fill-white group-hover:stroke-white size-6" />
						<span>Finance Your Move </span>
					</Link>
					<Link
						href="tel: 651-757-5135"
						className="group flex gap-x-1 hover:underline items-center mt-4 text-lg"
					>
						<PhoneIcon className="fill-background size-6 group-hover:fill-white group-hover:stroke-white" />
						<span>REQUEST A CALLBACK!</span>
					</Link>
				</div>

				{/* Quote Form */}
				<div className="mt-10 bg-white text-black p-6 rounded-xl w-full max-w-3xl shadow-lg">
					<h2 className="text-xl font-bold mb-4">Get Your Free Estimate Now</h2>

					<div className="flex flex-col md:flex-row items-center gap-4">
						{/* Moving From */}
						<div className="w-full relative">
							<label className="block font-semibold mb-1">
								Starting Location:
							</label>
							<input
								type="text"
								placeholder="Enter Zip Code"
								className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-background"
							/>
						</div>

						{/* Moving To */}
						<div className="w-full relative">
							<label className="block font-semibold mb-1">Destination:</label>
							<input
								type="text"
								placeholder="Enter ZIP Code"
								className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-background"
							/>
						</div>
					</div>

					<Link
						href="/free-quote"
						className="mt-5 block rounded-md shadow bg-background text-white px-6 py-3 w-full font-bold hover:bg-background-100 transition"
					>
						CONTINUE →
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
