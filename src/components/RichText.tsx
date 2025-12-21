"use client";

import {
	type JSXConverters,
	type JSXConvertersFunction,
	RichText as PayloadRichText,
} from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import type {
	DefaultNodeTypes,
	SerializedLinkNode,
	SerializedUploadNode,
} from "@payloadcms/richtext-lexical";

import Link from "next/link";
import { Fragment, type FC } from "react";
import { Media } from "@/payload-types";
import Image from "next/image";

export type RichTextProps = {
	data: SerializedEditorState;
	className?: string;
	converters?: JSXConverters | JSXConvertersFunction;
	disableContainer?: boolean;
	disableIndent?: boolean | string[];
	disableTextAlign?: boolean | string[];
};

export const RichText: FC<RichTextProps> = ({
	data,
	className,
	converters,
	...rest
}) => {
	const combinedConverters = ({
		defaultConverters,
	}: { defaultConverters: JSXConverters<DefaultNodeTypes> }) => ({
		...defaultConverters,
		...jsxLinkConverter({ defaultConverters }),
		...jsxUploadConverter({ defaultConverters }),
	});

	return (
		<PayloadRichText
			data={data}
			className={className}
			converters={combinedConverters}
			{...rest}
		/>
	);
};

export const jsxLinkConverter: JSXConvertersFunction<DefaultNodeTypes> = ({
	defaultConverters,
}) => ({
	...defaultConverters,
	link: ({ node }) => <CustomRichTextLink node={node} />,
});

export const jsxUploadConverter: JSXConvertersFunction<DefaultNodeTypes> = ({
	defaultConverters,
}) => ({
	...defaultConverters,
	upload: ({ node }) => <CustomRichTextUpload node={node} />,
});

export const CustomRichTextLink: FC<{ node: SerializedLinkNode }> = ({
	node,
}) => {
	const {
		children,
		fields: { url, linkType },
	} = node;

	if (typeof node.fields.doc?.value !== "object") {
		return null;
	}

	const { id } = node.fields.doc.value;

	return (
		<Link
			key={id}
			className="text-amber-500 [&_*]:text-amber-500 hover:[&_*]:text-amber-600 hover:text-amber-600 hover:underline transition-colors duration-300 delay-100 visited:text-amber-700"
			target={linkType === "custom" ? "_blank" : "_self"}
			href={url ?? "#"}
		>
			{children.map((child, index) => (
				<Fragment key={index}>
					{typeof child === "string" ? child : null}
				</Fragment>
			))}
		</Link>
	);
};

export const CustomRichTextUpload: FC<{ node: SerializedUploadNode }> = ({
	node,
}) => {
	const { value } = node;

	if (!value || typeof value !== "object") {
		return null;
	}

	const media = value as Media;

	const mimeType = media.mimeType;
	const url = media.url;

	if (!url) {
		return null;
	}

	if (mimeType?.startsWith("video/")) {
		return (
			<video
				controls={true}
				className="rounded-xl w-full max-w-3xl my-4"
				preload="metadata"
			>
				<source src={url} type={mimeType || "video/mp4"} />
				Sorry this video could not be displayed on your browser
			</video>
		);
	}

	if (mimeType?.startsWith("image/")) {
		return (
			<Image
				src={url}
				alt={media.alt || ""}
				width={media.sizes?.card?.width || media.width || 800}
				height={media.sizes?.card?.height || media.height || 600}
				className="rounded-lg w-full h-auto my-4 object-cover object-center"
			/>
		);
	}

	return (
		<Link
			href={url}
			className="text-amber-500"
			target="_blank"
			rel="noopener noreferrer"
		>
			{media.filename || "Download file"}
		</Link>
	);
};
