import { RichText } from "@/components/RichText";
import { cn } from "@/utils";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { FC } from "react";

export type PostProps = {
	content: SerializedEditorState;
	id: number;
};

export const Post: FC<PostProps> = (props) => {
	return (
		<section id={`post-${props.id}`}>
			<RichText
				data={props.content}
				className={cn("[&_h2]:text-3xl [&_h2]:font-semibold max-sm:[&_h2]:text-justify",
					" [&_a]:text-yellow-500 [&_a]:hover:underline [&_a]:transition-colors duration-300 delay-100", //
					"[&_p]:text-gray-500 [&_p]:my-2 [&_h4]:text-lg [&_h4]:font-semibold [&_h2]:py-6 [&_p]:xl:text-justify [&_p]:text-pretty")}
			/>
		</section>
	);
};
