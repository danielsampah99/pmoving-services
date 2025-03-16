import React from 'react'
import { ArrowRight, Truck, Clock, Award, Star } from 'lucide-react';
import Gallery from './MainGallery';

const GalleryComponent = () => {
	return (
		<div>
			<section className="relative bg-gradient-to-r to-[#d0dfec] from-[#f5d65e] overflow-hidden">
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
								Moving Made <span className="text-moving-accent">Simple</span>
							</h1>
							<p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-slide-in">
								Professional moving services with exceptional care and precision. We handle your belongings as if they were our own.
							</p>
							<div className="flex flex-wrap gap-4">
								<a
									href="#quote"
									className="px-6 py-3 rounded-lg bg-white text-[#1E88E5] font-semibold text-lg hover:bg-[#FFD00D] hover:text-white transition-all duration-300 shadow-md"
								>
									Get a Free Quote
								</a>
								<a
									href="#services"
									className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-[#1E88E5] transition-all duration-300 shadow-md"
								>
									Our Services <ArrowRight size={20} />
								</a>
							</div>


							<div className="mt-12 flex flex-wrap gap-4 md:gap-8">
								<div className="flex items-center gap-2">
									<Star className="text-yellow-300" size={20} />
									<span className="text-white font-medium">4.9/5 Rating</span>
								</div>
								<div className="flex items-center gap-2">
									<Award className="text-yellow-300" size={20} />
									<span className="text-white font-medium">Licensed & Insured</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="text-yellow-300" size={20} />
									<span className="text-white font-medium">On-Time Service</span>
								</div>
							</div>
						</div>

						<div className="lg:w-1/2 relative animate-zoom-in">
							<div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl">
								<h3 className="text-2xl font-semibold text-[#333F48] mb-6">Quick Quote Calculator</h3>
								<form className="space-y-4">
									<div>
										<label className="block text-[#333F48] mb-2">Moving From</label>
										<input type="text" placeholder="Enter your current address" className="w-full px-4 py-3 rounded-md border border-[#E6E9EF] focus:outline-none focus:ring-2 focus:ring-bg-from-background-100" />
									</div>
									<div>
										<label className="block text-[#333F48] mb-2">Moving To</label>
										<input type="text" placeholder="Enter your destination address" className="w-full px-4 py-3 rounded-md border border-[#E6E9EF] focus:outline-none focus:ring-2 focus:ring-bg-from-background-100" />
									</div>
									<div>
										<label className="block text-[#333F48] mb-2">Moving Date</label>
										<input type="date" className="w-full px-4 py-3 rounded-md border border-[#E6E9EF] focus:outline-none focus:ring-2 focus:ring-bg-from-background-100" />
									</div>
									<div>
										<label className="block text-[#333F48] mb-2">Property Size</label>
										<select className="w-full px-4 py-3 rounded-md border border-[#E6E9EF] focus:outline-none focus:ring-2 focus:ring-bg-from-[#333F48]">
											<option>Studio</option>
											<option>1 Bedroom</option>
											<option>2 Bedrooms</option>
											<option>3+ Bedrooms</option>
											<option>Commercial</option>
										</select>
									</div>
									<button
										type="submit"
										className="w-full py-3 cursor-pointer px-6 flex items-center justify-center gap-2 text-white font-semibold
             bg-[#FFD00D] hover:bg-[#E6B800] transition-all duration-300 rounded-lg shadow-md
             hover:shadow-lg active:scale-95"
									>
										<Truck size={20} className="text-[#595959]" />
										Get Your Free Quote
									</button>

								</form>
							</div>

							<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E6B800] rounded-full z-0 animate-pulse"></div>
							<div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FFD00D] rounded-full z-0 animate-bounce"></div>

						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 right-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>
			</section>

			<main className='mx-6'>
				<Gallery />
			</main>



		</div>
	)
}

export default GalleryComponent
