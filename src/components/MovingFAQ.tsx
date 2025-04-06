'use client'

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Get Started Early",
        answer:
            "Don't let procrastination win. Get an early start, sometimes planning a month in advance can assure a smooth transition and make your entire moving experience more enjoyable. Don’t wait until the last minute to start planning for moving day.",
    },
    {
        question: "Purge Purge Purge",
        answer:
            "Decluttering before your move can save time and effort. Get rid of unnecessary items and only pack what you truly need.",
    },
    {
        question: "Round Up All Good Boxes",
        answer:
            "Having sturdy and well-sized boxes can make a big difference in organizing your move efficiently. Label them properly for easy unpacking.",
    },
];

const MovingFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold">RESIDENTIAL MOVING TIPS & QUESTIONS</h2>
                <a href="#" className="text-background hover:underline">
                    Residential Moving Tips & Questions
                </a>
            </div>

            {/* Accordion */}
            <div className="mt-8 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg cursor-pointer transition-all"
                        onClick={() => handleToggle(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{faq.question}</h3>
                            <ChevronDown
                                className={`w-5 h-5 text-background transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </div>

                        {openIndex === index && (
                            <p className="text-gray-600 mt-2 border-t border-background pt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovingFAQ;
