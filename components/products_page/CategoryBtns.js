import buttons from "./btns_data";
import { useState } from "react";

const CategoryBtns = () => {
	const [selected, setSelected] = useState("");
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
						onClick={() => setSelected(index)}
					>
						{btn}
					</button>
				);
			})}
		</div>
	);
};

export default CategoryBtns;
