import { useState } from "react";
import styled from "styled-components";
import { FixedSidebar } from "../fixedSidebar";
import video from "../../img/Pexels-Video.mp4";
import person03 from "../../img/pexels-person-03.jpg";
import person01 from "../../img/pexels-person-02.jpg";
import { defColor } from "../../def";

const Wrapper = styled.section`
	video {
		object-fit: contain;
	}

	p {
		margin: 1rem 0;
		line-height: 1.5;
	}

	img {
		margin-top: 0.5rem;
	}

	.comment {
		div {
			border: 1px solid rgba(0, 0, 0, 0.2);
			border-radius: 5px;

			img {
				min-height: 48px;
				height: 48px;
				width: 48px;
				border-radius: 50%;
				margin: 1rem;
			}

			textarea {
				border-radius: 5px;
				outline: none;
				border: none;
				line-height: 1.5rem;
				resize: none;
				width: calc(100% - 2rem - 48px);
			}

			h3,
			button {
				display: none;
			}

			&.toggle {
				height: 240px;
				position: relative;

				h3,
				button {
					display: block;
					position: absolute;
				}

				button {
					bottom: 0.75rem;
					left: 0.75rem;
					background: ${defColor.black};
					color: ${defColor.white};
					line-height: 2.5rem;
					padding: 0 1rem;
				}

				h3 {
					left: calc(48px + 1.75rem);
					top: calc((48px + 1rem) / 2);
					font-weight: 600;
				}

				img {
					margin-bottom: 0.5rem;
				}

				textarea {
					height: 6.5rem;
					width: calc(100% - 1rem);
					margin-left: 1rem;
				}
			}
		}
	}

	.get-in-touch {
		input {
			border: none;
			outline: none;
			border-bottom: 2px solid black;
			border-radius: 0;

			&:focus {
				box-shadow: none;
			}
		}

		input + label {
			color: ${defColor.grey};
		}
	}
`;

export const Detail = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<FixedSidebar>
			<Wrapper>
				<section>
					<h2>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.{" "}
					</h2>
					<div className="info">
						<span>By Julia Nichols.</span>
						<span>8h ago</span>
					</div>
					<video width="100%" controls>
						<source src={video} type="video/mp4" />
						<source src={video} type="video/ogg" />
						Your browser does not support the video tag.
					</video>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					</p>
					<h2>Briana Smith:</h2>
					<img src={person03} alt="person03" />
					<p>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					</p>
				</section>
				<section>
					<h1 className="title">Comment</h1>
					<section className="comment block">
						<div className={toggle ? "toggle" : ""}>
							<h3>David Smith</h3>
							<img src={person01} alt="person01" />
							<textarea
								placeholder="Write a comment"
								onBlur={() => setToggle(false)}
								onClick={() => setToggle(true)}
							/>
							<button>Comment</button>
						</div>
					</section>
				</section>

				<section className="get-in-touch">
					<h1 className="title">Get in touch</h1>
					<section className="block">
						<div className="row">
							<div className="col-md">
								<div className="form-floating mb-3">
									<input
										type="text"
										class="form-control"
										id="floatingInput"
										placeholder="username"
									/>
									<label htmlFor="floatingInput">Name</label>
								</div>
							</div>
							<div className="col-md">
								<div className="form-floating mb-3">
									<input
										type="email"
										class="form-control"
										id="floatingInput"
										placeholder="name@example.com"
									/>
									<label htmlFor="floatingInput">
										E-mail
									</label>
								</div>
							</div>
						</div>
						<div className="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="leave a message"
							/>
							<label htmlFor="floatingInput">Message</label>
						</div>
					</section>
				</section>
			</Wrapper>
		</FixedSidebar>
	);
};
