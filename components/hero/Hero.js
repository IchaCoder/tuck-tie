import Link from "next/link";

const Hero = () => (
	<section className="bg-[url(/download.jpg)] min-h-max ">
		<div className="max-w-[90%] md:max-w-[80%] mx-auto pt-2 pb-8 text-[rgba(255,255,255,1)]">
			<h1 className="text-5xl sm:text-7xl font-bold text-center text-primary pt-24 md:pt-32">
				Tuck & Tie
			</h1>
			<div className="flex justify-center">
				<h3>Quality</h3>
				<div className="w-2 h-2 self-center rounded-full bg-primary mx-4"></div>
				<h3>Standard</h3>
				<div className="w-2 h-2 self-center rounded-full bg-primary mx-4"></div>
				<h3>Stylish</h3>
			</div>
			<p className="md:w-[60%] mx-auto my-4 text-gray-200 text-justify">
				Quality and Affordable fabrics is our hallmark
			</p>
			<Link
				href={"#contact"}
				className="bg-primary hover:text-primary hover:bg-white button hover:border border-solid border-primary text-white font-semibold rounded-sm p-4 mt-8 flex justify-center mx-auto w-52"
			>
				Make an Enquiry
			</Link>
		</div>
	</section>
);

export default Hero;
