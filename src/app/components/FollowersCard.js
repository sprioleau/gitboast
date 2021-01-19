import React from "react";
import { Card, CardTitle, CardBody } from "shards-react";
import { IoPeopleOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { openInNewTab } from "../utilities/utilityFunctions";

const FollowersCard = ({ data }) => {
	const {
		user: {
			followers: { nodes: followers },
		},
	} = data;

	return (
		<>
			{followers.length > 0 && (
				<Card className="followers-panel">
					<CardBody>
						<CardTitle>
							<span className="followers-panel__icon">
								<IoPeopleOutline />
							</span>{" "}
							Followers
						</CardTitle>
						<ul className="followers-list">
							{followers.map(({ id, avatarUrl, location, name, url }) => (
								<li key={id} className="followers-list__item" onClick={() => openInNewTab(url)}>
									<a className="followers-list__link-wrapper" href={url}>
										<img src={avatarUrl} className="followers-list__image" alt={`profile image for ${name}`} />
										<main className="followers-list__container">
											{name && <h4 className="followers-list__name">{name}</h4>}
											{location && (
												<div className="followers-list__location">
													<div className="followers-list__location-icon">
														<FiMapPin />
													</div>
													{location}
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

export default FollowersCard;
