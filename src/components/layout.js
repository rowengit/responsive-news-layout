import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};
