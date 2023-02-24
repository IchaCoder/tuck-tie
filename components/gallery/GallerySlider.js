import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import items from "./data";
import settings from "./settings";

const GallerySlider = () => {
	return (
		<div className="mt-8">
			<Slider className="mx-auto p-4" {...settings}>
				{items.slice(0, 5).map((item, index) => (
					<div key={index}>
						<div className="sm:m-4 shadow-xl rounded bg-white">
							<Image
								src={item.imageUrl}
								alt="planning"
								width="400"
								height="500"
								className="w-[500px] h-[230px]"
							/>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default GallerySlider;
