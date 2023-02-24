import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import Image from "next/image";
import Card from "./Card";
import items from "./data";

export default function SliderSection() {
	return (
		<div className="mt-20 bg-gray-200" id="services">
			<Slider className=" mx-auto p-4" {...settings}>
				{items.map((item, index) => (
					<Card name={item.name} imageUrl={item.imageUrl} key={index} />
				))}
			</Slider>
		</div>
	);
}
