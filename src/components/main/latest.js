import styled from "styled-components";
import { defColor, defGap } from "../../def";

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: ${defGap};

	> div {
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

	@media (max-width: 900px) {
		grid-template-columns: initial;
	}
`;

export const Latest = () => {
	return (
		<>
			<h1 className="title">THE LATEST</h1>

			<Wrapper className="block">
				<div>
					<h2>1</h2>
					<div>
						<h3>Sport</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Julia Nichols.</span>
							<span>8h ago</span>
						</div>
					</div>
				</div>
				<div>
					<h2>2</h2>
					<div>
						<h3>News</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Dave Nelson.</span>
							<span>5h ago</span>
						</div>
					</div>
				</div>
				<div>
					<h2>3</h2>
					<div>
						<h3>Nation</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Eliana Nichols.</span>
							<span>2h ago</span>
						</div>
					</div>
				</div>
				<div>
					<h2>4</h2>
					<div>
						<h3>World</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Mike Herrera.</span>
							<span>1h ago</span>
						</div>
					</div>
				</div>
				<div>
					<h2>5</h2>
					<div>
						<h3>Politics</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Julia Nichols.</span>
							<span>9h ago</span>
						</div>
					</div>
				</div>
				<div>
					<h2>6</h2>
					<div>
						<h3>Education</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry.{" "}
						</p>
						<div className="info">
							<span>By Eliana Nichols.</span>
							<span>3h ago</span>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};
