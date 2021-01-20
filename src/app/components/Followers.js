import React from "react";
import { Card, CardTitle, CardBody } from "shards-react";
import { IoPeopleOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { openInNewTab, truncateString, spaceAfterComma } from "../utilities/utilityFunctions";

const Followers = ({ data }) => {
	const {
		user: {
			followers: { nodes: followers },
		},
	} = data;

	return (
		<>
			{followers.length > 0 && (
				<Card className="followers">
					<CardBody>
						<CardTitle>
							<span className="followers__icon">
								<IoPeopleOutline />
							</span>{" "}
							Followers
						</CardTitle>
						<ul className="followers-list">
							{followers.map(({ id, avatarUrl, location, name, url }) => (
								<li key={id} className="followers-list__item" onClick={() => openInNewTab(url)}>
									<a className="followers-list__links" href={url}>
										<img src={avatarUrl} className="followers-list__image" alt={`profile image for ${name}`} />
										<main className="followers-list__container">
											{name && (
												<h4 className="followers-list__name" data-name={name}>
													{truncateString(name, 24)}
												</h4>
											)}
											{location && (
												<div className="followers-list__location">
													<div className="followers-list__location-icon">
														<FiMapPin />
													</div>
													{spaceAfterComma(location)}
												</div>
											)}
										</main>
									</a>
								</li>
							))}
						</ul>
					</CardBody>
				</Card>
			)}
		</>
	);
};

export default Followers;
