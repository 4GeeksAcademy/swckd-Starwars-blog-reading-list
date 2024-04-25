import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./views/home";
import { Context } from "./store/appContext";

import injectContext from "./store/appContext";
import SingleView from "./views/SingleView";


//create your first component
const Layout = () => {

	const { store } = useContext(Context);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Star Wars</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Favourites
								</a>
								<ul className="dropdown-menu">
									{store.favs && store.favs.map((fav, index) => {
										return <li key={index}><a className="dropdown-item" href="#">{fav}</a></li>
									})}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<BrowserRouter basename={basename}>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:type/:id" element={<SingleView />} />
				</Routes>

			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
