import React from "react";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "shards-react";
import { IoPeopleOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { getNumberWithCommas, composeClasses } from "../utilities/utilityFunctions";

const StatsRow = () => {
	const stats = [
		{ label: "Followers", value: 918, icon: <IoPeopleOutline /> },
		{ label: "Following", value: 20, icon: <BsArrowReturnRight /> },
		{ label: "Stars", value: 1235, icon: <FaRegStar /> },
		{ label: "Gists", value: 48, icon: <CgFileDocument /> },
	];

	return (
		<Row noGutters={false} className="stats-row">
			{stats.map(({ label, value, icon }) => (
				<Col key={label} sm={12} lg={3}>
					<StatsCard label={label} value={value} icon={icon} addClass={label.toLowerCase()} />
				</Col>
			))}
		</Row>
	);
};

export default StatsRow;

const StatsCard = ({ label, value, icon, addClass }) => {
	const statsCardClasses = {
		"stats-card": "",
		[addClass]: addClass ? true : null,
	};

	return (
		<Card className={composeClasses(statsCardClasses)}>
			<CardBody>
				<Row>
					<Col lg={2} className="stats-card__icon">
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
