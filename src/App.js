import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./components/main";
import { Layout } from "./components/layout";
import { About } from "./components/about";
import { dataContext } from "./components/context";

function App() {
	const [data, setData] = useState();

	return (
		<BrowserRouter>
			<dataContext.Provider value={{ data, setData }}>
				<Layout>
					<RouterList />
				</Layout>
			</dataContext.Provider>
		</BrowserRouter>
	);
}

const RouterList = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default App;
