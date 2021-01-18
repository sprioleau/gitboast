import React from "react";
import data from "../data/userData2";
import dayjs from "dayjs";
import { Card, CardTitle, CardBody } from "shards-react";
import { FiExternalLink } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { getNumberWithCommas } from "../utilities/utilityFunctions";

const ProfileCard = () => {
	// prettier-ignore
	const {	user: { repositories: { nodes: repositories }}} = data;

	return (
		<Card>
			<CardBody>
				<CardTitle>
					<span className="repositories__icon">
						<GoRepo />
					</span>{" "}
					Repositories
				</CardTitle>
				<ul className="repositories-list">
					{repositories.map((repository) => {
						return <RepositoryListItem key={`${repository.name}-${repository.url}`} repository={repository} />;
					})}
				</ul>
			</CardBody>
		</Card>
	);
};

export default ProfileCard;

const RepositoryListItem = ({ repository: { isPrivate, name, updatedAt, url, stargazerCount, languages } }) => {
	const open = (url) => {
		const win = window.open(url, "_blank");
		if (win != null) {
			win.focus();
		}
	};

	const languagesArray = languages.edges.map((item) => ({
		size: getNumberWithCommas(item.size),
		color: item.node.color,
		name: item.node.name,
	}));

	return (
		<li className="repositories-list__item" onClick={() => open(url)}>
			<p>
				<a href={url} target="blank">
					{name} <FiExternalLink />
				</a>
			</p>
			<p>{`Last updated: ${dayjs(updatedAt).format("MM/D/YYYY")}`}</p>
			<p>{`Stars: ${stargazerCount}`}</p>
			{languagesArray.length > 0 && (
				<ul className="languages-list">
					{languagesArray.map(({ name, color, size }) => (
						<li key={`${name}-${size}`} className="languages-list-item">
							<span style={{ color }} className="language">
								{name}{" "}
							</span>
							<span className="size">{`${size} kb`}</span>
						</li>
					))}
				</ul>
			)}
			{isPrivate && <p>Private</p>}
		</li>
	);
};
