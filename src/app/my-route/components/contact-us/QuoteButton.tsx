'use client'
import React from 'react';

interface QuoteButtonProps {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
}

export const QuoteButton: React.FC<QuoteButtonProps> = ({
	text,
	onClick,
	type = "button",
	className = ""
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-8 py-3 text-moving-dark-gray font-bold bg-moving-yellow
                 rounded-md hover:bg-yellow-400 hover:scale-105 transform transition-all duration-200
                 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500
                 focus:ring-opacity-50 ${className}`}
		>
			{text}
		</button>
	);
};
