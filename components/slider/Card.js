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
					className="w-[500px] h-[230px]"
				/>
				<h3 className="font-semibold text-center p-4">{name}</h3>
			</div>
		</div>
	);
};

export default Card;
