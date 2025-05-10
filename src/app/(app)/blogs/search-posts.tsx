"use client";

import { type FC, FormEvent, useState } from "react";
import { Input, Button } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export type SearchPostsProps = {
	onSearch: (searchValue: string) => void;
};

export const SearchPosts: FC<SearchPostsProps> = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: FormEvent) => {
		event.preventDefault();
		props.onSearch(searchTerm);
	};

	return (
		<form onSubmit={handleSearch} className="w-full self-end max-w-md relative">
			<div className="absolute inset-y-0 left-0 py-1.5 flex items-center pl-3 pointer-events-none">
				<MagnifyingGlassIcon className="size-4 fill-moving-yellow" />
			</div>

			<Input
				type="search"
				className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-background/20 focus:border-background/20 transition-all duration-300"
				placeholder="Search blog posts..."
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>

			<Button
				type="submit"
				className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-background text-white rounded-md px-3 py-1 text-xs font-medium hover:bg-moving-yellow/90 hover:font-semibold transition-colors"
			>
				Search
			</Button>
		</form>
	);
};
