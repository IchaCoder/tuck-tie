import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [showCheckOut, setShowCheckOut] = useState(true);
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState("");

	return (
		<AppContext.Provider
			value={{
				cartItems,
				setCartItems,
				showCheckOut,
				setShowCheckOut,
				showMessage,
				setShowMessage,
				message,
				setMessage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
