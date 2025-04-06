'use client'

import React from 'react'
import BusinessHours from './contact/BusinessHours'
import ContactDetails from './contact/ContactDetails'
import FloatingCallButton from './contact/FloatingCallButton'
import PrimaryQuoteForm from './contact/PrimaryQuoteForm'
import QuickQuoteForm from './contact/QuickQuoteForm'
import { useIsMobile } from '@/app/hooks/use-mobile'
import { motion } from 'framer-motion'


const ContactComponent = () => {
    const isMobile = useIsMobile();
    return (

        <div className="min-h-screen bg-moving-light-gray">
            <div className="bg-background py-16">
                <motion.div
                    className="max-w-6xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-200 text-center mt-4 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Get in touch with our moving experts for a seamless relocation experience
                    </motion.p>
                </motion.div>
            </div>

            <main className="max-w-5xl mx-auto px-4 pb-12">
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    {/* For mobile: Show forms stacked */}
                    {isMobile ? (
                        <>
                            <div className="w-full">
                                <PrimaryQuoteForm />
                            </div>
                            <div className="w-full mt-6">
                                <QuickQuoteForm />
                            </div>
                        </>
                    ) : (
                        <>
                            {/* For desktop: Show forms side by side with right one larger */}
                            <div className="w-full lg:w-2/5">
                                <QuickQuoteForm />
                            </div>
                            <div className="w-full lg:w-3/5">
                                <PrimaryQuoteForm />
                            </div>
                        </>
                    )}
                </div>

                {/* Business Hours */}
                <BusinessHours />

                {/* Contact Details */}
                <ContactDetails />
            </main>

            {/* Floating Call Button (Mobile Only) */}
            <FloatingCallButton />
        </div>
    )
}

export default ContactComponent