import React from "react";
import { Form, FormGroup, FormInput } from "shards-react";

const Search = ({ query, setQuery }) => {
	return (
		<Form>
			<FormGroup>
				<label htmlFor="#username">Search for a Github user</label>
				<FormInput
					type="text"
					id="#username"
					placeholder="Username"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</FormGroup>
		</Form>
	);
};

export default Search;
