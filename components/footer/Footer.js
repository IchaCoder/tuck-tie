import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="p-8 mt-12 bg-[rgb(49,49,49)] flex flex-col md:flex-row gap-8 justify-between text-white">
			<div className="flex justify-center md:justify-start">
				<Link href={"/"} className="text-2xl sm:text-4xl italic font-bold">
					Tuck<span className="text-primary">&</span>Tie
				</Link>
			</div>
			<div className="self-center grid grid-cols-4 gap-4 ">
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="/"
				>
					Home
				</Link>

				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#gallery"
				>
					Gallery
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#contact"
				>
					Contact
				</Link>
				<Link
					className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
					href="#about"
				>
					About
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
