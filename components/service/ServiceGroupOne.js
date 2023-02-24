import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { boxVariantOne, boxVariantTwo } from "./variants";

const ServiceGroupOne = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<section
			id="about"
			className="max-w-[90%] md:max-w-[80%] mx-auto mt-32 lg:flex flex-row-reverse relative"
		>
			<motion.div variants={boxVariantTwo} initial="hidden" animate={control}>
				<Image
					src="/assets/service_8.jpeg"
					alt="architecture"
					width="500"
					height="300"
					className="w-[100vw] lg:w-[500px] lg:h-[450px] object-cover"
				/>
			</motion.div>
			<motion.div
				ref={ref}
				variants={boxVariantOne}
				initial="hidden"
				animate={control}
				className="py-10 p-8 bg-gray-200 sm:absolute z-10 sm:w-[90%] lg:w-[50%] sm:-bottom-72 lg:-bottom-14 lg:left-28"
			>
				<h2 className="font-bold text-4xl base:text-5xl">
					We turn Your Ideas <br />{" "}
					<span className="text-primary">To Become Reality</span>
				</h2>
				<p className="mt-2">
					We blend our diversity with emperical and ethnographic research,
					immersing ourselves in our client's worlds to understand their needs
					in their context
				</p>
				<Link href={"#gallery"}>
					<button className="border-primary border-solid border text-primary text-xl  hover:bg-primary hover:text-white font-semibold rounded-sm p-4 mt-8 button">
						Explore Projects
					</button>
				</Link>
			</motion.div>
		</section>
	);
};

export default ServiceGroupOne;
