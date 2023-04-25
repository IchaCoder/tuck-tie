import Head from "next/head";
import Hero from "../components/hero/Hero";
import Nav from "../components/nav/Nav";
import Services from "../components/service/Services";
import SliderSection from "../components/slider/SliderSection";
import Gallery from "../components/gallery/Gallery";
import NewsLetter from "../components/contact/NewsLetter";
import ContactUs from "../components/contact/ContactUs";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import Products from "../components/products/Products";
import About from "../components/about/About";

export default function Home() {
	return (
		<div className="font-Poppins overflow-hidden">
			<Head>
				<title>Tuck & Tie</title>
				<meta name="description" content="" />
				<meta
					name="keywords"
					content="Fabric wholesale,
Textile supplier,
Fashion industry,
Home decor industry,
Premium quality fabrics,
Affordable fabrics,
Fabric supplier"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Nav />
				<Hero />
				<Products />
				<Gallery />
				<About />
				<ContactUs />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}
