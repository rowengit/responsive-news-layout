import styled from "styled-components";

import starfall from "../img/starfall-gif.gif";
import cooler from "../img/cooler.gif";
import animate from "../img/animate.gif";

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 2rem;
	position: relative;

	> section:last-child {
		height: 200vh;
		position: sticky;
		top: 0px;

		img {
			width: 80%;
		}
	}

	@media (max-width: 1024px) {
		> section:last-child {
			height: 230vh;
		}
	}

	@media (max-width: 900px) {
		grid-template-columns: none;
		grid-gap: 0;

		> section:last-child {
			height: auto;
			position: static;

			img {
				width: 100%;
				margin: 0.75rem auto;
			}
		}
	}
`;

export const FixedSidebar = ({ children }) => {
	return (
		<Wrapper>
			{children}
			<section>
				<img src={starfall} alt="starfall" />
				<img src={cooler} alt="cooler" />
				<img src={animate} alt="animate" />

				<h1 className="title">Trending</h1>
				<section className="block">
					<div className="number-post">
						<h2>1</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div className="number-post">
						<h2>2</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div className="number-post">
						<h2>3</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div className="number-post">
						<h2>4</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div className="number-post">
						<h2>5</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div className="number-post">
						<h2>6</h2>
						<div>
							<h3>Sport</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
				</section>
			</section>
		</Wrapper>
	);
};
