import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const hideScrollToTop = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", hideScrollToTop);

		return () => {
			window.removeEventListener("scroll", hideScrollToTop);
		};
	}, []);

	return (
		<div
			className={`fixed bottom-8 right-8 bg-primary  place-items-center p-4 text-white rounded-full transfom animate-bounce cursor-pointer ${
				scrollPosition < 500 ? "hidden" : "grid"
			}`}
			onClick={handleScroll}
		>
			<IoIosArrowUp className="font-bold text-xl" />
		</div>
	);
};

export default ScrollToTop;
