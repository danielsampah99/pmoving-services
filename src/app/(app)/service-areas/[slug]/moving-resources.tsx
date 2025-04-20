import { ServiceArea } from "@/payload-types";
import { LinkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FC } from "react";

export type MovingResourcesProps = Pick<ServiceArea, 'resources'> & {
	title: string
}

export const MovingResources: FC<MovingResourcesProps> = (props) => {
	return (
		<section id="moving-resources" className='py-10'>
			<div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Moving Resources</h1>
				<div className="mt-5 max-w-2xl">
					<ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600">
						{props.resources?.length! > 0 && (
							props.resources?.map(resource => (
								<ResourceItem key={resource.id} name={resource.title ?? ''} href={resource.link ?? '#'} />
							))
						)}
					</ul>
				</div>
			</div>
		</section>
	)
}

export const ResourceItem: FC<{ href: string, name: string }> = (props) => {
	return (
		<Link href={props.href} className="group flex gap-x-3 transition-all">
			<LinkIcon aria-hidden="true" className="mt-1 size-5 flex-none text-yellow-600" />
			<span className="text-gray-700 group-hover:underline group-hover:underline-offset-2 ">{props.name}</span>
		</Link>
	)
}
