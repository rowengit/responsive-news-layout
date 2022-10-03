import styled from "styled-components";
import { defColor } from "../def";

const Wrapper = styled.footer`
	background: ${defColor.footer};

	section:first-child {
		padding: 4rem 2rem 1rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2rem;

		> div {
			h3 {
				margin-bottom: 0.5rem;
				font-weight: 600;
				text-transform: uppercase;
			}

			&:first-child {
				> div {
					margin: 1rem 0;
					padding: 0 0.5rem;

					width: 100%;
					cursor: pointer;

					display: flex;
					justify-content: left;

					> span {
						line-height: 32px;
					}

					> span:first-child {
						border-radius: 50%;
						width: 32px;
						display: inline-block;
						position: relative;

						i {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						}
					}

					> span:last-child {
						margin-left: 0.5rem;
					}

					&:hover {
						color: ${defColor.white};

						&.fb > span:first-child {
							background: #4267b2;
						}

						&.twitter > span:first-child {
							background: #1da1f2;
						}

						&.yt > span:first-child {
							background: #ff0000;
						}

						&.ig > span:first-child {
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
					}
				}
			}

			ul {
				li {
					line-height: 2.5;
					border-bottom: 1px solid;
				}
			}
		}

		@media (max-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 450px) {
			grid-template-columns: initial;
		}
	}

	section:last-child {
		padding: 0 2rem 1rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		p {
			font-size: 14px;
			line-height: 28px;
		}

		@media (max-width: 450px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const Footer = () => {
	return (
		<Wrapper>
			<section>
				<div>
					<h3>Connect</h3>
					<div className="fb">
						<span>
							<i className="fa-brands fa-facebook-f"></i>
						</span>
						<span>Facebook</span>
					</div>
					<div className="twitter">
						<span>
							<i className="fa-brands fa-twitter"></i>
						</span>
						<span>Twitter</span>
					</div>
					<div className="ig">
						<span>
							<i className="fa-brands fa-square-instagram"></i>
						</span>
						<span>Instagram</span>
					</div>
					<div className="yt">
						<span>
							<i className="fa-brands fa-youtube yt"></i>
						</span>
						<span>Youtube</span>
					</div>
				</div>
				<div>
					<h3>Subscribe</h3>
					<ul>
						<li>Email Newsletter</li>
						<li>Podcast</li>
						<li>Archives</li>
						<li>Story Tip Line</li>
						<li>Help Info</li>
					</ul>
				</div>
				<div>
					<h3>About Us</h3>
					<ul>
						<li>Event</li>
						<li>Support</li>
						<li>Hosting</li>
						<li>Blog</li>
						<li>Design</li>
					</ul>
				</div>
				<div>
					<h3>Terms of Service</h3>
					<ul>
						<li>Privacy Policy</li>
						<li>Nepali Policy</li>
						<li>Ethics</li>
						<li>Advertise</li>
						<li>Legal Notices</li>
					</ul>
				</div>
			</section>
			<section>
				<h1>Nepal</h1>
				<p>All Copyrights Reserved.</p>
			</section>
		</Wrapper>
	);
};
