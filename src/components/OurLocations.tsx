import { Card, CardContent, CardHeader } from "@/components/card";
import { Globe } from "lucide-react";
import Image from "next/image";

const minneapolisImageLink =
	"data:image/jpg;base64,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";

export const OurLocations = () => {
	return (
		<section
			id="/#our-locations"
			className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32"
		>
			<div className="text-center mb-8">
				<h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-moving-gray to-gray-300">
					Our Locations
				</h2>
			</div>
			<div className="mx-auto max-w-5xl px-6">
				<div className="mx-auto grid gap-2 sm:grid-cols-5">
					<Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
						<CardHeader>
							<div className="md:p-6">
								<p className="font-medium">Maple Wood Moving Company</p>
								<p className="text-muted-foreground mt-3 max-w-sm text-sm">
									949 Schaller Dr S Maplewood, MN 55119
								</p>
							</div>
						</CardHeader>

						<div className="relative h-fit pl-6 md:pl-12">
							<div className="bg-transparent overflow-hidden rounded-tl-lg border-gray-300 border-l border-t pl-2 pt-2">
								<Image
									src="data:image/jpg;base64,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"
									className=""
									alt="minneapolis"
									width={1207}
									height={929}
								/>
							</div>
						</div>
					</Card>

					<Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
						<h2 className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
							Minneapolis Moving Company
						</h2>
						<p className="text-muted-foreground mt-3 max-w-sm text-sm">
							2514 Plymouth Ave N, Minneapolis, MN 55411
						</p>
						<CardContent className="mt-auto h-fit">
							<div className="relative mb-6 sm:mb-0">
								<div className="aspect-76/59 overflow-hidden rounded-r-lg border border-gray-300">
									<Image
										src={minneapolisImageLink}
										className="shadow"
										alt="location"
										width={1207}
										height={929}
									/>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
						<p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
							Lakeville Moving Company
						</p>
						<p className="text-muted-foreground mt-3 max-w-sm text-sm">
							829 3rd Ave SE #285 Rochester, MN 55904
						</p>
						<div className="flex justify-center gap-6">
							<Image
								src={minneapolisImageLink}
								className="shadow"
								alt="location"
								width="1000"
								height="1000"
							/>
						</div>
					</Card>

					<Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
						<CardHeader className="p-6 md:p-12">
							<p className="font-medium">Rochester</p>
							<p className="text-muted-foreground mt-2 max-w-sm text-sm"></p>
						</CardHeader>
						<CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
							<div className="grid grid-cols-1 gap-2">
								<div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border-gray-300 border-solid border p-4">
									<Image
										src={minneapolisImageLink}
										className="shadow"
										alt="location"
										width="1000"
										height="1000"
									/>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
