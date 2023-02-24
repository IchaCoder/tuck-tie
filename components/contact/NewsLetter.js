const NewsLetter = () => {
	const handleSubmit = (e) => e.preventDefault();
	return (
		<div className="flex-[.7]">
			<h2 className="font-bold text-lg text-[rgba(0,0,0,.4)] text-center pt-8 pb-4">
				JOIN OUR NEWSLETTER
			</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter name"
					className="w-full placeholder:p-4 p-2 mb-4 border border-[rgba(0,0,0,.4)] border-solid"
					required
				/>
				<input
					type="email"
					placeholder="Enter valid email"
					className="w-full placeholder:p-4 p-2 mb-4 border border-[rgba(0,0,0,.4)] border-solid"
					required
				/>
				<textarea
					cols="20"
					rows="5"
					placeholder="Enter your message"
					className="border border-[rgba(0,0,0,.4)] border-solid w-full placeholder:p-4"
					required
				></textarea>
				<button className="bg-primary hover:text-primary hover:bg-white button text-white font-semibold rounded-sm px-4 py-2 mt-4">
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default NewsLetter;
