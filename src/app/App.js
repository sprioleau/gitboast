import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_USER_DATA } from "./app/graphql/userData.query";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./styles/styles.scss";
import { Container, Row, Col } from "shards-react";

import data from "./data/userData";

import Header from "./components/Header";
import ProfileCard from "./components/Profile";
import ReposCard from "./components/Repos";
import Search from "./components/Search";
import Stats from "./components/Stats";
import FollowersCard from "./components/Followers";
import Footer from "./components/Footer";
import Charts from "./components/Charts";

const App = () => {
	const [query, setQuery] = useState("");

	return (
		<>
			<Header />
			<main className="main-content">
				<Container className="container" tag="main" fluid>
					<Search query={query} setQuery={setQuery} />
					<Stats data={data} />
					<Row noGutters={false} className="profile-repos-followers">
						<Col sm={12} lg={4}>
							<ProfileCard data={data} />
						</Col>
						<Col sm={12} lg={8}>
							<ReposCard data={data} />
							<FollowersCard data={data} />
						</Col>
					</Row>
					<Charts data={data} />
				</Container>
			</main>
			<Footer />
		</>
	);
};

export default App;
