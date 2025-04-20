import type { SVGProps, FC } from "react";


interface SVGRProps {
	title?: string;
	titleId?: string;
	desc?: string;
	descId?: string;
}


export const HouseIcon: FC<SVGProps<SVGSVGElement> & SVGRProps> = ({ title, titleId, desc, descId, ...props }) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width={512}
		height={512}
		viewBox="0 0 64 64"
		aria-labelledby={titleId}
		aria-describedby={descId}
	>
		{desc ? <desc id={descId}>{desc}</desc> : null}
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="#e2e7f6" d="M46 36 28 18 10 36v26h36z" />
		<path fill="#f2f2f2" d="M14 32v24a3 3 0 0 0 3 3h29V36L28 18z" />
		<path fill="#2862be" d="m31 13 22 22-4 4-21-21L7 39l-4-4 22-22z" />
		<path fill="#4fb5dc" d="M22 62V47a6 6 0 1 1 12 0v15" />
		<path
			fill="#5ed3f2"
			d="M34 47a6 6 0 0 0-7.275-5.861A5.974 5.974 0 0 0 26 44v12a3 3 0 0 0 3 3h5z"
		/>
		<path fill="#686868" d="M28 24 17 35h22z" />
		<path fill="#939393" d="M18 20v-4h-8v12z" />
		<path fill="#b5b5b5" d="M18 20v-4h-5v9z" />
		<path fill="#4fb5dc" d="M16 44a2 2 0 0 1 2 2v10h-4V46a2 2 0 0 1 2-2z" />
		<path
			fill="#5ed3f2"
			d="M17 44.277c-.595.346-1 .984-1 1.723v10h2V46c0-.738-.405-1.376-1-1.723z"
		/>
		<path fill="#4fb5dc" d="M40 44a2 2 0 0 1 2 2v10h-4V46a2 2 0 0 1 2-2z" />
		<path
			fill="#5ed3f2"
			d="M41 44.277c-.595.346-1 .984-1 1.723v10h2V46c0-.738-.405-1.376-1-1.723z"
		/>
		<path
			fill="#6bc13b"
			d="M53 2a5 5 0 0 0 5 5h2v10.719a8 8 0 0 1-3.562 6.656L48 30l-8.438-5.625A8 8 0 0 1 36 17.719V7h2a5 5 0 0 0 5-5z"
		/>
		<path fill="#fff" d="m40 18 5 5 11-11-3-3-8 8-2-2z" />
	</svg>
)
