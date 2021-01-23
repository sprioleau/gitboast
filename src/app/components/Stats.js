import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import { IoPeopleOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { getNumberWithCommas, composeClasses, getLabelWithSva } from "../utilities/utilityFunctions";

const Stats = ({ data }) => {
	const {
		user: {
			followers,
			following,
			repositories: { nodes: repositories },
			gists,
		},
	} = data;

	const totalFollowers = followers.totalCount;
	const totalFollowing = following.totalCount;
	const totalStars = repositories.reduce((acc, cur) => parseInt(acc) + parseInt(cur.stargazerCount), [0]);
	const totalGists = gists.totalCount;

	const stats = [
		{ label: "Followers", value: totalFollowers, icon: <IoPeopleOutline /> },
		{ label: "Following", value: totalFollowing, icon: <BsArrowReturnRight /> },
		{ label: "Stars", value: totalStars, icon: <FaRegStar /> },
		{ label: "Gists", value: totalGists, icon: <CgFileDocument /> },
	];

	const totalStats = stats.reduce((acc, cur) => parseInt(acc) + parseInt(cur.value), [0]);

	return (
		<>
			{totalStats > 0 && (
				<Row noGutters={false} className="stats">
					{stats.map(({ label, value, icon }) => (
						<Col key={label} sm={6} lg={12 / stats.length} className="stats__column">
							<StatsCard
								label={getLabelWithSva(label, value)}
								value={value}
								icon={icon}
								addClass={label.toLowerCase()}
							/>
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default Stats;

const StatsCard = ({ label, value, icon, addClass }) => {
	const statsCardClasses = {
		"stats-card": "",
		[addClass]: addClass ? true : null,
	};

	return (
		<Card className={composeClasses(statsCardClasses)}>
			<CardBody>
				<Row>
					<Col lg={2} className="icon stats-card__icon">
						{icon}
					</Col>
					<Col lg={10}>
						<CardTitle className="stats-card__title">{label}</CardTitle>
						<CardSubtitle className="stats-card__subtitle">{getNumberWithCommas(value)}</CardSubtitle>
					</Col>
				</Row>
			</CardBody>
		</Card>
	);
};
