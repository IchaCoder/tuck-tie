import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariantOne, boxVariantTwo } from "./variants";

const ServiceGroupTwo = () => {
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
		<section className="max-w-[90%] md:max-w-[80%] mx-auto mt-32 sm:mt-80 lg:flex lg:mt-32 relative">
			<motion.div variants={boxVariantOne} initial="hidden" animate={control}>
				<Image
					src="/assets/service_4.jpeg"
					alt="architecture"
					width="500"
					height="300"
					className="w-[100vw] lg:w-[500px] lg:h-[450px] object-cover"
				/>
			</motion.div>
			<motion.div
				className="py-10 p-8 bg-gray-200 sm:absolute z-10 sm:w-[90%] lg:w-[50%] sm:-bottom-52 lg:bottom-14 lg:right-28"
				variants={boxVariantTwo}
				initial="hidden"
				animate={control}
				ref={ref}
			>
				<h2 className="font-bold text-4xl base:text-5xl">
					What We <span className="text-primary">Do</span>
				</h2>
				<p className="mt-2">
					We address requirements and constraints with the right mix of
					analytical thinking, creativity and artistry - designing buildings
					that make a statement and enrich our experience.
				</p>
			</motion.div>
		</section>
	);
};

export default ServiceGroupTwo;
