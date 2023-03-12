import Image from "next/image";

function About() {
	return (
		<section className="py-12">
			<h2 className="text-2xl font-semibold text-center">
				<span className="text-primary text-4xl">A</span>bout
			</h2>
			<div className="max-w-[90%] md:max-w-[70%] mx-auto mt-10 justify-between md:flex gap-8">
				<div className="flex-1">
					<div>
						<Image
							src="/ceo.jpg"
							width="500"
							height="500"
							alt="ceo"
							className="aspect-square object-cover w-full"
						/>
					</div>
					<div className="">
						<h3 className="font-Bungee text-2xl font-bold pt-4">
							Mrs Kate Addo
						</h3>
						<p className="text-xl sm:text-2xl">CEO</p>
					</div>
				</div>
				<div className="flex-1">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
					quisquam officiis sed cum fugiat nam unde, expedita ratione,
					laboriosam ducimus culpa nostrum obcaecati dolore earum sint
					dignissimos placeat nemo vel. Neque dignissimos nihil at, fuga sequi
					atque necessitatibus laboriosam quae corrupti incidunt. Id quo
					nesciunt laboriosam, dolorem adipisci vel. Nobis eaque mollitia
					tenetur sunt fugit provident alias expedita repudiandae hic. Eos esse
				</div>
			</div>
		</section>
	);
}

export default About;
