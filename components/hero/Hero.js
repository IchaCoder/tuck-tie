import Link from "next/link";

const Hero = () => (
	<section className="bg-[url(/gradient_bg.png)] min-h-screen bg-no-repeat">
		<div className="max-w-[90%] md:max-w-[80%] mx-auto py-5">
			<h1 className="text-5xl base:text-7xl font-bold text-center pt-32">
				Tuck & Tie
			</h1>
			<div className="flex justify-center">
				<h3>Quality</h3>
				<div className="w-2 h-2 self-center rounded-full bg-primary mx-4"></div>
				<h3>Standard</h3>
				<div className="w-2 h-2 self-center rounded-full bg-primary mx-4"></div>
				<h3>Stylish</h3>
			</div>
			<p className="md:w-[60%] mx-auto my-4 text-[rgba(0,0,0,0.5)] text-justify">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea
				officiis esse facilis qui cumque ipsum sunt laboriosam voluptate, quos,
				earum, dolores nobis minima eveniet ad reiciendis laudantium. Eveniet,
				provident
			</p>
			<Link
				href={"#contact"}
				className="bg-[rgb(255,112,36)] hover:text-primary hover:bg-white button hover:border border-solid border-primary text-white font-semibold rounded-sm p-4 mt-8 flex justify-center mx-auto w-52"
			>
				Make an Enquiry
			</Link>
		</div>
	</section>
);

export default Hero;
