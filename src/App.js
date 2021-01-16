import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_DATA } from "./app/graphql/userData.query";

const App = () => {
	return (
		<div className="App">
			<h1>User Data</h1>
			<UserData />
		</div>
	);
};

export default App;

const UserData = () => {
	const { loading, error, data } = useQuery(GET_USER_DATA);

	if (loading) return <p>Loading...</p>;
	if (error) console.error(error);

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
