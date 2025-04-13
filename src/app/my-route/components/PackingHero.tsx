"use client"


import { Truck, Box, ShieldCheck, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

const PackingHero = () => {
    return (
        <section className="relative pt-16 pb-4 h-[50vh] md:h-[70vh] bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/new+truck+c-4-2-2880w.jpg"
                    alt="Professional packing service"
                    className="w-full h-full object-cover opacity-75 object-center"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/90 to-gray-900/50" /> */}
            </div>

            {/* Content Container */}
            <div className="relative container mx-auto h-full flex items-center px-4 lg:px-8">
                <div className="flex flex-wrap items-center w-full gap-y-8">
                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-2xl xs:text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 xs:mb-3 md:mb-6 drop-shadow-lg leading-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Professional Packing Services
                        </motion.h1>

                        <motion.p
                            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-xl mx-auto md:mx-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Secure packing solutions using premium materials and expert techniques
                        </motion.p>

                        <motion.div
                            className="flex justify-center md:justify-start gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <button className="bg-moving-orange hover:bg-background text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105">
                                <Link href=''>
                                    <ClipboardList className="mr-2 inline" size={20} />
                                    Get Free Estimate</Link>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="w-full md:w-1/3 lg:w-1/2 mt-6 md:mt-0 md:ml-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            <div className="flex items-center gap-2 sm:gap-4">
                                <Box className="text-moving-orange w-6 h-6 sm:w-8 sm:h-8" />
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold">10,000+</div>
                                    <div className="text-xs sm:text-sm">Items Packed</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="text-moving-orange" size={32} />
                                <div>
                                    <div className="text-3xl font-bold">100%</div>
                                    <div className="text-sm">Damage Free</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Truck className="text-moving-orange" size={32} />
                                <div>
                                    <div className="text-3xl font-bold">24/7</div>
                                    <div className="text-sm">Availability</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PackingHero;