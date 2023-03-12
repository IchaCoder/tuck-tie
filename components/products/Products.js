import Image from "next/image";
import React from "react";
import fabrics from "./data";
import Link from "next/link";

const Products = () => {
	return (
		<section className="max-w-[90%] md:max-w-[80%] mx-auto pt-12">
			<h2 className="text-2xl font-semibold text-center">
				<span className="text-primary text-4xl">P</span>roducts
			</h2>
			<div className="mt-10 gap-8 lg:gap-8 products grid card_container justify-evenly flex-wrap">
				{fabrics.map((fabric, index) => (
					<div className="w-max" key={index}>
						<Image
							src={fabric.img}
							alt={fabric.name}
							width="200"
							height="200"
							className="w-full object-cover"
						/>
						<div className="py-4 bg-white m-4 shadow-md p-4 relative -mt-8 max-w-full w-max">
							<h3 className="text-xl font-bold font-Bungee">{fabric.name}</h3>
							<div className="text-xl sm:text-2xl">GHC {fabric.price}</div>
						</div>
					</div>
				))}
			</div>
			<Link
				href={"#contact"}
				className="bg-primary hover:text-primary hover:bg-white button hover:border border-solid border-primary text-white font-semibold rounded-sm p-3 flex justify-center mx-auto w-44"
			>
				Show More
			</Link>
		</section>
	);
};

export default Products;
