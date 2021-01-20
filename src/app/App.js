import React, { useState } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_USER_DATA } from "./app/graphql/userData.query";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./styles/styles.scss";
import { Container, Row, Col } from "shards-react";

import data from "./data/userData2";

import Header from "./components/Header";
import ProfileCard from "./components/Profile";
import ReposCard from "./components/Repos";
import Search from "./components/Search";
import Stats from "./components/Stats";
import FollowersCard from "./components/FollowersCard";
import Footer from "./components/Footer";

const App = () => {
	const [query, setQuery] = useState("");

	return (
		<>
			<Header />
			<Container className="container" fluid tag="main">
				<Search query={query} setQuery={setQuery} />
				<Stats data={data} />
				<Row noGutters={false}>
					<Col sm={12} lg={4}>
						<ProfileCard data={data} />
					</Col>
					<Col sm={12} lg={8}>
						<ReposCard data={data} />
						<FollowersCard data={data} />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
};

export default App;
