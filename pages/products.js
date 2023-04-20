import Nav from "../components/nav/Nav";
import CategoryBtns from "../components/products_page/CategoryBtns";

const Products = () => {
	return (
		<main className="font-Poppins">
			<Nav />
			<section className="max-w-[90%] md:max-w-[80%] mx-auto pt-4">
				<div className="bg-gray-300">
					<CategoryBtns />
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias labore
					quidem sunt velit deserunt nesciunt similique odio earum minus,
					pariatur ducimus numquam ea beatae nam adipisci. Vitae laborum rerum
					repellat. Cumque nulla, beatae molestiae nostrum dolor hic odit
					debitis numquam deleniti vitae laborum sunt similique quam, magnam at
					porro. Necessitatibus, magnam perspiciatis atque modi nostrum facere
					temporibus alias reprehenderit ipsum.
				</div>
			</section>
		</main>
	);
};

export default Products;
