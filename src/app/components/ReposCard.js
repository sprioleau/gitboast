import React from "react";
import dayjs from "dayjs";
import { Card, CardTitle, CardBody, Progress } from "shards-react";
import { FiExternalLink } from "react-icons/fi";
import { GoRepo, GoLock } from "react-icons/go";
import { getNumberWithCommas } from "../utilities/utilityFunctions";

const ProfileCard = ({ data }) => {
	// prettier-ignore
	const {	user: { repositories: { nodes: repositories }}} = data;

	return (
		<Card className="repositories-panel">
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
		name: item.node.name,
		percentage: (item.size / languages.totalSize).toFixed(2),
	}));

	return (
		<li className="repositories-list__item" onClick={() => open(url)}>
			<p>
				<a href={url} target="blank">
					{isPrivate ? <GoLock /> : ""}
					{name} <FiExternalLink />
				</a>
			</p>
			<p>{`Last updated: ${dayjs(updatedAt).format("MM/D/YYYY")}`}</p>
			<p>{`Stars: ${stargazerCount}`}</p>
			{languagesArray.length > 0 && (
				<>
					<ProgressBar languagesArray={languagesArray} />
					{languagesArray.map(({ name }, index) => (
						<span key={name} className={`language l${index + 1}`}>
							{name}{" "}
						</span>
					))}
				</>
			)}
			{isPrivate && <p>Private</p>}
		</li>
	);
};

const ProgressBar = ({ languagesArray }) => {
	return (
		<Progress multi>
			{languagesArray.map(({ name, percentage }) => (
				<Progress
					key={`${name}-${percentage}`}
					className="language-progress-bar"
					bar
					theme="none"
					value={percentage * 100}
				/>
			))}
		</Progress>
	);
};
