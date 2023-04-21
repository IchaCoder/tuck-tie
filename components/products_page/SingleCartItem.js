import { useGlobalContext } from "../context/context";

export default function SingleCartItem({ item }) {
	const { cartItems, setCartItems } = useGlobalContext();

	const removeItem = (id) => {
		const newItems = cartItems.filter((item) => item.id !== id);
		setCartItems(newItems);
	};

	const increaseQuantity = (id) => {
		const newItems = cartItems.map((item) => {
			if (item.id === id) {
				item.qty += 1;
			}
			return item;
		});
		setCartItems(newItems);
	};

	const deccreaseQuantity = (id) => {
		const newItems = cartItems.map((item) => {
			if (item.id === id) {
				item.qty -= 1;
				if (item.qty < 1) item.qty = 1;
			}
			return item;
		});
		setCartItems(newItems);
	};
	const price = item.price * item.qty;
	return (
		<div className="flex bg-white p-4 gap-4 rounded-lg shadow-md relative">
			<div
				className="text-red-500 absolute right-2 top-2 text-lg cursor-pointer"
				onClick={() => removeItem(item.id)}
			>
				x
			</div>
			<img
				src={item.img}
				className="max-h-[120px] max-w-[120px] self-center"
				alt={item.name}
			/>
			<div className="">
				<div>
					<h2 className="text-lg font-bold">{item.name}</h2>
					<div className="self-center text-[#c76923] font-semibold my-2">
						<span className="text-gray-400 text-sm">GHC</span>
						{price.toFixed(2)}
					</div>
					<div className="flex justify-around">
						<span
							className="cursor-pointer"
							onClick={() => deccreaseQuantity(item.id)}
						>
							-
						</span>
						<span>{item.qty}</span>
						<span
							className="cursor-pointer"
							onClick={() => increaseQuantity(item.id)}
						>
							+
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
