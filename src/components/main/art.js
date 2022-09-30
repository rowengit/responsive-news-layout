import styled from "styled-components";
import { defGap } from "../../def";

import art01 from "../../img/pexels-art-01.jpg";
import art02 from "../../img/pexels-art-02.jpg";
import art03 from "../../img/pexels-art-03.jpg";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: ${defGap};

	> div:nth-child(2) {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-gap: ${defGap};
	}

	@media (max-width: 900px) {
		grid-template-columns: unset;

		> div:nth-child(2) {
			grid-template-columns: unset;
			grid-auto-flow: unset;
			grid-template-rows: unset;
		}
	}
`;

export const Art = () => {
	return (
		<>
			<h1 className="title">Arts and Living</h1>
			<Wrapper className="block">
				<div>
					<img src={art01} alt="art01" />
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
					<div>
						<img src={art02} alt="art02" />
						<h3>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</h3>
						<div className="info">
							<span>By Eliana Smith.</span>
							<span>1h ago</span>
						</div>
					</div>
					<div>
						<img src={art03} alt="art03" />
						<h3>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</h3>
						<div className="info">
							<span>By Eliana Smith.</span>
							<span>1h ago</span>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};
