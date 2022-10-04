import styled from "styled-components";

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	transform: translate(0, -50%);

	a {
		position: relative;
		display: block;
		height: 54px;
		width: 52px;
		background: rgba(0, 0, 0, 0.4);

		i {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: white;
			font-size: 24px;
		}

		&:first-child {
			border-radius: 0 6px 0 0;
		}

		&:last-child {
			border-radius: 0 0 6px 0;
		}

		&:hover {
			opacity: 0.9;
		}

		@media (max-width: 400px) {
			height: 42px;
			width: 28px;

			i {
				font-size: 16px;
			}
		}
	}

	a.fb {
		background: #4267b2;
	}

	a.twitter {
		background: #1da1f2;
	}

	a.yt {
		background: #ff0000;
	}

	a.google {
		background: #dd4b39;
	}

	a.ig {
		background: radial-gradient(
				circle farthest-corner at 35% 90%,
				#fec564,
				transparent 50%
			),
			radial-gradient(
				circle farthest-corner at 0 140%,
				#fec564,
				transparent 50%
			),
			radial-gradient(
				ellipse farthest-corner at 0 -25%,
				#5258cf,
				transparent 50%
			),
			radial-gradient(
				ellipse farthest-corner at 20% -50%,
				#5258cf,
				transparent 50%
			),
			radial-gradient(
				ellipse farthest-corner at 100% 0,
				#893dc2,
				transparent 50%
			),
			radial-gradient(
				ellipse farthest-corner at 60% -20%,
				#893dc2,
				transparent 50%
			),
			radial-gradient(
				ellipse farthest-corner at 100% 100%,
				#d9317a,
				transparent
			),
			linear-gradient(
				#6559ca,
				#bc318f 30%,
				#e33f5f 50%,
				#f77638 70%,
				#fec66d 100%
			);
	}
`;

export const Widget = () => {
	return (
		<Wrapper>
			<a href="#" className="fb">
				<i className="fa-brands fa-facebook-f"></i>
			</a>
			<a href="#" className="google">
				<i className="fa-brands fa-google"></i>
			</a>
			<a href="#" className="twitter">
				<i className="fa-brands fa-twitter"></i>
			</a>
			<a href="#" className="yt">
				<i className="fa-brands fa-youtube"></i>
			</a>
			<a href="#" className="ig">
				<i className="fa-brands fa-instagram"></i>
			</a>
		</Wrapper>
	);
};
