import styled from "styled-components";

import person01 from "../../img/pexels-person-01.jpg";
import person02 from "../../img/pexels-person-02.jpg";
import person03 from "../../img/pexels-person-03.jpg";

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	overflow: scroll;

	div {
		text-align: center;
		img {
			margin: 0.5rem 2rem;
			border-radius: 50%;
			width: 200px;
			height: 200px;
			object-fit: cover;
		}

		p {
			color: blue;
			line-height: 28px;
		}
	}

	@media (max-width: 1000px) {
		justify-content: left;
	}
`;

export const Columnists = () => {
	return (
		<>
			<h1 className="title">COLUMNISTS</h1>
			<Wrapper className=" block">
				<div>
					<img src={person02} alt="Sports" />
					<h2>Mike Herrera</h2>
					<p>Sports</p>
				</div>
				<div>
					<img src={person01} alt="LifeStyle" />
					<h2>Mike Herrera</h2>
					<p>LifeStyle</p>
				</div>
				<div>
					<img src={person03} alt="NEWS" />
					<h2>Mike Herrera</h2>
					<p>NEWS</p>
				</div>
			</Wrapper>
		</>
	);
};
