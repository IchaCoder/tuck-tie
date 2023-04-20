import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
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
					<a
						href="tel:+2334444444"
						className=" items-center hover:tracking-wide text-2xl self-center transition-all duration-200 ease-linear lg:text-base flex"
					>
						<FaPhoneAlt className="mr-2 text-2xl" />{" "}
					</a>

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
