import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
				<NavLink to="/" activeStyle>
						Home
					</NavLink>
					<NavLink to="/operator" activeStyle>
						Operator
					</NavLink>
					<NavLink to="/gamer" activeStyle>
						Gamer
					</NavLink>
					<NavLink to="/prizes" activeStyle>
						Winerprizes
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
