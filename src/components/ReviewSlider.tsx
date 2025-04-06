'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const reviews = [
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Exceptional service! The team was professional, careful with our belongings, and completed the move ahead of schedule.",
        location: "Minneapolis, MN"
    },
    {
        name: "Mike Peterson",
        rating: 5,
        text: "Best moving experience ever! They handled our furniture with care and were very friendly throughout the process.",
        location: "St. Paul, MN"
    },
    {
        name: "Emily Roberts",
        rating: 5,
        text: "Very impressed with their efficiency and professionalism. Would definitely recommend to anyone moving in Minnesota!",
        location: "Eden Prairie, MN"
    }
];

const ReviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                <div className="relative">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 rounded-xl p-8 shadow-lg max-w-3xl mx-auto"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 text-lg italic mb-6">"{reviews[currentIndex].text}"</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-semibold text-gray-900">{reviews[currentIndex].name}</p>
                                <p className="text-gray-500 text-sm">{reviews[currentIndex].location}</p>
                            </div>
                            <div className="flex gap-2">
                                {reviews.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            idx === currentIndex ? 'bg-background w-6' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;