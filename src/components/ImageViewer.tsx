import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { AboutImages, NavigateImage } from "./AboutUs";
import { FC, KeyboardEvent } from "react";
import {
	XMarkIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/outline";

export type ImageViewerProps = {
	isOpen: boolean;
	onImageViewerClose: (isOpen: boolean) => void;
	onImageViewerKeyboardNavigate: (event: KeyboardEvent) => void;
	onImageViewerButtonNavigate: NavigateImage;
	images: AboutImages[];
	currentImageIndex: number;
};

export const ImageViewer: FC<ImageViewerProps> = ({
	isOpen,
	onImageViewerButtonNavigate,
	onImageViewerClose,
	onImageViewerKeyboardNavigate,
	images,
	currentImageIndex,
}) => {
	return (
		<Dialog
			open={isOpen}
			onClose={onImageViewerClose}
			className="relative z-50"
			onKeyDown={onImageViewerKeyboardNavigate}
		>
			<DialogBackdrop
				transition={true}
				className="fixed inset-0 bg-black/30 duration-300 shadow-xl transition-all data-[closed]:translate-y-4 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in ease-out data-[closed]:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<div className="group absolute top-20 right-10 z-50">
					<Button type="button">
						<XMarkIcon
							className="size-6 stroke-gray-300 group-hover:stroke-white fill-white"
							aria-hidden="true"
						/>
						<span className="sr-only">Close image viewer</span>
					</Button>
				</div>

				<DialogPanel className="max-w-lg xl:max-w-4/5 space-y-4 bg-transparent p-0 overflow-hidden duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
					<img
						src={images[currentImageIndex].src || "/placeholder.svg"}
						alt={images[currentImageIndex].alt}
						className="max-h-full max-w-full rounded-lg object-contain"
					/>
					{/* controls for the image viewer */}
					<div className="absolute bottom-4 md:max-w-sm left-0 mx-auto w-2/3 right-0 rounded-3xl shadow-lg bg-gray-800 bg-opacity-75 backdrop-blur-sm py-1.5 px-1 flex items-center justify-between text-center text-white">
						<Button
							type="button"
							title="Previous Image"
							onClick={() => onImageViewerButtonNavigate("prev")}
							className="rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							<ChevronLeftIcon
								className="size-6 stroke-gray-300 group-hover:stroke-white"
								aria-hidden="true"
							/>
							<span className="sr-only">Close image viewer</span>
						</Button>

						<span className="text-sm font-medium">
							{currentImageIndex + 1} / {images.length}
						</span>

						<Button
							type="button"
							title="Next Image"
							onClick={() => onImageViewerButtonNavigate("next")}
							className="rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
						>
							<ChevronRightIcon
								className="size-6 stroke-gray-300 group-hover:stroke-white"
								aria-hidden="true"
							/>
							<span className="sr-only">Next</span>
						</Button>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
