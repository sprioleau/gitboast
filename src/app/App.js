import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_USER_DATA } from "./app/graphql/userData.query";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./styles/app.css";
import { Container, Row, Col } from "shards-react";

import ProfileCard from "./components/ProfileCard";
import ReposCard from "./components/ReposCard";
import Search from "./components/Search";
import StatsRow from "./components/StatsRow";

const App = () => {
	const [query, setQuery] = useState("");

	return (
		<Container className="container" fluid tag="main">
			<Search query={query} setQuery={setQuery} />
			<StatsRow />
			<Row noGutters={false}>
				<Col sm={12} lg={4} className="profile-card">
					<ProfileCard />
				</Col>
				<Col sm={12} lg={8}>
					<ReposCard />
				</Col>
			</Row>
			{/* <UserData /> */}
		</Container>
	);
};

export default App;

// const UserData = () => {
// 	const { loading, error, data } = useQuery(GET_USER_DATA);

// 	if (loading) return <p>Loading...</p>;
// 	if (error) console.error(error);

// 	return <pre>{JSON.stringify(data, null, 2)}</pre>;
// };
