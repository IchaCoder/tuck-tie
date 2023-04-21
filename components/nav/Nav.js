import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useGlobalContext } from "../context/context";
import CheckoutCart from "../products_page/CheckoutCart";

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { cartItems, setShowCheckOut } = useGlobalContext();

	return (
		<>
			<CheckoutCart />
			<nav className="flex justify-between py-3 px-4 md:px-8 w-full">
				<div>
					<Link href={"/"} className="text-2xl sm:text-4xl italic font-bold">
						Tuck<span className="text-primary">&</span>Tie
					</Link>
				</div>
				<div className="self-center hidden md:inline">
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear nav_link"
						href="/"
					>
						Home
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear nav_link"
						href="#gallery"
					>
						Gallery
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear nav_link"
						href="/products"
					>
						Products
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear nav_link"
						href="#contact"
					>
						Contact
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear nav_link"
						href="#about"
					>
						About
					</Link>
				</div>
				<div className="flex gap-4">
					<div
						className="relative cursor-pointer"
						onClick={() => setShowCheckOut(true)}
					>
						<AiOutlineShoppingCart className="text-3xl" />
						<div className="w-4 h-4 rounded-full grid place-items-center text-xs absolute top-0 -right-3 bg-primary font-bold">
							{cartItems.length}
						</div>
					</div>
					<FiMenu
						className="md:hidden text-3xl lg:text-lg self-center cursor-pointer flex"
						onClick={() => setIsNavOpen(true)}
					/>
				</div>
			</nav>
			<MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
}
