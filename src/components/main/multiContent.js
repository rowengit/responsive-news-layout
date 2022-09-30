import styled from "styled-components";
import { defColor, defGap } from "../../def";

import nature01 from "../../img/pexels-nature-01.jpg";
import nature02 from "../../img/pexels-nature-02.jpg";
import nature03 from "../../img/pexels-nature-03.jpg";

import opinion01 from "../../img/pexels-opinion-01.jpg";
import politics01 from "../../img/pexels-politics-01.jpg";
import news09 from "../../img/pexels-news-09.jpg";

import news08 from "../../img/pexels-news-08.jpg";
import news07 from "../../img/pexels-news-07.jpg";
import news06 from "../../img/pexels-news-06.jpg";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: ${defGap};

	.block {
		> div:not(:first-child) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: ${defGap};
			margin-bottom: ${defGap};
		}

		img {
			max-height: 200px;
		}
	}

	button {
		border: 1px solid;
		width: 100%;
		line-height: 2;

		:hover {
			background: ${defColor.hover};
			color: ${defColor.white};
		}

		:active {
			opacity: 0.8;
		}
	}

	@media (max-width: 1100px) {
		grid-template-columns: initial;

		.block img {
			max-height: none;
		}
	}
`;

export const MultiContent = () => {
	return (
		<Wrapper>
			<section>
				<h1 className="title">Nature</h1>
				<section className="block">
					<div>
						<img src={nature03} alt="nature03" />
						<h2>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</h2>
						<div className="info">
							<span>By Eliana Smith.</span>
							<span>1h ago</span>
						</div>
					</div>
					<div>
						<img src={nature02} alt="nature02" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By David Nelson.</span>
								<span>2h ago</span>
							</div>
						</div>
					</div>
					<div>
						<img src={nature01} alt="nature01" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By Mike Herrera.</span>
								<span>14h ago</span>
							</div>
						</div>
					</div>
					<button>{"More Nature >>"}</button>
				</section>
			</section>

			<section>
				<h1 className="title">Opinion</h1>
				<section className="block">
					<div>
						<img src={opinion01} alt="opinion01" />
						<h2>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</h2>
						<div className="info">
							<span>By Julia Nichols.</span>
							<span>8h ago</span>
						</div>
					</div>
					<div>
						<img src={politics01} alt="politics01" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By Mike Herrera.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div>
						<img src={news09} alt="news09" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>5h ago</span>
							</div>
						</div>
					</div>
					<button>{"More Nature >>"}</button>
				</section>
			</section>

			<section>
				<h1 className="title">Sport</h1>
				<section className="block">
					<div>
						<img src={news08} alt="news08" />
						<h2>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</h2>
						<div className="info">
							<span>By Julia Nichols.</span>
							<span>8h ago</span>
						</div>
					</div>
					<div>
						<img src={news07} alt="news07" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By Mike Herrera.</span>
								<span>8h ago</span>
							</div>
						</div>
					</div>
					<div>
						<img src={news06} alt="news06" />
						<div>
							<h3>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry.{" "}
							</h3>
							<div className="info">
								<span>By Julia Nichols.</span>
								<span>5h ago</span>
							</div>
						</div>
					</div>
					<button>{"More Nature >>"}</button>
				</section>
			</section>
		</Wrapper>
	);
};
