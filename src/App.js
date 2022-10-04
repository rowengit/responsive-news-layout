import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./components/main";
import { Layout } from "./components/layout";
import { News } from "./components/news";
import { dataContext } from "./components/context";
import { createGlobalStyle } from "styled-components";
import { defColor, defGap } from "./def";

const GlobalStyle = createGlobalStyle`
		h1.title {
			border-bottom: 1px solid;
			margin-bottom: 3px;
			text-transform: uppercase;
		}

		section {
			grid-gap: 2rem;
			&.block {
				border-top-style: solid;
				border-width: 3px;
				padding: 2rem 0.5rem;
			}

			&:not(:last-child) {
				margin-bottom: 2rem;
			}
		}

	main {
			padding: 2rem 4rem;
		margin: 0 auto;
		max-width: 1440px;

		@media (max-width: 450px) {
			padding: 2rem 2rem;
		}

		img {
			width: 100%;
			min-height: 200px;
			object-fit: cover;
			margin-bottom: 0.5rem;
		}

		.info {
			margin: 0.75rem auto;

			span {
				font-size: 13px;
				font-weight: 600;

				&:last-child {
					color: ${defColor.grey};
					margin-left: 0.5rem;
				}
			}
		}
		

		.number-post {
			padding: 1rem 1rem;
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: flex-start;
			grid-gap: ${defGap};

			h2 {
				border: 1px solid ${defColor.hover};
				padding: 12px;
			}

			h3 {
				font-weight: 600;
				margin-bottom: 0.5rem;
			}

			&:hover {
				background-color: ${defColor.hover};
				color: ${defColor.white};

				h2 {
					background-color: ${defColor.white};
					color: ${defColor.black};
				}

				cursor: pointer;
			}
		}
	}
`;

function App() {
	const [data, setData] = useState();

	return (
		<BrowserRouter>
			<dataContext.Provider value={{ data, setData }}>
				<GlobalStyle />
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
			<Route path="/news" element={<News />} />
		</Routes>
	);
};

export default App;
