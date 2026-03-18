"use client";

import { FC, ReactNode } from "react";
import { useInView } from "./use-in-view";

type RevealProps = {
	children: ReactNode;
	delay: number;
	from: "left" | "bottom" | "right";
};

export const Reveal: FC<RevealProps> = ({ children, delay, from }) => {
	const [ref, inView] = useInView();

	const init =
		from === "left"
			? "translateX(-28px)"
			: from === "right"
				? "translateX(28px)"
				: "translateY(28px)";

	return (
		<div
			ref={ref}
			style={{
				opacity: inView ? 1 : 0,
				transform: inView ? "translate(0,0)" : init,
				transition: `opacity 0.72s ease ${delay}s, transform 0.72s ease ${delay}`,
			}}
		>
			{children}
		</div>
	);
};
