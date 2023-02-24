import Link from "next/link";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";

const Footer = () => {
	return (
		<>
			<footer className="p-8 bg-[rgb(49,49,49)] flex flex-col md:flex-row gap-8 justify-between text-white">
				<div className="flex justify-center md:justify-start">
					<Link href={"/"}>
						<Image src="/logo.png" alt="anisarp" width="100" height="50" />
					</Link>
					<span className="font-extrabold self-center text-2xl sm:text-3xl tracking-widest">
						ANISARP
					</span>
				</div>
				<div className="self-center grid grid-cols-3 gap-4 sm:grid-cols-5">
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
						href="/"
					>
						Home
					</Link>
					<Link
						className="px-3 hover:text-[rgba(255,255,255,.5)] transition-all duration-200 ease-linear"
						href="#services"
					>
						Services
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
			<div className="flex flex-col text-lg flex-wrap gap-2 p-2">
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
					className="flex self-center"
				>
					Powered by{" "}
					<span>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className="ml-2 inline"
							width={72}
							height={16}
						/>
					</span>
				</a>

				<div className="self-center flex">
					Made with{" "}
					<span
						className="ml-2 flex items-center text-2xl cursor-pointer"
						title="NextJS"
					>
						<TbBrandNextjs />
					</span>{" "}
				</div>
			</div>
		</>
	);
};

export default Footer;
