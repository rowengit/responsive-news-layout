import { useContext } from "react";
import { dataContext } from "../context";

export const About = () => {
	const { data } = useContext(dataContext);
	return (
		<>
			<h1>This is About page.</h1>
			<p>data: {data}</p>
		</>
	);
};
