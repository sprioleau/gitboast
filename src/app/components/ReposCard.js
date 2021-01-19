import React from "react";
import dayjs from "dayjs";
import { Card, CardTitle, CardBody, Progress } from "shards-react";
import { FiExternalLink } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { MdUpdate } from "react-icons/md";
import { FaRegStar, FaLock } from "react-icons/fa";
import { getNumberWithCommas, openInNewTab } from "../utilities/utilityFunctions";

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
					Top Repos
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

const RepositoryListItem = ({
	repository: { isPrivate, name, updatedAt, url, stargazerCount, languages, description },
}) => {
	const languagesArray = languages.edges.map((item) => ({
		size: getNumberWithCommas(item.size),
		name: item.node.name,
		percentage: (item.size / languages.totalSize).toFixed(2),
	}));

	return (
		<li className="repositories-list__item" onClick={() => openInNewTab(url)}>
			<header className="repositories-list__header">
				<h4 className="repositories-list__repo-title">
					{isPrivate ? (
						<span className="icon lock">
							<FaLock />{" "}
						</span>
					) : (
						""
					)}
					{name} <FiExternalLink />
				</h4>
				<p className="repositories-list__repo-description">{description}</p>
			</header>
			<div className="repositories-list__repo-details">
				<div className="metadata">
					{stargazerCount > 0 && (
						<p>
							<span className="icon stars">
								<FaRegStar />
							</span>
							{stargazerCount}
						</p>
					)}
					<p>
						<span className="icon last-updated">
							<MdUpdate />
						</span>
						{`${dayjs(updatedAt).format("MM/D/YYYY")}`}
					</p>
				</div>
				{languagesArray.length > 0 && (
					<>
						<ProgressBar languagesArray={languagesArray} />
						<div className="languages-wrapper">
							{languagesArray.map(({ name, percentage }, index) => (
								<div key={name} className={`language l${index + 1}`}>
									<div className="color-indicator" /> {name}{" "}
									<span className="percentage">{`${(percentage * 100).toFixed(1)}%`}</span>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</li>
	);
};

const ProgressBar = ({ languagesArray }) => {
	return (
		<Progress className="language-progress" multi>
			{languagesArray.map(({ name, percentage }) => (
				<Progress
					key={`${name}-${percentage}`}
					className="language-progress__bar"
					bar
					theme="none"
					value={percentage * 100}
				/>
			))}
		</Progress>
	);
};
