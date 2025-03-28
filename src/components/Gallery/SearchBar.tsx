"use client";

import type React from "react";
import { useState, useRef } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	placeholder?: string;
	className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchTerm,
	setSearchTerm,
	placeholder = "Search gallery...",
	className = "",
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	// Clear search term
	const handleClearSearch = () => {
		setSearchTerm("");
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	// Handle input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	// Handle key press events
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape") {
			handleClearSearch();
		}
	};

	return (
		<div className={`relative ${className}`}>
			<div
				className={`
          flex items-center bg-white rounded-lg border transition-all duration-300
          ${isFocused ? "border-moving-primary shadow-sm ring-2 ring-moving-primary ring-opacity-20" : "border-moving-lightGray"}
        `}
			>
				<div className="flex items-center justify-center pl-3 text-moving-gray">
					<Search
						size={18}
						className={isFocused ? "text-moving-primary" : ""}
					/>
				</div>

				<input
					ref={inputRef}
					type="text"
					value={searchTerm}
					onChange={handleInputChange}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder}
					className="w-full py-2.5 px-3 focus:outline-none bg-transparent text-moving-dark placeholder:text-moving-gray"
					aria-label="Search gallery"
				/>

				{searchTerm && (
					<button
						onClick={handleClearSearch}
						className="flex items-center justify-center pr-3 text-moving-gray hover:text-moving-primary"
						aria-label="Clear search"
					>
						<X size={18} />
					</button>
				)}
			</div>

			{/* Search tips - shown when focused and empty */}
			{isFocused && !searchTerm && (
				<div className="absolute left-0 right-0 mt-2 p-3 bg-white rounded-lg shadow-md border border-moving-lightGray text-sm text-moving-gray animate-fade-in z-10">
					<p>Try searching by: service type, location, or moving equipment</p>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
