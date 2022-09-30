import styled from "styled-components";
import { defGap } from "../../def";
import politics01 from "../../img/pexels-politics-01.jpg";
import politics02 from "../../img/pexels-politics-02.jpg";
import politics03 from "../../img/pexels-politics-03.jpg";
import news03 from "../../img/pexels-news-03.jpg";
import news09 from "../../img/pexels-news-09.jpg";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: ${defGap};

	> div:nth-child(2) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: ${defGap};
	}

	@media (max-width: 900px) {
		grid-template-columns: initial;
	}
`;

export const NewsPolitics = () => {
	return (
		<>
			<h1 className="title">NEWS AND POLITICS</h1>
			<Wrapper className="block">
				<div>
					<img src={politics01} alt="politics01" />
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
						<img src={politics02} alt="politics02" />
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
						<img src={politics03} alt="politics03" />
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
						<img src={news09} alt="news09" />
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
		</>
	);
};
