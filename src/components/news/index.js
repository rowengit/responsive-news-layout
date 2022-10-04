import styled from "styled-components";
import { FixedSidebar } from "../fixedSidebar";
import { Link } from "react-router-dom";

import nature02 from "../../img/pexels-nature-02.jpg";
import nature01 from "../../img/pexels-nature-01.jpg";
import nature03 from "../../img/pexels-nature-03.jpg";
import politics02 from "../../img/pexels-politics-02.jpg";
import news03 from "../../img/pexels-news-03.jpg";

const Wrapper = styled.section`
	.post {
		border: 1px solid rgba(0, 0, 0, 0.1);
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 0.75rem;

		> div,
		img {
			margin: 0.75rem;
		}

		> div {
			p {
				margin: 1.25rem 0;
			}
		}
	}
`;

export const News = () => {
	return (
		<FixedSidebar>
			<Wrapper>
				<h1 className="title">NEWS</h1>
				<section className="block">
					<Link className="post" to="/detail/1">
						<img src={nature02} alt="nature02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/2">
						<img src={nature01} alt="nature01" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/3">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/4">
						<img src={news03} alt="news03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/5">
						<img src={nature02} alt="nature02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/6">
						<img src={nature01} alt="nature01" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/7">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/8">
						<img src={news03} alt="news03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/9">
						<img src={politics02} alt="politics02" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
					<Link className="post" to="/detail/10">
						<img src={nature03} alt="nature03" />
						<div>
							<h2>News Topic</h2>
							<p>
								1-1Lorem Ipsum is simply dummy text of the
								printing and typesetting industry.{" "}
							</p>
							<div className="info">
								<span>By Eliana Smith.</span>
								<span>1h ago</span>
							</div>
						</div>
					</Link>
				</section>
			</Wrapper>
		</FixedSidebar>
	);
};
