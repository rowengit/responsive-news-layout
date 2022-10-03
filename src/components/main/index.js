import styled from "styled-components";
import { defColor } from "../../def";
import { Top } from "./top";
import { Latest } from "./latest";
import { NewsPolitics } from "./newsPolitics";
import { MultiContent } from "./multiContent";
import { Art } from "./art";
import { Bagley } from "./bagley";
import { Columnists } from "./columnists";

const MainWrapper = styled.main`
	padding: 2rem 4rem;
	margin: 0 auto;
	max-width: 1440px;

	@media (max-width: 450px) {
		padding: 2rem 2rem;
	}

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
`;

export const Main = () => {
	return (
		<MainWrapper>
			<Top />
			<Latest />
			<NewsPolitics />
			<MultiContent />
			<Art />
			<Bagley />
			<Columnists />
		</MainWrapper>
	);
};
