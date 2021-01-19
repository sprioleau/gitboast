import React from "react";
import { GrResources } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
	return (
		<footer className="footer" role="contentinfo">
			<div className="footer__link-wrapper">
				<a className="footer__link" href="https://github.com/sprioleau/gitboast">
					source
				</a>{" "}
				<span className="icon source-icon">
					<GrResources />
				</span>
			</div>
			<div className="footer__link-wrapper">
				<a className="footer__link" href="https://github.com/sprioleau">
					about
				</a>{" "}
				<span className="icon about-icon">
					<GoMarkGithub />
				</span>
			</div>
			<div className="footer__byline">
				created by <span className="footer__credit">@sprioleau</span>👨🏾‍💻
			</div>
		</footer>
	);
};

export default Footer;
