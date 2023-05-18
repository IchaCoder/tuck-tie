import Image from "next/image";

function About() {
    return (
        <section id="about" className="pt-12 xl:max-w-[1200px] mx-auto">
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
                <div className="flex-1 mt-4 md:mt-0">
                    Tuck & Tie is a leading fabric wholesale company that
                    specializes in providing premium quality textiles to
                    businesses in the fashion and home decor industries. With a
                    wide range of fabrics to choose from, Tuck & Tie is
                    committed to delivering exceptional products at competitive
                    prices. Whether you're a designer, manufacturer, or
                    retailer, Tuck & Tie is dedicated to meeting your fabric
                    needs and ensuring your success in the industry.
                </div>
            </div>
        </section>
    );
}

export default About;
