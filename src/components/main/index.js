import styled from "styled-components";
import { defColor, defGap } from "../../def";
import { Top } from "./top";
import { Latest } from "./latest";
import { NewsPolitics } from "./newsPolitics";
import { MultiContent } from "./multiContent";
import { Art } from "./art";

import cartoon03 from "../../img/cartoon-3.jpg";

const MainWrapper = styled.main`
	padding: 2rem 4rem;
	margin: 0 auto;
	max-width: 1440px;

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

	.bagley {
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
	}
`;

export const Main = () => {
	return (
		<MainWrapper>
			<Top />
			<Latest />
			<NewsPolitics />
			<MultiContent />
			<Art />
			<h1 className="title">Bagley</h1>
			<section className="bagley block">
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
			</section>
		</MainWrapper>
	);
};
