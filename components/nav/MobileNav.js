import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const variants = {
	visible: {
		opacity: 1,
		y: 0,
	},
	hidden: { opacity: 0, y: 200 },
};

export default function MobileNav({ isNavOpen, setIsNavOpen }) {
	return (
		<>
			{isNavOpen && (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={variants}
					className="mx-auto p-4 w-[90%] -mt-20 z-40 relative rounded flex flex-col bg-primary text-white"
				>
					<div className="flex justify-between">
						<Link href={"/"}>
							<Image src="/logo.png" alt="anisarp" width="100" height="50" />{" "}
						</Link>
						<AiOutlineClose
							className="text-white text-xl hover:animate-spin mt-2 cursor-pointer"
							onClick={() => setIsNavOpen(false)}
						/>
					</div>
					<Link
						href="/"
						className="py-2 hover:tracking-widest text-[15px] transition-all duration-300 ease-linear pl-4 mt-4"
						onClick={() => setIsNavOpen(false)}
					>
						Home
					</Link>

					<Link
						href="#services"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Services
					</Link>
					<Link
						href="#gallery"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Gallery
					</Link>
					<Link
						href="#contact"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						Contact
					</Link>
					<Link
						href="#about"
						className="py-2 text-[15px] hover:tracking-widest transition-all duration-300 ease-linear pl-4"
						onClick={() => setIsNavOpen(false)}
					>
						About
					</Link>
				</motion.div>
			)}
		</>
	);
}
