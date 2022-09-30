import styled from "styled-components";
import { defGap } from "../../def";
import news01 from "../../img/pexels-news-01.jpg";

import nature01 from "../../img/pexels-nature-01.jpg";
import nature02 from "../../img/pexels-nature-02.jpg";
import nature03 from "../../img/pexels-nature-03.jpg";
import news03 from "../../img/pexels-news-03.jpg";

import news06 from "../../img/pexels-news-06.jpg";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1.5fr 1fr 1fr;
	grid-gap: ${defGap};

	> div {
		&:nth-child(2) {
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			grid-template-columns: repeat(2, 1fr);
			grid-gap: ${defGap};
		}
	}

	@media (max-width: 900px) {
		grid-template-columns: initial;
	}
`;

export const Top = () => {
	return (
		<Wrapper>
			<div>
				<img src={news01} alt="news01" />
				<h2>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry.{" "}
				</h2>
				<div className="info">
					<span>By Julia Nichols.</span>
					<span>12h ago</span>
				</div>
			</div>
			<div>
				<div>
					<img src={nature01} alt="nature01" />
					<h3>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h3>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>12h ago</span>
					</div>
				</div>
				<div>
					<img src={nature02} alt="nature02" />
					<h3>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h3>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>12h ago</span>
					</div>
				</div>
				<div>
					<img src={news03} alt="news03" />
					<h3>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h3>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>12h ago</span>
					</div>
				</div>
				<div>
					<img src={nature03} alt="nature03" />
					<h3>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h3>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>12h ago</span>
					</div>
				</div>
			</div>
			<div>
				<div>
					<img src={news06} alt="news06" />
					<h3>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h3>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>12h ago</span>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
