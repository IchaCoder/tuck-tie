import buttons from "./btns_data";
import { useState } from "react";
import fabrics from "../products/data";

const CategoryBtns = ({ newFabrics, setNewFabrics }) => {
	const [selected, setSelected] = useState("");

	const handleClick = (e, id) => {
		console.log(e.target.textContent.toLowerCase());
		const textContent = e.target.textContent.toLowerCase();
		const filteredItems = fabrics.filter((item) => {
			if (textContent === "new") return item.isNew === true;
			if (textContent === "all") return fabrics;

			return item.category === textContent;
		});
		setNewFabrics(filteredItems);
		setSelected(id);
	};

	return (
		<div className="p-4">
			{buttons.map((btn, index) => {
				return (
					<button
						key={index}
						style={{
							background: selected === index && "black",
							color: selected === index && "white",
						}}
						className="hover:bg-black hover:text-white p-2"
						onClick={(e) => handleClick(e, index)}
					>
						{btn}
					</button>
				);
			})}
		</div>
	);
};

export default CategoryBtns;
