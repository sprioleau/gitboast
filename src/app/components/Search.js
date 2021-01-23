import React from "react";
import { Row, Col, Form, FormGroup, FormInput, Button } from "shards-react";

const Search = ({ query, setQuery }) => {
	const handleSearch = (e) => {
		e.preventDefault();
		alert("Search button was selected!");
	};

	return (
		<Row noGutters={false} className="search">
			<Col lg={12} fluid>
				<Form className="search__form">
					<FormGroup className="search__search-form">
						<label htmlFor="#username">Search for a Github user</label>
						<div className="search__search-wrapper">
							<FormInput
								type="text"
								id="#username"
								placeholder="Username"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className="search__search-field"
							/>
							<Button className="search__submit-button" type="submit" onClick={handleSearch}>
								Search
							</Button>
						</div>
					</FormGroup>
				</Form>
			</Col>
		</Row>
	);
};

export default Search;
