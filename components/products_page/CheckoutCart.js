import React from "react";
import { useGlobalContext } from "../context/context";
import SingleCartItem from "./SingleCartItem";

export default function () {
	const { showCheckOut, setShowCheckOut, cartItems } = useGlobalContext();

	function handleOnclick(e) {
		if (e.target.classList.contains("fixed")) setShowCheckOut(false);
	}
	return (
		<>
			{showCheckOut && (
				<div
					className="fixed w-full h-full bg-[rgba(0,0,0,.3)] z-10 overflow-scroll"
					onClick={handleOnclick}
				>
					<section className="mt-4 pb-8 max-w-[90%] sm:max-w-[50%] lg:max-w-[35%] mx-auto grid gap-4 bg-white ">
						{cartItems.map((item) => (
							<SingleCartItem key={item.id} item={item} />
						))}
						<button className="bg-yellow-300 w-1/2 hover:text-yellow-300 hover:bg-black button font-semibold rounded-sm  m-2 flex justify-center justify-self-center p-2 text-sm">
							Order
						</button>
					</section>
				</div>
			)}
		</>
	);
}
