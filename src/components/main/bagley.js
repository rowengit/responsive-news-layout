import styled from "styled-components";
import { defColor } from "../../def";

import cartoon03 from "../../img/cartoon-3.jpg";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-gap: 1rem;

	p {
		font-weight: 700;
		text-align: center;
	}

	div {
		display: flex;
		justify-content: center;
		position: relative;
		span {
			margin: 0 0.5rem;
			width: 36px;
			height: 36px;
			border-radius: 50%;
			background: blue;
			position: relative;

			i {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: ${defColor.white};
			}
		}
	}
`;

export const Main = () => {
	return (
		<>
			<h1 className="title">Bagley</h1>
			<Wrapper className="bagley block">
				<p>September 30 2022</p>
				<img src={cartoon03} alt="cartoon03" />
				<p>Bagley Cartoon:Thunderdome Debate</p>
				<div>
					<span>
						<i className="fa-brands fa-facebook-f" />
					</span>
					<span>
						<i className="fa-brands fa-twitter" />
					</span>
				</div>
			</Wrapper>
		</>
	);
};
