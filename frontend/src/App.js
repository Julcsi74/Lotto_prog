// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import Operator from "./pages/operator";
import Winerprize from "./pages/winerprize";
import SignUp from "./pages/signup";
import Gamer from "./pages/gamer";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/operator" element={<Operator />} />
				<Route
					path="/gamer"
					element={<Gamer />}
				/>
				<Route path="/prizes" element={<Winerprize />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
