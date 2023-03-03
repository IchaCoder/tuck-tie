import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./settings";
import Image from "next/image";
import Card from "./Card";
import items from "./data";

export default function SliderSection() {
	return (
		<div className="mt-20">
			<h2 className="text-xl font-semibold text-center pb-8">Events</h2>
			<div
				className=" bg-gray-200 max-w-[90%] md:max-w-[70%] mx-auto"
				id="services"
			>
				<Slider className=" mx-auto p-4" {...settings}>
					{items.map((item, index) => (
						<Card name={item.name} imageUrl={item.imageUrl} key={index} />
					))}
				</Slider>
			</div>
		</div>
	);
}
