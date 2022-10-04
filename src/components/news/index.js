import styled from "styled-components";

import nature02 from "../../img/pexels-nature-02.jpg";
import nature01 from "../../img/pexels-nature-01.jpg";
import nature03 from "../../img/pexels-nature-03.jpg";
import politics02 from "../../img/pexels-politics-02.jpg";
import news03 from "../../img/pexels-news-03.jpg";

import starfall from "../../img/starfall-gif.gif";
import cooler from "../../img/cooler.gif";
import animate from "../../img/animate.gif";

const Wrapper = styled.main`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 2rem;
	position: relative;

	.post {
		border: 1px solid rgba(0, 0, 0, 0.1);
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 0.75rem;

		> div,
		img {
			margin: 0.75rem;
		}

		> div {
			p {
				margin: 1.25rem 0;
			}
		}
	}

	> section:last-child {
		height: 200vh;
		position: sticky;
		top: 0px;

		img {
			width: 80%;
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

export const News = () => {
	return (
		<Wrapper>
			<section>
				<h1 className="title">NEWS</h1>
				<section className="block">
					<div className="post">
						<img src={nature02} alt="nature02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={nature01} alt="nature01" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={news03} alt="news03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={nature02} alt="nature02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={nature01} alt="nature01" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={news03} alt="news03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
					<div className="post">
						<img src={nature03} alt="nature03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</div>
				</section>
			</section>
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
