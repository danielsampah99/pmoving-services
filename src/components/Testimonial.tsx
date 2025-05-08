"use client";

import { Button } from "@headlessui/react";
import React from "react";

const Testimonial = () => {
	return (
		<div className="text-center py-10 bg-background">
			<h5 className="text-white">Testimonials</h5>
			<h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
				Read What Others Have To Say
			</h1>

			<div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-8 group">
				<div className="bg-white/45 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
					<img className="h-20 mx-auto" src="/ff.png" alt="" />
					<h4 className="uppercase text-xl font-bold">John Doe</h4>
					<p className="text-sm leading-7 my-3 font-light opacity-50 text-header">
						Movers Services made my relocation stress-free! The team was
						professional, punctual, and handled my belongings with great care.
					</p>
					<button
						type="button"
						className="bg-header py-2.5 px-8 rounded-full text-white"
					>
						Get in touch
					</button>
				</div>

				<div className="bg-white/45 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
					<img className="h-20 mx-auto" src="/ff.png" alt="" />
					<h4 className="uppercase text-xl font-bold">John Smith</h4>
					<p className="text-sm leading-7 my-3 font-light opacity-50 text-header">
						Excellent service! The movers were friendly and efficient, and
						everything arrived in perfect condition.
					</p>
					<button
						type="button"
						className="bg-header py-2.5 px-8 rounded-full text-white"
					>
						Get in touch
					</button>
				</div>

				<div className="bg-white/45 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
					<img className="h-20 mx-auto" src="/ff.png" alt="" />
					<h4 className="uppercase text-xl font-bold">Jane Smith</h4>
					<p className="text-sm leading-7 my-3 font-light opacity-50 text-header">
						Highly professional and reliable! The team handled my long-distance
						move smoothly, and their attention to detail was impressive
					</p>
					<Button
						type="button"
						className="bg-header py-2.5 px-8 rounded-full text-white"
					>
						Get in touch
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
