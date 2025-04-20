import type { SVGProps, FC } from "react";


interface SVGRProps {
	title?: string;
	titleId?: string;
	desc?: string;
	descId?: string;
}


export const BoxesIcon: FC<SVGProps<SVGSVGElement> & SVGRProps> = ({ title, titleId, desc, descId, ...props }) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width={512}
		height={512}
		viewBox="0 0 58 55"
		aria-labelledby={titleId}
		aria-describedby={descId}
	>
		{desc ? <desc id={descId}>{desc}</desc> : null}
		{title ? <title id={titleId}>{title}</title> : null}
		<g fill="none" fillRule="nonzero">
			<path
				fill="#d25627"
				d="m1.25 31.15 9.34-6.56c.371-.379.88-.592 1.41-.59h19c.53-.003 1.04.21 1.41.59L26 35z"
			/>
			<path
				fill="#cb8252"
				d="m26.25 31.15 9.34-6.56c.371-.379.88-.592 1.41-.59h19c.53-.003 1.04.21 1.41.59l-8 7z"
			/>
			<path
				fill="#a56a43"
				d="m49.41 31.59 8-7c.38.37.593.88.59 1.41v19a1.966 1.966 0 0 1-.59 1.41l-8 8z"
			/>
			<path
				fill="#cf976a"
				d="M50 33v20a2.015 2.015 0 0 1-2 2H27a2.006 2.006 0 0 1-2-2V33c0-.814.494-1.547 1.25-1.85A1.9 1.9 0 0 1 27 31h21a2.015 2.015 0 0 1 2 2z"
			/>
			<rect width={6} height={4} x={29} y={47} fill="#fff" rx={1} />
			<path
				fill="#d25627"
				d="M46 48h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM46 52h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
			/>
			<path
				fill="#e57e25"
				d="M25 33v20a2.015 2.015 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V33c0-.814.494-1.547 1.25-1.85A1.9 1.9 0 0 1 2 31h21a2.015 2.015 0 0 1 2 2z"
			/>
			<rect width={6} height={4} x={4} y={47} fill="#fff" rx={1} />
			<path
				fill="#d25627"
				d="M21 48h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM21 52h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
			/>
			<path
				fill="#e57e25"
				d="M14.25 7.15 23.59.59c.371-.379.88-.592 1.41-.59h19c.53-.003 1.04.21 1.41.59l-8 7z"
			/>
			<path
				fill="#a56a43"
				d="m37.41 7.59 8-7c.38.37.593.88.59 1.41v19a1.966 1.966 0 0 1-.59 1.41l-8 8z"
			/>
			<path fill="#e57e25" d="m37.41 30.41-.06.07" />
			<path fill="#a56a43" d="m36.63 0-9 7h-3.26l9-7z" />
			<path
				fill="#f29c1f"
				d="M38 9v20a2.015 2.015 0 0 1-2 2H15a2.006 2.006 0 0 1-2-2V9c0-.814.494-1.547 1.25-1.85A1.9 1.9 0 0 1 15 7h21a2.015 2.015 0 0 1 2 2z"
			/>
			<rect width={6} height={4} x={17} y={23} fill="#fff" rx={1} />
			<g fill="#d25627">
				<path d="M34 24h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zM34 28h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" />
			</g>
		</g>
	</svg>
)
