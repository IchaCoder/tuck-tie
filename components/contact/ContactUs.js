import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
	return (
		<div className="flex-[.5]">
			<h2 className="text-black font-bold text-center sm:text-left text-xl sm:pt-8">
				Contact Us
			</h2>
			<div className="mt-8 text-center sm:text-left">
				<p>Mon - Sat: 8:00am - 6:00pm</p>
				<a
					href="mailto:example@example.com"
					className="italic text-primary font-semibold"
				>
					example@example.com
				</a>
			</div>
			<h2 className="text-black font-semibold text-center sm:text-left text-xl pt-8 pb-4">
				Follow Us
			</h2>
			<div className="text-lg flex justify-center lg:m-0 lg:p-0 sm:justify-start gap-4 pt-4">
				<a href="https://twitter.com/" className="active">
					{" "}
					<BsTwitter />{" "}
				</a>
				<a href="www.facebook.com" className="active">
					{" "}
					<FaFacebookF />{" "}
				</a>
				<a href="https://www.linkedin.com/" className="active">
					{" "}
					<FaLinkedinIn />{" "}
				</a>
				<a href="https://instagram.com/" className="active">
					{" "}
					<FaInstagram />{" "}
				</a>
			</div>
			<p className="text-center sm:text-left text-black pt-4 ">
				&copy; Copyright {new Date().getFullYear()}
			</p>
		</div>
	);
};

export default ContactUs;
