import React from "react";
import data from "../data/userData2";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import Emoji from "react-emoji-render";
import { FiMapPin } from "react-icons/fi";

const ProfileCard = () => {
	const {
		user: { avatarUrl, name, repositories, location, url, bio, status },
	} = data;

	return (
		<Card>
			<CardImg top src={avatarUrl} className="profile-card__image" />
			<CardBody>
				<CardTitle>
					{status && (
						<span className="emoji">
							<Emoji text={status.emoji} />
						</span>
					)}
					{`${name}`}
				</CardTitle>
				{bio && <p>{`${bio}`}</p>}
				<p>{`Repositories: ${repositories.totalCount}`}</p>
				{location && (
					<p className="profile-card__location">
						<FiMapPin /> {location}
					</p>
				)}
				<a href={url}>
					<Button>{url.split("://")[1]}</Button>
				</a>
			</CardBody>
		</Card>
	);
};

export default ProfileCard;