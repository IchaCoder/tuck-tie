import Image from "next/image";
import React from "react";
import fabrics from "./data";

const Products = () => {
	return (
		<section className="max-w-[90%] md:max-w-[70%] mx-auto py-12">
			<h2 className="text-xl font-semibold">Products</h2>
			<div className="mt-10 gap-8 lg:gap-16 products flex justify-evenly flex-wrap">
				{fabrics.map((fabric, index) => (
					<div className="w-max shadow-md" key={index}>
						<Image
							src={fabric.img}
							alt={fabric.name}
							width="200"
							height="200"
						/>
						<div className="py-4">
							<h3 className="text-center text-gray-500">{fabric.name}</h3>
							<div className="text-center">GHC {fabric.price}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
