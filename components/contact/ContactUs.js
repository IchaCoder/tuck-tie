import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const ContactUs = () => {
	return (
		<div id="contact" className="max-w-[90%] md:max-w-[70%] mx-auto mt-10">
			<h1 className="text-black font-bold text-xl text-center sm:pt-8 pb-8">
				<span className="text-primary text-4xl">G</span>
				et in touch
			</h1>
			<div className="flex flex-col md:flex-row gap-10">
				<div>
					<h3 className="font-bold">Send an email</h3>
					<form>
						<div className="flex gap-8 pt-4">
							<input
								type="text"
								placeholder="Enter name"
								className="border-b-2 border-solid border-black p-2 w-full"
							/>{" "}
							<input
								type="text"
								placeholder="Enter phone"
								className="border-b-2 border-solid border-black p-2 w-full"
							/>
						</div>
						<div className="pt-4">
							<input
								className="border-b-2 border-solid border-black p-2 w-full"
								type="email"
								placeholder="Enter email"
							/>
						</div>
						<div className="pt-4">
							<textarea
								className="border-b-2 border-solid border-black p-2 w-full h-40"
								placeholder="Message"
							/>
						</div>
						<button className="mt-4 bg-primary text-white rounded p-2 hover:opacity-80">
							Submit
						</button>
					</form>
				</div>
				<div>
					<div className="mb-8">
						<h3 className="font-bold">Call Us</h3>
						<p className="py-4">
							Our call center is active 24/7, you can reach us anytime
						</p>
						<div className="flex">
							<div className="w-9 h-9 bg-yellow-200 rounded-md grid place-items-center mr-2">
								<FaPhoneAlt className="text-xl text-primary " />
							</div>
							<Link
								href="tel:0244554455"
								className="font-medium self-center text-primary"
							>
								0244554455
							</Link>
						</div>
					</div>
					<div className="mb-8">
						<h3 className="font-bold">Visit Us</h3>
						<p className="py-4">
							With our hospitable service for customers, your are always welcome
						</p>
						<div className="flex">
							<div className="w-9 h-9 bg-yellow-200 rounded-md grid place-items-center mr-2">
								<ImLocation className="text-xl text-primary " />
							</div>
							<div className="font-medium self-center text-primary">
								Accra, Ghana
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
