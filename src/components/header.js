import dayjs from "dayjs";
import styled from "styled-components";
import nav from "../img/nav.jpg";
import { defColor } from "../def";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
	> div {
		background-image: url(${nav});
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;

		height: 200px;
		width: 100%;
		> div {
			backdrop-filter: blur(2px);
			height: 100%;
			display: flex;
			flex-direction: column;
			text-align: center;
			justify-content: center;

			color: ${defColor.white};
		}
	}

	nav {
		border-bottom: 2px solid;
		display: flex;
		justify-content: space-between;

		.title {
			display: none;
		}

		.menu {
			display: flex;
			align-items: center;

			.container-fluid {
				margin: 0;
				width: initial;
			}

			.social-media {
				i {
					margin: auto 0.5rem;
					color: ${defColor.grey};
					cursor: pointer;

					&:hover {
						opacity: 0.8;
					}

					&.fa-envelope::after {
						content: " NEWSLETTERS";
						font-size: 14px;
						font-family: sans-serif;
					}
				}
			}
		}

		.search {
			padding-right: calc(1.5rem * 0.5);
		}

		@media (max-width: 992px) {
			align-items: baseline;
			.social-media,
			.search {
				display: none;
			}

			.navbar-toggler {
				border: none;
				color: ${defColor.black};
				&:focus {
					outline: none;
					box-shadow: none;
				}
			}

			.title {
				display: flex;
				padding-left: calc(1.5rem * 0.5);
			}
		}
	}
`;

export const Header = () => (
	<HeaderWrapper>
		<div>
			<div>
				<h1>News</h1>
				<span>{dayjs().format("dddd, MMMM D YYYY")}</span>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg">
			<a className="title" href="#">
				News
			</a>
			<div className="menu">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									to="/"
									className="nav-link active"
									aria-current="page">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Web Design
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Frontend
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Backend
										</a>
									</li>
									<li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											href="#"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false">
											Web Design
										</a>
										<ul className="dropdown-menu">
											<li>
												<a
													className="dropdown-item"
													href="#">
													Frontend
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="#">
													Backend
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/news">
									News
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="social-media">
					<i className="fa-brands fa-facebook-f"></i>
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-solid fa-envelope"></i>
				</div>
			</div>

			<div className="search">
				<i className="fa-solid fa-magnifying-glass"></i>
			</div>
		</nav>
	</HeaderWrapper>
);
