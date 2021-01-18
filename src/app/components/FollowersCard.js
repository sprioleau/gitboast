import React from "react";
import { Card, CardTitle, CardSubtitle, CardImg, CardBody, CardFooter } from "shards-react";
import { IoPeopleOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";

const FollowersCard = ({ data }) => {
	const {
		user: {
			followers: { nodes: followers },
		},
	} = data;

	return (
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
						<li key={id} className="followers-list__item">
							<Card>
								<CardImg top src={avatarUrl} className="followers-list__image" alt={`profile image for ${name}`} />
								<CardBody>
									<CardSubtitle>{name}</CardSubtitle>
									<p>
										<span className="followers-list__location-icon">
											<FiMapPin />{" "}
										</span>
										{location}
									</p>
									<a href={url}>Github Profile</a>
								</CardBody>
							</Card>
						</li>
					))}
				</ul>
			</CardBody>
		</Card>
	);
};

export default FollowersCard;
