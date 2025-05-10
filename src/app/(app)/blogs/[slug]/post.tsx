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
				className={cn(
					"max-w-7xl mb-6 mx-auto flex flex-col prose prose-slate prose-p:text-sm prose-h3:text-xl prose-h4:text-lg",
					"prose-img:rounded-xl xl:prose-img:max-h-[800px] prose-img:w-full prose-img:h-auto",
					"prose-a:text-yellow-500 prose-a:no-underline prose-a:hover:underline prose-a:transition-colors duration-300 delay-100",
				)}
			/>
		</section>
	);
};
