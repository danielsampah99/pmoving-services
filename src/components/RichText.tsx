"use client";

import { JSXConverters, JSXConvertersFunction, RichText as PayloadRichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import { DefaultNodeTypes, SerializedLinkNode } from "@payloadcms/richtext-lexical";

import Link from "next/link";
import { Fragment, type FC } from "react";

export type RichTextProps = {
	data: SerializedEditorState;
	className?: string
	converters?: JSXConverters | JSXConvertersFunction
	disableContainer?: boolean;
	disableIndent?: boolean | string[];
	disableTextAlign?: boolean | string[];
};

export const RichText: FC<RichTextProps> = ({ data, className, converters, ...rest }) => {
	return <PayloadRichText data={data} className={className} converters={converters}  {...rest} />;
};

export const jsxLinkConverter: JSXConvertersFunction<DefaultNodeTypes> = ({ defaultConverters }) => ({
	...defaultConverters,
	link: ({ node }) => (<CustomRichTextLink node={node} />)
})

export const CustomRichTextLink: FC<{ node: SerializedLinkNode }> = ({ node }) => {

	const { children, fields: { url, linkType } } = node

	if (typeof node.fields.doc?.value !== 'object') {
		return null
	}

	const { id } = node.fields.doc.value

	return (
		<Link
			key={id}
			className="text-amber-500 [&_*]:text-amber-500 hover:[&_*]:text-amber-600 hover:text-amber-600 hover:underline transition-colors duration-300 delay-100 visited:text-amber-700"
			target={linkType === 'custom' ? '_blank' : '_self'}
			href={url ?? '#'}
		>
			{children.map((child, index) => (
				<Fragment key={index}>{typeof child === 'string' ? child : null}</Fragment>
			))}
		</Link>
	)
}
