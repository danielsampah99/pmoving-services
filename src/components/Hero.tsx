import Link from "next/link";
import {
	BanknotesIcon,
	QuestionMarkCircleIcon,
	RssIcon,
	StarIcon,
} from "@heroicons/react/24/solid";
import { HeroVideo } from "./HeroVideo";
import { QuoteForm } from "./HeroQuoteForm";

const HeroSection = () => {
	return (
		<section className="relative bg-gray-900 text-white overflow-hidden">
			{/* Background Video */}
			<HeroVideo />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center text-center py-16 px-6 md:px-12">
				<h1 className="text-lg font-bold">
					Allow us to take hassle out of your move <br />
					<span className="text-background text-6xl md:text-7xl">
						HOW CAN WE HELP YOU MOVE?
					</span>
				</h1>

				{/* Buttons */}
				<div className="mt-6 flex items-center justify-center flex-wrap whitespace-nowrap flex-col md:flex-row gap-4">
					<Link
						href="https://wisetack.us/#/hy6xcov/prequalify"
						target="_blank"
						className="group max-md:w-full bg-background inline-flex items-center justify-center gap-x-1 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-background transition"
						// className="inline-flex max-sm:w-full items-center justify-center gap-x-1 border border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-moving-yellow transition"
					>
						<BanknotesIcon className="fill-white w-full group-hover:fill-background group-hover:stroke-background size-6" />
						<span>Finance Move</span>
					</Link>

					<Link
						href="/free-quote"
						className="group max-md:w-full bg-background inline-flex items-center justify-center gap-x-1 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-background transition"
					>
						<StarIcon className="fill-white w-full group-hover:fill-background group-hover:stroke-background size-6" />
						<span>Get A Move Quote</span>
					</Link>

					<Link
						href="/blog"
						className="inline-flex max-sm:w-full items-center justify-center gap-x-1 border border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-moving-yellow transition"
						// className="group max-md:w-full bg-background inline-flex items-center justify-center gap-x-1 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-background transition"
					>
						<RssIcon className="fill-background group-hover:fill-white group-hover:stroke-white size-6" />
						Moving Blogs
					</Link>

					<Link
						href="/#faqs"
						className="inline-flex max-sm:w-full items-center justify-center gap-x-1 border border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-moving-yellow transition"
						// className="group bg-background inline-flex max-md:w-full items-center justify-center gap-x-1 px-6 py-3 text-lg font-semibold hover:bg-white hover:text-background transition"
					>
						<QuestionMarkCircleIcon className="fill-background group-hover:fill-white group-hover:stroke-white size-6" />
						FAQs
					</Link>
				</div>

				{/* Quote Form */}
				<QuoteForm />
			</div>
		</section>
	);
};

export default HeroSection;
