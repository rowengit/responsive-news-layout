// import { useContext, useEffect } from "react";
import { Top } from "./top";
import { Latest } from "./latest";
import { NewsPolitics } from "./newsPolitics";
import { MultiContent } from "./multiContent";
import { Art } from "./art";
import { Bagley } from "./bagley";
import { Columnists } from "./columnists";
// import { dataContext } from "../context";
import { Widget } from "../widget";

export const Main = () => {
	// const { setData } = useContext(dataContext);

	// useEffect(() => {
	// 	setData("Visit Main Page!");
	// }, []);

	return (
		<>
			<Widget />
			<main>
				<Top />
				<Latest />
				<NewsPolitics />
				<MultiContent />
				<Art />
				<Bagley />
				<Columnists />
			</main>
		</>
	);
};
