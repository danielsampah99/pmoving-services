"use client";

import { RefObject, useEffect, useRef, useState } from "react";

export type UseInViewReturn = [RefObject<HTMLDivElement | null>, boolean];

export const useInView = (threshold: number = 0.12): UseInViewReturn => {
	const viewRef = useRef<HTMLDivElement | null>(null);

	const [inView, setInView] = useState(false);

	useEffect(() => {
		const element = viewRef.current;

		if (!element) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [threshold]);

	return [viewRef, inView];
};
