import Image from "next/image";
const Card = ({ name, imageUrl }) => {
	return (
		<div>
			<div className="m-4 shadow-xl rounded bg-white">
				<Image
					src={imageUrl}
					alt="planning"
					width="400"
					height="500"
					className="h-[350px] w-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Card;
