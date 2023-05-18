import Image from "next/image";

export default function () {
    return (
        <section id="gallery" className="pt-12 xl:max-w-[1200px] mx-auto">
            <h2 className="text-2xl font-semibold text-center">
                <span className="text-primary text-4xl">G</span>allery
            </h2>
            <div className="max-w-[95%] flex flex-col sm:flex-row mx-auto mt-10 justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-[32.5%] flex flex-col gap-4">
                    <Image
                        src="/assets/gallery_2.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                    <Image
                        src="/assets/gallery_6.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                </div>
                <div className="w-full sm:w-[32.5%] flex flex-col gap-4">
                    <Image
                        src="/assets/gallery_4.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                    <Image
                        src="/assets/gallery_3.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                </div>
                <div className="w-full sm:w-[32.5%] flex flex-col gap-4">
                    <Image
                        src="/assets/gallery_7.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                    <Image
                        src="/assets/gallery_8.jpg"
                        alt="service"
                        width="200"
                        height="200"
                        className="w-full object-cover "
                    />
                </div>
            </div>
        </section>
    );
}
