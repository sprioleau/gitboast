import React from "react";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import Emoji from "react-emoji-render";
import { FiMapPin } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { getNumberWithCommas } from "../utilities/utilityFunctions";

const Profile = ({ data }) => {
	const {
		user: { avatarUrl, name, repositories, location, url, bio, status, login },
	} = data;

	return (
		<Card className="profile">
			<CardImg top src={avatarUrl} className="profile__image" />
			{status && (
				<span className="profile__emoji">
					<Emoji text={status.emoji} onlyEmojiClassName="status-emoji" />
				</span>
			)}
			<CardBody>
				<CardTitle className="profile__name">{name}</CardTitle>
				{bio && <p>{bio}</p>}
				{repositories.totalCount > 0 && <p>{`Repositories: ${getNumberWithCommas(repositories.totalCount)}`}</p>}
				{location && (
					<p className="profile__location">
						<FiMapPin /> {location}
					</p>
				)}
				<a href={url}>
					<Button>
						<span className="icon github-icon">
							<GoMarkGithub />
						</span>
						{login}
					</Button>
				</a>
			</CardBody>
		</Card>
	);
};

export default Profile;
