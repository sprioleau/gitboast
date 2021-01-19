import React from "react";
import gitboastLogo from "../images/gitboast.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo-wrapper">
				<img className="header__logo" src={gitboastLogo} alt="fire emoji" />
				<h1 className="header__page-title">git boast</h1>
			</div>
			<p className="header__page-subtitle">
				Your <code>git</code> world on display
			</p>
		</header>
	);
};

export default Header;
