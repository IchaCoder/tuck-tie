import "../styles/globals.css";
import "../styles/test.css";
import { AppProvider } from "../components/context/context";

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />;
		</AppProvider>
	);
}

export default MyApp;
