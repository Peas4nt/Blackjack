import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { HeaderProps } from "../types";

export const Header = ({ data }: { data: HeaderProps[] }) => {
  const location = useLocation();

	return (
		<header>
			<nav className="navbar navbar-expand-lg border-bottom border-body">
				<div className="container-fluid col-lg-6 col-12">
					<Link className="navbar-brand" to="/">
						Blackjack
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav col-lg-6 col-12 mx-auto gap-2">
							{data.map((item, index) => (
								<li key={index} className="nav-item">
									<Link className={`nav-link btn btn-primary ${location.pathname === item.url ? "active" : ""}`} to={item.url}>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
