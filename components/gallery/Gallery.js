import GalleryModal from "./GalleryModal";
import GallerySlider from "./GallerySlider";
import { useState } from "react";

export default function () {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section
			id="gallery"
			className="mt-32 max-w-[90%] md:max-w-[80%] sm:mt-80 lg:mt-32 mx-auto p-4 bg-gray-200"
		>
			<div className="sm:flex justify-between">
				<div>
					<h2 className="text-4xl base:5xl font-semibold ml-8 mt-4">
						Check Out Our <br />{" "}
						<span className="text-[rgba(0,0,0,0.6)]">Beautiful Gallery</span>
					</h2>
					<div className="w-52 sm:w-64 h-1 mt-2 ml-8 bg-primary "></div>
				</div>
				<div
					className="hover:underline ml-8 sm:ml-0 flex self-end mt-8 cursor-pointer text-blue-700 text-sm"
					onClick={() => setIsModalOpen(true)}
				>
					See More
				</div>
			</div>
			<GallerySlider />
			<GalleryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</section>
	);
}
