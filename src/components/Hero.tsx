import { PhoneCall } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative bg-gray-900 text-white mt-5">
            {/* Background Video or Image */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src="https://aaamoversinc.com/wp-content/uploads/2024/01/aaa_movers_website_cover-Original-Web-.mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 md:px-12">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Relocating is Tough, <br />
                    <span className="text-background text-6xl md:text-7xl">WE MAKE IT EASY!</span>
                </h1>

                {/* Buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button className="border border-white px-6 py-3 text-lg font-semibold hover:bg-white hover:text-black transition">
                        EXPLORE OUR SERVICES
                    </button>
                    <button className="bg-background px-6 py-3 text-lg font-semibold hover:bg-background transition">
                        GET AN INSTANT QUOTE
                    </button>
                </div>

                <p className="flex items-center mt-4 text-lg">
                    <PhoneCall size={24} className="text-background" />
                    OR REQUEST A CALLBACK!
                </p>

                {/* Quote Form */}
                <div className="mt-10 bg-white text-black p-6 rounded-xl w-full max-w-3xl shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Get Your Free Estimate Now</h2>

                    <div className="flex flex-col md:flex-row items-center gap-4">
                        {/* Moving From */}
                        <div className="w-full relative">
                            <label className="block font-semibold mb-1">Starting Location:</label>
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

                    <button className="mt-4 bg-background text-white px-6 py-3 w-full font-bold hover:bg-background-100 transition">
                        CONTINUE →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
