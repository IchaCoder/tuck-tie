import Nav from "../components/nav/Nav";
import CategoryBtns from "../components/products_page/CategoryBtns";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import fabrics from "../components/products/data";
import { useState } from "react";
import CheckoutCart from "../components/products_page/CheckoutCart";
import { useGlobalContext } from "../components/context/context";

const Products = () => {
	const [newFabrics, setNewFabrics] = useState(fabrics);
	const { setCartItems, cartItems } = useGlobalContext();

	function handleAddToCart(id) {
		const selectedItem = fabrics.find((item) => item.id === id);
		setCartItems([...cartItems, selectedItem]);
	}

	return (
		<>
			{/* <CheckoutCart /> */}
			<main className="font-Poppins">
				<Nav />
				<section className="max-w-[90%] md:max-w-[80%] mx-auto pt-4">
					<div className="bg-gray-300">
						<CategoryBtns
							newFabrics={newFabrics}
							setNewFabrics={setNewFabrics}
						/>
						<div className="gap-8 lg:gap-8 products grid card_container justify-evenly flex-wrap">
							{newFabrics.map((fabric, index) => {
								const { name, img, price, isNew, id } = fabric;
								return (
									<div className="w-max relative" key={index}>
										{isNew && (
											<div className="bg-red-400 p-3 absolute right-0 top-0">
												NEW
											</div>
										)}

										<Image
											src={img}
											alt={name}
											width="200"
											height="200"
											className="w-full object-cover"
										/>
										<div className="py-4 bg-white m-4 shadow-md p-4 relative -mt-8 max-w-[170px] w-max">
											<h3 className="text-lg md:text-xl font-bold font-Bungee">
												{name}
											</h3>
											<div className=" sm:text-xl py-2">GHC {price}</div>
											<button
												className="bg-yellow-300 hover:text-yellow-300 hover:bg-black button font-semibold rounded-sm  mt-2 flex justify-center p-2 text-sm"
												onClick={() => handleAddToCart(id)}
											>
												<AiOutlinePlus className="mr-1 self-center" />
												Add to Cart
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default Products;
