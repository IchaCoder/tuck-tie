import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import modalSettings from "./gallery-modal-settings";
import items from "./data";
import Image from "next/image";

const variants = {
	visible: {
		opacity: 1,
	},
	hidden: { opacity: 0 },
};
const GalleryModal = ({ setIsModalOpen, isModalOpen }) => {
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsModalOpen(false);
		}
	};

	return (
		<>
			{isModalOpen && (
				<motion.div
					onClick={handleCloseModal}
					className="fixed bg-[rgba(0,0,0,.8)] z-50 top-0 left-0 w-screen h-screen flex flex-wrap items-center"
				>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={variants}
						className="mx-auto p-4 w-[90%] lg:w-[70%] z-40 relative rounded flex flex-col text-white"
					>
						<div className="">
							<Slider className="mx-auto" {...modalSettings}>
								{items.map((item, index) => (
									<div key={index}>
										<div className="sm:m-4 shadow-xl rounded bg-white h-max">
											<Image
												src={item.imageUrl}
												alt="planning"
												width="400"
												height="500"
												className="w-full h-full max-h-[80vh]"
											/>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</motion.div>
				</motion.div>
			)}
		</>
	);
};

export default GalleryModal;
